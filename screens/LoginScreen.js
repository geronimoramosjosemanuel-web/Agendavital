import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>

      <Text style={styles.label}>Correo:</Text>
      <TextInput
        style={styles.input}
        placeholder="doctor@ejemplo.com"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Contraseña:</Text>
      <TextInput
        style={styles.input}
        placeholder="••••••••"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Botón Entrar */}
      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.mainButtonText}>ENTRAR</Text>
      </TouchableOpacity>

      {/* Recuperar contraseña */}
      <TouchableOpacity onPress={() => navigation.navigate("Recover")}>
        <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
    </View>
  );
}

// 🎨 ESTILOS PARA QUE SE VEA BONITO
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#111827",
    textAlign: "center",
  },
  label: {
    marginBottom: 5,
    fontSize: 15,
    color: "#374151",
  },
  input: {
    borderWidth: 1,
    borderColor: "#9CA3AF",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: "#FFFFFF",
  },
  mainButton: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  mainButtonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },
  link: {
    color: "#1D4ED8",
    textAlign: "center",
    marginTop: 5,
    fontWeight: "600",
  },
});
