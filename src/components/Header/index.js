import './header.css';
import HSearch from '../HSearch';
import {Link} from 'react-router-dom';

function Header(){ 

    return(
        <> 
        <header>
            <Link className='logo' to='/'>ListCine</Link>
            <Link className='search' to='/search'>Pesquisar</Link>
            <Link className='favoritos' to='/favoritos'>Meus filmes</Link>
        </header>
        <div>
            <HSearch/>
        </div>
        </>
    );
}
export default Header;