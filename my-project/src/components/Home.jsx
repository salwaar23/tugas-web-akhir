import { Link } from "react-router-dom";

export default function Home(){
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
            <div className="grid grid-cols-2">
                <div>
                    <h1 className="ml-10 font-bold text-3xl text-white mt-60">Selamat Datang di SETEMA</h1>
                    <p className="ml-10 mt-3 font-medium text-white">Setema merupakan layanan berbasis digital yang
                        bertujuan untuk memberikan kemudahan administrasi
                        serta kemudahan akses informasi RT 005/014 Desa Nanjung Mekar Kec. Rancaekek Kab. Bandung
                    </p>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}