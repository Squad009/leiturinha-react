import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import validator from "validator";
import '../../css/login.css';


export default function Login() {

    const [registro, setregistro] = useState("");
    const [password, setpassword] = useState("");
    const [msg, setmsg] = useState("");
    const [showRegistrar, setShowRegistrar] = useState(false);


    const fecharModal = () => {
        setmsg("");
    }

    const validarAcesso = (el) => {

        window.location.href = "/"
        // const registroGravado = localStorage.getItem(registro);
        // if (validator.isEmail(registro)) {


        //     if (!registroGravado) {
        //         setmsg("Usuário não localizado.")
        //     } else {
        //         localStorage.setItem("login_feito_com_sucesso", true)
        //         window.location.href = "/"
        //     }



        // } else {
        //     setmsg("E-mail informado não e valido.")
        // }
    }


    useEffect(() => {



    }, [])



    return (

        <div class="content">

            <section className="">

                <div className="containter-fluid p-3 mb-5  w-100 " style={{ backgroundImage: "url('../img/fundo-criativo-criar-conto.webp')" }}>
                    <div className="fundo_criativo  box-login  ">

                        <div className='logo-position'>
                            <img src={process.env.PUBLIC_URL + "/Logo_200px.png"} />
                        </div>
                        <form className="col-12 row ">
                            <div className="form-group col-12">
                                <label className='col-12' >Email address</label>
                                <input type="email" className="form-control" id="mailuser" value={registro} aria-describedby="emailHelp" onChange={(e) => setregistro(e.target.value)} placeholder="Digite seu e-mail" />

                            </div>

                            <div className="form-group px-3 col-12">
                                <label className='col-12' >Senha</label>
                                <input type="password" className="form-control col-12" id="mailpwd" value={password} onChange={(e) => setpassword(e.target.value)} aria-describedby="emailHelp" placeholder="Por favor, informar senha." />
                            </div>

                            <div className="d-flex justify-content-center p-3 col-12">
                                <button className="btn bg-success text-white" type='button' onClick={validarAcesso} >Validar Acesso</button>
                            </div>


                        </form>
                        <div className='col-12' style={{ textAlign: 'center', color: '#0d6efd' }}>
                            <a onClick={() => setShowRegistrar(true)}>
                                Registrar-se
                            </a>
                        </div>
                    </div>



                </div>

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


                <Modal
                    show={showRegistrar}
                    backdrop="static"
                    keyboard={false}
                    onClick={() => setShowRegistrar(false)}
                >
                    <Modal.Header closeButton>
                        <Modal.Title className='w-100'>
                            <div className='row'>

                                <div className='col-6'>
                                    <img src={process.env.PUBLIC_URL + "/log-temp-projeto.png"} />
                                </div>
                                <div className='col-6' style={{ fontSize: '0.8em', }} > <span>Criar Conta</span></div>
                            </div>

                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Como você deseja se cadastar?
                    </Modal.Body>
                    <Modal.Footer>

                        <Link to={"/registrar/estudante" }  >
                            <button className='btn button_app_primary' role={"button"}>Estudante</button>
                        </Link>


                        <Link to={"/registrar/professor"}>
                            <button className='btn button_app_secondary'  role={"button"}>Professor</button>
                        </Link>

                    </Modal.Footer>
                </Modal>




            </section>
        </div>
    )
}