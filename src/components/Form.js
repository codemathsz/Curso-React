function Form(){

    function cadastrarUsuario (e){
        e.preventDefault()// para impedir a ação do html padrão que seria recarregar a página e mandar a requisição pro back, por que queremos processar as informações no front
        console.log('cadastrou o usuário!')
    }

    return(
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form