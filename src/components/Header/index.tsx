import { AiOutlineShopping } from "react-icons/ai";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

const Header = () => {
  const cartQuantity = useSelector(
    (state: RootState) => state.cart.cartQuantity,
  );

  return (
    <header className="sticky top-0 z-10 flex justify-between items-center mx-2 bg-white py-4">
      <Link to={"/"}>
        <h1 className="text-primary text-xl md:text-2xl font-montserrat">
          Infinite Finds
        </h1>
      </Link>
      <nav>
        <ul className="flex flex-row gap-4">
          <li className={styles.listitem}>
            <Link to="/cart">
              <span>
                <AiOutlineShopping className="text-primary w-full h-6 md:h-9" />
              </span>
              {/* <span className="hidden md:inline text-base text-primary">
                Shopping cart
              </span> */}
              <span className={styles.overlay}>{cartQuantity}</span>
            </Link>
          </li>
          <li className={styles.listitem}></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
