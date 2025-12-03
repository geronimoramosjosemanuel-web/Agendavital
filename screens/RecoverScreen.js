import React from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function RecoverScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 25, marginBottom: 20 }}>Recuperar contraseña</Text>

      <Text>Ingresa tu correo:</Text>
      <TextInput style={{ borderWidth: 1, padding: 10, marginBottom: 20 }} />

      <Button title="Enviar correo de recuperación" />
    </View>
  );
}
