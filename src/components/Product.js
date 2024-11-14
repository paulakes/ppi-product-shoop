export default function Product({
    id,
    thumbnail,
    title,
    price,
    description
}) {
    return(
        <article className="product">
            <img src={thumbnail} alt={title} />
            <div className="product-content">
                <div>
                    <h3>{title}</h3>
                    <p className="product-price">$ {price}</p>
                    <p>{description}</p>
                </div>
                <p className="product-actions">
                    <button>Add to Cart</button>
                </p>
            </div>
        </article>
    );
}