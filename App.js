import { StyleSheet } from 'react-native';
import Navigation from './Navigation'

export default function App() {
  // const [navType, setNavType] = useState(null);
// 
  // if (navType === 'tabs') {
  //   return <Tabs setNavType={setNavType} />;
  // } else if (navType === 'drawer') {
  //   return <Navigation setNavType={setNavType} />;
  // } else {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <View style={styles.button}>
  //         <Button color='#A7000C' title="Utiliser la navigation par onglets" onPress={() => setNavType('tabs')} />
  //       </View>
  //       <View style={styles.button}>
  //         <Button color='#A7000C' title="Utiliser la navigation par tiroir" onPress={() => setNavType('drawer')} />
  //       </View>
  //     </View>
  //   );
  // }
  return <Navigation />;
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
  }
});