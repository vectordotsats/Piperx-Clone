import { FaArrowDownLong } from "react-icons/fa6";
import { SiStorybook } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";

export default function Content() {
    return (
        <div>
            <div className="w-[40%] m-auto">
                <div className="flex justify-between items-center gap-2 w-[auto] border-2 border-[#605FFC] rounded-3xl text-[20px] font-bold p-2">
                    <span className="hover:bg-[#605FFC] cursor-pointer rounded-3xl py-1 px-3 flex justify-center items-center">Swap</span>
                    <span className="hover:bg-[#605FFC] cursor-pointer rounded-3xl py-1 px-3 flex justify-center items-center">Pools</span>
                    <span className="hover:bg-[#605FFC] cursor-pointer rounded-3xl py-1 px-3 flex justify-center items-center">Liquidity</span>
                    <span className="hover:bg-[#605FFC] cursor-pointer rounded-3xl py-1 px-3 flex justify-center items-center">Position</span>
                    <span className="hover:bg-[#605FFC] cursor-pointer rounded-3xl py-1 px-3 flex justify-center items-center">Faucet</span>
                </div>
            </div>

            {/* Main Container */}
            <div className="align-left flex flex-col justify-between items-start gap-2 w-[44%] m-auto border border-[#605FFC] rounded-xl mt-10 p-3">
                <div>Swap</div>

                <div className="flex flex-col justify-center items-start gap-1 w-full">
                    <div className="flex flex-col justify-between items-start border border-[#ff00f782] bg-[#31314c] rounded-lg w-full p-2">
                        <div>You sell</div>
                        <div className="flex justify-between items-center gap-1 w-full">
                            <div className="w-[30%]">
                                <SiStorybook size={12} />
                                <span>IP <IoIosArrowDown size={10} /></span>
                            </div>
                            <input type="number" placeholder={0} className="w-[70%] outline-none" />
                        </div>
                        <div className="flex justify-center items-center gap-1">
                            <div>Balance</div>
                            <button>max</button>
                        </div>
                    </div>

                    {/* <span><FaArrowDownLong size={12}/></span>

                    <div>
                        <div>You buy</div>
                        <div>
                            <div>Select token <IoIosArrowDown size={10} /></div>
                            <input type="number" />
                        </div>
                        <div>
                            <div>Balance</div>
                            <div>0</div>
                        </div>
                    </div> */}
                </div>

                {/* <button>Connect Wallet</button> */}
            </div>
        </div>
    )
}