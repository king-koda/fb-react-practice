import { Flex, Text } from "@chakra-ui/react";
import { CustomIcon } from "../icons/CustomIcon";
import { BsFillHouseFill } from "react-icons/bs";
import { IconType } from "react-icons";

type Props = {};

export const LeftSidebar = ({}: Props) => {
  const items: { name: string; icon: IconType; onClick?: () => void }[] = [
    {
      name: `${sessionStorage.getItem("firstName")} ${sessionStorage.getItem(
        "lastName"
      )}`,
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
    <>
      <Flex
        className="sidebar content"
        height="full"
        width="full"
        borderRight="4px solid black"
      >
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
                bgColor: "yellow",
                direction: "row",
                width: "full",
                height: "30",
                borderRadius: 20,
                alignItems: "center",
                onClick: () => {},
              }}
            >
              <Text marginLeft="2">{item.name}</Text>
            </CustomIcon>
          ))}
        </Flex>
      </Flex>
    </>
  );
};
