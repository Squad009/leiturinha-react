import Footer from '../../shared/footer/Footer';
import NavigationMain from '../../shared/header/NavigationMain';
import HeaderApp from '../../shared/HeaderApp';
import QuizzesMain from './QuizzesMain';



export default function QuizzesLayout() {

    return(
        <>
            <HeaderApp navigationMain={<NavigationMain />} />
            <QuizzesMain />
            <Footer />
        </>
    );
}