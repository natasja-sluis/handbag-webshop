import './App.css'
import Button from "./components/Button/Button.jsx";
import Product from "./components/Product/Product.jsx";
import Tile from "./components/Tile.jsx";

function App() {
    return (
        <>
        <h1>Handbags & Purses</h1>
        <nav>
            <Button
                buttonText="to the collection"
                disabled={false}
            />
            <Button
                buttonText="shop all bags"
                disabled={false}
            />
            <Button
                buttonText="pre-orders"
                disabled={true}
            />
        </nav>
        <main>
                <Product
                    image="/src/assets/bag_1.png"
                    descriptionImage="pink bag"
                    titleProduct="the handy bag"
                    price="400"
                />

                <Product
                    image="/src/assets/bag_2.png"
                    descriptionImage="brown bag"
                    titleProduct="the stylish bag"
                    price="250"
                />


                <Product
                    image="/src/assets/bag_3.png"
                    descriptionImage="green bag"
                    titleProduct="the simple bag"
                    price="300"
                />

                <Product
                    image="/src/assets/bag_4.png"
                    descriptionImage="light brown bag"
                    titleProduct="the trendy bag"
                    price="150"
                />

        </main>
        <footer>
                <Tile
                image="/src/assets/brand.png"
                descriptionImage="brand picture"
                />

                <Tile title="The Brand">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <p>uis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Tile>

                <Tile title="Our Story">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.

                        Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Tile>

               <Tile
               image="/src/assets/our_story.png"
               descriptionImage="picture women hugging"
               />
        </footer>
        </>
    )
}

export default App
