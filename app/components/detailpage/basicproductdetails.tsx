import React from "react";
import { Header } from "../common/header";
import { Footer } from "../common/footer";
import { BasicFanDetailPage } from "./basicproductdetailspage";

export default function productdetails() {
  return (
    <>
      <Header /> <br /><br />
      <BasicFanDetailPage/>
      <Footer />
    </>
  );
}
