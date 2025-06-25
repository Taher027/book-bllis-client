import React from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import MenuItem from "./MenuItems";

const AdminRoutes = () => {
  return (
    <div>
      <MenuItem
        address={"new-order"}
        label={"New Oders"}
        icon={MdOutlineShoppingBag}
      />
      <MenuItem
        address={"add-product"}
        label={"Add Product"}
        icon={MdAddCircleOutline}
      />
      <MenuItem
        address={"all-products"}
        label={"All Product"}
        icon={MdAddCircleOutline}
      />
      <MenuItem address={"orders"} label={"Oders"} icon={MdAddCircleOutline} />
    </div>
  );
};

export default AdminRoutes;
