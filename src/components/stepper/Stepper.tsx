import './Stepper.scss';

type StepperProps = {
    steps: string[]
    currentStep: number
}

export const Stepper = ({ steps, currentStep }: StepperProps) => {
    const percentage = Math.round((currentStep / steps.length) * 100);

    return (
        <div className='stepper-container' key='stepper'>
            {<span className='stepper-container__percentage'>{percentage}%</span>}
            {steps.map((step: string, index: number) => {
                if (currentStep === index) {
                    return (
                        <div key={index} className='stepper-container__value stepper-container__value--current'>
                            {step}
                        </div>
                    );
                }

                return currentStep < index 
                    ? 
                        (
                            <div key={index} className='stepper-container__value stepper-container__value--next'>
                                {step}
                            </div>
                        ) 
                    : 
                        (
                            <div key={index} className='stepper-container__value stepper-container__value--previous'>
                                {step}
                            </div>
                        );
            })}
        </div>
    );
};
