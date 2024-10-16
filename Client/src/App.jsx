import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { UserProvider } from './context/UserContext.jsx'; // Import UserProvider
import { theme } from './Themes/Button.js';
import HomePage from './Pages/HomePage.jsx';
import { TeamsPage } from './Pages/TeamsPage.jsx';
import IndividualsPage from './Pages/IndividualsPage.jsx';
import { LogInPage } from './Pages/LogInPage.jsx';
import SignUpPage from './Pages/SignUpPage.jsx';
import { CreateEventPage } from './Pages/CreateEventPage.jsx';
import AddOneonOneEventPage from './Pages/AddOneonOneEventPage.jsx';
import NotFound from './Pages/NotFound.jsx';
import PrivateRoute from './context/PrivateRoute.jsx'; // Import PrivateRoute

const App = () => (
    <UserProvider>
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LogInPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/teams" element={<TeamsPage />} />
                    <Route path="/individuals" element={<IndividualsPage />} />
                    <Route path="/create-event" element={<PrivateRoute element={<CreateEventPage />} />} />
                    <Route path="/add-one-on-one" element={<AddOneonOneEventPage />} />
                    <Route path="/not-found" element={<NotFound />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </ThemeProvider>
    </UserProvider>
);

export default App;
