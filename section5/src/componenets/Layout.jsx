import { useNavigate } from "react-router-dom";
import style from "./Layout.module.css";

export default function Layout({ children }) {
    const navigate = useNavigate();

    const onClickHeader = () => {
        navigate('/')
    }

    return <div className="Layout">
        <header className={style.header} onClick={onClickHeader}>
            <div>🌏NARAS</div>
        </header>
        <main className={style.main}>
            {children}
        </main>

    </div>
}
