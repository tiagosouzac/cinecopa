import Document, { DocumentContext, Html, Main, NextScript } from "next/document";
import Head from "next/head";
import { ServerStyleSheet } from "styled-components";
import { getCssText } from "../styles";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: JSX.IntrinsicAttributes) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
            <Html>
              <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                  href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
                  rel="stylesheet"
                ></link>

                {/* SSR Stitches */}

                <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
              </Head>

              <body>
                <Main />
                <NextScript />
              </body>
            </Html>
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
