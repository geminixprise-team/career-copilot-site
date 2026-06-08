import "normalize.css";
import { AppProps } from "next/app";
import { useEffect } from "react";
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
import "../../public/styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ((window as any).netlifyIdentity) {
      (window as any).netlifyIdentity.on("init", (user: any) => {
        if (!user) {
          (window as any).netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  }, []);

  return <Component {...pageProps} />;
}
