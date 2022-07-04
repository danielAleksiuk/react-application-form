import Company from './Company';
import React, { PropsWithChildren } from 'react';
import { render, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import companyReducer from '../../components/company/reducer';
import { Provider } from 'react-redux';

jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useNavigate: () => jest.fn(),
}));

export function renderWithProviders(ui: React.ReactElement) {
    const store = configureStore({
        reducer: { company: companyReducer },
    });

    const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
        return <Provider store={store}>{children}</Provider>;
    };

    return { store, ...render(ui, { wrapper: Wrapper }) };
}

describe('Company component', () => {
    it('should display correct component title', () => {
        renderWithProviders(<Company />);

        expect(screen.getByTestId('company-name').textContent).toBe('Company');
    });

    it('should display correct placeholder for component name input', () => {
        renderWithProviders(<Company />);

        expect(
            screen.getByTestId('company-name-input').getAttribute('placeholder')
        ).toBe('Company name');
    });
});
