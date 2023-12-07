import { useState } from 'react';

const useValidate = ({ initForm }) => {
    const [formError, setFormError] = useState(initForm);

    const accionValidations = (form, regex) => {
        const keys = Object.keys(form);

        for (let key of keys) {
            if (!form[key]) {
                // ! delete
                // console.log('esta vacio', key);
                setFormError((props) => ({
                    ...props,
                    [key]: `The ${key} field is required`
                }));
                return true;
            } else {
                // ! delete
                // console.log('esta ok', key);
                setFormError((props) => ({
                    ...props,
                    [key]: ''
                }));
            }

            if (!regex[key].test(form[key])) {
                // ! delete
                // console.log('regex mal', key);
                setFormError((props) => ({
                    ...props,
                    [key]: 'regex mal'
                }));
                return true;
            } else {
                // ! delete
                // console.log('regex ok', key);
                setFormError((props) => ({
                    ...props,
                    [key]: ''
                }));
            }
        }
    }

    return { formError, accionValidations }
}

export default useValidate;
