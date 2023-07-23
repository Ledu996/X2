import { Header } from "./Header";
import { Footer } from "./Footer";
import "./styles.scss";
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