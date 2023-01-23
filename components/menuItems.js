import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SectionList,
} from "react-native";

// const menuItemsToDisplay = [
//   { name: "Hummus", price: "$14:00", id: "1A" },
//   { name: "Moutabal", price: "$4:00", id: "2B" },
//   { name: "Falafel", price: "$1:00", id: "3C" },
//   { name: "Marinated Olives", price: "$14:00", id: "4D" },
//   { name: "Kofta", price: "$24:00", id: "5E" },
//   { name: "Eggplant Salad", price: "5:00", id: "6F" },
//   { name: "Lentil Burger", price: "$14:00", id: "7G" },
//   { name: "Smoked Salmon", price: "$14:00", id: "8H" },
//   { name: "Kofta Burger", price: "$5:00", id: "9I" },
//   { name: "Turkish Kebab", price: "$14:00", id: "10J" },
//   { name: "Fries", price: "$14:00", id: "11K" },
//   { name: "Buttered Rice", price: "$3:00", id: "12L" },
//   { name: "Bread Sticks", price: "$14:00", id: "13M" },
//   { name: "Pita Pocket", price: "$3:00", id: "14N" },
//   { name: "Lentil Soup", price: "$14:00", id: "15O" },
//   { name: "Greek Salad", price: "$54:00", id: "16P" },
//   { name: "Rice Pilaf", price: "$21:00", id: "17Q" },
//   { name: "Baklava", price: "$13:00", id: "18R" },
//   { name: "Tartufo", price: "$16:00", id: "19S" },
//   { name: "Tiramisu", price: "$9:00", id: "20T" },
//   { name: "Panna Cotta", price: "$7:00", id: "21U" },
// ];

const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      { name: 'Hummus', price: '$5.00' },
      { name: 'Moutabal', price: '$5.00' },
      { name: 'Falafel', price: '$7.50' },
      { name: 'Marinated Olives', price: '$5.00' },
      { name: 'Kofta', price: '$5.00' },
      { name: 'Eggplant Salad', price: '$8.50' },
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'Lentil Burger', price: '$10.00' },
      { name: 'Smoked Salmon', price: '$14.00' },
      { name: 'Kofta Burger', price: '$11.00' },
      { name: 'Turkish Kebab', price: '$15.50' },
    ],
  },
  {
    title: 'Sides',
    data: [
      { name: 'Fries', price: '$3.00', id: '11K' },
      { name: 'Buttered Rice', price: '$3.00' },
      { name: 'Bread Sticks', price: '$3.00' },
      { name: 'Pita Pocket', price: '$3.00' },
      { name: 'Lentil Soup', price: '$3.75' },
      { name: 'Greek Salad', price: '$6.00' },
      { name: 'Rice Pilaf', price: '$4.00' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Baklava', price: '$3.00' },
      { name: 'Tartufo', price: '$3.00' },
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.00' },
    ],
  },
];
const sepratorComponent = () => <View style={style.sperator} />;
const header = () => <Text style={style.header}>Menu</Text>;

//Flat-List
// const Item = ({ name, price,isSelected,onPress }) => {
//   let backgroundColor = isSelected ? '#c7b93f4a' : 'transparent';
//   let textColor = isSelected ? 'white' : style.itemText.color;
//   return (
//     <TouchableOpacity onPress={onPress}  style={[style.innerContainer,{backgroundColor}]}>
//       <Text style={[style.itemText,{color:textColor}]}>{name}</Text>
//       <Text style={[style.itemText,{color:textColor}]}>{price || "NA"}</Text>
//     </TouchableOpacity>
//   );
// };

const Item = ({ detail : {name,price} }) => {
  return (
    <View style={[style.innerContainer]}>
      <Text style={[style.itemText]}>{name}</Text>
      <Text style={[style.itemText]}>{price}</Text>
    </View>
  );
};

const MenuItems = () => {
  const [selectedId, setSelectedId] = useState("");
  //Flat-list
  // const renderItem = ({ item }) => <Item name={item.name} price={item.price} isSelected={selectedId == item.id}  onPress={() => setSelectedId(item.id)}/>;
  //section-list
  const renderItem = ({ item }) => <Item detail={item} />;
  const renderSectionHeader = ({ section: { title } }) => (
    <View style={style.headerStyle}>
    <Text style={style.sectionHeader}>{title} </Text>
    </View>
  );
  return (
    <View style={style.container}>
      {/* <ScrollView indicatorStyle={"white"} style={style.innerContainer}>
       */}
      {/* <Text style={style.itemText}>{menuItemsToDisplay}</Text>
       */}
      {/* <FlatList
        data={menuItemsToDisplay}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={sepratorComponent}
        ListHeaderComponent={header}
        extraData={selectedId}
      /> */}
      <SectionList sections={menuItemsToDisplay} renderItem={renderItem}   renderSectionHeader={renderSectionHeader}/>
      {/* </ScrollView> */}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    color: "white",
    fontSize: 40,
    flexWrap: "wrap",
    textAlign: "center",
  },
  sectionHeader: {
    fontWeight:'bold',
    fontSize: 24,
    flexWrap: "wrap",
    textAlign: "center",
  },
  headerStyle: {
    backgroundColor: '#F4CE14',
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 15,
  },
  sperator: {
    borderColor: "white",
    borderWidth: 1,
  },
});
export default MenuItems;
