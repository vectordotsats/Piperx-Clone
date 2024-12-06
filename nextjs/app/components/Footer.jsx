import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
    return(
        <div>
            <div>
                <div>
                    <FaXTwitter size={18} />
                    Follow Us on X
                </div>
                <div>
                    <FaDiscord size={18}/>
                    Discord
                </div>
                <div>
                    <FaTelegramPlane size={18}/>
                    Telegram
                </div>
                <div>
                    Medium
                </div>
            </div>

            <div>2024 PIPERX Ltd. All Rights Reserved.</div>
        </div>
    )
}