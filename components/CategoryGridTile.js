import { Pressable, StyleSheet, Text, View, Platform } from "react-native";

function CategoryGridTitle({ title, color }) {
  return (
    <View style={styles.gridItem}>
      {/* 나중에 터치만들기 위해 Pressable */}
      {/* android_ripple 은 android hover하면 색 변경하는 방법 */}
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTitle;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4, // android shadow

    // ios backgroundcolor 가 없으면 shadow가 안나온다
    backgroundColor: "white",
    shadowColor: "black", // ios shadow
    shadowOpacity: 0.25, // ios shadow
    shadowOffset: { width: 0, height: 2 }, // ios shadow
    shadowRadius: 8, // ios shadow

    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  // pressable styles
  button: {
    flex: 1,
  },
  // ios button pressed
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
