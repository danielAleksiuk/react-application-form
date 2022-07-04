import './Company.scss';
import { connect } from 'react-redux';
import * as actions from './actions';
import countries from '../../consts/countries';
import { useNavigate } from 'react-router-dom';
import { Stepper } from '../stepper/Stepper';
import steps from '../../consts/steps';
import { State } from './../../types/state';

type CompanyProps = {
    companyName: string;
    companyCode: string;
    setCompanyName: (name: string) => void;
    setCompanyCode: (code: string) => void;
    setCountryOfRegistration: (countryOfRegistration: string) => void;
};

const Company = ({
    companyName,
    companyCode,
    setCompanyName,
    setCompanyCode,
    setCountryOfRegistration,
}: CompanyProps) => {
    const navigate = useNavigate();
    const onSubmit = () => {
        navigate('/contact-person');
    };

    return (
        <>
            <div className='stepper'>
                <Stepper steps={steps} currentStep={1} />
            </div>
            <div className='company'>
                <div className='container'>
                    <h3>Company</h3>
                    <div className='company-form'>
                        <input
                            className='company-form__input'
                            placeholder='Company name'
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            data-testid='company-name-input'
                        />

                        <input
                            className='company-form__input'
                            placeholder='Company code'
                            value={companyCode}
                            onChange={(e) => setCompanyCode(e.target.value)}
                        />

                        <div className='company-form__select-wraper'>
                            <select
                                className='company-form__select-wraper--select'
                                defaultValue={'Country of registration'}
                                onChange={(e) => setCountryOfRegistration(e.target.value)}
                            >
                                <option value={'Country of registration'} disabled>
                                    Country of registration
                                </option>
                                {Object.values(countries).map((country, index) => (
                                    <option key={index} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='footer'>
                        <button className='footer__secondary-button'>Back</button>
                        <button className='footer__primary-button' onClick={onSubmit}>Next</button>
                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state: State) => {
    return {
        companyName: state.company.companyName,
        companyCode: state.company.companyCode,
        countryOfRegistration: state.company.countryOfRegistration,
    };
};

const mapDispatchToProps = actions;

export default connect(mapStateToProps, mapDispatchToProps)(Company);
