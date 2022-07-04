import './Terms.scss';

type TermsProps = {
    terms: string;
    hidden: boolean;
    onShowHide: () => void;
};

export const Terms = ({ terms, hidden, onShowHide }: TermsProps) => {
    return (
        <div hidden={hidden}>
            <div className='terms'>
                <div className='terms__text-container'>
                    {terms}
                </div>
                <div className='terms__footer'>
                    <button className='terms__footer--button' onClick={onShowHide}>
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
};
