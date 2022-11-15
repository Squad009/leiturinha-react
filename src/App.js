
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BaseApp from './components/BaseApp';
import { ConteudoProfessorLayout } from './components/conteudo_professor/ConteudoProfessorLayout';
import CriaContaLayout from './components/cria_conto/CriaContoLayout';
import CriaQuizLayout from './components/cria_quiz/CriaQuizLayout';
import LeiturinhaMain from './components/leiturinha/LeiturinhaMain';
import InicioLayout from './components/inicio/InicioLayout';
import QuizzesLayout from './components/quizzes/QuizzesLayout';
import RealizaQuizLayout from './components/tela_realizar_quiz/RealizaQuizLayout';
import QuestoesLayout from './components/criar_questoes_quiz/QuestoesLayout';
import PerfilAluno from './components/perfil/PerfilAluno';
import ConteudoAlunoLayout from './components/conteudo_aluno/ConteudoAlunoLayout';
import SobreMain from './components/sobre_projeto/SobreMain';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BaseApp />}>
          <Route index element={<InicioLayout />} />
          <Route path='criar_conto' element={<CriaContaLayout />} />
          <Route path='conteudo_professor' element={<ConteudoProfessorLayout />} />
          <Route path='cria_quiz' element={<CriaQuizLayout />} />
          <Route path='quizzes' element={<QuizzesLayout />} />
          <Route path='tela_realizar_quiz' element={<RealizaQuizLayout />} />
          <Route path='criar_questoes_quiz' element={<QuestoesLayout />} />
          <Route path='perfil_aluno' element={<PerfilAluno />} />
          <Route path='conteudo_aluno/:id' element={<ConteudoAlunoLayout/>}/>
          <Route path='leiturinhas' element={<LeiturinhaMain/>}/>
          <Route path='sobre_projeto' element={<SobreMain/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
