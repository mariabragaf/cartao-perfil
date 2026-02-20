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

         <Text>Maria Eduarda</Text>
         <Text>Developer</Text>
        </View>      
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1e1e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#f0f0f0',
    width: 300,
    height: 300,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,

  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  imagem: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },

  nome: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  profissao: {
    fontSize: 16,
    color: "#555",
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
