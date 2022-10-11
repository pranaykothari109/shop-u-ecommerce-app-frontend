import { Add, ContentPasteGoOutlined, Remove } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useContext } from "react";
import CartContext from "../contexts/CartContext";
import {styledIconButton} from "../styles/Cart";
import { Colors } from "../styles/theme";
export const AddQty = ({ productId }) => {
  const { cartItems, updateQty } = useContext(CartContext);
  const qty = cartItems.find((s) => s._id === productId).qty;

  const addQty = () => {
    updateQty(productId, qty + 1);
  };

  const removeQty = () => {
    updateQty(productId, qty - 1);
  };

  const isDisabled = () => {
    if (qty <= 1) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <IconButton onClick={removeQty} disabled={isDisabled()}>
        <Remove />
      </IconButton>
      {qty}
      <IconButton onClick={addQty} >
        <Add />
      </IconButton>
    </div>
  );
};
