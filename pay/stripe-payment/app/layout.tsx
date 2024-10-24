// app/layout.tsx

import './globals.css';
import localFont from 'next/font/local';

const helvetica = localFont({
  src: [
    {
      path: '/fonts/Helvetica-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '/fonts/Helvetica-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/Helvetica-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-helvetica',
});

export const metadata = {
  title: 'Pay',
  description: 'The payments page for Angus Design',
  icons: {
    icon: '/A-Icon.png',
    apple: '/A-Icon.png',  // If you want to specify for Apple devices too
  },
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={helvetica.variable}>
      <body>{children}</body>
    </html>
  );
}
