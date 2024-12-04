// import Image from "next/image";
import Content from "./components/Content.jsx";
import Header from "./components/Header.jsx";

export default function Home() {
  return (
    <>
      <div className="w-[94%] m-auto mt-10">
        <Header />
        <Content />
      </div>
    </>
  );
}
