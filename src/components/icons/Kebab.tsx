import { IconContext } from 'react-icons';
import { GoKebabHorizontal } from 'react-icons/go';

export const Kebab = (style: IconContext['style']) => {
  return (
    <IconContext.Provider
      value={{
        style: {
          fontSize: '4xl',
          color: 'gray.500',
          ...style,
          marginTop: '1px',
        },
      }}
    >
      <div>
        <GoKebabHorizontal />
      </div>
    </IconContext.Provider>
  );
};
