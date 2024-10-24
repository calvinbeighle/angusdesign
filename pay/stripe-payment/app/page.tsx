import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; img-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self'; connect-src 'self';"
        />
        <meta
          httpEquiv="Permissions-Policy"
          content="interest-cohort=(), microphone=(self)"
        />
        <title>Angus Design</title>
        <link rel="icon" href="/A-Icon.png?v=1" type="image/png" />
        <style>{`
          @font-face {
            font-family: 'Helvetica Neue';
            src: url('/fonts/HelveticaNeueUltraLight.woff2') format('woff2'),
                 url('/fonts/HelveticaNeueUltraLight.woff') format('woff');
            font-weight: 100;
            font-style: normal;
            font-size: 3rem;
          }
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden; /* Disable scrolling */
          }
          body {
            margin: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f8f8f8; /* Slightly off-white background */
            color: #4a4a4a; /* Slightly off-black text */
            font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
            font-weight: 100; /* Ultra Light */
            font-size: 3rem;
          }
          .call-link {
            position: absolute;
            bottom: 75px; /* Adds margin below */
            font-size: 0.9rem; /* Very small font */
            color: #4a4a4a; /* Slightly off-black */
            letter-spacing: 0.5px;
            font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
            font-weight: 400; 
            text-decoration: none; /* Removes the underline */
          }
          .centered-text {
            transform: translateY(-20px); /* Moves the text up */
          }

          /* Media query for mobile devices */
          @media (max-width: 768px) {
            .centered-text {
              transform: translateY(-50px); /* Moves the text up more on mobile */
              font-size: 2.7rem;
            }
          }
        `}</style>
      </Head>
      <div className="centered-text">angus made this</div>
      <a
        href="tel:+14062036674"
        rel="noopener noreferrer"
        className="call-link"
      >
        CALL
      </a>
    </>
  );
}
