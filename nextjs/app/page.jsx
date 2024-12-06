// import Image from "next/image";
import Swap from "./components/Swap.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

export default function Home() {
  return (
    <>
      <div className="w-[94%] m-auto mt-10">
        <Header />
        <Swap />
        <Footer />
      </div>
    </>
  );
}
