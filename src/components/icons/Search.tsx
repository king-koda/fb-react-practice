import { IconContext } from 'react-icons';
import { BiSearch } from 'react-icons/bi';

export const Search = (style: IconContext['style']) => {
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
        <BiSearch />
      </div>
    </IconContext.Provider>
  );
};
