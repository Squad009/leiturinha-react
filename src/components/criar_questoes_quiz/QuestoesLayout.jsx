import Footer from '../../shared/footer/Footer';
import NavigationMain from '../../shared/header/NavigationMain';
import HeaderApp from '../../shared/HeaderApp';
import QuestoesMain from './QuestoesMain';



export default function QuestoesLayout() {

    return(
        <>
            <HeaderApp navigationMain={<NavigationMain />} />
            <QuestoesMain />
            <Footer />
        </>
    );
}