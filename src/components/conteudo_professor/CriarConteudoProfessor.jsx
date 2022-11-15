import Footer from '../../shared/footer/Footer';
import Authentication from '../../shared/header/Authentication';
import NavigationMain from '../../shared/header/NavigationMain';
import HeaderApp from '../../shared/HeaderApp';
import ConteudoProfessorMain from './ConteudoProfessorMain';
import "../../css/criarConteudoProfessor.css";
import { BiEraser } from 'react-icons/bi'
import { BsFilterLeft } from 'react-icons/bs'
import { BsFilterRight} from 'react-icons/bs'
import { BsTextCenter} from 'react-icons/bs'
import { BsTypeBold} from 'react-icons/bs'
import { BsTypeItalic} from 'react-icons/bs'





export default function CriarConteudoProfessor() {

    return(
        <>
            <HeaderApp navigationMain={<NavigationMain />} authentication={<Authentication />}/>


            <main>
  <div className="container d-flex justify-content-center" >
      <h1>Começe a criar!</h1></div>

  <div className=" container d-flex  align-items-center justify-content-center " id="botoes">
       <div className="btn " id="fontes">
          <button className="btn" id="negrito"><i><BsTypeBold /></i></button>
          <button className="btn" id="italico"><i><BsTypeItalic /></i></button>       </div>
       <div className="btn  " id="alinhamento">
          <button className="btn" id="esquerda"><i><BsFilterLeft /></i></button>
          <button className="btn" id="centro"><i><BsTextCenter /></i></button>
          <button className="btn" id="botao"><i><BsFilterRight /></i></button>
       </div>
       <div className="btn " id="transforma">
          <button className="btn" id="botao"><i>A</i></button>
          <button className="btn" id="botao"><i>a</i></button>
          <button className="btn" id="botao"><i>Aa</i></button>
       </div>
       <div className="btn d-flex  align-items-center justify-content-center" id="apagar">
          <button className="btn" id="apagarTexto"><i><BiEraser /></i></button>
      </div>
  </div>
 
  <div className="container d-flex  flex-column bd-highlight mb-1" id="caixaDeTexto">
        <div className="p-2 bd-highlight">
            <textarea id="titulo" placeholder="Seu título aqui..."></textarea>
        </div>
        <div className="p-2 bd-highlight">
            <textarea id="texto" placeholder="Seu texto aqui..."></textarea>
        </div>
        <div>
          <a href="" button className="btn button_app_primary mr-3"> Enviar </a>
        </div>
  </div>
</main>

            <Footer />
        </>
    );
}