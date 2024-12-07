import { Link } from "react-router-dom";

//import { Page } from "@/generic/components/page/Page";
import { Production } from "@/game/components/production/Production";
// import { Header } from "../../generic/components/header/Header";

import styles from "@/game/page/Game.module.scss";
import { Button } from "@/button/Button";

function Game() {
  return (
    <div>
      <h1 className={styles.title}>
        Un trombone. Deux trombones. Trois trombones…
      </h1>
      <div>
        <Link to="/super-paperclips">Home</Link>
        <br />
        <Link to="/super-paperclips/help">Help</Link>
      </div>
      <Production />
      <Button />
      {/* <Header /> */}
    </div>
  );
}

export default Game;
