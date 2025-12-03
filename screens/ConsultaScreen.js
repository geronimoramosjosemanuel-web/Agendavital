import React from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function ConsultaScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 25, marginBottom: 20 }}>Realizar Consulta</Text>

      <Text>Paciente:</Text>
      <TextInput style={{ borderWidth: 1, marginBottom: 10, padding: 10 }} />

      <Text>Diagnóstico:</Text>
      <TextInput
        style={{ borderWidth: 1, marginBottom: 10, padding: 10, height: 80 }}
        multiline
      />

      <Text>Tratamiento:</Text>
      <TextInput
        style={{ borderWidth: 1, marginBottom: 20, padding: 10, height: 80 }}
        multiline
      />

      <Button title="Guardar Consulta" />
    </View>
  );
}
