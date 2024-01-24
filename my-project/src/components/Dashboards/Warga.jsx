import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ExcelJS from "exceljs";

import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { FcStatistics } from "react-icons/fc";
import { FaMailBulk } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { IoPersonAddSharp } from "react-icons/io5";
import { AiFillPrinter } from "react-icons/ai";
import { IoMdDownload } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const Warga = () => {
    const [warga, setWarga] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState("");

    useEffect(() => {
        getWarga();
    }, []);

    const getWarga = async () => {
        const response = await axios.get("http://localhost:5000/warga");
        setWarga(response.data);
    };

    const deleteWarga = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/warga/${id}`);
            getWarga();
        } catch (error){
            console.log(error);
        }
    };

    const searchWarga = () => {
        const lowerCaseKeyword = searchKeyword.toLowerCase();
        const filteredWarga = warga.filter((item) => {
          const lowerCaseName = item.nama_warga.toLowerCase();
          const lowerCaseNIK = item.nik.toLowerCase();
          return lowerCaseName.includes(lowerCaseKeyword) || lowerCaseNIK.includes(lowerCaseKeyword);
        });
        setSearchResults(filteredWarga);
      };
      

    const handlePrint = () => {
        const currentDate = new Date().toLocaleDateString();
      
        const printContent = `
          <html>
            <head>
              <title>Cetak Tabel Warga</title>
              <style>
                h1{
                    font-size: 26px;
                    text-align: center;
                }
                p{
                    font-size: 12px;
                }
                table{
                    border-collapse: collapse;
                    width: 100%;
                }
                th {
                    border: 1px solid #ddd;
                    padding: 4px;
                    text-align: left;
                    font-size: 12px;
                }
                td {
                    border: 1px solid #ddd;
                    padding: 4px;
                    text-align: left;
                    font-size: 12px;
                }  
              </style>
            </head>
            <body>
              <h1 class="text-2xl font-bold flex justify-center">Data Warga RT 005/014</h1>
              <p>Tanggal Cetak: ${currentDate}</p>
              
              <table>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>No. KK</th>
                    <th>NIK</th>
                    <th>Nama</th>
                    <th>Gender</th>
                    <th>Usia</th>
                    <th>Status</th>
                    <th>Pekerjaan</th>
                  </tr>
                </thead>
                <tbody>
                  ${warga.map((item, index) => `
                    <tr key=${item.id}>
                      <td>${index + 1}</td>
                      <td>${item.nokk}</td>
                      <td>${item.nik}</td>
                      <td>${item.nama_warga}</td>
                      <td>${item.gender}</td>
                      <td>${item.usia}</td>
                      <td>${item.sta}</td>
                      <td>${item.pekerjaan}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </body>
          </html>
        `;
      
        const printFrame = document.createElement('iframe');
        printFrame.style.display = 'none';
        document.body.appendChild(printFrame);
  
        printFrame.contentDocument.write(printContent);
        printFrame.contentDocument.close();
        printFrame.contentWindow.print();
        
        document.body.removeChild(printFrame);
      };

      const createExcelFile = async () => {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet("Sheet 1");
      
        // Add headers with styles
        const headerRow = worksheet.addRow(["No.", "No. KK", "NIK", "Nama", "Jenis Kelamin", "Usia", "Status", "Pekerjaan"]);
        headerRow.font = { bold: true };
        headerRow.eachCell((cell) => {
          cell.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "40A2D8" }, // Warna latar belakang
          };
          cell.border = { top: { style: "thin" }, bottom: { style: "thin" }, left: {style: "thin"}, right:{style: "thin"} };
        });
      
        // Add data with styles
        warga.forEach((item, index) => {
          const dataRow = worksheet.addRow([index + 1, item.nokk, item.nik, item.nama_warga, item.gender, item.usia, item.sta, item.pekerjaan ]);
          dataRow.eachCell((cell) => {
            cell.border = { top: { style: "thin" }, bottom: { style: "thin" },  left: {style: "thin"}, right:{style: "thin"} };
          });
        });

        worksheet.columns.forEach((column) => {
            let maxLength = 0;
            column.eachCell({ includeEmpty: true }, (cell) => {
              const textLength = cell.text ? cell.text.length : 0;
              maxLength = Math.max(maxLength, textLength);
            });
            column.width = maxLength < 12 ? 12 : maxLength;
          });
        
      
        // Save the workbook
        const buffer = await workbook.xlsx.writeBuffer();
      
        // Create a Blob from the buffer
        const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
      
        // Create a link element and trigger the download
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "data_warga.xlsx";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    return(
        <div className="container scroll-mx-0 w-screen">
            <div className="bg-white h-screen">
                <div className="inline-flex gap-x-0">
                <div className="bg-blue-500 h-screen w-[266px]">
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
                                <div className="grid grid-cols-2 gap-x-0 mt-5 bg-blue-700 py-3">
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
                            </div></Link>
                            <Link to={`/Login`}>
                                <div className="grid grid-cols-2 mt-64">
                                    <div className="text-white text-xl ml-16 mt-1"><CiLogout /></div>
                                    <div className="-ml-8 text-white text-xl">Logout</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="ml-5 mt-5 text-2xl w-auto">Kelola Data Warga<br />
                        <div className="inline-flex">
                            <Link to={`/AddWarga`}>
                                <div className="bg-green-300 h-10 w-30 rounded-md mt-20 inline-flex">
                                    <p className="pt-2 text-md"><IoPersonAddSharp /></p>
                                    <p className="text-sm pt-3 font-bold pr-1">Tambah</p>
                                </div>
                            </Link>
                            <button onClick={handlePrint}><div className="bg-yellow-300 h-10 w-30 rounded-md mt-20 ml-2 inline-flex">
                                <p className="pl-1 pt-2 text-md"><AiFillPrinter /></p>
                                <p className="pl-1 text-sm pt-3 font-bold pr-1">Print</p>
                            </div></button>  
                            <button onClick={createExcelFile} className="bg-blue-200 h-10 w-fit rounded-md mt-20 ml-2 inline-flex">
                                <p className="flex justify-center pt-2 text-md"><IoMdDownload /></p>
                                <p className="font-bold text-sm pt-3 pl-1 pr-2">Download</p>
                            </button>  
                            <div className="inline-flex bg-slate-200 h-10 mt-20 ml-5 rounded-2xl w-72">
                                <input type="text" placeholder="Search" className="w-72 text-sm pl-4 bg-slate-200 rounded-xl" value={searchKeyword}
                                    onChange={(e) => setSearchKeyword(e.target.value)} />
                                <button onClick={searchWarga} className="pt-2 text-md"><IoSearch /></button>
                            </div>
                        </div> 
                        <table className="table-auto border border-slate-300 mt-5">
                           <thead className="text-xl bg-blue-200">
                                <tr>
                                    <th className="border border-slate-400 text-center px-2">No.</th>
                                    <th className="border border-slate-400 pr-20 pl-2">No.KK</th>
                                    <th className="border border-slate-400 pr-24 pl-2">NIK</th>
                                    <th className="border border-slate-400 pr-40 pl-2">Nama</th>
                                    <th className="border border-slate-400 text-center px-3">Gender</th>
                                    <th className="border border-slate-400 pr-3 pl-3">Usia</th>
                                    <th className="border border-slate-400 pr-5 pl-5">Status</th>
                                    <th className="border border-slate-400 pl-5 pr-5">Pekerjaan</th>
                                    <th className="border border-slate-400 pl-5 pr-5">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(searchResults.length > 0 ? searchResults : warga).map((warga, index) => (
                                <tr key={warga.id}>
                                    <td className="border border-slate-400 text-sm text-center pt-2">{index + 1}</td>
                                    <td className="border border-slate-400 text-sm pl-2">{warga.nokk}</td>
                                    <td className="border border-slate-400 text-sm pl-2 pr-2">{warga.nik}</td>
                                    <td className="border border-slate-400 text-sm pl-2">{warga.nama_warga}</td>
                                    <td className="border border-slate-400 text-sm pl-2">{warga.gender}</td>
                                    <td className="border border-slate-400 text-sm pl-2">{warga.usia}</td>
                                    <td className="border border-slate-400 text-sm pl-2">{warga.sta}</td>
                                    <td className="border border-slate-400 text-sm pl-2">{warga.pekerjaan}</td>
                                    <td className="border border-slate-400">
                                        <div className="inline-flex ">
                                            <Link to={`/EditWarga/${warga.id}`}><div className="ml-5"><FiEdit /></div></Link>
                                            <button onClick={() => deleteWarga(warga.id)}><div className="ml-3"><RiDeleteBin6Line /></div></button>
                                        </div>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>  
                    </div>
                </div>            
            </div>
        </div>
    );
};

export default Warga;