import { connect } from 'react-redux';
import * as actions from './actions';
import countries from '../../consts/countries';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stepper } from '../stepper/Stepper';
import steps from '../../consts/steps';
import { termsLong, termsShortFirst, termsShortSecond } from '../../consts/terms';
import { Terms } from './terms/Terms';
import './ContactPerson.scss';
import { State } from './../../types/state';

type ContactPersonProps = {
    name: string;
    surname: string;
    jobTitle: string;
    emailAddress: string;
    phoneCountryCode: string;
    phoneNumber: number;

    setName: (name: string) => void;
    setSurname: (surname: string) => void;
    setJobTitle: (jobTitle: string) => void;
    setEmailAddress: (emailAddress: string) => void;
    setPhoneCountryCode: (phoneCountryCode: string) => void;
    setPhoneNumber: (phoneNumber: number) => void;
};

const ContactPerson = ({
    name,
    surname,
    jobTitle,
    emailAddress,
    phoneNumber,
    setName,
    setSurname,
    setJobTitle,
    setEmailAddress,
    setPhoneCountryCode,
    setPhoneNumber,
}: ContactPersonProps) => {
    const navigate = useNavigate();
    const [termsHidden, setTermsHidden] = useState(true);
    const onShowHideTerms = () => {
        setTermsHidden(!termsHidden);
    };

    return (
        <>
            <div className='stepper'>
                <Stepper steps={steps} currentStep={2} />
            </div>
            <div className='contact-person'>
                <div className='container'>
                    <h3>Contact person</h3>
                    <div hidden={!termsHidden}>
                        <div className='person-form'>
                            <input
                                className='person-form__input'
                                placeholder='Name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                className='person-form__input'
                                placeholder='Surname'
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)}
                            />
                            <input
                                className='person-form__input'
                                placeholder='Job title'
                                value={jobTitle}
                                onChange={(e) => setJobTitle(e.target.value)}
                            />
                            <input
                                className='person-form__input'
                                placeholder='Email address'
                                value={emailAddress}
                                onChange={(e) => setEmailAddress(e.target.value)}
                            />
                            <div className='person-form__number'>
                                <div className='person-form__select-wraper'>
                                    <select
                                        className='person-form__select-wraper--select'
                                        defaultValue={'Country code'}
                                        onChange={(e) => setPhoneCountryCode(e.target.value)}
                                    >
                                        <option value={'Country code'} disabled>
                                            Country code
                                        </option>
                                        {Object.keys(countries).map((countryCode, index) => (
                                            <option key={index} value={countryCode}>
                                                +{countryCode}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <input
                                    className='person-form__input'
                                    placeholder='Phone No.'
                                    value={phoneNumber}
                                    type='number'
                                    onChange={(e) => setPhoneNumber(parseInt(e.target.value))}
                                />
                            </div>
                        </div>
                        <div className='terms-short'>
                            <input type='checkbox' className='checkbox' name='termsShortFirst' id='termsShortFirst'/>
                            <label htmlFor='termsShortFirst' className="terms-short__label">
                                {termsShortFirst}
                                <a onClick={onShowHideTerms} className='terms-short__label--link' href='#'>
                                    Please click to expand
                                </a>
                            </label>
                        </div>
                        <div className='terms-short'>
                            <input type='checkbox' className='checkbox' name='termsShortSecond' id='termsShortSecond'/>
                            <label htmlFor='termsShortSecond' className="terms-short__label">
                                {termsShortSecond}
                                <a onClick={onShowHideTerms} className="terms-short__label--link" href='#'>
                                    Please click to expand
                                </a>
                            </label>
                        </div>
                        <div className='footer'>
                            <button className='footer__secondary-button' onClick={() => navigate('/company')}>
                                Back
                            </button>
                            <button className='footer__primary-button'>Next</button>
                        </div>
                    </div>
                    <Terms
                        terms={termsLong}
                        hidden={termsHidden}
                        onShowHide={onShowHideTerms}
                    />
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state: State) => {
    return {
        name: state.person.name,
        surname: state.person.surname,
        jobTitle: state.person.jobTitle,
        emailAddress: state.person.emailAddress,
        phoneCountryCode: state.person.phoneCountryCode,
        phoneNumber: state.person.phoneNumber,
    };
};

const mapDispatchToProps = actions;

export default connect(mapStateToProps, mapDispatchToProps)(ContactPerson);
