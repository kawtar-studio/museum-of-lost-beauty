import { Link } from "react-router-dom";
import threshold from "../../assets/images/threshold.jpg.jpeg";
import "./Threshold.css";

const rooms = [
    {
        number: "01",
        title: "Gallery of Forgotten Paintings",
        path: "/lost-era",
        note: "Where forgotten masterpieces continue to breathe."
    },
    {
        number: "02",
        title: "Hall of Silent Architecture",
        path: "/art-of-craft",
        note: "Spaces built to outlive their creators."
    },
    {
        number: "03",
        title: "Cinema of Fading Light",
        path: "/minimal-age",
        note: "Films remembered long after their final frame."
    },
    {
        number: "04",
        title: "Library of Lost Words",
        path: "/archive",
        note: "Books that continue speaking through memory."
    },
    {
        number: "05",
        title: "The Dressing Room",
        path: "/fashion-identity",
        note: "Where identity is stitched, worn and forgotten."
    },
    {
        number: "06",
        title: "Cabinet of Curiosities",
        path: "/curator",
        note: "Objects too strange to belong anywhere else."
    },
    {
        number: "07",
        title: "Chamber of Photographs",
        path: "/closing",
        note: "Moments rescued from disappearing forever."
    },
    {
        number: "08",
        title: "Room of Echoes",
        path: "/closing",
        note: "Music that survives only through memory."
    }
];

function Threshold() {
    return (
        <main className="threshold-page">

            <img
                src={threshold}
                alt=""
                className="threshold-background"
            />

            <div className="threshold-overlay" />

            <div className="threshold-content">

                <span className="threshold-label">
                    Threshold
                </span>

                <h1>
                    Every room preserves
                    <br />
                    a different fragment
                    <br />
                    of beauty.
                </h1>

                <div className="rooms">

                    {rooms.map((room) => (
                        <Link
                            key={room.number}
                            to={room.path}
                            className="room"
                        >
                            <span className="room-number">
                                {room.number}
                            </span>

                            <div className="room-text">
                                <h2>{room.title}</h2>
                                <p>{room.note}</p>
                            </div>
                        </Link>
                    ))}

                </div>

            </div>

            <span className="journey-note">
                There is no correct path through the museum.
            </span>

        </main>
    );
}

export default Threshold;