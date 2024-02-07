import { Html, Head, Main, NextScript } from "next/document";
import {Font} from 'components/_document/font';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Font />
      <body className="color-gray--slate bg-white [--line-color:theme(colors.gray.200/0.8)] d:bg-gray-900 d:bg-gradient-to-b d:from-black/40 d:to-black/40">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
