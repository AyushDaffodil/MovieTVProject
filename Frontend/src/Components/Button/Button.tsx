import type { ButtonProps } from "./types";
import './Style.css'
import { useNavigate } from "react-router-dom";

export const Button = ({
    children,
    onTabChange = () => { },
    id = 0,
    path = '',
    arrow = '',
    activeTab = 0
}: ButtonProps) => {


    const navigate = useNavigate();

    const handleSubmit = () => {
        if (id != 0) {
            onTabChange(id);
        }
        else {
            navigate(`${path}`);
        }
    }
    return (
        <button onClick={handleSubmit} className={((id != 0) && (activeTab === id)) ? "buttonClass active" : "buttonClass"}>
            {children} {arrow && <img src={arrow} alt="Logo" />}
        </button>
    )
}
