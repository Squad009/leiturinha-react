import InicioTop from './InicioTop';
import '../../css/inicio.css';
import UltimasHistorias from './UltimasHistorias';
import PostagemRecenteProfessor from './PostagemRecenteProfessor';
import Footer from '../../shared/footer/Footer';
import TelaCadastro from '../registrar_usuario/TelaCadastro';
import CadastroProfessor from '../registrar_usuario/CadastroProfessor';
import CadastroAluno from '../registrar_usuario/CadastroAluno';
import { useState } from 'react';

function InicioMain({registerButton, setRegisterButton}) {
    const [isTeacher, setIsTeacher] = useState(false);
    const [isStudent, setIsStudent] = useState(false);

    return(
        <main>
            <InicioTop />
            <UltimasHistorias />
            <PostagemRecenteProfessor />
            <Footer />

            {registerButton ? <TelaCadastro setRegisterButton={setRegisterButton} setIsTeacher={setIsTeacher} setIsStudent={setIsStudent} /> : null}
            {isTeacher ? <CadastroProfessor setIsTeacher={setIsTeacher} /> : null}
            {isStudent ? <CadastroAluno setIsStudent={setIsStudent} /> : null}
        </main>
    );
}

export default InicioMain;