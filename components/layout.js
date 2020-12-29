import Head from "next/head";
import Link from "next/link";
import Footer from "./footer";
import Header from "./header";
import styles from "./layout.module.css";

export const siteTitle = "Petros Video Archive";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link />
        <meta name="description" content="Archive of my videos using Next.js" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Header />
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <Footer />
    </div>
  );
}
