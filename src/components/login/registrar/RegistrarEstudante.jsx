import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Modal, Button, FormGroup, FormLabel } from 'react-bootstrap';

import validator from "validator";
import '../../../css/login.css';


export default function RegistrarEstudante() 



{


    const [aluno, setAluno] = useState("");
    const [password, setpassword] = useState("");
    const [passwordConfirma, setpasswordConfirma] = useState("");
    const [dataNascimento, setDataNascimento] = useState("")
    const [msg, setmsg] = useState("");
    const [showRegistrar, setShowRegistrar] = useState(false);


    const fecharModal = () => {
        setmsg("");
    }

    const cadastrarAluno = () => {

        window.location.href = "/"
        // let validado = true;
    
        // if (!validator.isDate(dataNascimento) && validado) {
        //     setmsg("Data de nascimento não e valida.")
        //     setDataNascimento("")
        //     validado = false;
        // }
        // if (!validator.isEmail(aluno) && validado) {
        //     setmsg("Email informado não e valido.")
        //     setAluno("")
        //     validado = false;
        // }
    
        // if (password.length == 0 & validado) {
        //     setmsg("Por favor, informar a senha valida.")
        //     setpassword("")
        //     validado = false;

        // }
        // if (password !== passwordConfirma && validado) {
        //     setmsg("Senha e contra senha nao confere.")
        //     setpassword("")
        //     setpasswordConfirma("")
        //     validado = false;

        // }
        // if (validado) {

        //     localStorage.setItem(aluno, password);
        //     alert("Cadastro realizado com sucesso!!!")

        // }
    }


    return (
        <div class="content">
            <section className='containter-fluid p-3 w-100'>
                <form className='fundo-criativo box-login'>
                    <h2>
                        Cadastro do Aluno
                    </h2>
                    <label className='form-label col-12' htmlFor='dataNascimento'>
                        Data de Nascimento
                        <input className='form-control' value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} id='dataNascimento' type='date' />
                    </label>
                    <label className='form-label col-12' htmlFor='email'>
                        E-mail
                        <input className='form-control' id='email' type='email' value={aluno} onChange={(e) => setAluno(e.target.value)} placeholder='ex.: joao.silva@email.com' />
                    </label>
                    <label className='form-label col-12' htmlFor='senha'>
                        Senha
                        <input className='form-control' id='senha' value={password} onChange={(e) => setpassword(e.target.value)} type='password' placeholder='********' />
                    </label>
                    <label className='form-label col-12' htmlFor='confirmaSenha'>
                        Confirme Sua Senha
                        <input className='form-control' id='confirmaSenha' value={passwordConfirma} onChange={(e) => setpasswordConfirma(e.target.value)} type='password' placeholder='********' />
                    </label>
                    <button className='btn btn-success my-3 col-12' onClick={cadastrarAluno} type='button'>Cadastrar</button>
                    <p>
                        <a href='/login'>
                            Já tem uma conta? Faça login!!
                        </a>
                    </p>
                </form>
            </section>


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

        </div>
    )
}