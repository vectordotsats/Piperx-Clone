// import Image from "next/image";
import Swap from "./components/Swap.jsx";
import Header from "./components/Header.jsx";

export default function Home() {
  return (
    <>
      <div className="w-[94%] m-auto mt-10">
        <Header />
        <Swap />
      </div>
    </>
  );
}
