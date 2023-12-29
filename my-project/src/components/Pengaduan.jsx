import { Link } from "react-router-dom";

export default function Pengaduan(){
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
            <div className="container mx-auto">
          <div class="flex flex-wrap justify-center">
            <div className="w-96 bg-white shadow-md border border-gray-200 rounded-lg sm:p-6 lg:p-8 mt-20">
                <h1 class="text-2xl font-bold text-center text-blue-600">Pengaduan Warga</h1>
                <div className="mt-4 flex justify-center">
                  <form>
                    <label className="">Nama</label>
                    <div><input
                      type="text"
                      placeholder="Nama"
                      class="w-80 bg-slate-200 rounded-md hover:bg-slate-100 p-1"
                    /></div>
                    <label>No. WhatsApp</label>
                    <div><input
                      type="text"
                      placeholder="password"
                      class="w-80 bg-slate-200 rounded-md hover:bg-slate-100 p-1"
                    /></div>
                    <label>Kritik/Saran/Pengaduan</label>
                    <div><input
                      type="text"
                      placeholder="Kritik/Saran/Pengaduan"
                      class="w-80 bg-slate-200 rounded-md hover:bg-slate-100 p-1"
                    /></div>
                    <div className="flex justify-center mt-7 space-x-5">
                      <Link to={`/Dashboard`}><button type="submit" className="rounded-lg bg-blue-500 hover:bg-slate-300 px-5 py-2 text-white">Submit</button></Link>
                    </div>
                  </form>
                </div> 
            </div>
          </div>
        </div>
        </div>
    )
}