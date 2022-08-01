import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}){

    return(
        <>
            <li>
                {marca} - {ano_lancamento}
            </li>
        </>
    )
}
/*  DEFININDO UM TIPO NAS PROPS */
Item.propTypes = {
    marca: PropTypes.string.isRequired,/*  Required falando que é necessário passar a marca quando chamar o componente */
    ano_lancamento: PropTypes.number.isRequired,
}
Item.defaultProps ={
    marca: 'Faltou a marca',
    ano_lancamento: 0,
}
export default Item 