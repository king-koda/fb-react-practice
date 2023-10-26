import { IconContext } from 'react-icons';
import { BiShare } from 'react-icons/bi';

export const Share = (style: IconContext['style']) => {
  return (
    <IconContext.Provider
      value={{
        style: { fontSize: '4xl', color: 'gray.500', ...style },
      }}
    >
      <div>
        <BiShare />
      </div>
    </IconContext.Provider>
  );
};
