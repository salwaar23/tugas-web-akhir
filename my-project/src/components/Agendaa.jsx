import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Agenda = () => {
    const [agenda, setAgenda] = useState([]);

    useEffect(() =>{
        getAgenda();
    }, []);

    const getAgenda = async () => {
        const response = await axios.get("http://localhost:5000/Agenda");
        setAgenda(response.data);
    };

    return(
        <div className="bg-blue-500 h-screen w-full">
            <div className="bg-white flex">
                <Link to={`/`} className="my-7 ml-72 text-blue-500 font-bold hover:text-slate-300"><div>Beranda</div></Link>
                <Link to={`/Struktur`}><div className="ml-10 my-4 font-bold text-blue-500 hover:text-slate-300">Struktur<br /> Kepengurusan</div></Link>
                <Link to={`/Program`}><div className="ml-10 my-7 font-bold text-blue-500 hover:text-slate-300">Program</div></Link>
                <Link to={`/Statistik`}><div className="ml-10 my-7 font-bold text-blue-500 hover:text-slate-300">Statistik</div></Link>
                <Link to={`/Pengaduan`}><div className="ml-10 my-7 font-bold text-blue-500 hover:text-slate-300">Pengaduan</div></Link>
                <Link to={`/Administrasi`}><div className="ml-10 my-4 font-bold text-blue-500 hover:text-slate-300">Pengajuan<br />Administrasi</div></Link>
                <Link to={`/Agendaa`}><div className="ml-10 my-7 font-bold text-blue-500 hover:text-slate-300">Agenda</div></Link>
                <Link to={`/Login`}><button className="bg-blue-500 rounded-md h-10 text-white w-20 ml-48 mt-5 font-bold hover:bg-blue-300">Admin</button></Link>
            </div>
            <div className="text-white text-center text-2xl font-mono mt-4 font-bold">
                Agenda Kegiatan
                <p className="text-xl">RT 005/RW 014 DESA NANJUNG MEKAR KEC. RANCAEKEK</p>
            </div>
            <div className="flex justify-center">
                <table className="border border-black bg-slate-300 mt-5">
                    <thead className="">
                        <tr>
                            <th className="border border-black pl-2 pr-2">No.</th>
                            <th className="border border-black text-center px-14">Kegiatan</th>
                            <th className="border border-black text-center px-7">Tanggal</th>
                            <th className="border border-black text-venter px-20">Tempat</th>
                        </tr>
                    </thead> 
                    <tbody className="bg-white">
                    {agenda.map((agenda, index) => (
                        <tr key={agenda.id}>
                            <td className="border border-black text-sm text-center pt-2">{index + 1}</td>
                            <td className="border border-black text-sm text-center">{agenda.nama_kegiatan}</td>
                            <td className="border border-black text-sm text-center">{agenda.tgl}</td>
                            <td className="border border-black text-sm text-center">{agenda.tempat}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>    
            </div>
        </div>
    );
};

export default Agenda;