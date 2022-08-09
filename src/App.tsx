import Header from './components/Header';
import Product from './components/Product';

function App() {

    return (
        <div>
            <Header />
            <div>Brunch</div>
            <section>
                <Product
                    title = "Maçã do Amor"
                    price = "8,00"
                    description = "Deliciosa maçã do amor"
                />
                <Product
                    title = "Torta Holandesa"
                    price = "16,00"
                    description = "Deliciosa torta holandesa"
                />
                <Product
                    title = "Churros"
                    price = "10,00"
                    description = "Delicioso churros"
                />
            </section>
            <div>Bebidas</div>
            <section>
                <Product
                    title = "Suco de limão"
                    price = "6,00"
                    description = "Delicioso suco de limão"
                />
                <Product
                    title = "Refrigerante Lata"
                    price = "5,00"
                    description = "Temos: Coca-cola, Guaraná e Fanta laranja"
                />
                <Product
                    title = "Água mineral"
                    price = "4,50"
                    description = "Água mineral"
                />
            </section>
        </div>
    )
}

export default App
