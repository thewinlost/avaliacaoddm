import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import MeuEstilo from "../meuestilo";
import { auth, firestore } from "../firebase";

const Escrever = () => {
  const [nome, setNome] = useState("");
  const [diretor, setDiretor] = useState("");
  const [ano, setAno] = useState("");
  const [genero, setGenero] = useState("");

  const enviarDados = () => {
    firestore
      .collection("Filme")
      .add({
        nome: nome,
        diretor: diretor,
        ano: ano,
        genero: genero,
      })
      .then(() => {
        alert("Filme" + nome + " Adicionado com Sucesso");
      });
  };

  const limparFormulario = () => {};

  return (
    <KeyboardAvoidingView style={MeuEstilo.containerlistar} behavior="padding">
      <View style={MeuEstilo.inputcontainerlistar}>
        <TextInput
          placeholder="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
          style={MeuEstilo.input}
        />
        <TextInput
          placeholder="Diretor"
          value={diretor}
          onChangeText={(text) => setDiretor(text)}
          style={MeuEstilo.input}
        />
        <TextInput
          placeholder="Ano"
          value={ano}
          onChangeText={(text) => setAno(text)}
          style={MeuEstilo.input}
        />
        <TextInput
          placeholder="Genero"
          value={genero}
          onChangeText={(text) => setGenero(text)}
          style={MeuEstilo.input}
        />
      </View>

      <View style={MeuEstilo.buttoncontainerlistar}>
        <TouchableOpacity onPress={enviarDados} style={MeuEstilo.button}>
          <Text style={MeuEstilo.buttonText}>Enviar Dados</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={limparFormulario}
          style={[MeuEstilo.button, MeuEstilo.buttonOutline]}
        >
          <Text style={MeuEstilo.buttonOutlineText}>Limpar Formulario</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Escrever;
