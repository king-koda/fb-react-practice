import { Flex, FlexProps, Image, ImageProps } from '@chakra-ui/react';

type Props = FlexProps & {
  profileId: number;
  profileIcon: string;
  imageProps?: ImageProps;
};

export const ProfileIcon = ({
  profileIcon,
  profileId,
  imageProps,
  ...rest
}: Props) => {
  return (
    <Flex
      pos={'absolute'}
      boxSize={20}
      borderRadius={45}
      style={{ contain: 'strict' }}
      marginLeft={2}
      marginTop={2}
      border='dodgerblue 4px solid'
      key={`${profileId}-story-profile-icon-flex`}
      className='profile-icon'
      {...rest}
    >
      <Image
        src={profileIcon}
        key={`${profileId}-story-profile-icon-image`}
        {...imageProps}
      />
    </Flex>
  );
};
