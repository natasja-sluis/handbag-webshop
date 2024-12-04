import './Product.css'

function Product({ image, descriptionImage, titleProduct, price }) {
    return <article>
        <span>Best seller</span>
        <img src={image} alt={descriptionImage}/>
        <p>{titleProduct}</p>
        <h4>€{price},-</h4>
    </article>
}

export default Product;