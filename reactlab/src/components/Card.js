import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (<VStack
      spacing={4}
      align="start"
      p={0}
      borderRadius="md"
      w="500px"
      h="400px"
      bg="white"
      color="black"
      _hover={{ boxShadow: "lg", transform: "scale(1.02)", transition: "0.2s" }}
    >
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={title}
          borderRadius="md"
          objectFit="cover"
          w="100%"
          h="250px"
        />
      )}
      <Heading size="md" pl={4}>{title}</Heading>
      <Text pl={4} color="gray.500">{description}</Text>
      <HStack spacing={2} pl={4}>
        <Text color="#000000ff" fontWeight="bold">See more</Text>
        <FontAwesomeIcon icon={faArrowRight} color="#000000ff" size="1x" />
      </HStack>
    </VStack>);
};

export default Card;
