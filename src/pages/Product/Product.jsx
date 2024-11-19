import './Product.css';
import img1 from '../../images/banner.png';

export default function Product() {
    return (
        <div className="about-product">
            <h1>Sobre o produto</h1>
            <div className="product-box">
                <div className="product">
                    <img src={img1} alt="Produto 1" />
                    <p>
                        Este é um exemplo de descrição de produto. 
                        Inclua aqui as informações que deseja exibir sobre o produto.
                    </p>
                </div>
                <div className="product">
                    <img src={img1} alt="Produto 2" />
                    <p>
                        Este é um exemplo de descrição de produto. 
                        Inclua aqui as informações que deseja exibir sobre o produto.
                    </p>
                </div>
                <div className="product">
                    <img src={img1} alt="Produto 3" />
                    <p>
                        Este é um exemplo de descrição de produto. 
                        Inclua aqui as informações que deseja exibir sobre o produto.
                    </p>
                </div>
                </div>
                <div className="product-box">
                <div className="product">
                    <img src={img1} alt="Produto 4" />
                    <p>
                        Este é um exemplo de descrição de produto. 
                        Inclua aqui as informações que deseja exibir sobre o produto.
                    </p>
                </div>
                <div className="product">
                    <img src={img1} alt="Produto 5" />
                    <p>
                        Este é um exemplo de descrição de produto. 
                        Inclua aqui as informações que deseja exibir sobre o produto.
                    </p>
                </div>
                <div className="product">
                    <img src={img1} alt="Produto 6" />
                    <p>
                        Este é um exemplo de descrição de produto. 
                        Inclua aqui as informações que deseja exibir sobre o produto.
                    </p>
                </div>
            </div>
        </div>
    );
}
