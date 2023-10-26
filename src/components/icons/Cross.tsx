import { IconContext } from 'react-icons';
import { RxCross2 } from 'react-icons/rx';

export const Cross = (style: IconContext['style']) => {
  return (
    <IconContext.Provider
      value={{
        style: { fontSize: '4xl', color: 'gray.500', ...style },
      }}
    >
      <div>
        <RxCross2 />
      </div>
    </IconContext.Provider>
  );
};
