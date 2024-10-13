import { ThemeProvider } from '@mui/material/styles';
import { theme }from './Themes/Button.js'
import HomePage from "./Pages/HomePage.jsx";
import {TeamsPage} from "./Pages/TeamsPage.jsx";
import IndividualsPage from "./Pages/IndividualsPage.jsx";


const App = () => (
    <ThemeProvider theme={theme}>
        {/*<TeamsPage />*/}
        <IndividualsPage/>
        {/*<HomePage />*/}
    </ThemeProvider>
);


export default App;




