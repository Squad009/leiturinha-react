import { useState } from 'react';
import HeaderApp from '../../shared/HeaderApp';
import InicioMain from './InicioMain';

export default function InicioLayout() {
    const [isRegisterButtonClicked, setIsRegisterButtonClicked] = useState(false);
    
    return(
        <>
            <HeaderApp setRegisterButton={setIsRegisterButtonClicked} />
            <InicioMain registerButton={isRegisterButtonClicked} setRegisterButton={setIsRegisterButtonClicked} />
        </>
    );
}