import Footer from '../../shared/footer/Footer';
import NavigationMain from '../../shared/header/NavigationMain';
import HeaderApp from '../../shared/HeaderApp';
import CriaQuizMain from './CriaQuizMain';




export default function CriaQuizLayout() {

    return(
        <>
            <HeaderApp navigationMain={<NavigationMain />} />
            <CriaQuizMain />
            <Footer />
        </>
    );
}