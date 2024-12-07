import { Link } from "react-router-dom";

//import { Page } from "@/generic/components/page/Page";
import { Header } from "@/generic/components/header/Header";
import { Production } from "@/game/components/production/Production";

import styles from "@/game/page/Game.module.scss";

function Game() {
  return (
    <div>
      <Header />
      <h1 className={styles.title}>
        Un trombone. Deux trombones. Trois trombones…
      </h1>
      <div>
        <Link to="/super-paperclips">Home</Link>
        <br />
        <Link to="/super-paperclips/help">Help</Link>
      </div>
      <Production />
    </div>
  );
}

export default Game;
