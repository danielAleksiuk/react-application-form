const initialState = {
    name: '',
    surname: '',
    jobTitle: '',
    emailAddress: '',
    phoneCountryCode: '',
    phoneNumber: undefined,
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.name,
            };
        case 'SET_SURNAME':
            return {
                ...state,
                surname: action.surname,
            };
        case 'SET_JOB_TITLE':
            return {
                ...state,
                jobTitle: action.jobTitle,
            };
        case 'SET_EMAIL_ADDRESS':
            return {
                ...state,
                emailAddress: action.emailAddress,
            };
        case 'SET_PHONE_COUNTRY_CODE':
            return {
                ...state,
                phoneCountryCode: action.phoneCountryCode,
            };
        case 'SET_PHONE_NUMBER':
            return {
                ...state,
                phoneNumber: action.phoneNumber,
            };
        default:
            return state;
    }
};
