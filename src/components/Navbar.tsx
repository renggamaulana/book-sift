import { IoCartOutline, IoNotificationsOutline } from "react-icons/io5";
import ButtonIcon from "./ButtonIcon";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-2 border-b border-b-gray-500">
            <div className="flex gap-2">
                <img src="/assets/logo.png" alt="logo" width={24}/>
                <h1 className="text-2xl text-white font-semibold">Book Sift</h1>
            </div>
            <ul className="flex gap-5 items-center">
                <li>
                    <ButtonIcon icon={<IoNotificationsOutline />} />
                </li>
                <li>
                    <ButtonIcon icon={<IoCartOutline />} />
                </li>
                <li>
                    <button className="cursor-pointer">
                        <img src="/assets/profile.jpeg" alt="" className="w-9 h-9 rounded-full" />
                    </button>
                </li>
            </ul>
        </nav>
    )
}