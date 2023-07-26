import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export function Layout (props) {
    // div wit className(main) or fragment
    const layoutStyles = {
        width: '100%',
        height: '100%'
    };
    return (
        <div style = {layoutStyles}>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}