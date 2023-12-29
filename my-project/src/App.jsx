import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/Home";
import Dashboard from "./components/Dashboards/Dashboard";
import KelolaData from "./components/Dashboards/Keloladata";
import Warga from "./components/Dashboards/Warga";
import AddWarga from "./components/Dashboards/AddWarga";
import EditWarga from "./components/Dashboards/EditWarga";
import KK from "./components/Dashboards/KK";
import AddKK from "./components/Dashboards/AddKK";
import Sirkulasi from "./components/Dashboards/Sirkulasi";
import Lahir from "./components/Dashboards/Lahir";
import AddLahir from "./components/Dashboards/AddLahir";
import Kematian from "./components/Dashboards/Kematian";
import AddKematian from "./components/Dashboards/AddKematian";
import Datang from "./components/Dashboards/Datang";
import AddDatang from "./components/Dashboards/AddDatang";
import Pindah from "./components/Dashboards/Pindah";
import AddPindah from "./components/Dashboards/AddPindah";
import Pengaduan from "./components/Pengaduan";
import Administrasi from "./components/Administrasi";
import Struktur from "./components/Struktur";
import Program from "./components/Program";

function App() {
  return(
    <BrowserRouter>
    <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/KelolaData" element={<KelolaData/>}/>
        <Route path="/Warga" element={<Warga/>}/>
        <Route path="/AddWarga" element={<AddWarga/>}/>
        <Route path="/editWarga" element={<EditWarga/>}/>
        <Route path="/KK" element={<KK/>}/>
        <Route path="/AddKK" element={<AddKK/>}/>
        <Route path="/Sirkulasi" element={<Sirkulasi/>}/>
        <Route path="/Lahir" element={<Lahir/>}/>
        <Route path="/AddLahir" element={<AddLahir/>}/>
        <Route path="/Kematian" element={<Kematian/>}/>
        <Route path="/AddKematian" element={<AddKematian/>}/>
        <Route path="/Datang" element={<Datang/>}/>
        <Route path="/AddDatang" element={<AddDatang/>}/>
        <Route path="/Pindah" element={<Pindah/>}/>
        <Route path="/AddPindah" element={<AddPindah/>}/>
        <Route path="/Pengaduan" element={<Pengaduan/>}/>
        <Route path="/Administrasi" element={<Administrasi/>}/>
        <Route path="/Struktur" element={<Struktur/>}/>
        <Route path="/Program" element={<Program/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;