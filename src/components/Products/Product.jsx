import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import {
  Circle,
  Icon,
  Image,
  Info,
  ProductContainer,
} from "./styled.components";

const Product = ({ item }) => {
  return (
    <ProductContainer>
      <Circle />
      <Image src={item.img} loading="lazy" aria-label={item.title} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </ProductContainer>
  );
};

export default Product;
