import { Link } from "react-router-dom";

export default function Program(){
    return(
        <div className="bg-blue-500 h-screen">
            <div className="bg-white w-screen flex flex-row">
            <Link to={`/`} className="my-7 ml-72 text-blue-500 font-bold hover:text-slate-300"><div>Beranda</div></Link>
                <Link to={`/Struktur`}><div className="ml-10 my-4 font-bold text-blue-500 hover:text-slate-300">Struktur<br /> Kepengurusan</div></Link>
                <Link to={`/Program`}><div className="ml-10 my-7 font-bold text-blue-500 hover:text-slate-300">Program</div></Link>
                <div className="ml-10 my-7 font-bold text-blue-500 hover:text-slate-300">Statistik</div>
                <Link to={`/Pengaduan`}><div className="ml-10 my-7 font-bold text-blue-500 hover:text-slate-300">Pengaduan</div></Link>
                <Link to={`/Administrasi`}><div className="ml-10 my-4 font-bold text-blue-500 hover:text-slate-300">Pengajuan<br />Administrasi</div></Link>
                <div className="ml-10 my-7 font-bold text-blue-500 hover:text-slate-300">Agenda</div>
                <Link to={`/Login`}><button className="bg-blue-500 rounded-md h-10 text-white w-20 ml-48 mt-5 font-bold hover:bg-blue-300">Admin</button></Link>
            </div>
            <div className="text-white text-center text-2xl font-mono mt-4 font-bold">
                DAFTAR PROGRAM KERJA
                <p className="text-xl">RT 005/RW 014 DESA NANJUNG MEKAR KEC. RANCAEKEK</p>
            </div>
            <div className="flex justify-center mt-5">
            <table className="border border-black bg-slate-300">
                <tr>
                    <th className="border border-black pl-1 pr-1">No.</th>
                    <th className="border border-black pl-7 pr-7">Kategori</th>
                    <th className="border border-black pl-20 pr-20">Program</th>
                    <th className="border border-black pl-10 pr-10">Penanggungjawab</th>
                    <th className="border border-black pl-10 pr-10">Keterangan</th>
                </tr>
            </table>
            </div>
            
            
        </div>
    )
}