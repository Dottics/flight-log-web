import { render, screen} from '../test/test-utils'
import { Nav } from './Nav'

describe('Nav', () => {

    it('should render', () => {
        render(<Nav />)
        screen.getByText(/dash/i)
    })
})