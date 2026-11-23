import React from "react";
import { Header } from "../common/header";
import { Services } from "../home/services";
import { Products } from "../home/products";
import { Footer } from "../common/footer";

export default function productsPage() {
  return (
    <>
      <Header />
      <br />
      <br />
      <Products />
      <Services />
      <Footer />
    </>
  );
}
