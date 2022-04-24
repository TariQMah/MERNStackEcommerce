import {
  Button,
  CategoryItemContainer,
  Image,
  Info,
  Title,
} from "./styled.components";

const CategoryItem = ({ item }) => {
  return (
    <CategoryItemContainer>
      <Image src={item.img} loading="lazy" aria-label={item.title} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
