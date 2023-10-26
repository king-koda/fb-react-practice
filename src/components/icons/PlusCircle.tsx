import { IconContext } from 'react-icons';
import { AiOutlinePlusCircle } from 'react-icons/ai';

export const PlusCircle = (style: IconContext['style']) => {
  return (
    <IconContext.Provider
      value={{
        style: { fontSize: '4xl', color: 'gray.500', ...style },
      }}
    >
      <div>
        <AiOutlinePlusCircle />
      </div>
    </IconContext.Provider>
  );
};
