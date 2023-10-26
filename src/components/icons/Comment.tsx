import { IconContext } from 'react-icons';
import { MdOutlineModeComment } from 'react-icons/md';

export const Comment = (style: IconContext['style']) => {
  return (
    <IconContext.Provider
      value={{
        style: { fontSize: '4xl', color: 'gray.500', ...style },
      }}
    >
      <div>
        <MdOutlineModeComment />
      </div>
    </IconContext.Provider>
  );
};
