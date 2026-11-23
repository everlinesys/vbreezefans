import React from "react";
import { Header } from "../common/header";
import { Footer } from "../common/footer";
import DesignerProductDetails from "./designer-page";

export default function productdetails() {
  return (
    <>
      <Header /> <br /><br />
      <DesignerProductDetails/>
      <Footer />
    </>
  );
}
