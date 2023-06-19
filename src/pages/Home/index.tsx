import { useEffect, useState } from 'react';
import './styles.css'
import api from '../../service/api';

import NavBar from './components/NavBar'
import Card from '../../components/Card';

function Home() {
    const [products, setProducts] = useState<any>([]);

    useEffect(() => {
        getProducts();
    }, []);

    async function getProducts() {
        try {
            const res = await api.getItems();
            setProducts(res);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
            <NavBar />
            <main>
                <div className="center">

                    <div className="product-catalog">
                        {products.map((item: any) => (
                            <Card key={item.id} img={item.img} name={item.name} price={item.price} />
                        ))}
                    </div>
                </div>

            </main>
        </div>
    );
}

export default Home;
