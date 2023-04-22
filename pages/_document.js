import { Html, Head, Main, NextScript } from 'next/document';
global.XMLHttpRequest = require("xhr2");

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
