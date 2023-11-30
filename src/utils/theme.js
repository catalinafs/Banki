import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#212121",
            contrastText: "#ffffff",
        },
    },
    typography: {
        fontFamily: 'Glacial Indifference, Glacial Indifference Bold, Glacial Indifference Italic',
    },
    components: {
        MuiTypography: {
            defaultProps: {
                fontWeight: 500,
            },
        },
        MuiSkeleton: {
            defaultProps: {
                animation: "wave",
            },
            styleOverrides: {
                root: {
                    "-webkit-transform": "scale(1)",
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontWeight: 600,
                    '&::placeholder': {
                        color: 'red',
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-root": {
                        fontWeight: 500,
                        color: "#39d894",
                        borderRadius: "8px",
                        "&.Mui-disabled": {
                            backgroundColor: "#180f0c",
                        },
                    },
                },
            },
        },
        MuiLoadingButton: {
            defaultProps: {
                variant: "outlined",
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    color: "#5c5c5c",
                    fontWeight: 600,
                    minWidth: 223,
                },
                filled: {
                    fontWeight: 600,
                    color: "#5c5c5c",
                },
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    minWidth: 223,
                },
            },
        },
        MuiButton: {
            defaultProps: {
                variant: "outlined",
            },
            variants: [
                {
                    props: { variant: "outlined" },
                    style: {
                        borderWidth: "2px",
                        ":hover": {
                            borderWidth: "2px",
                        },
                    },
                },
                {
                    props: { variant: "contained" },
                    style: {
                        backgroundColor: "#39d894",
                        ":hover": {
                            borderColor: "#39d894",
                        },
                    },
                },
            ],
            styleOverrides: {
                root: {
                    fontWeight: 600,
                    borderRadius: "5px",
                    textTransform: "none",
                    padding: "10px 20px",
                },
            },
        },
    },
});

export default theme;