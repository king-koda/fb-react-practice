import { Image, ImageProps } from "@chakra-ui/react";

type Props = ImageProps & {
  profileId: number;
  imageSource: string;
  shouldZoom?: boolean;
};

export const StoryImagePreview = ({
  profileId,
  imageSource,
  shouldZoom = true,
  ...rest
}: Props) => {
  return (
    <Image
      src={imageSource}
      key={`${profileId}-story-preview`}
      _hover={{
        transform: !shouldZoom ? undefined : "scale(1.02)",
        cursor: "pointer",
      }}
      overflow={"visible"}
      zIndex={-1}
      {...rest}
    />
  );
};
