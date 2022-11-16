import { useState } from 'react';
import Authentication from '../../shared/header/Authentication';
import NavigationMain from '../../shared/header/NavigationMain';
import SearchMain from '../../shared/header/SearchMain';
import HeaderApp from '../../shared/HeaderApp';
import InicioMain from './InicioMain';

export default function InicioLayout() {
    const [isRegisterButtonClicked, setIsRegisterButtonClicked] = useState(false);
    
    return(
        <>
            <HeaderApp navigationMain={<NavigationMain />} searchMain={<SearchMain />} authentication={<Authentication />} />
            <InicioMain registerButton={isRegisterButtonClicked} setRegisterButton={setIsRegisterButtonClicked} />
        </>
    );
}