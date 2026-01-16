import { FC } from "react";
import scss from "./Delicious.module.scss";
import Image from "next/image";
const Delicious: FC = () => {
  return (
    <section className={scss.Delicious}>
      <div className="container">
        <div className={scss.title}>
          <div className={scss.content}>
            <Image src="/Frame 9.svg" alt="logo" width={60} height={30} />
            <h2 className={scss.title}>Main Menu</h2>
            <Image src="/Frame 10.svg" alt="logo1" width={60} height={30} />
          </div>
          <h1>Exceptional Quality. Delightfully Delicious</h1>
        </div>
        <div className={scss.menu_block}>
          <div className={scss.menu}>
            <h2>Desserts</h2>
            <h2>Hot Drinks</h2>
            <h2>Cold Drinks</h2>
            <h2>National Foods</h2>
            <h2>Eastern cuisine</h2>
            <h2>Fast foods</h2>
          </div>
          <div className={scss.Allmenu}>
            <div className={scss.box_menu}>
              <div className={scss.box_menu1}>
                <h3>Beer Brewery</h3>
                <p>$34</p>
              </div>
              <p>
                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att
                endomatisk. Geogehet pultvätta, om pneumativ.
              </p>
              <button>Order Now</button>
            </div>
            <div className={scss.box_menu}>
              <div className={scss.box_menu1}>
                <h3>Beer Brewery</h3>
                <p>$34</p>
              </div>
              <p>
                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att
                endomatisk. Geogehet pultvätta, om pneumativ.
              </p>
              <button>Order Now</button>
            </div>
            <div className={scss.box_menu}>
              <div className={scss.box_menu1}>
                <h3>Beer Brewery</h3>
                <p>$34</p>
              </div>
              <p>
                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att
                endomatisk. Geogehet pultvätta, om pneumativ.
              </p>
              <button>Order Now</button>
            </div>
            <div className={scss.box_menu}>
              <div className={scss.box_menu1}>
                <h3>Beer Brewery</h3>
                <p>$34</p>
              </div>
              <p>
                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att
                endomatisk. Geogehet pultvätta, om pneumativ.
              </p>
              <button>Order Now</button>
            </div>
            <div className={scss.box_menu}>
              <div className={scss.box_menu1}>
                <h3>Beer Brewery</h3>
                <p>$34</p>
              </div>
              <p>
                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att
                endomatisk. Geogehet pultvätta, om pneumativ.
              </p>
              <button>Order Now</button>
            </div>
            <div className={scss.box_menu}>
              <div className={scss.box_menu1}>
                <h3>Beer Brewery</h3>
                <p>$34</p>
              </div>
              <p>
                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att
                endomatisk. Geogehet pultvätta, om pneumativ.
              </p>
              <button>Order Now</button>
            </div>
            <button className={scss.buttonOutline}>View Full menu</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delicious;
