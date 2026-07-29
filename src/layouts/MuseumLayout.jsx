import { Outlet } from "react-router-dom";
import "./MuseumLayout.css";

function MuseumLayout() {
    return (
        <main className="museum-layout">
            <Outlet />
        </main>
    );
}

export default MuseumLayout;