import Footer from '../../shared/footer/Footer';
import Authentication from '../../shared/header/Authentication';
import NavigationMain from '../../shared/header/NavigationMain';
import HeaderApp from '../../shared/HeaderApp';
import ConteudoProfessorMain from './ConteudoProfessorMain';



export function ConteudoProfessorLayout() {

    return(
        <>
            <HeaderApp navigationMain={<NavigationMain />} authentication={<Authentication />}/>
            <ConteudoProfessorMain />
            <Footer />
        </>
    );
}