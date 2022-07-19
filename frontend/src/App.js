import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="addUser" element={<AddUser />} />
          <Route path="update/:id" element={<UpdateUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
