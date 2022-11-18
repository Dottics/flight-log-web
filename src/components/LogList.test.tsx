import { render } from '@testing-library/react'
import { LogList } from './LogList'

describe('LogList', () => {
    it('hi', () =>  {
        render(<LogList />)
        expect(true).toBe(true)
    })
})