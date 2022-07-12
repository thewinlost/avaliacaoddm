import React, { useState, useEffect } from "react";

import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  View,
  FlatList,
  TextInput,
  StatusBar,
} from "react-native";
import { auth, firestore } from "../firebase";
import MeuEstilo from "../meuestilo";

const ListarComFiltroFilmes = () => {
  const [search, setSearch] = useState("");
  const [dadosFiltrados, setdadosFiltrados] = useState([]);
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true); // Set loading to true on component mount

  useEffect(() => {
    const subscriber = firestore
      .collection("Filme")/home/aluno/Documentos/vitorinhacodigos/ddm-navigation-e-firestore
        querySnapshot.forEach((documentSnapshot) => {
          filmes.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.nome,
          });
        });
        setdadosFiltrados(filmes);
        setFilmes(filmes);
        setLoading(false);
      });
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  const searchFilter = (text) => {
    if (text) {
      const newData = filmes.filter(function (item) {
        if (item.nome) {
          const itemData = item.nome.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        }
      });
      setdadosFiltrados(newData);
      setSearch(text);
    } else {
      setdadosFiltrados(filmes);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      <Text style={MeuEstilo.item} onPress={() => getItem(item)}>
        {/* {item.id}
        {' - '} */}
        {item.nome.toUpperCase()}
      </Text>
    );
  };

  const getItem = (item) => {
    // alert('Id : ' + item.id + '\n\nTarefa : ' + item.nome + '\n\nCompletada: ' + item.completed);
    alert("Nome : " + item.nome);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={MeuEstilo.containerlistarcomfiltro}>
        <TextInput
          style={MeuEstilo.textInputStyle}
          onChangeText={(text) => searchFilter(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Procure Aqui"
        />
        <FlatList
          data={dadosFiltrados}
          keyExtractor={(item) => item.nome}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};

// const MeuEstilo = MeuEstiloheet.create({
//   ccontainerlistarcomfiltro: {
//     paddingTop: 40,
//     backgroundColor: 'white',
//   },
//   itemStyle: {
//     backgroundColor: '#0066CC',
//     padding: 10,
//     marginVertical: 8,
//     marginHorizontal: 10,
//     color: 'white',
//   },
//   textInputStyle: {
//     height: 40,
//     borderWidth: 1,
//     paddingLeft: 20,
//     margin: 5,
//     borderColor: '#0066CC',
//   },
// });

export default ListarComFiltroFilmes;
