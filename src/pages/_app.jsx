import App from 'next/app';
import { appWithTranslation } from 'utils/i18n';
import { CandiProvider, GlobalStyles } from 'candi-ui';
import { AndesitProvider } from 'utils/andesit';
import config from 'config/andesit/config';

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => (
  <AndesitProvider config={config}>
    <CandiProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </CandiProvider>
  </AndesitProvider>
);

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) });

export default appWithTranslation(MyApp);
