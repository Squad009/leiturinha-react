import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Modal, Button, FormGroup, FormLabel } from 'react-bootstrap';
import validator from "validator";
import '../../../css/login.css'


export default function RegistrarProfessor() {
    const [professor, setProfessor] = useState("");
    const [email, setEmail] = useState("");
    const [instituicao, setInstituicao] = useState("");
    const [msg, setmsg] = useState("");

const cadastrarProfessor = () => {

    window.location.href = "/"
    // const validado = true;

    // if (professor.length<=0 && validado) {
    //     setmsg("Por favor, informar seu nome professor.")
    //     setProfessor("")
    //     validado = false;
    // }

    // if (!validator.isEmail(email) && validado) {
    //     setmsg("Email informado não e valido.")
    //     setEmail("")
    //     validado = false;
    // }


    // if(validado){
    //     localStorage.setItem(email, "");
    //     alert("Cadastro realizado com sucesso!!!")
    // }





}
const fecharModal = () => {
    setmsg("");
}

return(
<div className="content">
    <section className='containter-fluid p-3 w-100'>
    <form className='fundo-criativo  box-login'>
      <h2>
        Cadastro do Professor
      </h2>
      <label className='form-label col-12' htmlFor='nomeProfessor'>
        Nome
        <input className='form-control' value={professor} onChange={(e)=> setProfessor(e.target.value)} id='nomeProfessor' type='text' placeholder='ex.: João da Silva' />
      </label>
      <label className='form-label col-12' htmlFor='email'>
        E-mail
        <input className='form-control' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='ex.: joao.silva@email.com' />
      </label>
      <label className='form-label col-12' htmlFor='instituicaoEnsino'>
        Instituição de Ensino
        <select className='form-control' value={instituicao}  onSelect={(e)=>setInstituicao(e.target.value)} id='instituicaoEnsino'>
          <option> E.E. Vila São Joaquim 2 </option>
          <option> Outros </option>
        </select>
      </label>
      <button className='btn btn-success my-3 col-12' onClick={cadastrarProfessor}  type='button'>Cadastrar</button>
      <p>
        <a href='/login'>
          Já tem uma conta? Faça login!!
        </a>
      </p>
    </form>

    <Modal
                show={msg.length > 0}
                backdrop="static"
                keyboard={false}

            >
                <Modal.Header closeButton>
                    <Modal.Title>Opsss!!!! </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {msg}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={fecharModal}>
                        Fechar
                    </Button>

                </Modal.Footer>
            </Modal>
    </section>
</div>
)
}