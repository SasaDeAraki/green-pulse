import ProductCard from '../../components/ProductCard/ProductCard';
import './Product.css';
import holder from '../../images/holder.png'
import 'material-icons/iconfont/material-icons.css';
import image1 from '../../images/image1.jpg'
import image2 from '../../images/image2.jpg'
import image3 from '../../images/image3.jpg'
import image4 from '../../images/image4.jpg'
import image5 from '../../images/image5.jpg'
import image6 from '../../images/image6.jpg'


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
                <ProductCard img={image1} icon='eco' titulo='Energia Sustentável em Cada Passo' texto='Os pisos Green Pulse são inovadores e geram energia através do movimento humano, convertendo a pressão dos passos em eletricidade limpa, ajudando a reduzir o consumo de fontes não-renováveis e contribuindo para um futuro mais sustentável.' />
                <ProductCard img={image2} icon='flash_auto' titulo='Monitoramento Inteligente da Rede Elétrica' texto='A tecnologia integrada nos pisos permite monitorar a eficácia da rede elétrica em tempo real. Informações valiosas são coletadas para otimizar o uso de energia e identificar áreas com maior demanda ou desperdício, promovendo eficiência no sistema.' />
                <ProductCard img={image3} icon='forest' titulo='Inovação que Transforma o Ambiente' texto='Com design moderno e funcional, os pisos Green Pulse se adaptam a diferentes tipos de ambientes, como ruas, shoppings e prédios comerciais, proporcionando energia de forma discreta e eficiente enquanto mantém a estética do local.' />
            </div>
            <div className='container-cards'>
                <ProductCard img={image4} titulo='Contribuindo para o Futuro das Cidades Inteligentes' icon='apartment' texto='Além de gerar energia, os pisos também capturam dados valiosos sobre o movimento e o comportamento das pessoas, ajudando a planejar e melhorar a infraestrutura urbana, promovendo cidades mais inteligentes e sustentáveis.' />
                <ProductCard img={image5} titulo='Sustentabilidade em Cada Detalhe' icon='compost' texto='Fabricados com materiais duráveis e ecológicos, os pisos Green Pulse não apenas geram energia limpa, mas também são projetados para serem recicláveis, contribuindo para um ciclo sustentável que minimiza o impacto ambiental.' />
                <ProductCard img={image6} titulo='Parcerias para um Mundo Mais Verde' icon='groups' texto='A Green Pulse busca parcerias com empresas e instituições para expandir a implementação dos pisos energéticos em grande escala. Juntas, podemos acelerar a transição para um futuro mais sustentável e impulsionar a inovação no setor energético.' />
            </div>
        </div>
    );
}
