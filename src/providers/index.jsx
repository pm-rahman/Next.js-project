"use client";

import AuthProvider from "./AuthProvider";
import ThemeProvider from "./ThemeProviders";


const Providers = ({ children }) => {
    return (
        <ThemeProvider>
            <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
    );
};

export default Providers;