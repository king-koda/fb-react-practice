import { Flex, FlexProps, Icon, IconProps } from "@chakra-ui/react";
import { IconType } from "react-icons";

export type CustomIconProps = IconProps & {
  icon: IconType;
  flexProps?: FlexProps;
  underlineOnSelect?: boolean;
  isSelected?: boolean;
};

export const CustomIcon = ({
  icon,
  flexProps,
  children,
  underlineOnSelect,
  isSelected,
  ...rest
}: CustomIconProps) => {
  return (
    <Flex
      _hover={
        flexProps?.onClick
          ? { bgColor: "gray.600", borderRadius: 90, cursor: "pointer" }
          : {}
      }
      borderRadius={"90"}
      pos="relative"
      {...flexProps}
    >
      <Icon as={icon} fontSize="4xl" color="gray.500" {...rest}></Icon>
      {children}
      {underlineOnSelect && isSelected && (
        <Flex
          height="2px"
          marginTop={"10px"}
          bgColor="blue"
          width={"100%"}
          top="100%"
          pos={"absolute"}
        />
      )}
    </Flex>
  );
};
