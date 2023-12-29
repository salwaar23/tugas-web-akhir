import { Link } from "react-router-dom";

import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { FcStatistics } from "react-icons/fc";
import { FaMailBulk } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { FaPersonBreastfeeding } from "react-icons/fa6";
import { FaPersonCircleXmark } from "react-icons/fa6";
import { FaPersonCirclePlus } from "react-icons/fa6";
import { FaPersonCircleMinus } from "react-icons/fa6";

export default function KelolaData(){
    return(
        <div className="container scroll-mx-0">
            <div className="bg-white h-screen">
                <div className="grid grid-cols-5 gap-x-0">
                    <div className="bg-blue-500 h-screen w-64">
                        <div className="text-white text-2xl font-bold flex justify-center mt-4">
                            SETEMA
                        </div>
                        <div className="rounded-md bg-slate-200 w-24 text-center ml-20 mt-4">Admin1
                        </div>
                        <div className="">
                            <Link to={`/Dashboard`}>
                                <div className="grid grid-cols-2 gap-x-0 mt-10">
                                    <div className="ml-5 mt-1 text-white text-xl"><MdOutlineSpaceDashboard /></div>
                                    <div className="-ml-20 text-white text-xl">Dashboard</div>
                                </div>
                            </Link>
                            <Link to={`/KelolaData`}>
                                <div className="grid grid-cols-3 gap-x-0 mt-5">
                                    <div className="ml-5 text-white text-xl mt-1"><FaDatabase /></div>
                                    <div className="-ml-8 text-white text-xl">Kelola Data</div>
                                </div>
                            </Link>
                            <div className="grid grid-cols-2 mt-5 bg-blue-700 py-3">
                                <div className="mt-1 ml-5 text-white text-xl"><FcStatistics /></div>
                                <div className="-ml-20 pl-1 text-white text-xl">Sirkulasi Penduduk</div>
                            </div>
                            <div className="grid grid-cols-2 mt-5">
                                <div className="mt-1 ml-5 text-white text-xl"><FaMailBulk/></div>
                                <div className="-ml-20 pl-1 text-white text-xl">Kelola Surat</div>
                            </div>
                            <Link to={`/Login`}>
                                <div className="grid grid-cols-2 mt-64">
                                    <div className="text-white text-xl ml-16 mt-1"><CiLogout /></div>
                                    <div className="-ml-8 text-white text-xl">Logout</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="ml-5 mt-5 text-2xl w-auto">Sirkulasi Penduduk
                        <div className="mt-10 inline-flex">
                            <Link to={`/Lahir`}>
                                <div className="rounded-md w-60 h-40 bg-green-200 text-xl ml-3 pt-4">
                                    <p className="text-xl text-blue-700 font-bold flex justify-center">Data Kelahiran</p>
                                    <p className="mt-10 ml-40 text-7xl opacity-50"><FaPersonBreastfeeding /></p>
                                </div>
                            </Link>
                            <Link to={`/Kematian`}>
                                <div className="rounded-md w-60 h-40 bg-red-200 pt-4 ml-5">
                                    <p className="text-xl text-blue-700 font-bold flex justify-center">Data Kematian</p>
                                    <p className="mt-10 ml-40 text-7xl opacity-50"><FaPersonCircleXmark /></p>
                                </div> 
                            </Link>
                            <Link to={`/Datang`}>
                                <div className="rounded-md bg-blue-200 w-60 h-40 pt-4 ml-5">
                                    <p className="text-xl text-blue-700 font-bold flex justify-center">Data Pendatang</p>
                                    <p className="mt-10 ml-40 text-7xl opacity-50"><FaPersonCirclePlus /></p>
                                </div>
                            </Link>
                            <Link to={`/Pindah`}>
                                <div className="rounded-md bg-yellow-200 w-60 h-40 pt-4 ml-5">
                                    <p className="text-xl text-blue-700 font-bold flex justify-center">Data Perpindahan</p>
                                    <p className="mt-10 ml-40 text-7xl opacity-50"><FaPersonCircleMinus /></p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    )
}