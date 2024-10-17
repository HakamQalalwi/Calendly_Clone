import {styled} from "@mui/system";
import {Button} from "@mui/material";
import {useUser} from "../context/UserContext.jsx";
import { useNavigate } from 'react-router-dom';


const LogoutButton = styled(Button)(({ theme }) => ({
    position: 'absolute',
    top: theme.spacing(3),
    right: theme.spacing(3),
    borderRadius: "20px"
}));

function LogOutButton() {
    const {logout } = useUser();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate('/');
    };
    return (
        <LogoutButton
            variant="contained"
            color="secondary"
            onClick={handleLogout}
        >
            Log Out
        </LogoutButton>
    );
}

export default LogOutButton;