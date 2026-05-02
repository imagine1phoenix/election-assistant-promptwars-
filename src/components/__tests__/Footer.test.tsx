import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer Component', () => {
  it('renders the branding and copyright text', () => {
    render(<Footer />)
    
    // Check if the brand name is present
    expect(screen.getByText(/ElectionGuide/i)).toBeInTheDocument()
    
    // Check if copyright year is dynamic/present
    const currentYear = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(currentYear, 'i'))).toBeInTheDocument()
  })

  it('renders important government links', () => {
    render(<Footer />)
    
    // Check for ECI link
    const eciLink = screen.getByRole('link', { name: /Election Commission of India/i })
    expect(eciLink).toBeInTheDocument()
    expect(eciLink).toHaveAttribute('href', 'https://eci.gov.in')
  })
})
