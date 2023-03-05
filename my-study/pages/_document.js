import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

/**
 * 서버에서만 렌더링, onclick등의 메소드는 적용되지 않는다.
 * 여기에 있는 Head는 좀 다르기 때문에 title 같은 속성은 _app에 넣어야함
 */
