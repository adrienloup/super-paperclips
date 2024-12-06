import { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/generic/components/Button/Button";

import styles from "@/pages/Home/Home.module.scss";

function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <h1 className={styles.title}>
        Un trombone. Deux trombones. Trois trombones…
      </h1>
      <div>
        <Link to="/super-paperclips">Home</Link>
        <br />
        <Link to="/super-paperclips/help">Help</Link>
      </div>
      <Button />
    </div>
  );
}

export default HomePage;
