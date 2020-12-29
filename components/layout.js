import Head from "next/head";
import Link from "next/link";

export const siteTitle = "Petros Video Archive";

export default function Layout({ children, home }) {
  return (
    <div className="container">
      <Head>
        <link />
        <meta name="description" content="Archive of my videos using Next.js" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <main>{children}</main>
      {!home && (
        <div className="backToHome">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <footer className="footer">
        <p>
          Made by Petros <br /> For educational, demonstrative and showing-off
          puproses only <br />
          &copy; PT 2020
        </p>
      </footer>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: #0d2b52;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }

        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .backToHome {
          margin: 3rem 1rem;
          color: #f59994;
        }

        .footer {
          margin: auto 0 0 0;
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          justify-content: center;
          align-items: center;
          color: #f59994;
        }

        .footer img {
          margin-left: 0.5rem;
        }

        .footer p {
          text-align: center;
        }
      `}</style>
    </div>
  );
}
