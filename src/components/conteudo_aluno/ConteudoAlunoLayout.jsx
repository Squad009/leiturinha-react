import Footer from '../../shared/footer/Footer';
import Authentication from '../../shared/header/Authentication';
import NavigationMain from '../../shared/header/NavigationMain';
import HeaderApp from '../../shared/HeaderApp';
import ConteudoAlunoMain from './ConteudoAlunoMain';

export default function ConteudoAlunoLayout(){
    return(
        <div>
            <HeaderApp navigationMain={<NavigationMain />} authentication={<Authentication />}/>
            <ConteudoAlunoMain/>
            <Footer/>
        </div>
    )
}