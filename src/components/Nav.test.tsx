import { render, screen } from '@testing-library/react'
import { Nav } from './Nav'

describe('Nav', () => {
    it('should render', () => {
        render(<Nav />)
        screen.getByText(/home/i)
    })
})