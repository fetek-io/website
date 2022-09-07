import React from "react";
import { Helmet } from "react-helmet";
import favicon from "~image/logo/logo-no-name.svg";
import Header from "../Header";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { colors } from "~styled/theme.js";

const theme = {
  colors: colors,
};

export default function Layout({ children }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Helmet>
        <title>FETEK</title>
        <link rel="icon" type="image/png" href={favicon} />
      </Helmet>
      <ThemeProvider theme={theme}>
        <Header />
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
