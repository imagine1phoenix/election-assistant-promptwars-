import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { AIAssistant } from '../ai/AIAssistant'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

// Mock window.HTMLElement.prototype.scrollIntoView since jsdom doesn't support it
window.HTMLElement.prototype.scrollIntoView = jest.fn()

describe('AIAssistant Component - Edge Cases & API Integration Flow', () => {
  beforeEach(() => {
    // Clear mocks between tests
    jest.clearAllMocks()
  })

  it('toggles the chat window open and closed', () => {
    render(<AIAssistant />)
    
    // Initial state: Chat should be closed
    expect(screen.queryByText('Democracy Assistant')).not.toBeInTheDocument()
    
    // Open chat
    fireEvent.click(screen.getByRole('button', { name: /Toggle Democracy Assistant/i }))
    expect(screen.getByText('Democracy Assistant')).toBeInTheDocument()
    
    // Close chat via header button
    // It's the first button with X icon inside the chat header. The toggle is outside.
    const closeButtons = screen.getAllByRole('button')
    // We'll just click the main toggle again since it's easier to find
    fireEvent.click(screen.getByRole('button', { name: /Toggle Democracy Assistant/i }))
    expect(screen.queryByText('Democracy Assistant')).not.toBeInTheDocument()
  })

  it('prevents empty message submission (edge case)', () => {
    render(<AIAssistant />)
    
    // Open chat
    fireEvent.click(screen.getByRole('button', { name: /Toggle Democracy Assistant/i }))
    
    // Find input and submit empty string
    const input = screen.getByPlaceholderText(/Ask me anything.../i)
    fireEvent.change(input, { target: { value: '   ' } })
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })
    
    // The user message should not be added to the chat
    const userMessages = screen.queryAllByText('   ')
    expect(userMessages.length).toBe(0)
  })

  it('handles API failure gracefully (edge case/integration)', async () => {
    // Mock the global fetch or just let the try/catch in the component handle it 
    // since we use a dummy API key, the actual genAI call will fail, which perfectly tests the catch block!
    
    render(<AIAssistant />)
    fireEvent.click(screen.getByRole('button', { name: /Toggle Democracy Assistant/i }))
    
    const input = screen.getByPlaceholderText(/Ask me anything.../i)
    fireEvent.change(input, { target: { value: 'What is EVM?' } })
    
    // Send message
    fireEvent.click(screen.getByRole('button', { name: '' })[1]) // Second button is Send inside the input
    
    // Wait for the fallback message to appear
    await waitFor(() => {
      expect(screen.getByText(/I understand you're asking about/i)).toBeInTheDocument()
    }, { timeout: 3000 })
  })
})
