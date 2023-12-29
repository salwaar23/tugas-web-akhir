import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { FcStatistics } from "react-icons/fc";
import { FaMailBulk } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

const AddWarga = () => {
    const [nokk, setnokk] = useState("");
    const [nik, setnik] = useState("");
    const [nama_warga, setnama] = useState("");
    const [gender, setGender] = useState("");
    const [usia, setUsia] = useState("");
    const [sta, setSta] = useState("");
    const [pekerjaan, setPekerjaan] = useState("");
    const navigate = useNavigate();

    const saveWarga = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/warga", {
                nokk,
                nik,
                nama_warga,
                gender,
                usia,
                sta,
                pekerjaan
            });
            navigate("../Warga");
        } catch (error) {
            console.log(error);
        }
    };

    return (
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
                                <div className="grid grid-cols-2 gap-x-0 mt-10 bg-blue-700 py-3">
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
                                <div className="grid grid-cols-2 mt-5">
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
                    <div className="w-auto mt-4 ml-4 text-2xl"> Tambah Data Warga
                        <form onSubmit={saveWarga}>
                            <div className="inline-flex">
                                <div className="w-full lg:mx-auto mt-20 pl-5">
                                    <label className="font-bold text-black text-sm">No. KK</label>
                                    <div className="control">
                                        <input
                                        type="text"
                                        className="text-sm shadow-sm rounded-md border-none outline-none bg-sky-50 w-96 h-7 px-[15px] focus:shadow-md duration-500 focus:bg-sky-100 my-2"
                                        value={nokk}
                                        onChange={(e) => setnokk(e.target.value)}
                                        placeholder="No. KK"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:mx-auto mt-20 pl-20">
                                    <label className="font-bold text-black text-sm">Usia</label>
                                        <div className="control">
                                        <input
                                        type="text"
                                        className="text-sm shadow-sm rounded-md border-none outline-none bg-sky-50 w-96 h-7 px-[15px] focus:shadow-md duration-500 focus:bg-sky-100 my-2"
                                        value={usia}
                                        onChange={(e) => setUsia(e.target.value)}
                                        placeholder="Usia"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="inline-flex">
                                <div className="w-full lg:mx-auto mt-2 pl-5">
                                    <label className="font-bold text-black text-sm">NIK</label>
                                    <div className="control">
                                        <input
                                        type="text"
                                        className="text-sm shadow-sm rounded-md border-none outline-none bg-sky-50 w-96 h-7 px-[15px] focus:shadow-md duration-500 focus:bg-sky-100 my-2"
                                        value={nik}
                                        onChange={(e) => setnik(e.target.value)}
                                        placeholder="NIK"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:mx-auto mt-2 pl-20">
                                    <label className="font-bold text-black text-sm">Status</label>
                                    <div className="text-sm shadow-sm rounded-md border-none outline-none bg-sky-50 w-96 h-7 px-[15px] focus:shadow-md duration-500 focus:bg-sky-100 my-2">
                                            <div className="select is-fullwidth">
                                                <select
                                                    value={sta}
                                                    onChange={(e) => setSta(e.target.value)}
                                                    className="text-sm shadow-sm rounded-md border-none outline-none bg-sky-50 w-96 h-7 px-[15px] focus:shadow-md duration-500 focus:bg-sky-100"
                                                    >
                                                    <option value=" "></option>
                                                    <option value="Kawin">Kawin</option>
                                                    <option value="Belum Kawin">Belum Kawin</option>
                                                </select>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="inline-flex">
                                <div className="w-full lg:mx-auto mt-2 pl-5">
                                    <label className="font-bold text-black text-sm">Nama</label>
                                    <div className="control">
                                        <input
                                        type="text"
                                        className="text-sm shadow-sm rounded-md border-none outline-none bg-sky-50 w-96 h-7 px-[15px] focus:shadow-md duration-500 focus:bg-sky-100 my-2"
                                        value={nama_warga}
                                        onChange={(e) => setnama(e.target.value)}
                                        placeholder="Nama"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:mx-auto mt-2 pl-20">
                                    <label className="font-bold text-black text-sm">Pekerjaan</label>
                                    <div className="control">
                                        <input
                                        type="text"
                                        className="text-sm shadow-sm rounded-md border-none outline-none bg-sky-50 w-96 h-7 px-[15px] focus:shadow-md duration-500 focus:bg-sky-100 my-2"
                                        value={pekerjaan}
                                        onChange={(e) => setPekerjaan(e.target.value)}
                                        placeholder="Pekerjaan"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:mx-auto pl-5">
                                <label className="font-bold text-black text-sm">Gender</label>
                                    <div className="text-sm shadow-sm rounded-md border-none outline-none bg-sky-50 w-96 h-7 px-[15px] focus:shadow-md duration-500 focus:bg-sky-100 my-2">
                                        <div className="select is-fullwidth">
                                            <select
                                                value={gender}
                                                onChange={(e) => setGender(e.target.value)}
                                                className="text-sm shadow-sm rounded-md border-none outline-none bg-sky-50 w-96 h-7 px-[15px] focus:shadow-md duration-500 focus:bg-sky-100"
                                                >
                                                <option value=" "></option>
                                                <option value="Perempuan">Perempuan</option>
                                                <option value="Laki-laki">Laki-laki</option>
                                            </select>
                                        </div>
                                    </div>
                            </div>
                            <button type="submit" className="ml-5 rounded-md bg-blue-600 text-white px-4 py-1 text-sm font-serif mt-10">
                                Tambah
                            </button>

                        </form>
                    </div>
                </div>            
            </div>
        </div>
    );
};

export default AddWarga;