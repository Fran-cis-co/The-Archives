import React from "react";
import Scrollspy from "./components/Scrollspy";
import ShatteredThroneMainPage from "./components/ShatteredThroneMainPage";
import { dungeons } from "../../../../../data/Dungeons";

const ShatteredThrone = () => {
  const shatteredThrone = dungeons[0];
  return (
    <div className="container p-3">
      <div class="row">
        <Scrollspy shatteredThrone={shatteredThrone.encounterMaps} />
        <ShatteredThroneMainPage shatteredThrone={shatteredThrone} />
      </div>
    </div>
  );
};

export default ShatteredThrone;
