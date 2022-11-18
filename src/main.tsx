import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App'
import './index.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {persistor, store} from "./store/store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </QueryClientProvider>
)
