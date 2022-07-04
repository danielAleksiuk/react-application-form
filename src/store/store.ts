import { configureStore } from '@reduxjs/toolkit';
import companyReducer from '../components/company/reducer'
import contactPersonReducer from '../components/contact-person/reducer'

export const store = configureStore({
    reducer: {
        company: companyReducer,
        person: contactPersonReducer
    },
});
