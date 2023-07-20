import { Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Public from "./component/Public";
import Login from "./features/auth/Login";
import DashLayout from "./component/DashLayout";
import Welcome from "./features/auth/Welcome";
import UsersList from "./features/users/UsersList";
import NotesList from "./features/notes/NotesList";
 
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Public />} />
      <Route path="login" element={<Login />} />

      <Route path="dash" element={<DashLayout />} >
        <Route index element={ <Welcome />} /> 
        <Route path="notes">
          <Route index element={<NotesList/>}/>
        </Route>
         <Route path="users">
          <Route index element={<UsersList/>}/>
        </Route>
      </Route> {/*End of Dash */}
      
    </Routes>
  );
}

export default App;
