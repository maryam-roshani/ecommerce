import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import women from "../assets/women.jpg";
import men from "../assets/man.png";
import jewelery from "../assets/jewell.jpg";
import electronic from "../assets/electronic.jpg";

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        left: "10px",
        zIndex: 1,
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "white",
        "&:hover": { backgroundColor: "grey.200" },
      }}
    >
      <ArrowBackIos />
    </IconButton>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        right: "10px",
        zIndex: 1,
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "white",
        "&:hover": { backgroundColor: "grey.200" },
      }}
    >
      <ArrowForwardIos />
    </IconButton>
  );
};

const Hero: React.FC = () => {
  const [menu, setMenu] = useState("shop");

  const slides = [
    { id: 1, path: "/men", img: men, label: "men" },
    { id: 2, path: "/women", img: women, label: "women" },
    { id: 3, path: "/jewelery", img: jewelery, label: "jewelery" },
    { id: 4, path: "/electronics", img: electronic, label: "electronics" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Box sx={{ maxWidth: "100%", overflow: "hidden" }}>
      <Slider {...settings}>
        {slides.map((slide) => (
          <Box key={slide.id} sx={{ textAlign: "center" }}>
            <Link to={slide.path} onClick={() => setMenu(slide.label)}>
              <img
                src={slide.img}
                alt={slide.label}
                style={{
                  width: "100%",
                  maxHeight: "500px",
                  objectFit: "contain",
                  borderRadius: "12px",
                }}
              />
            </Link>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Hero;

