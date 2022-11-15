export default function TituloPerfilAluno({ titulo }) {
    return(
        <div className='titulo mb-3'>
            <h3 className="title_font text_app_secondary">
                {titulo}
            </h3>
            <p className="ver-mais">
                <a href='#'>ver +</a>
            </p>
      </div>
    )
}