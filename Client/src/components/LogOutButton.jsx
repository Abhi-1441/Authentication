import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import { logout } from '../redux/userSlice';

const LogOutButton = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout()); // Update the Redux state
        toast.success('User logged out successfully', {
            className: 'text-l',
        });
        navigate('/login');
    };

    return (
        <div className='border-8 w-min p-1 rounded-lg cursor-pointer' onClick={handleLogout}>
            LogOut
        </div>
    );
};

export {LogOutButton};
