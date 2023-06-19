import { FaShoppingBag, FaSistrix } from 'react-icons/fa';
import './styles.css'

function NavBar() {

    const count = 0

    return (
        <div className='container'>
            <nav>

                <h1>capputeeno</h1>
                <div className='right'>
                    <input type="text" placeholder="Procurando por algo especifico?" />
                    <FaSistrix className='FaSistrix' />
                    <div className="container-counter">
                        <FaShoppingBag className='FaShoppingBag' />
                        <span className="counter">{count}</span>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;