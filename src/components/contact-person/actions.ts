export const setName = (name: string) => ({
    type: 'SET_NAME',
    name,
});

export const setSurname = (surname: string) => ({
    type: 'SET_SURNAME',
    surname,
});

export const setJobTitle = (jobTitle: string) => ({
    type: 'SET_JOB_TITLE',
    jobTitle,
});

export const setEmailAddress = (emailAddress: string) => ({
    type: 'SET_EMAIL_ADDRESS',
    emailAddress,
});

export const setPhoneCountryCode = (phoneCountryCode: string) => ({
    type: 'SET_PHONE_COUNTRY_CODE',
    phoneCountryCode,
});

export const setPhoneNumber = (phoneNumber: number) => ({
    type: 'SET_PHONE_NUMBER',
    phoneNumber,
});
