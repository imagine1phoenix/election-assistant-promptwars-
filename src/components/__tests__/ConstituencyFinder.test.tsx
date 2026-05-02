import { render, screen, fireEvent } from '@testing-library/react'
import { ConstituencyFinder } from '../ui/ConstituencyFinder'
import { constituencies } from '@/data/constituencies'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

// Mock constituency data
jest.mock('@/data/constituencies', () => ({
  constituencies: [
    {
      id: 'MH-01',
      name: 'South Mumbai',
      state: 'Maharashtra',
      pinCodes: ['400001', '400005'],
      booths: 1500,
      electors: 1500000,
      type: 'Urban',
      electoralOfficer: { phone: '022-12345678', email: 'ero@example.com' }
    }
  ]
}))

describe('ConstituencyFinder Component - Edge Cases & Integration', () => {
  it('does not show results before search is clicked', () => {
    render(<ConstituencyFinder />)
    expect(screen.queryByText(/South Mumbai/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/No matching constituencies found/i)).not.toBeInTheDocument()
  })

  it('handles empty input gracefully (edge case)', () => {
    render(<ConstituencyFinder />)
    
    // Click search without entering anything
    fireEvent.click(screen.getByRole('button', { name: /Search/i }))
    
    // It should not trigger a search state, so neither results nor "not found" should show
    expect(screen.queryByText(/South Mumbai/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/No matching constituencies found/i)).not.toBeInTheDocument()
  })

  it('shows no results found for invalid pin code (edge case)', () => {
    render(<ConstituencyFinder />)
    
    const input = screen.getByRole('textbox', { name: /Search constituency/i })
    fireEvent.change(input, { target: { value: '999999' } })
    fireEvent.click(screen.getByRole('button', { name: /Search/i }))
    
    expect(screen.getByText(/No matching constituencies found/i)).toBeInTheDocument()
  })

  it('completes the integration flow: search by pin code and view results', () => {
    render(<ConstituencyFinder />)
    
    // Enter valid PIN
    const input = screen.getByRole('textbox', { name: /Search constituency/i })
    fireEvent.change(input, { target: { value: '400001' } })
    
    // Simulate Enter key press
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })
    
    // Check if correct data is displayed
    expect(screen.getByText('South Mumbai')).toBeInTheDocument()
    expect(screen.getByText(/Maharashtra • Urban/i)).toBeInTheDocument()
    expect(screen.getByText(/ero@example.com/i)).toBeInTheDocument()
  })
})
