import './styles.css';

const CompServices = ({name = 'Sem nome'})=>{
    return (
        <main className="container-compServices">
        <div>
           <p> {name} </p>
        </div>
        </main>
    )
}

export default CompServices;