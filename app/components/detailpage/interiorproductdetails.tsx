import React from "react";
import { Header } from "../common/header";
import { Footer } from "../common/footer";
import { InteriorProductDetailsPage } from "./interiorproductsdetailspage";

export default function productdetails() {
  return (
    <>
      <Header /> <br /><br />
      <InteriorProductDetailsPage/>
      <Footer />
    </>
  );
}
