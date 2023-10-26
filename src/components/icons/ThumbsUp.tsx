import { IconContext } from 'react-icons';
import { FiThumbsUp } from 'react-icons/fi';

export const ThumbsUp = (style: IconContext['style']) => {
  return (
    <IconContext.Provider
      value={{
        style: { fontSize: '4xl', color: 'gray.500', ...style },
      }}
    >
      <div>
        <FiThumbsUp />
      </div>
    </IconContext.Provider>
  );
};
