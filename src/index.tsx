import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import {
  createTheme,
  MantineColorsTuple,
  MantineProvider,
} from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
const myColor: MantineColorsTuple = [
  "#eef3ff",
  "#dce4f5",
  "#b9c7e2",
  "#94a8d0",
  "#748dc1",
  "#5f7cb8",
  "#5474b4",
  "#44639f",
  "#39588f",
  "#2d4b81",
];
const client = new ApolloClient({
  uri: "https://cysyrjmxvtuoxusykogn.supabase.co/graphql/v1",
  cache: new InMemoryCache(),
  headers: {
    apikey: process.env.REACT_APP_APIKEY as string,
    Authorization: process.env.REACT_APP_AUTH as string,
  },
});
const theme = createTheme({
  colors: {
    myColor,
  },
  fontFamily: "Montserrat, sans-serif",
  defaultRadius: "md",
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    </MantineProvider>
  </React.StrictMode>
);
reportWebVitals();
