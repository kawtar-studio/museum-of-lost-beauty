import { Link } from "react-router-dom";
import ophelia from "../../assets/images/The Death of Sardanapalus.jpeg";
import "./Home.css";

function Home() {
    return (
        <main className="museum-page">

            <img
                src={ophelia}
                alt="Ophelia by John Everett Millais"
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
                    Between what was once cherished and what is yet to be imagined lies a collection of forgotten beauty, fragments of the past that remain as art evolves and beauty takes new forms, waiting to be rediscovered, reinterpreted, and given another existence.
                </p>

            </section>


            <footer className="page-footer">

                <span className="page-number">
                    PAGE 01
                </span>


                <Link to="/journey" className="enter-link">
                    ENTER →
                </Link>

            </footer>

        </main>
    );
}

export default Home;