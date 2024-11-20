import ProductCard from '../../components/ProductCard/ProductCard';
import './Product.css';
import holder from '../../images/holder.png'
import 'material-icons/iconfont/material-icons.css';


export default function Product() {
    return (
        <div className="container-product">
            <div className="container-h1">
                <h1>Sobre o produto</h1>
                <div className='h1-hr'>
                    <hr/>
                </div>
            </div>
            <div className='container-cards'>
                <ProductCard img={holder} icon='select_check_box' titulo='abobora' texto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero earum facere id ea quasi doloremque non laudantium dignissimos totam minus eaque quas nesciunt eius laboriosam quis sint, quam vitae sapiente?' />
                <ProductCard img={holder} titulo='abobora' texto='aboroba' />
                <ProductCard img={holder} titulo='abobora' texto='aboroba' />
            </div>
            <div className='container-cards'>
                <ProductCard img={holder} titulo='abobora' texto='aboroba' />
                <ProductCard img={holder} titulo='abobora' texto='aboroba' />
                <ProductCard img={holder} titulo='abobora' texto='aboroba' />
            </div>
        </div>
    );
}
