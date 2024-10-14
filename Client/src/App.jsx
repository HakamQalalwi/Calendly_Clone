import { ThemeProvider } from '@mui/material/styles';
import { theme }from './Themes/Button.js'
import HomePage from "./Pages/HomePage.jsx";
import {TeamsPage} from "./Pages/TeamsPage.jsx";
import IndividualsPage from "./Pages/IndividualsPage.jsx";
import {LogInPage} from "./Pages/LogInPage.jsx";
import SignUpPage from "./Pages/SignUpPage.jsx";


const App = () => (
    <ThemeProvider theme={theme}>
        {/*<TeamsPage />*/}
        {/*<IndividualsPage/>*/}
        {/*<HomePage />*/}
        {/*<LogInPage/>*/}
        {/*<SignUpPage/>*/}
    </ThemeProvider>
);


export default App;




