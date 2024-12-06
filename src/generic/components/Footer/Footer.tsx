import { version } from "../../../../package.json";

import styles from "@/generic/components/Footer/Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.version}>&copy; Super Paperclips {version}</div>
    </footer>
  );
};
