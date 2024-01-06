import CategoryGridTitle from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview");
    }

    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

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
