import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Slider2 = () => {
  const slideContent = [
    {
      title: "Its not as easy as 1-2-3.",
      text:
        "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).",
    },
    {
      title: "Old habits are hard to break.",
      text:
        "And bad behavior dies hard. Fortunately, we give you great, science-backed techniques to use.",
    },
    {
      title: "You and your motivation don't have a long-term relationship.",
      text:
        "Luckily, we can proactively prepare you for the marathon, not just the race. Effective memorable exercises will help you stick to your goals.",
    },
    {
      title: "Books just don't offer practical solutions.",
      text:
      "Books can inspire, but practical solutions are born through real-world application. Knowledge without action is like a book left unread.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlide < slideContent.length - 1) {
        setCurrentSlide(currentSlide + 1);
        setSliderValue(currentSlide + 1);
      }
    }, 5000); // Change slides every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  const handleSliderChange = (newValue) => {
    setCurrentSlide(newValue);
    setSliderValue(newValue);
  };

  return (
    <Flex width="100%" alignItems="center">
      <Box width="35%" p="4">
        <Slider
          aria-label="slider-ex-6"
          min={0}
          max={slideContent.length - 1}
          step={1}
          value={sliderValue}
          onChange={handleSliderChange}
          orientation="vertical"
          height="300px"
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb boxSize={6}>
            {sliderValue}
          </SliderThumb>
        </Slider>
      </Box>

      <Flex flexDirection="column" flex="1">
        <Box
          className="slide"
          style={{ marginTop: "60px", opacity: currentSlide === 0 ? 1 : 0.5 }}
        >
          <Text color="black" fontSize="20px" fontWeight="bold" mb="13px">
            {slideContent[0].title}
          </Text>
          <Text>{slideContent[0].text}</Text>
        </Box>

        <Box
          className="slide"
          style={{ marginTop: "60px", opacity: currentSlide === 1 ? 1 : 0.5 }}
        >
          <Text color="black" fontSize="20px" fontWeight="bold" mb="13px">
            {slideContent[1].title}
          </Text>
          <Text>{slideContent[1].text}</Text>
        </Box>

        <Box
          className="slide"
          style={{ marginTop: "60px", opacity: currentSlide === 2 ? 1 : 0.5 }}
        >
          <Text color="black" fontSize="20px" fontWeight="bold" mb="13px">
            {slideContent[2].title}
          </Text>
          <Text>{slideContent[2].text}</Text>
        </Box>

        <Box
          className="slide"
          style={{ marginTop: "60px", opacity: currentSlide === 3 ? 1 : 0.5 }}
        >
          <Text color="black" fontSize="20px" fontWeight="bold" mb="13px">
            {slideContent[3].title}
          </Text>
          <Text>{slideContent[3].text}</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Slider2;
