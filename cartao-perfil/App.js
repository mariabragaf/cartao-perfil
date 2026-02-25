import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.card}>
          <Image
        source={(require("./assets/eu.jpg"))}
        style={styles.imagem}>
        </Image>

         <Text style={styles.nome}>Maria Eduarda</Text>
         <Text style={styles.profissao}>Developer</Text>

        <View style={styles.icons}>
          <Image source={(require("./assets/github.png"))}
          style={styles.icon}>
          </Image>
          <Image source={(require("./assets/linkedin.png"))}
          style={styles.icon}>
          </Image>
          <Image source={(require("./assets/email.png"))}
          style={styles.icon}>

          </Image>
        </View>
        </View>      
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b0e9ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    width: 280,
    padding: 25,
    alignItems: 'center',
    borderRadius: 25,
    shadowColor: "#000",
    shadowRadius: 10,
    shadowOpacity: 0.25,
    elevation: 8,

  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  imagem: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 10,
  },

  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },

  profissao: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },

  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
});
