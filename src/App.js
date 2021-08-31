import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import routes, { renderRoutes } from '~/routes';
import ScrollToTop from '~/components/ScrollToTop';
import FirebaseProvider from '~/components/Auth/FirebaseProvider';
import GoogleAnalytics from '~/components/GoogleAnalytics';
import NotistackProvider from '~/components/NotistackProvider';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import LoadingScreen from '~/components/LoadingScreen';
import ThemeConfig from './theme';
// ----------------------------------------------------------------------
import 'lazysizes';
import './_mock_api_';
import './utils/i18n';
import './utils/highlight';
import 'intersection-observer';
import 'simplebar/src/simplebar.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'slick-carousel/slick/slick.css';
import 'react-image-lightbox/style.css';
import 'react-quill/dist/quill.snow.css';
import 'slick-carousel/slick/slick-theme.css';
import 'lazysizes/plugins/attrchange/ls.attrchange';
import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const history = createBrowserHistory();

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Provider store={store}>
        <PersistGate loading={<LoadingScreen />} persistor={persistor}>
          <ThemeConfig>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <FirebaseProvider>
                <NotistackProvider>
                  <Router history={history}>
                    <ScrollToTop />
                    <GoogleAnalytics />
                    {renderRoutes(routes)}
                  </Router>
                </NotistackProvider>
              </FirebaseProvider>
            </LocalizationProvider>
          </ThemeConfig>
        </PersistGate>
      </Provider>
    </Suspense>
  );
}

export default App;
