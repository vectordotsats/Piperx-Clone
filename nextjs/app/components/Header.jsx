// import Image from "next/image";
import { FaPiedPiperPp } from "react-icons/fa";

export default function Header() {
    return(
        <div className="flex justify-between items-center gap-2">
            <div className="flex justify-center items-center gap-1 cursor-pointer">
                <FaPiedPiperPp size={40} />
                <div className="font-bold uppercase text-[26px]">Piperx</div>
            </div>

            <button className="py-2 px-3 bg-[#605FFC] rounded-xl flex justify-center font-semibold text-[16px] items-center transition duration-500 ease-in-out -translate-y-1 hover:scale-110">Connect Wallet</button>
        </div>
    )
} 