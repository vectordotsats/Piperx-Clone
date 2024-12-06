import { FaArrowDownLong } from "react-icons/fa6";
import { SiStorybook } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";

export default function Content() {
    return (
        <div className="flex flex-col justify-center items-center mt-12">

            {/* Main Container */}
            <div className="align-left flex flex-col justify-between items-start text-[1rem] gap-2 w-[38%] font-bold border-x-2 border-y-4 border-[#605FFC] rounded-2xl mt-10 p-5">
                <div className="text-3xl mb-8">Swap</div>

                <div className="flex flex-col justify-center items-center gap-5 w-full">

                    {/* ============== SELL SECTION ============*/}
                    <div className="flex flex-col justify-between items-start gap-2 border border-[#31314c] hover:border-[#ff00f782] bg-[#31314c] rounded-lg w-full p-2 hover:bg-[#151825]">
                        <div>You sell</div>
                        <div className="flex justify-between items-center gap-1 w-full">
                            <div className="w-[25%] flex justify-start items-center gap-2 py-1 px-2 bg-[#151825] rounded-lg hover:bg-[#31314c] cursor-pointer">
                                <SiStorybook size={24} />
                                <span className="flex justify-center items-center text-lg gap-2">IP <IoIosArrowDown size={15} /></span>
                            </div>
                            <input type="number" placeholder={0} className="w-[73%] bg-transparent text-3xl text-right text-[#fff] outline-none" />
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <div className="text-[0.9rem]">Balance</div>
                            <button className="bg-[#605FFC] text-[#fff] rounded-md px-1 text-[1rem]">max</button>
                        </div>
                    </div>

                    {/* ============ CENTER ARROW ========== */}
                    <span className=" cursor-pointer"><FaArrowDownLong size={14}/></span>

                    {/* ============ BUY SECTION =============== */}
                    <div className="flex flex-col justify-between items-start gap-3 border border-[#31314c] hover:border-[#ff00f782] bg-[#31314c] rounded-lg w-full p-2 hover:bg-[#151825]">
                        <div>You buy</div>
                        <div className="flex justify-between items-center gap-1">
                            <span className="flex justify-center items-center text-lg gap-2 w-[35%] gap-3 py-1 px-2 bg-[#151825] cursor-pointer hover:bg-[#31314c] rounded-lg">Select token <IoIosArrowDown size={15} /></span>
                            <input type="number" placeholder={0} className="w-[63%] bg-transparent text-3xl text-right text-[#fff] outline-none" />
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <div>Balance</div>
                            <div>0</div>
                        </div>
                    </div>
                </div>

                <button className="bg-[#605FFC] text-[#fff] p-2 rounded-3xl font-bold w-full mt-8">Connect Wallet</button>
            </div>
        </div>
    )
}