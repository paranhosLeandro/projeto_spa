import Logo from '../../img/logo.svg'

import './styles.css';

const Home = ()=>{
    return (
        <main className='container-home'>
           <img src={Logo} alt='Logo'/>
           <div>
           <h1>Meu titulo</h1>
           <p>Exercicio spa unidade3, teste!!</p>
           <button>Acessar Serviços</button>
           </div>
        </main>
    )
}

export default Home;