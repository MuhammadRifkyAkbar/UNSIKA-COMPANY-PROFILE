import "./testimonials.css";
import React, { useRef } from "react";
import nextIcon from "../../assets/next-icon.png";
import backIcon from "../../assets/back-icon.png";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slide = useRef();
  let tx = 0;

  const handleSlideNext = () => {
    const totalSlides = slide.current.children.length;
    tx -= 100 / totalSlides;
    if (tx < -100 + 100 / totalSlides) {
      tx = 0;
    }
    slide.current.style.transform = `translateX(${tx}%)`;
  };

  const handleSlideBack = () => {
    const totalSlides = slide.current.children.length;
    if (tx < 0) {
      tx += 100 / totalSlides;
    }
    if (tx > 0) {
      tx = -100 + 100 / totalSlides;
    }
    slide.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={nextIcon} alt="" className="next-btn" onClick={handleSlideNext} />
      <img src={backIcon} alt="" className="back-btn" onClick={handleSlideBack} />
      <div className="slider">
        <ul ref={slide}>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user1} alt="" />
                <div className="userInfo-text">
                  <h3>Jane Doe</h3>
                  <span>Edusity, Indonesia</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                totam reprehenderit autem blanditiis dolores quae, maiores iste
                voluptas quos animi laudantium nesciunt? Atque eius id illum
                vero assumenda magnam voluptas, perferendis quae ex adipisci
                harum cupiditate explicabo! Laborum commodi provident quis
                consectetur, sint sequi iste in reprehenderit quae repudiandae
                ipsa.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user2} alt="" />
                <div className="userInfo-text">
                  <h3>Jane Doe</h3>
                  <span>Edusity, Indonesia</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                totam reprehenderit autem blanditiis dolores quae, maiores iste
                voluptas quos animi laudantium nesciunt? Atque eius id illum
                vero assumenda magnam voluptas, perferendis quae ex adipisci
                harum cupiditate explicabo! Laborum commodi provident quis
                consectetur, sint sequi iste in reprehenderit quae repudiandae
                ipsa.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user3} alt="" />
                <div className="userInfo-text">
                  <h3>Jane Doe</h3>
                  <span>Edusity, Indonesia</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                totam reprehenderit autem blanditiis dolores quae, maiores iste
                voluptas quos animi laudantium nesciunt? Atque eius id illum
                vero assumenda magnam voluptas, perferendis quae ex adipisci
                harum cupiditate explicabo! Laborum commodi provident quis
                consectetur, sint sequi iste in reprehenderit quae repudiandae
                ipsa.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user4} alt="" />
                <div className="userInfo-text">
                  <h3>Jane Doe</h3>
                  <span>Edusity, Indonesia</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                totam reprehenderit autem blanditiis dolores quae, maiores iste
                voluptas quos animi laudantium nesciunt? Atque eius id illum
                vero assumenda magnam voluptas, perferendis quae ex adipisci
                harum cupiditate explicabo! Laborum commodi provident quis
                consectetur, sint sequi iste in reprehenderit quae repudiandae
                ipsa.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;