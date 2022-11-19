import { render } from '../test/test-utils'
import { LogList } from './LogList'

describe('LogList', () => {
    it('hi', () =>  {
        // @ts-ignore
        render(<LogList />)
        expect(true).toBe(true)
    })
})