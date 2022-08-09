interface Content {
    title: string,
    price: string,
    description: string,
}

function Product({title, price, description}: Content) {
    return (
        <div>
            <div>
                <div>{title.toUpperCase()}</div>
                <div>R${price.toUpperCase()}</div>
            </div>
            <div>{description}</div>
        </div>
    )
}

export default Product;
