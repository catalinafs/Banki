import { useState } from 'react';

const useValidate = ({ initForm }) => {
    const [formError, setFormError] = useState(initForm);

    const accionValidations = (form, regex) => {
        const keys = Object.keys(form);

        for (let key of keys) {
            if (!form[key]) {
                setFormError((props) => ({
                    ...props,
                    [key]: `The ${key} field is required`
                }));
                return true;
            } else {
                setFormError((props) => ({
                    ...props,
                    [key]: ''
                }));
            }

            if (!regex[key].test(form[key])) {
                setFormError((props) => ({
                    ...props,
                    [key]: `The ${key} field contain invalid characters`
                }));
                return true;
            } else {
                setFormError((props) => ({
                    ...props,
                    [key]: ''
                }));
            }
        }
    }

    return { formError, accionValidations };
}

export default useValidate;
