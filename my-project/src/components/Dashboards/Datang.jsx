import { Link } from "react-router-dom";

import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { FcStatistics } from "react-icons/fc";
import { FaMailBulk } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { IoPersonAddSharp } from "react-icons/io5";
import { AiFillPrinter } from "react-icons/ai";
import { IoMdDownload } from "react-icons/io";

export default function Datang(){
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
                            <Link to={`/Sirkulasi`}>
                                <div className="grid grid-cols-2 mt-5 bg-blue-700 py-3">
                                    <div className="mt-1 ml-5 text-white text-xl"><FcStatistics /></div>
                                    <div className="-ml-20 pl-1 text-white text-xl">Sirkulasi Penduduk</div>
                                </div>
                            </Link>
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
                    <div className="w-auto mt-4 ml-4 text-2xl">Kelola Data Pendatang
                    <div className="grid grid-cols-3">
                            <Link to={`/AddDatang`}>
                                <div className="bg-green-300 h-10 w-30 rounded-md mt-20 inline-flex">
                                    <p className="pt-2 text-md"><IoPersonAddSharp /></p>
                                    <p className="text-sm pt-3 font-bold pr-1">Tambah</p>
                                </div>
                            </Link>
                            <div className="bg-yellow-300 h-10 w-30 rounded-md mt-20 ml-2 inline-flex">
                                <p className="pl-1 pt-2 text-md"><AiFillPrinter /></p>
                                <p className="pl-1 text-sm pt-3 font-bold">Print</p>
                            </div>  
                            <div className="bg-blue-200 h-10 w-fit rounded-md mt-20 ml-2 inline-flex">
                                <p className="flex justify-center pt-2 text-md"><IoMdDownload /></p>
                                <p className="font-bold text-sm pt-3 pl-1 pr-2">Download</p>
                            </div>  
                        </div> 
                        <table className="table-auto border border-slate-300 mt-5">
                           <thead className="text-xl bg-blue-200">
                                <tr>
                                    <th className="pl-2 pr-2">No.</th>
                                    <th className="pr-40">ID</th>
                                    <th className="pr-40">Nama</th>
                                    <th className="pr-40">Pelapor</th>
                                    <th className="pl-5 pr-5">Action</th>
                                </tr>
                            </thead> 
                            <tbody>
                                <tr>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>            
            </div>
        </div>
    )
}