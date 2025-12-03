import React from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function AgendarCitaScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 25, marginBottom: 20 }}>Agendar Cita</Text>

      <Text>Nombre del paciente:</Text>
      <TextInput style={{ borderWidth: 1, marginBottom: 10, padding: 10 }} />

      <Text>Fecha:</Text>
      <TextInput style={{ borderWidth: 1, marginBottom: 10, padding: 10 }} />

      <Text>Hora:</Text>
      <TextInput style={{ borderWidth: 1, marginBottom: 20, padding: 10 }} />

      <Button title="Guardar Cita" />
    </View>
  );
}
