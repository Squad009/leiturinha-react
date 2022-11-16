import { useNavigate } from "react-router-dom"

export default function BotaoInfo({buttonText}) {
    const navigate = useNavigate();

    function handleButtonClick() {
        if(buttonText == "Criar Historinha") {
            navigate("/criar_conto");
        }else if(buttonText == "Veja Mais Historinhas") {
            navigate("/leiturinhas");
        }
    }


    return(
        <button className="btn_aluno" onClick={handleButtonClick}>
            {buttonText}
        </button>
    )
}