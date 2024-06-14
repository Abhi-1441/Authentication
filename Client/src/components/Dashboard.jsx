import { useSelector } from 'react-redux';
import ReactLoading from 'react-loading';
import {LogOutButton} from './LogOutButton';

const Dashboard = () => {
    const userInfo = useSelector((state) => state.user.userInfo);
    const status = useSelector((state) => state.user.status);

    return (
        <div className='text-white dark:text-black'>
            {status === 'loading' ? (
                <div className='flex items-center'>
                    <div className="text-2xl px-2">Loading </div>
                    <ReactLoading type={"balls"} className="h-2 fill-white" />
                </div>
            ) : (
                <div>
                    {userInfo ? (
                        <>
                            <h1>Welcome, {userInfo.username}</h1>
                            <p>Email: {userInfo.email}</p>
                            <LogOutButton />
                        </>
                    ) : (
                        <div>No user info available</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Dashboard;
