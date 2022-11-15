import Footer from '../../shared/footer/Footer';
import NavigationMain from '../../shared/header/NavigationMain';
import HeaderApp from '../../shared/HeaderApp';
import ResponseToUserModal from '../../shared/modal/ResponseToUserModal';
import CriaContoMain from './CriaContoMain';



export default function CriaContaLayout() {

    return(
        <>
            <HeaderApp navigationMain={<NavigationMain />} />
            <CriaContoMain />
            <Footer />
           
        </>
    );
}