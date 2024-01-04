import { Pressable, Text, View } from "react-native";

function CategoryGridTitle({ title, color }) {
  return (
    <View>
      {/* 나중에 터치만들기 위해 Pressable */}
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTitle;
