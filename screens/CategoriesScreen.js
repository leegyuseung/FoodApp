import CategoryGridTitle from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";

function renderCategoryItem(itemData) {
  return (
    <CategoryGridTitle
      title={itemData.item.title}
      color={itemData.item.color}
    />
  );
}

function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      // columns를 두줄로 변경
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
