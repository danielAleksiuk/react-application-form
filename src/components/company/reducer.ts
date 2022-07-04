import { CompanyState } from './../../types/companyState';

const initialState = {
    companyName: '',
    companyCode: '',
    countryOfRegistration: '',
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_COMPANY_NAME':
            return {
                ...state,
                companyName: action.companyName,
            };
        case 'SET_COMPANY_CODE':
            return {
                ...state,
                companyCode: action.companyCode,
            };
        case 'SET_COUNTRY_OF_REGISTRATION':
            return {
                ...state,
                countryOfRegistration: action.countryOfRegistration,
            };
        default:
            return state;
    }
};

export const getCompanyName = (state: CompanyState) => state.companyName;
export const getCompanyCode = (state: CompanyState) => state.companyCode;
export const getCountryOfRegistration = (state: CompanyState) => state.countryOfRegistration;
