import Footer from '../../shared/footer/Footer';
import NavigationMain from '../../shared/header/NavigationMain';
import HeaderApp from '../../shared/HeaderApp';
import RealizaQuizMain from './RealizaQuizMain';



export default function QuizzesLayout() {

    return(
        <>
            <HeaderApp navigationMain={<NavigationMain />} />
            <RealizaQuizMain />
            <Footer />
        </>
    );
}