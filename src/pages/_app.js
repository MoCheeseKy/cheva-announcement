import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Tag meta dan title lainnya bisa di sini */}
        <title>Chevalier Announcement</title>
        {/* Jika menggunakan .png (di public/logo.png) */}
        <link rel='icon' type='image/png' href='/chevalogo.png' />
        {/* === BATAS FAVICON === */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
