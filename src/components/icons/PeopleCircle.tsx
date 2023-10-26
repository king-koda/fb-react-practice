import { IconContext } from 'react-icons';
import { IoPeopleCircleOutline } from 'react-icons/io5';

export const PeopleCircle = (style: IconContext['style']) => {
  return (
    <IconContext.Provider
      value={{
        style: { fontSize: '4xl', color: 'gray.500', ...style },
      }}
    >
      <div>
        <IoPeopleCircleOutline />
      </div>
    </IconContext.Provider>
  );
};
