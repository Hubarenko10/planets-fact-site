import { Routes, Route} from 'react-router-dom';
import { Mercury } from 'pages/Mercury/Mercury';
import { Earth } from 'pages/Earth/Earth';
import { Venus } from 'pages/Venus/Venus';
import { Mars } from 'pages/Mars/Mars';
import { Jupiter } from 'pages/Jupiter/Jupiter';
import { Saturn } from 'pages/Saturn/Saturn';
import { Uranus } from 'pages/Uranus/Uranus';
import { Neptune } from 'pages/Neptune/Neptune';
import { SharedLayout } from './SharedLayout';



export const App = () => {
  return (
    <div>
      

      <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Earth />} />
        <Route path="/mercury" element={<Mercury />} />
        <Route path="/venus" element={<Venus />} />
        <Route path="/earth" element={<Earth />} />
        <Route path="/mars" element={<Mars />} />
        <Route path="/jupiter" element={<Jupiter />} />
        <Route path="/saturn" element={<Saturn />} />
        <Route path="/uranus" element={<Uranus />} />
        <Route path="/neptune" element={<Neptune />} />
      </Route>
      </Routes>
      
    </div>
  );
};
