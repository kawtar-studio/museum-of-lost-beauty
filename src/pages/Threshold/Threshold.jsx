import { Link } from "react-router-dom";
import background from "../../assets/images/threshold.jpg.jpeg";
import "./Threshold.css";

function Threshold() {
    return (
        <main className="threshold-page">

            <img
                src={background}
                alt=""
                className="threshold-background"
            />

            <div className="threshold-overlay"></div>

            <section className="threshold-content">

                <span className="threshold-label">
                    Threshold
                </span>

                <h1>
                    Every museum preserves objects
                </h1>

                <p className="threshold-quote">
                    This one preserves
                    <br />
                    what time forgets
                </p>

                <div className="threshold-divider"></div>

                <div className="journey">

                    <span>Eight rooms</span>

                    <span>Eight fragments</span>

                    <span>One journey</span>

                </div>

                <Link
                    to="/lost-era"
                    className="turn-page"
                >
                    <span>Turn the page →</span>
                </Link>

            </section>


        </main>
    );
}

export default Threshold;