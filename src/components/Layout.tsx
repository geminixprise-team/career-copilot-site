import Head from "next/head";
import Navigation from "./Navigation";
import Copyright from "./Copyright";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <nav>
        <Navigation />
      </nav>
      <div className="content">
        <main>{children}</main>
        <footer>
          <Copyright />
        </footer>
      </div>
      <style jsx>
        {`
          .root {
            display: block;
            padding: 4rem 0;
            box-sizing: border-box;
            height: 100%;
          }
          .content {
            display: flex;
            flex-direction: column;
            min-height: 100%;
          }
          main {
            display: flex;
            flex: 1 0 auto;
          }
          footer {
            padding: 2rem 1.5rem 0;
          }
          @media (min-width: 769px) {
            .root {
              display: flex;
              flex: 1 0 auto;
            }
            .content {
              flex: 1 0 auto;
            }
          }
        `}
      </style>
    </div>
  );
}
