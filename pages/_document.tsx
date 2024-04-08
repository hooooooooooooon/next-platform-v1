import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body className={"bg-neutral-900 text-white max-w-screen-sm mx-auto"}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
