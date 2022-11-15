import '../../css/perfil_aluno.css';
import BotaoInfo from './BotaoInfo';
import dataRegisteredUser from '../../shared/mockedData/dataUser';

export default function InfoAluno() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const data = {
        studentName: dataRegisteredUser.length == 2 ? dataRegisteredUser[1].fullName : dataRegisteredUser[0].fullName ,
        studentCode: "45673",
        dateOfBirth: dataRegisteredUser.length == 2 ? dataRegisteredUser[1].dateOfBirth : dataRegisteredUser[0].dateOfBirth,
        email: dataRegisteredUser.length == 2 ? dataRegisteredUser[1].email : dataRegisteredUser[0].dateOfBirth,
        dateNow: `${day}/${month}/${year}`
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
                                <p>Data de Nasc.: {data.dateOfBirth} </p>
                            </div>
                            <div className="col-6">
                                <p>Email: {data.email} </p>
                                <p>Data Atual: {data.dateNow}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 ">
                        <BotaoInfo buttonText="Criar Historinha" />
                        <BotaoInfo buttonText="Veja Mais Historinhas" />
                    </div>
                </div>
            </div>
        </section>
    )
}