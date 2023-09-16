import {lazy} from "react"
import { Routes, Route} from 'react-router-dom';
import { SharedLayout } from './SharedLayout';

const Mercury = lazy(() => import("../pages/Mercury/Mercury"));
const Earth = lazy(() => import("../pages/Earth/Earth"));
const Venus = lazy(() => import("../pages/Venus/Venus"));
const Mars = lazy(() => import("../pages/Mars/Mars"));
const Jupiter = lazy(() => import("../pages/Jupiter/Jupiter"));
const Saturn = lazy(() => import("../pages/Saturn/Saturn"));
const Uranus = lazy(() => import("../pages/Uranus/Uranus"));
const Neptune = lazy(() => import("../pages/Neptune/Neptune"));

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
