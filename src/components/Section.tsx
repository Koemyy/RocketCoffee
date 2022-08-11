import Product from './Product';
import style from '../css/Section.module.css'
import styles from "../css/Product.module.css";

interface PropsProduct {
    title: string,
    price: string,
    description: string,
}

interface PropsContent {
    title: string,
    products: PropsProduct[];
}

function Section ({title, products}: PropsContent) {
    return (
        <div id={styles["section"]}>
            <h2>{title}</h2>
            {
                products.map(product => {
                    return (
                        <Product title={product.title}
                                 price={product.price}
                                 description={product.description}
                        />
                    )
                })
            }
        </div>
    )
}

export default Section;
