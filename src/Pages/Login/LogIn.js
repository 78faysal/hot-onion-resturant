import React from 'react';
import useFirebase from '../../Hooks/useFirebase';


const LogIn = () => {
    const {user, signInUsingGoogle} = useFirebase();

    return (
        <div className='m-5'>
            <h3>Email</h3>
            <input type="email" />
            <h3>Password</h3>
            <input type="password" /><br /><br />
            <button>Submit</button><br />
            --------------------------<br />
            <button onClick={signInUsingGoogle} className='btn btn-danger'>SignIn with Google</button>
        </div>
    );
};

export default LogIn;