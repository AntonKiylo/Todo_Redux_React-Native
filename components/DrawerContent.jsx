import React from "react";
import { logOut } from "./redux/actions";
import { useDispatch } from "react-redux";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";

const CustomDrawerContent = props => {
  const dispatch = useDispatch();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Log Out"
        onPress={() => dispatch(logOut())}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;