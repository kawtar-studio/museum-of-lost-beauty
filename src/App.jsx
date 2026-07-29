import { BrowserRouter, Routes, Route } from "react-router-dom";
import MuseumLayout from "./layouts/MuseumLayout";

import Home from "./pages/Home/Home";
import Threshold from "./pages/Threshold/Threshold";
import LostEra from "./pages/LostEra/LostEra";
import ArtOfCraft from "./pages/ArtOfCraft/ArtOfCraft";
import FashionIdentity from "./pages/FashionIdentity/FashionIdentity";
import MinimalAge from "./pages/MinimalAge/MinimalAge";
import Archive from "./pages/Archive/Archive";
import Curator from "./pages/Curator/Curator";
import Closing from "./pages/Closing/Closing";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route element={<MuseumLayout />}>

          <Route path="/threshold" element={<Threshold />} />

          <Route path="/lost-era" element={<LostEra />} />
          <Route path="/art-of-craft" element={<ArtOfCraft />} />
          <Route path="/fashion-as-identity" element={<FashionIdentity />} />
          <Route path="/minimal-age" element={<MinimalAge />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/curator" element={<Curator />} />
          <Route path="/closing" element={<Closing />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;