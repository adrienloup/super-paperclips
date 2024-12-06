import { Children } from "../../models/Children";

import styles from "./Main.module.scss";

export const Main = ({ children }: { children: Children }) => {
  return (
    <main className={styles.main} role="main">
      {children}
    </main>
  );
};
