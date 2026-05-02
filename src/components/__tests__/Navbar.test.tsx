import { render, screen } from '@testing-library/react'
import Navbar from '../Navbar'

// Mock next/navigation since Navbar uses usePathname
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

// Mock framer-motion to avoid animation issues in jsdom
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    nav: ({ children, ...props }: any) => <nav {...props}>{children}</nav>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

describe('Navbar Component', () => {
  it('renders the branding logo', () => {
    render(<Navbar />)
    const logo = screen.getByText('ElectionGuide')
    expect(logo).toBeInTheDocument()
  })

  it('renders primary navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Timeline')).toBeInTheDocument()
    expect(screen.getByText('Requirements')).toBeInTheDocument()
    expect(screen.getByText('FAQ')).toBeInTheDocument()
  })
})
