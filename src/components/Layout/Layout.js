import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import "./style.css";

export function Layout (props) {
    // div wit className(main) or fragment
    
    return (
        <div className="layout--container">
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}