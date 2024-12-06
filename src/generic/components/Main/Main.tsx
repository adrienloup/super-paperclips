import { Children } from "@/generic/models/Children";

import styles from "@/generic/components/Main/Main.module.scss";

export const Main = ({ children }: { children: Children }) => {
  return (
    <main className={styles.main} role="main">
      {children}
    </main>
  );
};
