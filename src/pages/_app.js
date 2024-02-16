import ShoppingCartProvider from "@/Components/Context/ShoppingCartContext";
import Navbar from "@/Components/NavBar";
import "@/styles/globals.css";
import { Container } from "react-bootstrap";
import React from "react";

export default function App({ Component, pageProps }) {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Component {...pageProps} />
      </Container>
    </ShoppingCartProvider>
  );
}
