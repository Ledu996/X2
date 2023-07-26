import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import "./style.css";

export function Layout (props) {
    // div wit className(main) or fragment
    const layoutStyles = {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'rgba(0, 0, 0 / 8%)',
        position: 'relative',
        zIndex: '0'
    };
    return (
        <div className="layout--container">
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}