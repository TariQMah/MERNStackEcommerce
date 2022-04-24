import { popularProducts } from "../../data";
import Product from "./Product";
import { ProductsContainer } from "./styled.components";

const Products = () => {
  return (
    <ProductsContainer>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </ProductsContainer>
  );
};

export default Products;
