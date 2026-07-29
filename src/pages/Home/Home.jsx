import { Link } from "react-router-dom";
import sardanapalus from "../../assets/images/The Death of Sardanapalus.jpeg";
import "./Home.css";

function Home() {
    return (
        <main className="museum-page">

            <img
                src={sardanapalus}
                alt="The Death of Sardanapalus"
                className="background-art"
            />

            <div className="image-overlay"></div>

            <div className="texture-layer"></div>

            <section className="page-content">

                <h1>
                    Museum
                    <br />
                    of Lost Beauty
                </h1>

                <p className="intro-text">
                    A study of beauty beyond its era, where forgotten forms, fading memories, and lost expressions of art find new life in the digital age.
                </p>

            </section>

            <footer className="page-footer">

                <span className="page-number">
                    PAGE 01
                </span>

                <Link to="/threshold" className="enter-link">
                    ENTER →
                </Link>

            </footer>

        </main>
    );
}

export default Home;