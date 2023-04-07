import Logo1 from '../../img/amstel.png';
import Logo2 from '../../img/antar.jpg';
import Logo3 from '../../img/hein2.jpg';
import Logo4 from '../../img/bud.png';
import Logo5 from '../../img/colonia.png';
import Logo6 from '../../img/brahma.jpg';
import Logo7 from '../../img/stella.png';
import Logo8 from '../../img/original.jpg';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = ()=>{
    let logo1 = 'logo1';
    return (
        <main className='container-home'>
            <div className='container-div-img'>
          <Link to={'/Services/?id=Amstel'}> <img src={Logo1} alt='Logo'/></Link>
          <Link to={'/Services/?id=Antarctica'}><img src={Logo2} alt='Logo'/></Link>
          <Link to={'/Services/?id=Heineken'}><img src={Logo3} alt='Logo'/></Link>
          <Link to={'/Services/?id=Budweiser'}><img src={Logo4} alt='Logo'/></Link>
          <Link to={'/Services/?id=Colonia'}><img src={Logo5} alt='Logo'/></Link>
          <Link to={'/Services/?id=Brahma'}><img src={Logo6} alt='Logo'/></Link>
          <Link to={'/Services/?id=Stella'}><img src={Logo7} alt='Logo'/></Link>
          <Link to={'/Services/?id=Original'}><img src={Logo8} alt='Logo'/></Link>
           </div>
           <div className='container-div-info'>
           <h1>Aqui você encontra bones, copos e camisas.
           <p>É só clicar na imagem ou selcionar o item "PEDIDOS"</p></h1>
           <h2>Heineken a cerveja oficial do Site!</h2>
           <h3>Beba com moderação!</h3>
           
           <section>
           <iframe width="560" height="315" src="https://www.youtube.com/embed/G2lsxUVeWrM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           </section>
           
           </div>
        </main>
    )
}

export default Home;