import { useState } from 'react';

const useAuth = ({ initForm }) => {
    const [formError, setFormError] = useState(initForm);

    const accionValidations = (form, regex) => {
        const keys = Object.keys(form);

        for (let key of keys) {
            if (!form[key]) {
                console.log('esta vacio', key);
                setFormError((props) => ({
                    ...props,
                    [key]: `The ${key} field is required`
                }));
                return;
            } else {
                console.log('esta ok', key);
                setFormError((props) => ({
                    ...props,
                    [key]: ''
                }));
            }

            if (!regex[key].test(form[key])) {
                console.log('regex mal', key);
                setFormError((props) => ({
                    ...props,
                    [key]: 'regex mal'
                }));
                return;
            } else {
                console.log('regex ok', key);
                setFormError((props) => ({
                    ...props,
                    [key]: ''
                }));
            }
        }
    }


    return { formError, accionValidations }
}

export default useAuth;
