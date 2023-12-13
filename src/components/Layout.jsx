import { useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { Stack } from "@mui/material";
import bgBanki from '/bgBanki.webp'
import colors from "../utils/colors";

const Context = createContext();

const Layout = ({ children, NavBarLinks, navTo }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("token") && !localStorage.getItem("user")) navigate('/login');
    }, []);

    return (
        <Context.Provider value={{}}>
            <Stack
                minHeight='100vh'
                width='100%'
                sx={{
                    bgcolor: colors.background,
                    background: `center / cover no-repeat fixed url(${bgBanki})`,
                }}
            >
                <NavBar useLinks={NavBarLinks} navigateTo={navTo} />
                {children}
            </Stack>
        </Context.Provider>
    );
}

export default Layout;
