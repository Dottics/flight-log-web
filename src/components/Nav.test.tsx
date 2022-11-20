import { render, screen} from '../test/test-utils'
import { Nav } from './Nav'

describe('Nav', () => {
    it('should render', () => {
        render(<Nav />, { preloadedState: {user: {user: null}} })
        screen.getByText(/home/i)
    })
    it('should render loggedin nav', () => {
        render(<Nav />)
        screen.getByText(/dash/i)
    })
})