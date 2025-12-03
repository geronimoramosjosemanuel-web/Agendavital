import React from "react";
import { View, Text } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 25 }}>Perfil del Doctor</Text>
      <Text style={{ marginTop: 10 }}>Nombre: Dr. Juan Pérez</Text>
      <Text>Especialidad: Medicina General</Text>
      <Text>Correo: ejemplo@correo.com</Text>
    </View>
  );
}
