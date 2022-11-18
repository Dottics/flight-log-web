import { render, screen } from '@testing-library/react'
import { Profile } from './Profile'

describe('Profile', () => {
    it(`should render the pilot's profile`, () => {
        render(<Profile user={{
            username: 'jb007',
            firstName: 'james',
            middleName: 'arthur',
            lastName: 'bond'
        }} />)

        screen.getByText(/jb007/i)
        screen.getByText(/james/i)
        screen.getByText(/bond/i)
        // we do not expect the middle name to be shown
        expect(screen.queryByText(/arthur/i)).not.toBeInTheDocument()
    })
})