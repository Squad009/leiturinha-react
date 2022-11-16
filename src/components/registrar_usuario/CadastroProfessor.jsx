import CadastrarProfessor from "../../models/CadastrarProfessor";
import CadastroProfessorService from "../../services/CadastroProfessorService";

export default function CadastroProfessor({setIsTeacher}) {
    function closeModal() {
        setIsTeacher(false);
    }

    function handleNewUser(e){
        const newUser = new CadastrarProfessor(
            e.currentTarget.elements.teacherName.value,
            e.currentTarget.elements.teacherEmail.value,
            e.currentTarget.elements.teacherSchool.value,
            e.currentTarget.elements.password.value
        )

        const cadastroService = new CadastroProfessorService()
        cadastroService.save(newUser)
    }

    return(
        <div className="modal fade show" id="modalRegistrarProfessor" role="dialog">
            <div className="modal-dialog teacher-modal" role="document">
                <div className="modal-content teacher-modal-content">
                    <div className="modal-header teacher-modal-header">
                        <h5 className="teacher-modal-title">Cadastro do Professor</h5>
                        <button type="button" className="close" onClick={closeModal} aria-label="Close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                            </svg>
                        </button>
                    </div>
                    <div className="modal-body teacher-modal-body">
                        <form className="form" onSubmit={handleNewUser}>
                            <div className="form-group">
                                <label htmlFor="teacherName">Nome Completo</label>
                                <input type="text" className="form-control" id="teacherName" aria-describedby="nameHelp" placeholder="Ex.: João da Silva" required /*  value={nome} *//>
                            </div>
                            <div className="form-group">
                                <label htmlFor="teacherEmail">E-mail</label>
                                <input type="email" className="form-control" id="teacherEmail" aria-describedby="emailHelp" placeholder="Ex.: joao.silva@email.com" required /* value={email} *//>
                            </div>
                            <div className="form-group">
                                <label htmlFor='teacherSchool'>Instituição de Ensino</label>
                                <input type="text" className="form-control" id="teacherSchool" placeholder="E.E. Vila São Joaquim 2" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Senha</label>
                                <input type="password" className="form-control" id="password" placeholder="**********" required/>
                            </div>
                            <div className="modal-footer teacher-modal-footer">
                                <button type="submit" className="btn btn-success">Cadastrar</button>
                                <a href="#">Já tem uma conta? Faça login!!</a>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}