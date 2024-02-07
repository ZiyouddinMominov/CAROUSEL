// IMPORT START
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./index.module.css";
import bear from "./bear.jpg";
import bukhara from "./bukhara.jpeg";
import city from "./city.jpeg";
import forest from "./forest.jpg";
import mountain from "./mountain.jpeg";
import panda from "./panda.jpeg";
import sky from "./sky.jpeg";
import tiger from "./tiger.jpeg";
import wolf from "./wolf.jpg";
// IMPORT END
function Carusel() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.res}>
            <div className={styles.wrapperWidth}>
              <Carousel autoPlay infiniteLoop>
                <div className={styles.imageWrapper}>
                  <img src={bear} />
                </div>
                <div className={styles.imageWrapper}>
                  <img src={bukhara} />
                </div>
                <div className={styles.imageWrapper}>
                  <img src={city} />
                </div>
              </Carousel>
            </div>
            <div className={styles.wrapperWidth}>
              <Carousel autoPlay infiniteLoop>
                <div className={styles.imageWrapper}>
                  <img src={forest} />
                </div>
                <div className={styles.imageWrapper}>
                  <img src={mountain} />
                </div>
                <div className={styles.imageWrapper}>
                  <img src={panda} />
                </div>
              </Carousel>
            </div>
          </div>
          <div className={styles.wrapperWidth}>
            <Carousel autoPlay infiniteLoop>
              <div className={styles.imageWrapper}>
                <img src={sky} />
              </div>
              <div className={styles.imageWrapper}>
                <img src={tiger} />
              </div>
              <div className={styles.imageWrapper}>
                <img src={wolf} />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carusel;
