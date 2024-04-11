import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body className={"bg-white text-neutral-900 max-w-screen-sm mx-auto"}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
