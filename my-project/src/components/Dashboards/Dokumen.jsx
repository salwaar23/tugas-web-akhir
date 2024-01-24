import { Link } from "react-router-dom";

import { LuSubtitles } from "react-icons/lu";
import { LuScrollText } from "react-icons/lu";
import { LuFileSignature } from "react-icons/lu";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { FcStatistics } from "react-icons/fc";
import { FaMailBulk } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

function Dokumen(){
    return(
        <div className="container scroll-mx-0">
        <div className="bg-white h-screen">
            <div className="inline-flex gap-x-0">
            <div className="bg-blue-500 h-screen w-[265px]">
                    <div className="text-white text-2xl font-bold flex justify-center mt-4">
                        SETEMA
                    </div>
                    <div className="rounded-md bg-slate-200 w-24 text-center ml-20 mt-4">Admin1
                    </div>
                    <div className="">
                        <Link to={`/Dashboard`}>
                            <div className="grid grid-cols-2 gap-x-0 mt-10">
                                <div className="ml-5 mt-1 text-white text-xl"><MdOutlineSpaceDashboard /></div>
                                <div className="-ml-20 pl-5 text-white text-xl">Dashboard</div>
                            </div>
                        </Link>
                        <Link to={`/KelolaData`}>
                            <div className="grid grid-cols-2 gap-x-0 mt-5">
                                <div className="ml-5 text-white text-xl mt-1"><FaDatabase /></div>
                                <div className="-ml-20 pl-5 text-white text-xl">Kelola Data</div>
                            </div>
                        </Link>
                        <Link to={`/Sirkulasi`}>
                            <div className="grid grid-cols-2 mt-5">
                                <div className="mt-1 ml-5 text-white text-xl"><FcStatistics /></div>
                                <div className="-ml-20 pl-5 text-white text-xl">Sirkulasi Penduduk</div>
                            </div>
                        </Link>
                        <Link to={`/Dokumen`}><div className="grid grid-cols-2 mt-5 bg-blue-700 py-3">
                            <div className="mt-1 ml-5 text-white text-xl"><FaMailBulk/></div>
                            <div className="-ml-20 pl-5 text-white text-xl">Dokumen</div>
                        </div></Link>
                        <Link to={`/Login`}>
                            <div className="grid grid-cols-2 mt-64">
                                <div className="text-white text-xl ml-16 mt-1"><CiLogout /></div>
                                <div className="-ml-8 text-white text-xl">Logout</div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="ml-5 mt-5 text-2xl w-auto">Kelola Dokumen<br />
                    <div className="inline-flex mt-10">
                        <Link to={`/ppengaduan`}>
                            <div className="rounded-md w-80 h-40 bg-blue-200 text-xl ml-3 pt-4">
                                <p className="text-xl text-blue-700 font-bold flex justify-center">Pengaduan</p>
                                <p className="mt-10 ml-56 text-7xl opacity-50"><LuSubtitles /></p>
                            </div>
                        </Link>
                        <Link to={`/surat`}>
                            <div className="rounded-md w-80 h-40 bg-blue-200 ml-5 pt-4 ">
                                <p className="text-xl text-blue-700 font-bold flex justify-center">Kelola Surat</p>
                                <p className="mt-10 ml-56 text-7xl opacity-50"><LuScrollText /></p>
                            </div> 
                        </Link>
                        <Link to={`/Agenda`}>
                            <div className="rounded-md w-80 h-40 bg-blue-200 ml-5 pt-4 ">
                                <p className="text-xl text-blue-700 font-bold flex justify-center">Kelola Agenda</p>
                                <p className="mt-10 ml-56 text-7xl opacity-50"><LuFileSignature /></p>
                            </div> 
                        </Link>
                    </div>
                </div>
            </div>            
        </div>
    </div>
    )
}

export default Dokumen;