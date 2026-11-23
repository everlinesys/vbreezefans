import React from "react";
import { Header } from "../common/header";
import { Services } from "../home/services";
import { Products } from "../home/products";
import { Footer } from "../common/footer";

export default function servicespage() {
  return (
    <>
      <Header />
      <br />
      <br />
      <Services /> <Products />
      <Footer />
    </>
  );
}
