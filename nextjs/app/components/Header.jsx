// import Image from "next/image";
import { FaPiedPiperPp } from "react-icons/fa";

export default function Header() {
    return(
        <div className="flex justify-between items-center gap-2">
            <div className="flex justify-center items-center gap-1 cursor-pointer">
                <FaPiedPiperPp size={40} />
                <div className="font-bold uppercase text-[26px]">Piperx</div>
            </div>

            <div className="w-[40%]">
                <div className="flex justify-between items-center gap-2 w-[auto] border-2 border-[#605FFC] rounded-3xl text-[20px] font-bold p-2">
                    <span className="hover:bg-[#605FFC] cursor-pointer rounded-3xl py-1 px-3 flex justify-center items-center">Swap</span>
                    <span className="hover:bg-[#605FFC] cursor-pointer rounded-3xl py-1 px-3 flex justify-center items-center">Pools</span>
                    <span className="hover:bg-[#605FFC] cursor-pointer rounded-3xl py-1 px-3 flex justify-center items-center">Liquidity</span>
                    <span className="hover:bg-[#605FFC] cursor-pointer rounded-3xl py-1 px-3 flex justify-center items-center">Position</span>
                    <span className="hover:bg-[#605FFC] cursor-pointer rounded-3xl py-1 px-3 flex justify-center items-center">Faucet</span>
                </div>
            </div>

            <button className="py-2 px-3 bg-[#605FFC] rounded-xl flex justify-center font-semibold text-[16px] items-center transition duration-500 ease-in-out -translate-y-1 hover:scale-110">Connect Wallet</button>
        </div>
    )
} 