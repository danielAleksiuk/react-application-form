import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './index.scss';
import Company from './components/company/Company';
import ContactPerson from './components/contact-person/ContactPerson';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<Navigate to='company'/>} />
                    <Route path='company' element={<Company />} />
                    <Route path='contact-person' element={<ContactPerson />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
