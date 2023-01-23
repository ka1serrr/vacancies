import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { persistor, store } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </QueryClientProvider>,
);
