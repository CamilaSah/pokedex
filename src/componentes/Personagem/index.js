import './Personagem.css'

const Personagem = (props) => {
    return (
        <div className='personagem'>
          <img className='personagem_imagem' src={props.foto} alt='Imagem do personagem'/>
          <div className='personagem_nome'>{props.nome}</div>
          <div className='personagem_recompensa'>{props.recompensa}</div>
        </div>
    )
}

export default Personagem