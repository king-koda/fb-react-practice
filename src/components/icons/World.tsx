import { IconContext } from 'react-icons';
import { BiWorld } from 'react-icons/bi';

export const World = (style: IconContext['style']) => {
  return (
    <IconContext.Provider
      value={{
        style: { fontSize: '4xl', color: 'gray.500', ...style },
      }}
    >
      <div>
        <BiWorld />
      </div>
    </IconContext.Provider>
  );
};
