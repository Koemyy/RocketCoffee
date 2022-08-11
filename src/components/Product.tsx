import styles from '../css/Product.module.css';

interface Content {
    title: string,
    price: string,
    description: string,
}

function Product({title, price, description}: Content) {
    return (
        <div id={styles["product"]}>
            <div>
                <p>{title.toUpperCase()}</p>
                <span>{description}</span>
            </div>
            <p>R${price.toUpperCase()}</p>
        </div>
    )
}

export default Product;
