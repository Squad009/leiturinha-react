import '../../css/registrar_usuario.css';

export default function TelaCadastro({setRegisterButton, setIsTeacher, setIsStudent}) {
    function closeModal() {
        setRegisterButton(false);
    }

    function handleTeacherButton() {
        setIsTeacher(true);
        setRegisterButton(false);
    }

    function handleStudentButton() {
        setIsStudent(true);
        setRegisterButton(false);
    }

    return (
        <div className="modal" id="modalRegistrar" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Criar Conta</h5>
                    <button type="button" className="close" aria-label="Close" onClick={closeModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                    </button>
                </div>
                <div className="modal-body">
                    <p>Como você deseja se cadastrar?</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-success" onClick={handleStudentButton}>ESTUDANTE</button>
                    <button type="button" className="btn btn-primary" onClick={handleTeacherButton}>PROFESSOR</button>
                </div>
                </div>
            </div>
        </div>
    )
}