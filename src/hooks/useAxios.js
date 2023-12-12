import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bank from '../utils/instance';

const useAxios = () => {
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState('');
    const [isSuccessful, setIsSuccessful] = useState('');

    const navigate = useNavigate();

    const request = async (url, path, method = 'GET', data = null, headers = null) => {
        setLoading(true);
        setIsError('');
        setIsSuccessful('');

        const responseWithHeaders = { url, method, data, headers };
        const responseWithoutHeaders = { url, method, data };

        const requestData = headers ? responseWithHeaders : responseWithoutHeaders;

        try {
            const response = await bank.request(requestData);

            setIsError('');
            setIsSuccessful(response.data.msg);

            setTimeout(() => {
                setIsSuccessful('');
                if (path) {
                    navigate(path);
                }
            }, 1500);

            return response.data;
        } catch (error) {
            setIsSuccessful('');
            setIsError(error.response.data.msg);

            setTimeout(() => {
                setIsError('');
            }, 1500);
        } finally {
            setLoading(false);
        }
    };

    return { request, isError, loading, isSuccessful };
};

export default useAxios;