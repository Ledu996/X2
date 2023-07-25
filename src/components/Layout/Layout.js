import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export function Layout (props) {
    // div wit className(main) or fragment
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}