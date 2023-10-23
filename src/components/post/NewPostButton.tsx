import { Flex } from "@chakra-ui/react";
import { CustomIcon, CustomIconProps } from "../icons/CustomIcon";

export const NewPostButton = (props: CustomIconProps) => {
  return (
    <Flex width="33.33%" justifyContent={"center"}>
      <CustomIcon
        flexProps={{ alignSelf: "center", padding: 4 }}
        color="gray"
        {...props}
      />
    </Flex>
  );
};
