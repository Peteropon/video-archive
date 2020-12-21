import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";

export const siteTitle = "Petros Video Archive";

export default function Layout({ children, home }) {
  return (
    <div className={styles.content}>
      <Head>
        <link />
        <meta name="description" content="Archive of my videos using Next.js" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <footer className={styles.footer}>
        <p>
          Made by Petros <br /> For educational, demonstrative and showing-off
          puproses only <br />
          &copy; PT 2020
        </p>
      </footer>
    </div>
  );
}
