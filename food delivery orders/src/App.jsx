import { BrowserRouter, Routes, Route } from "react-router-dom";

const Orders = () => <h1>Orders Page</h1>;
const Activities = () => <h1>Activities Page</h1>;
const Courses = () => <h1>Courses Page</h1>;
const Events = () => <h1>Events Page</h1>;
const Stats = () => <h1>Stats Page</h1>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/filter" element={<Orders />} />
        <Route path="/orders/stats" element={<Stats />} />

        <Route path="/activities" element={<Activities />} />
        <Route path="/activities/filter" element={<Activities />} />
        <Route path="/activities/stats" element={<Stats />} />

        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/filter" element={<Courses />} />
        <Route path="/courses/stats" element={<Stats />} />

        <Route path="/events" element={<Events />} />
        <Route path="/events/filter" element={<Events />} />
        <Route path="/events/stats" element={<Stats />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;