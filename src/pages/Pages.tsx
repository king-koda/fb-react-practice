import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Layout } from './Layout';

export type PageTypes =
  | 'HOME'
  | 'FRIENDS'
  | 'VIDEOS'
  | 'MARKETPLACE'
  | 'GROUPS';

export enum PageRoutes {
  HOME = '/',
  FRIENDS = '/friends',
  VIDEOS = '/videos',
  MARKETPLACE = '/marketplace',
  GROUPS = '/groups',
}

export const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home title='home' />} />
          <Route path='/friends' element={<Home title='friends' />} />
          <Route path='/videos' element={<Home title='videos' />} />
          <Route path='/marketplace' element={<Home title='marketplace' />} />
          <Route path='/groups' element={<Home title='groups' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
