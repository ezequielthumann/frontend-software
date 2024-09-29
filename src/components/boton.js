import React, { useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { primaryColor } from "../config/colors";

const Boton = ({ texto, onPres }) => {
  const [loading, setLoading] = useState(false);

  const handlePress = async () => {
    try {
      setLoading(true);
      await onPres();
      setLoading(false);
    } catch (error) {
      console.error("Error al ejecutar la tarea:", error);
      setLoading(false);
    }
  };

  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity onPress={handlePress}>
        <View
          style={{
            padding: 10,
            backgroundColor: primaryColor,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>{texto}</Text>
        </View>
      </TouchableOpacity>
      {loading && <ActivityIndicator style={{ marginTop: 10 }} color="blue" />}
    </View>
  );
};

export default Boton;
