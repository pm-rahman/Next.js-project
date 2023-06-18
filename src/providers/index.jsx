"use client";

import ThemeProvider from "./ThemeProviders";


const Providers = ({ children }) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
};

export default Providers;