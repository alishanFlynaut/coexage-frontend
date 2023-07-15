import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      {/* <!-- Template Main CSS File --> */}
      <link href="/css/style.css" rel="stylesheet" />
      <link href="/css/responsive.css" rel="stylesheet" />
      <link href="/css/style.css.map" rel="stylesheet" />
      {/*  */}
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
