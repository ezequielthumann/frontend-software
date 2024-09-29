import { BottomNavigation } from "react-native-paper";
import { useState } from "react";
import Home from "../screens/home"
import NewSubject from"../screens/newsubjet"
import { primaryColor } from "../config/colors";

export default TabsScreens = () => {
  const [index, setIndex] = useState(0);
//cantidadd de pantallas
  const [routes] = useState([
    {
      key: "Home",
      title: "Inicio",
      focusedIcon: "home",
      unfocusedIcon: "home-circle",
      color: "",
    },
    {
      key: "NewSubject",
      title: "nueva materia",
      focusedIcon: "home",
      unfocusedIcon: "home",
    },
  ]);
//ecena a renderizar    key: vista,
  const renderScene = BottomNavigation.SceneMap({
    Home: Home,
    NewSubject: NewSubject,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{backgroundColor:primaryColor}}
      activeColor="red"
      inactiveColor="blue"
    />
  );
};
