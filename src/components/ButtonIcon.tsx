import { ReactNode } from "react";
interface ButtonIconProps {
    icon: ReactNode;
    onClick?: () => void;
  }
export default function ButtonIcon({ icon, onClick }: ButtonIconProps) {
    return (
        <>
            <button onClick={onClick} className="p-3 font-semibold text-white text-lg cursor-pointer rounded-lg bg-gray-600/40 backdrop-blur-lg hover:bg-gray-700/40 transition duration-300">
                {icon}
            </button>
        </>
    )
}