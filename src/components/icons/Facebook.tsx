import { IconContext } from 'react-icons';
import { BsFacebook } from 'react-icons/bs';

export const Facebook = (style: IconContext['style']) => {
  return (
    <IconContext.Provider
      value={{
        style: { fontSize: '4xl', color: 'gray.500', ...style },
      }}
    >
      <div>
        <BsFacebook />
      </div>
    </IconContext.Provider>
  );
};
