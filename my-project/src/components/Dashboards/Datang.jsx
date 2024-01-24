import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import axios from "axios";
import ExcelJS from "exceljs";

import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { FcStatistics } from "react-icons/fc";
import { FaMailBulk } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { IoPersonAddSharp } from "react-icons/io5";
import { AiFillPrinter } from "react-icons/ai";
import { IoMdDownload } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const Datang = () => {
    const[datang, setDatang] = useState([]);

    useEffect(()=>{
        getDatang();
    }, []);

    const getDatang = async () => {
        const response = await axios.get("http://localhost:5000/Datang");
        setDatang(response.data);
    };

    const deleteDatang = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/Datang/${id}`);
            getDatang();
        } catch (error){
            console.log(error);
        }
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
              <h1 class="text-2xl font-bold flex justify-center">Data Warga Pendatang RT 005/014</h1>
              <p>Tanggal Cetak: ${currentDate}</p>
              
              <table>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>ID</th>
                    <th>Nama</th>
                    <th>Pelapor</th>
                  </tr>
                </thead>
                <tbody>
                  ${datang.map((item, index) => `
                    <tr key=${item.id}>
                      <td>${index + 1}</td>
                      <td>${item.datangid}</td>
                      <td>${item.nama}</td>
                      <td>${item.pelapor}</td>
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
        const headerRow = worksheet.addRow(["No.", "ID", "Nama", "Pelapor"]);
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
        datang.forEach((item, index) => {
          const dataRow = worksheet.addRow([index + 1, item.datangid, item.nama, item.pelapor]);
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
        link.download = "data_pendatang.xlsx";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    return(
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
                            <Link to={`/Dokumen`}><div className="grid grid-cols-2 mt-5">
                                <div className="mt-1 ml-5 text-white text-xl"><FaMailBulk/></div>
                                <div className="-ml-20 pl-1 text-white text-xl">Dokumen</div>
                            </div></Link>
                            <Link to={`/Login`}>
                                <div className="grid grid-cols-2 mt-64">
                                    <div className="text-white text-xl ml-16 mt-1"><CiLogout /></div>
                                    <div className="-ml-8 text-white text-xl">Logout</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="w-auto mt-4 ml-4 text-2xl">Kelola Data Pendatang<br />
                    <div className="inline-flex">
                            <Link to={`/AddDatang`}>
                                <div className="bg-green-300 h-10 w-30 rounded-md mt-20 inline-flex">
                                    <p className="pt-2 text-md"><IoPersonAddSharp /></p>
                                    <p className="text-sm pt-3 font-bold pr-1">Tambah</p>
                                </div>
                            </Link>
                            <button onClick={handlePrint} className="bg-yellow-300 h-10 w-30 rounded-md mt-20 ml-2 inline-flex">
                                <p className="pl-1 pt-2 text-md"><AiFillPrinter /></p>
                                <p className="pl-1 pr-1 text-sm pt-3 font-bold">Print</p>
                            </button>  
                            <button onClick={createExcelFile} className="bg-blue-200 h-10 w-fit rounded-md mt-20 ml-2 inline-flex">
                                <p className="flex justify-center pt-2 text-md"><IoMdDownload /></p>
                                <p className="font-bold text-sm pt-3 pl-1 pr-2">Download</p>
                            </button>  
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
                                {datang.map((datang, index) => (
                                <tr key = {datang.id}>
                                    <td className="text-sm text-center">{index + 1}</td>
                                    <td className="text-sm">{datang.datangid}</td>
                                    <td className="text-sm">{datang.nama}</td>
                                    <td className="text-sm">{datang.pelapor}</td>
                                    <td>
                                        <div className="inline-flex">
                                            <Link to={`/EditDatang/${datang.id}`}><div className="ml-5"><FiEdit /></div></Link>
                                            <button onClick={() => deleteDatang(datang.id)}><div className="ml-3"><RiDeleteBin6Line /></div></button>
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

export default Datang;