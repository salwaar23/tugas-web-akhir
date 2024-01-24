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
import EditKK from "./components/Dashboards/EditKK";
import Sirkulasi from "./components/Dashboards/Sirkulasi";
import Lahir from "./components/Dashboards/Lahir";
import AddLahir from "./components/Dashboards/AddLahir";
import EditLahir from "./components/Dashboards/EditLahir";
import Kematian from "./components/Dashboards/Kematian";
import AddKematian from "./components/Dashboards/AddKematian";
import EditKematian from "./components/Dashboards/EditKematian";
import Datang from "./components/Dashboards/Datang";
import AddDatang from "./components/Dashboards/AddDatang";
import EditDatang from "./components/Dashboards/EditDatang";
import Pindah from "./components/Dashboards/Pindah";
import AddPindah from "./components/Dashboards/AddPindah";
import EditPindah from "./components/Dashboards/EditPindah";
import Dokumen from "./components/Dashboards/Dokumen";
import Pengaduan from "./components/Pengaduan";
import Ppengaduan from "./components/Dashboards/PengaduanWarga";
import Surat from "./components/Dashboards/Surat";
import Administrasi from "./components/Administrasi";
import Struktur from "./components/Struktur";
import Program from "./components/Program";
import Agenda from "./components/Dashboards/Agenda";
import AddAgenda from "./components/Dashboards/AddAgenda";
import EditAgenda from "./components/Dashboards/EditAgenda";
import Agendaa from "./components/Agendaa";
import Statistik from "./components/Statistik";

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
        <Route path="/EditWarga/:id" element={<EditWarga/>}/>
        <Route path="/KK" element={<KK/>}/>
        <Route path="/AddKK" element={<AddKK/>}/>
        <Route path="/EditKK/:id" element={<EditKK/>}/>
        <Route path="/Sirkulasi" element={<Sirkulasi/>}/>
        <Route path="/Lahir" element={<Lahir/>}/>
        <Route path="/AddLahir" element={<AddLahir/>}/>
        <Route path="/EditLahir/:id" element={<EditLahir/>}/>
        <Route path="/Kematian" element={<Kematian/>}/>
        <Route path="/AddKematian" element={<AddKematian/>}/>
        <Route path="/EditKematian/:id" element={<EditKematian/>}/>
        <Route path="/Datang" element={<Datang/>}/>
        <Route path="/AddDatang" element={<AddDatang/>}/>
        <Route path="/EditDatang/:id" element={<EditDatang/>}/>
        <Route path="/Pindah" element={<Pindah/>}/>
        <Route path="/AddPindah" element={<AddPindah/>}/>
        <Route path="/EditPindah/:id" element={<EditPindah/>}/>
        <Route path="/Dokumen" element={<Dokumen/>}/>
        <Route path="/Pengaduan" element={<Pengaduan/>}/>
        <Route path="/ppengaduan" element={<Ppengaduan/>}/>
        <Route path="/surat" element={<Surat/>}/>
        <Route path="/Administrasi" element={<Administrasi/>}/>
        <Route path="/Struktur" element={<Struktur/>}/>
        <Route path="/Program" element={<Program/>}/>
        <Route path="/Agenda" element={<Agenda/>}/>
        <Route path="/AddAgenda" element={<AddAgenda/>}/>
        <Route path="/EditAgenda/:id" element={<EditAgenda/>}/>
        <Route path="/Agendaa" element={<Agendaa/>}/>
        <Route path="/Statistik" element={<Statistik/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;