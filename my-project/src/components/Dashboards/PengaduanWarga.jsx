import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { FcStatistics } from "react-icons/fc";
import { FaMailBulk } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

const Pengaduan = () => {
    const[pengaduan, setpengaduan] = useState([]);

    useEffect(() =>{
        getPengaduan();
    }, []);

    const getPengaduan = async () => {
        const response = await axios.get("http://localhost:5000/Pengaduan");
        setpengaduan(response.data);
    };

    return (
        <div className="container scroll-mx-0">
            <div className="bg-white h-screen">
                <div className="inline-flex gap-x-0">
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
                        </div>
                        </Link>
                        <Link to={`/Login`}>
                            <div className="grid grid-cols-2 mt-64">
                                <div className="text-white text-xl ml-16 mt-1"><CiLogout /></div>
                                <div className="-ml-8 text-white text-xl">Logout</div>
                            </div>
                        </Link>
                        </div>
                    </div>
                    <div className="w-auto mt-4 ml-4 text-2xl"> Data Pengaduan
                        <div className="mt-[100px]">
                        <table>
                            <thead>
                                <tr>
                                    <th className="text-center text-xl border border-black px-2">No</th>
                                    <th className="text-xl border border-black px-[70px]">Nama</th>
                                    <th className="text-xl border border-black px-4">No Whatsapp</th>
                                    <th className="text-xl border border-black px-4">Kritik/Saran/Pengaduan</th>
                                </tr>
                            </thead>
                            <tbody>
                            {pengaduan.map((pengaduan, index) => (
                                <tr key={pengaduan.id}>
                                    <td className="text-sm text-center border border-black">{index + 1}</td>
                                    <td className="text-sm text-center border border-black">{pengaduan.nama}</td>
                                    <td className="text-sm text-center border border-black">{pengaduan.nowa}</td>
                                    <td className="text-sm text-center border border-black">{pengaduan.kritik}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    );
};

export default Pengaduan;