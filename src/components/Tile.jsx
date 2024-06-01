
function Tile({image, descriptionImage, title, children}) {

    if (image) {
        return <section><img src={image} alt={descriptionImage}/></section>
    } else if (title) {
        return <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    }
}

export default Tile;