import { Flex, Text } from "@chakra-ui/react";
import { CustomIcon } from "@/components/icons/CustomIcon";
import { BsFillHouseFill } from "react-icons/bs";
import { IconType } from "react-icons";

export const SidebarNav = () => {
  const items: { name: string; icon: IconType; onClick?: () => void }[] = [
    {
      name: `${sessionStorage.getItem("firstName")}`,
      icon: BsFillHouseFill,
    },
    {
      name: `Friends`,
      icon: BsFillHouseFill,
    },
    {
      name: `Memories`,
      icon: BsFillHouseFill,
    },
    {
      name: `Saved`,
      icon: BsFillHouseFill,
    },
    {
      name: `Groups`,
      icon: BsFillHouseFill,
    },
    {
      name: `Video`,
      icon: BsFillHouseFill,
    },
    {
      name: `Marketplace`,
      icon: BsFillHouseFill,
    },
  ];
  return (
    <Flex
      direction={"column"}
      gap={"12px !important"}
      width="full"
      overflow={"hidden"}
    >
      {items.map((item) => (
        <CustomIcon
          icon={item.icon}
          fontSize={"xl"}
          flexProps={{
            paddingX: "3",
            paddingY: "6",
            direction: "row",
            width: "full",
            height: "30",
            borderRadius: 20,
            alignItems: "center",
            className: "secondary",
          }}
          onClick={() => {}}
        >
          <Text marginLeft="2">{item.name}</Text>
        </CustomIcon>
      ))}
    </Flex>
  );
};
