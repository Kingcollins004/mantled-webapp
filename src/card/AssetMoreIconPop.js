import React, { useState } from "react";
import { PopoverContent, PopoverBody, Text } from "@chakra-ui/react";

const AssetMoreIconPop = (onClose) => {
  const [displayProperty, setDisplayProperty] = useState(false)

  const handleOptionClick =() => {
    setDisplayProperty(true)
    return displayProperty
  }
  return (
    <PopoverContent
      color="white"
      bg="white"
      width="100%"
      borderColor="white.100"
    >
      <PopoverBody>
        <Text onClick={handleOptionClick} fontSize="14px" color="black">
          View Assets
        </Text>
        <Text fontSize="14px" color="black">
          Edit Assets
        </Text>
        <Text fontSize="14px" color="red">
          Delete Assets
        </Text>
      </PopoverBody>
    </PopoverContent>
  );
};

export default AssetMoreIconPop;
