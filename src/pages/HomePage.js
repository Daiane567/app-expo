import React, { useState } from 'react';
import { Text, View} from 'react-native';
import { Button } from 'react-native-paper';
/*https://callstack.github.io/react-native-paper/button.htmln  Aqui pega os componentes que nem o bootstrap*/


const HomePage = () => {
  return (

    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}> 
    
      <Text> PUC Minas </Text>
      
    <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
    </View>

  );

}

export default function App() {
  return (
     <HomePage/>
  );

}
/* pode ser feito assim para mostrar o nome 
import { Text } from 'react-native';

export default function App() {

  const nome = "Anakin Skywalker";

  return (
     <Text>
        Olá {nome}
      </Text>
  );
}
*/

/* Ou assim
import * as React from 'react';
import { Text } from 'react-native';

const MeuComponente = () => {

  const nome = "Anakin Skywalker";

  return (
     <Text>
        Olá {nome}
      </Text>
  );

};

export default function App() {

  return (
     <MeuComponente />
  );
}
*/

/*Ou assim
import React, { useState } from 'react';
import { Text, Button, View} from 'react-native';

const MeuComponente = () => {

  const [nome, setNome] = useState("");

  return (
    <View>      
     <Text>
        Olá {nome}
      </Text>
      <Button 
        title='Mudar nome'
        onPress={() => setNome("Anakin Skywalker")} 
      />
    </View>
  );

};

export default function App() {

  return (
     <MeuComponente />
  );
}
 */
/*
import React from 'react';
import { Text } from 'react-native';

const MeuComponente = ({nome}) => {

  return ( 
     <Text>
        Olá {nome}
      </Text>
  );

};

export default function App() {

  return (
     <MeuComponente nome={"Anakin Skywalker"} />
  );
}
*/