import { Outlet } from 'react-router-dom';
import '../css/style.css'; 

export default function BaseApp() {
    return(
        <>
            <Outlet></Outlet>
        </>
    )
}