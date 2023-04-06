import './styles.css';

const Contato = ()=>{
    return (
        <div className="container-contato">
            <form>
                <input placeholder="Nome completo"/>
                <input placeholder="Email"/>
                <input placeholder="Telefone"/>
                <input type={"submit"}/>

            </form>

        </div>
    )
}

export default Contato;