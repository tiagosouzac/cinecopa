import { Head, Html, Main, NextScript } from "next/document"
import { getCssText } from "../styles"

export default function Document() {
  return (
    <Html>
      <Head>
        {/* SSR Stitches */}
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
