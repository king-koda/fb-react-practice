import { NewPost } from "@/components/post/NewPost";
import { Stories } from "@/components/stories/Stories";
import { VStack } from "@chakra-ui/react";

type Props = {
  title: string;
};

export const Home = ({ title }: Props) => {
  //TODO: remove after done
  sessionStorage.setItem("userId", "1");
  sessionStorage.setItem("firstName", "Christian");
  sessionStorage.setItem("lastName", "Radei");

  return (
    <VStack
      height="4000px"
      flex="auto"
      width={"full"}
      className="main content"
      gap={"12px !important"}
    >
      <Stories />

      <NewPost />
      {/* <Feed />  */}
    </VStack>
  );
};
