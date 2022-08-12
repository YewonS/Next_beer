import Layout from "../components/Layout";
import "../styles/globals.css";
// npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome css
import { config } from "@fortawesome/fontawesome-svg-core"; 
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above


export default function App({ Component, pageProps }) {
    return (
        <div>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    );
}