import '../styles/globals.css'
import MainLayout from '../components/layout/main-layout';

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp
