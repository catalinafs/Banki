import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useUser = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const user1 = JSON.parse(localStorage.getItem("user"));
        console.log(user1)
        if (!localStorage.getItem("token")) navigate('/login');
        else setUser(user1);
    }, []);

    const updateUser = (name, value) => {
        setUser((props) => ({
            ...props,
            [name]: value,
        }));

        localStorage.setItem("user", JSON.stringify({ ...user, [name]: value }));
    }

    return {
        user,
        updateUser,
    };
}

export default useUser;
