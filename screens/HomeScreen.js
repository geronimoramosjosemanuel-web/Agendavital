import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 25, marginBottom: 20 }}>AgendaVital - Inicio</Text>

      {/* Botón para ver el perfil */}
      <Button
        title="Ver Perfil"
        onPress={() => navigation.navigate("Profile")}
      />

      <View style={{ marginTop: 20 }}>
        <Button
          title="Agendar una Cita"
          onPress={() => navigation.navigate("AgendarCita")}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Button
          title="Realizar Consulta"
          onPress={() => navigation.navigate("Consulta")}
        />
      </View>
    </View>
  );
}
