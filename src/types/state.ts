import { CompanyState } from './companyState';
import { ContactPersonState } from './contactPersonState';

export interface State {
    company: CompanyState,
    person: ContactPersonState
}
