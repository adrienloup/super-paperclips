import { Link } from "react-router-dom";

import { Page } from "@/generic/components/page/Page";
import { Production } from "@/game/components/production/Production";

import styles from "@/game/page/Game.module.scss";

function HomePage() {
  return (
    <Page>
      <h1 className={styles.title}>
        Un trombone. Deux trombones. Trois trombones…
      </h1>
      <div>
        <Link to="/super-paperclips">Home</Link>
        <br />
        <Link to="/super-paperclips/help">Help</Link>
      </div>
      <Production />
    </Page>
  );
}

export default HomePage;
