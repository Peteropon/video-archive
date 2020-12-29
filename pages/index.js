import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { motion } from "framer-motion";
import Link from "next/link";
import data from "../content.json";

export async function getStaticProps() {
  return {
    props: {
      data,
    },
  };
}

const postVariants = {
  initial: { scale: 0.86, y: 50, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 0.8,
    y: 30,
    opacity: 0,
    transition: { duration: 0.15, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

const headerVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      delay: 0.3,
      duration: 1,
    },
  },
};
export default function Home({ data }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <main className="main">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          <h1 className="title">Welcome to my video archives!</h1>
        </motion.div>

        <motion.div
          layout
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{
            exit: { transition: { ease: "easeOut", staggerChildren: 0.1 } },
          }}
        >
          <ul className="grid">
            {data.map(({ path, bandName, videos }, key) => (
              <motion.li
                className="card"
                scroll={false}
                key={key}
                variants={postVariants}
                whileHover={{
                  position: "relative",
                  zIndex: 1,
                  scale: 1.1,
                  transition: { duration: 0.4 },
                }}
              >
                <Link scroll={false} href={`/bands/${path}`}>
                  <a>
                    <h3>{bandName} &rarr;</h3>
                    <p>{videos.length} videos</p>
                  </a>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <style jsx>{`
          .main {
            padding: 1rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .title a {
            color: #0070f3;
            text-decoration: none;
          }

          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 3rem;
            color: #f59994;
          }

          .title,
          .description {
            text-align: center;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 800px;
            margin-top: 3rem;
            list-style: none;
          }

          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: #0d2b52;
            background-color: #b85e00;
            text-decoration: none;
            border: 2px solid #2e2b23;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #f59994;
            border-color: #f59994;
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
            color: #c0b490;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }

          .logo {
            height: 1em;
          }

          @media (max-width: 600px) {
            .grid {
              width: auto;
              flex-direction: column;
              padding-left: 0;
            }

            .card {
              width: -webkit-fill-available;
              width: -moz-available;
            }
          }
        `}</style>
      </main>
    </Layout>
  );
}
