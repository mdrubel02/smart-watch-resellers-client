import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ColorContextProvider } from './Theme/Theme';
import UserContext from './Context/User/UserContext';
import { Toaster } from 'react-hot-toast';
import { ProSidebarProvider } from 'react-pro-sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ManageUsers from './Context/DataManage/ManageUsers';
const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <ColorContextProvider>
      <UserContext>
        <ManageUsers>
          <ProSidebarProvider>
            <QueryClientProvider client={queryClient}>
              <Toaster />
              <App />
            </QueryClientProvider>
          </ProSidebarProvider>
        </ManageUsers>
      </UserContext>
    </ColorContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
