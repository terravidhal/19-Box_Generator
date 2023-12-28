import logo from "./logo.svg";
import "./App.css";
import MessageForm from "./components/MessageForm/MessageForm";
import MessageDisplay from "./components/MessageDisplay/MessageDisplay";
import React, { useState } from 'react';

// RESUME
/* BON ici on veut pouvoir coe il l'a été dit dans le résumé on veut partager des données entre plusieurs composants
   on utilise donc :  Le processus de « levage de l'état » vers un composant parent commun nous donnerait un moyen 
   de partager le setter et le getter via les accessoires avec tous les composants enfants qui doivent y avoir accès
   Ici le composant parent commun utilsé est App.js() qui est d'ailleurs le composant mère de ts ls composants.
   1- le message est creer dans le composant <MessageForm/> et il est passé à notre composant <App/>
      grâce à une fonction à parametre <<là on est dns la transmission "enfants - parents">>
      RQ: tu le fesais déja avc les èvènements lorsque tu passais ls fonction en paramètre
   2- ensuite le tour est joué le "message" étant déja dans "<App/>" on peut le passer à  <MessageDisplay/>
      qui va l'afficher <<là on est dns la transmission "parents - enfants">> qu'on a l'habitude de faire
*/

function App() {
   const [currentMsg, setCurrentMsg] = useState([]);
    
   const youveGotMail = ( newMessage ) => {
       setCurrentMsg([...currentMsg, newMessage]);
   }
   
   return (
       <>
           <MessageForm onNewMessage={ youveGotMail } />
          
           <MessageDisplay message={ currentMsg } />
       </>
   );

}

export default App;
