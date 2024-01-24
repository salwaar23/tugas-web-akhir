import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Administrasi = () => {
    const[nama, setnama] = useState("");
    const[jk, setjk] = useState("");
    const[keperluan, setkeperluan] = useState("");
    const [alamat, setalamat] = useState("");
    

  const saveSurat = async (e) =>{
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/Surat', {
        nama,
        jk,
        keperluan,
        alamat
      })
      alert("Permintaan berhasil!")
    } catch (error) {
      console.log(error)
    }
  };

    return(
        <div className="bg-blue-500 h-screen">
            <div className="bg-white w-screen flex flex-row">
            <Link to={`/`} className="my-7 ml-72 text-blue-500 font-bold hover:text-slate-300"><div>Beranda</div></Link>
                <Link to={`/Struktur`}><div className="ml-10 my-4 font-bold text-blue-500 hover:text-slate-300">Struktur<br /> Kepengurusan</div></Link>
                <Link to={`/Program`}><div className="ml-10 my-7 font-bold text-blue-500 hover:text-slate-300">Program</div></Link>
                <Link to={`/Statistik`}><div className="ml-10 my-7 font-bold text-blue-500 hover:text-slate-300">Statistik</div></Link>
                <Link to={`/Pengaduan`}><div className="ml-10 my-7 font-bold text-blue-500 hover:text-slate-300">Pengaduan</div></Link>
                <Link to={`/Administrasi`}><div className="ml-10 my-4 font-bold text-blue-500 hover:text-slate-300">Pengajuan<br />Administrasi</div></Link>
                <Link to={`/Agendaa`}><div className="ml-10 my-7 font-bold text-blue-500 hover:text-slate-300">Agenda</div></Link>
                <Link to={`/Login`}><button className="bg-blue-500 rounded-md h-10 text-white w-20 ml-48 mt-5 font-bold hover:bg-blue-300">Admin</button></Link>
            </div>
            <div className="container mx-auto">
          <div class="flex flex-wrap justify-center">
            <div className="w-96 bg-white shadow-md border border-gray-200 rounded-lg sm:p-6 lg:p-8 mt-20">
                <h1 class="text-2xl font-bold text-center text-blue-600">Pengajuan Surat Pengantar</h1>
                <div className="mt-4 flex justify-center">
                  <form onSubmit={saveSurat}>
                    <label className="">Nama</label>
                    <div><input
                      type="text"
                      placeholder="Nama"
                      value={nama}
                      onChange={(e) => setnama(e.target.value)}
                      class="w-80 bg-slate-200 rounded-md hover:bg-slate-100 p-1"
                    /></div>
                    <label>Jenis Kelamin</label>
                    <div><input
                      type="text"
                      placeholder="Jenis Kelamin"
                      value={jk}
                      onChange={(e) => setjk(e.target.value)}
                      class="w-80 bg-slate-200 rounded-md hover:bg-slate-100 p-1"
                    /></div>
                    <label>Alamat</label>
                    <div><input
                      type="text"
                      placeholder="Alamat"
                      value={alamat}
                      onChange={(e) => setalamat(e.target.value)}
                      class="w-80 bg-slate-200 rounded-md hover:bg-slate-100 p-1"
                    /></div>
                    <label>Keperluan</label>
                    <div><input
                      type="text"
                      placeholder="Keperluan"
                      value={keperluan}
                      onChange={(e) => setkeperluan(e.target.value)}
                      class="w-80 bg-slate-200 rounded-md hover:bg-slate-100 p-1"
                    /></div>
                    <div className="flex justify-center mt-7 space-x-5">
                      <button type="submit" className="rounded-lg bg-blue-500 hover:bg-slate-300 px-5 py-2 text-white">Submit</button>
                    </div>
                  </form>
                </div> 
            </div>
          </div>
        </div>
        </div>
    );
};

export default Administrasi;