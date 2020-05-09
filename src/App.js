import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from "@material-ui/core";
import { theme1 } from './theme/theme';
//import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Routes from './Routes/routes';

// Navbar, sidebar and topbar
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Topbar from './components/TopNavbar';
import Rightbar from './components/Rightbar';

function App() {
  return (
    <ThemeProvider theme={theme1}>
        <div className="App">
        {/*<AmplifySignOut />*/}
        <Navbar />
        <Sidebar />
        <Rightbar />
        <div className="main">
            <Topbar />
            <div className="routes">
                <Routes />
            </div>
        </div>
        </div>
    </ThemeProvider>
  );
}

//export default withAuthenticator(App);
export default App;
