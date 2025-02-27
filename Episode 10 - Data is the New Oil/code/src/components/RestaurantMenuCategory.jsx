import RestaurantMenuItemList from "./RestaurantMenuItemList";
import { MdKeyboardArrowUp } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import "../styles/RestaurantMenuCategory.css";

const RestaurantMenuCategory = ({ data, showMenuItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="restaurant-menu-category">
        {/* Category Header */}
        <div className="category-header" onClick={handleClick}>
          <span>{`${data?.title.slice(0, 40)} (${
            data?.itemCards?.length
          })`}</span>
          <div className="category-header-icon">
            {showMenuItems ? <MdKeyboardArrowUp /> : <RiArrowDownSLine />}
          </div>
        </div>

        {/* Category Body */}
        {showMenuItems && <RestaurantMenuItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantMenuCategory;
