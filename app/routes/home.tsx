import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Header } from "~/components/common/header";
import { Footer } from "~/components/common/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "VBREEZE FANS" },
    { name: "description", content: "Welcome to VBreeze Fans!" },
  ];
}

export default function Home() {
  return (
    <>
      {" "}
      <Header />
      <Welcome />
      <Footer />
    </>
  );
}
