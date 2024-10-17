import { Navigate } from 'react-router-dom';
import { useUser } from './UserContext';

const PrivateRoute = ({ element }) => {
    const { isAuthenticated } = useUser();

    return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
