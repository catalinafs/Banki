import { createContext } from "react";
import NavBar from "./NavBar";
import { Stack } from "@mui/material";
import bgBanki from '/bgBanki.webp'
import colors from "../utils/colors";

const Context = createContext();

const Layout = ({ children, NavBarLinks }) => {
    return (
        <Context.Provider value={{}}>
            <Stack
                minHeight='100vh'
                width='100%'
                sx={{
                    bgcolor: colors.background,
                    background: `center / cover no-repeat url(${bgBanki})`,
                }}
            >
                <NavBar links={NavBarLinks} />
                {children}
            </Stack>
        </Context.Provider>
    );
}

export default Layout;
