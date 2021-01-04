import Head from "next/head";
import Footer from "./footer";
import Header from "./header";
import Back from "./back";
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
      <main className={styles.main}>{children}</main>
      {!home && <Back />}
      <Footer />
    </div>
  );
}
