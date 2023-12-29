import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

export default function Struktur(){
    return(
        <div className="bg-blue-500 h-full w-screen">
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
            <div className="text-white font-mono font-bold text-center text-2xl mt-4">Struktur Kepengurusan RT 005</div>
            <div className="flex justify-center mt-5">
                <div className="bg-white w-52 h-52 text-center">
                    <p className="pt-2 font-bold">Ketua RT</p>
                    <p className="text-3xl ml-40 mt-32"><FaWhatsapp /></p>
                </div>
                <div className="bg-white w-52 h-52 text-center ml-5">
                    <p className="pt-2 font-bold">Wakil Ketua RT</p>
                    <p className="text-3xl ml-40 mt-32"><FaWhatsapp /></p>
                </div>
            </div>
            <div className="flex justify-center mt-5">
                <div className="bg-white w-52 h-52 text-center">
                    <p className="pt-2 font-bold">Sekretaris</p>
                    <p className="text-3xl ml-40 mt-32"><FaWhatsapp /></p>
                </div>
                <div className="bg-white w-52 h-52 text-center ml-5">
                    <p className="pt-2 font-bold">Bendahara</p>
                    <p className="text-3xl ml-40 mt-32"><FaWhatsapp /></p>
                </div>
            </div>
            <div className="flex justify-center mt-5">
                <div className="bg-white w-52 h-52 text-center">
                    <p className="pt-2 font-bold">Sie Keamanan</p>
                    <p className="text-3xl ml-40 mt-32"><FaWhatsapp /></p>
                </div>
                <div className="bg-white w-52 h-52 text-center ml-5">
                    <p className="pt-2 font-bold">Sie Olahraga</p>
                    <p className="text-3xl ml-40 mt-32"><FaWhatsapp /></p>
                </div>
            </div>
            
        </div>
    )
}