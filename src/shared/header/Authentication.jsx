function Authentication({setRegisterButton}) {

    function openModal() {
        setRegisterButton(true)
    }

    return(
        <div className="text-end">
            <a
                type="button"
                href="/login.html"
                className="btn btn-outline-light me-2 b"
                role="button"
            >
                Entrar
            </a>
            <button
                type="button"
                className="btn btn-warning"
                onClick={openModal}
            >
                Registrar-se
            </button>

        </div>
    );
}

export default Authentication;