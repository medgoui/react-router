import React, {useState} from 'react';

const AdminArea = () => {
    const [isAuth, setIsAuth] = useState(false);
    let adminPanel = isAuth ? <div><h1>Welcome admin</h1></div> : (<div>
        <p>You must log in to view the page</p>
        <button onClick={() => setIsAuth(true)}>Log in</button>
        </div>)
    return (
        <div>
        {adminPanel}
        </div>
    );
}

export default AdminArea;