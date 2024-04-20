import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import Image from "next/image"

export default function Product () {
  const { query } = useRouter()


  return (
    <ProductContainer>
      <ImageContainer>
      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>

        <span>R$ 79, 90</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur molestias, sint dicta error reprehenderit id eos maxime? Non, aut eaque! Non, sequi est quos dolorem praesentium ullam sunt eius voluptatum.</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}