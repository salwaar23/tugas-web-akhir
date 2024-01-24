import { Link } from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { FcStatistics } from "react-icons/fc";
import { FaMailBulk } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { FaPeopleRoof } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { BsMailboxFlag } from "react-icons/bs";

const Dashboard = () => {
    const [warga, setWarga] = useState("");

    useEffect(() =>{
        getWarga();
    });

    const getWarga = async () => {
        const response = await axios.get("http://localhost:5000/warga");
        setWarga(response.data);
    };

    const calculateGenderData = () => {
    const jumlahLakiLaki = warga && warga.filter(item => item.gender === 'Laki-laki').length;
    const jumlahPerempuan = warga && warga.filter(item => item.gender === 'Perempuan').length;

    return [
      { name: 'Laki-Laki', value: jumlahLakiLaki },
      { name: 'Perempuan', value: jumlahPerempuan },
    ];
  };

  const calculateAgeData = () => {
    const usiaProduktif = warga && warga.filter(item => item.usia >= 18 && item.usia <= 60).length;
    const usiaTidakProduktif = warga && warga.filter(item => item.usia < 18 || item.usia > 60).length;

    return [
      { name: 'Produktif', value: usiaProduktif },
      { name: 'Tidak Produktif', value: usiaTidakProduktif },
    ];
  };
  const genderData = calculateGenderData();
  const ageData = calculateAgeData();

  const COLORS = ['#0088FE', '#FF8042'];

    return(
        <div className="container">
            <div className="bg-white">
                <div className="inline-flex">
                    <div className="bg-blue-500 h-screen w-[440px]">
                        <div className="text-white text-2xl font-bold flex justify-center mt-4">
                            SETEMA
                        </div>
                        <div className="rounded-md bg-slate-200 w-24 text-center ml-20 mt-4">Admin1
                        </div>
                        <div className="">
                            <Link to={`/Dashboard`}>
                                <div className="grid grid-cols-2 gap-x-0 mt-10 bg-blue-700 py-3">
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
                            <Link to={`/Dokumen`}><div className="grid grid-cols-2 mt-5">
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
                    <div className="w-auto mt-4 ml-4 text-2xl">Dashboard<br/>
                        <div className="inline-flex mt-5">
                            <Link to={`/KelolaData`}>
                                <div className="bg-blue-200 w-80 h-40 rounded-md">
                                    <p className="text-center text-xl text-blue-700 font-bold pt-5">Kelola Data</p>
                                    <p className="mt-10 ml-60 text-7xl opacity-50"><FaPeopleRoof /></p>
                                </div>
                            </Link>
                            <Link to={`/Sirkulasi`}>
                                <div className="bg-blue-200 w-80 h-40 rounded-md ml-10">
                                    <p className="text-center text-xl text-blue-700 font-bold pt-5">Sirkulasi Penduduk</p>
                                    <p className="ml-56 mt-7 text-8xl opacity-50"><IoIosPeople /></p>
                                </div>
                            </Link>
                            <Link to={`/Dokumen`}><div className="bg-blue-200 w-80 h-40 rounded-md ml-10">
                                <p className="text-center text-xl text-blue-700 font-bold pt-5">Dokumen</p>
                                <p className="mt-10 ml-60 text-7xl opacity-50"><BsMailboxFlag/></p>
                            </div>
                            </Link>
                        </div>
                        <div className="inline-flex">
                        <div className="ml-20">
                            <PieChart width={400} height={400}>
                            <Pie data={genderData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                                {genderData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                            </PieChart>
                        </div>
                        <div className="ml-20">
                            <PieChart width={400} height={400}>
                            <Pie data={ageData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                                {ageData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                            </PieChart>
                        </div>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    )
}

export default Dashboard;