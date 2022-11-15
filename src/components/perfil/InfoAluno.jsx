import '../../css/perfil_aluno.css';

export default function InfoAluno() {
    const data = {
        studentName: "Paula Albuquerque",
        studentCode: "45673",
        dateOfBirth: "20/07/1985",
        email: "paula.albuquerque@email.com",
        dateNow: "10/11/2022"
    }

    return(
        <section className='info-aluno p-2 m-4'>
            <div className='info-item'>
                <div className="row">
                    <div className="col-sm-2 my-auto info-img-container">
                        <img src='https://picsum.photos/200' className='info-img' alt='imagem do aluno' />
                    </div>
                    <div className="col-sm-6 my-auto">
                        <h2>Seja Bem Vindo(a), {data.studentName}!</h2>
                        <div className="row info-details">
                            <div className="col-6">
                                <p>Código de estudante: {data.studentCode} </p>
                                <p>Data de Nascimento: {data.dateOfBirth} </p>
                            </div>
                            <div className="col-6">
                                <p>Email: {data.email} </p>
                                <p>Data Atual: {data.dateNow}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 ">
                        <div>
                            <button className="btn_aluno"><a href='#'>Criar Projeto</a></button>
                        </div>
                        <div>
                            <button className="btn_aluno"><a href='#'>Favoritos</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}