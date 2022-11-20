import React, { FC, ReactElement } from 'react';
import { render as tlrRender, RenderOptions, RenderResult } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { setupStore } from '../app/store';


const renderWithProviders = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'> & { preloadedState: any }
) => {
    const preloadedState = options?.preloadedState ?? {};
    const store = setupStore({ preloadedState })

    const Wrapper: FC<{children: React.ReactNode}> = ({ children }) => {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    { children }
                </BrowserRouter>
            </Provider>
        )
    }

    return {
        ...tlrRender(ui, {wrapper: Wrapper, ...options}),
        store
    }
}

export * from '@testing-library/react'
export { renderWithProviders as render }

