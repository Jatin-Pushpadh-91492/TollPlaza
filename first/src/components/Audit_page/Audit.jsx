import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import Audit_Table from './Audit_Table';

function Audit({ user, onLogout }) {
  const [date, setDate] = useState('');
  const [shiftType, setShiftType] = useState('');
  const [boothType, setBoothType] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [journeyType, setJourneyType] = useState('');
  const [paymentType, setPaymentType] = useState('');
  const [exemptType, setExemptType] = useState('');
  const [vehicleNum, setVehicleNum] = useState('');
  const [transactionNum, setTransactionNum] = useState('');
  const [auditNum, setAuditNum] = useState('');
  const [data, setData] = useState([]);

  const handleShowData = async () => {
    try {
      const response = await axios.post('http://localhost:8000/getAuditData', {
        date,
        shiftType,
        boothType,
        vehicleType,
        journeyType,
        paymentType,
        exemptType,
        vehicleNum,
        transactionNum,
        auditNum
      });
  
      // Format the date in the response data before setting it
      const formattedData = response.data.map(item => ({
        ...item,
        date: item.date ? item.date.slice(0, 10) : ''
      }));
  
      setData(formattedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  return (
    <>
      <div className="flex flex-grow">
        <div className="w-1/10 bg-gray-200 p-4 space-y-4">
        <div>
            <label htmlFor="date" className="block text-sm font-bold mb-1">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2"
            />
          </div>
          <div>
            <label htmlFor="shift-type" className="block text-sm font-bold mb-1">Shift Types</label>
            <select
              id="shift-type"
              value={shiftType}
              onChange={(e) => setShiftType(e.target.value)}
              className="w-full p-2"
            >
              <option value="">Select Shift Type</option>
              {/* Add options here */}
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>

            </select>
          </div>
          <div>
            <label htmlFor="booth-type" className="block text-sm font-bold mb-1">Booth Types</label>
            <select
              id="booth-type"
              value={boothType}
              onChange={(e) => setBoothType(e.target.value)}
              className="w-full p-2"
            >
              <option value="">Select Booth Type</option>
              {/* Add options here */}
              <option value="L01">L01</option>
              <option value="L02">L02</option>
              <option value="L03">L03</option>
              <option value="L04">L04</option>
              <option value="L05">L05</option>
              <option value="L06">L06</option>

            </select>
          </div>
          <div>
            <label htmlFor="vehicle-type" className="block text-sm font-bold mb-1">Vehicle Types</label>
            <select
              id="vehicle-type"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="w-full p-2"
            >
              <option value="">Select Vehicle Type</option>
              {/* Add options here */}
              <option value="3AXLE"> 3AXLE</option>
              <option value="Bus"> Bus</option>
              <option value="Car"> Car</option>
              <option value="LCV">LCV </option>
              <option value="MAV"> MAV</option>
              <option value="OSV"> OSV</option>
              <option value="Truck"> Truck</option>

            </select>
          </div>
          <div>
            <label htmlFor="journey-type" className="block text-sm font-bold mb-1">Journey Types</label>
            <select
              id="journey-type"
              value={journeyType}
              onChange={(e) => setJourneyType(e.target.value)}
              className="w-full p-2"
            >
              <option value="">Select Journey Type</option>
              {/* Add options here */}
              <option value="Single">Single</option>
              <option value="Daily">Daily</option>
              <option value="Exempt">Exempt</option>
              <option value="Return">Return</option>
              <option value="Monthly">Monthly</option>
              <option value="LOCAL1">Local1</option>
              <option value="LOCAL2">Local2</option>
              <option value="District">District</option>
              <option value="Exit">Exit</option>
              <option value="Daily CK">Daily CK</option>
              <option value="Return CK">Return CK</option>
              <option value="Etcsingle">Etcsingle </option>


            </select>
          </div>
          <div>
            <label htmlFor="payment-type" className="block text-sm font-bold mb-1">Payment Types</label>
            <select
              id="payment-type"
              value={paymentType}
              onChange={(e) => setPaymentType(e.target.value)}
              className="w-full p-2"
            >
              <option value="">Select Payment Type</option>
              {/* Add options here */}
              <option value="Payment types">Payment types</option>
              <option value="Cash">Cash</option>
              <option value="Pos Swipe Card">Pos Swipe Card</option>
              <option value="Scheme Card">Scheme Card</option>
              <option value="Non Cash Exempted">Non Cash Exempted</option>
              <option value="Non Cash Ticket Check">Non Cash Ticket Check</option>
              <option value="Operator Debit">Operator Debit</option>
              <option value="ETCMODE">ETCMODE</option>

             
            </select>
          </div>
          <div>
            <label htmlFor="exempt-type" className="block text-sm font-bold mb-1">Exempt Types</label>
            <select
              id="exempt-type"
              value={exemptType}
              onChange={(e) => setExemptType(e.target.value)}
              className="w-full p-2"
            >
              <option value="">Select Exempt Type</option>
              {/* Add options here */}
              <option value="Government">Government</option>
              <option value="Police">Police</option>
              <option value="Army">Army</option>
              <option value="Other">Other</option>

            </select>
          </div>
          <div>
            <label htmlFor="vehicle-num" className="block text-sm font-bold mb-1">Vehicle No.</label>
            <input
              type="text"
              id="vehicle-num"
              value={vehicleNum}
              onChange={(e) => setVehicleNum(e.target.value)}
              className="w-full p-2"
            />
          </div>
          <div>
            <label htmlFor="transaction-num" className="block text-sm font-bold mb-1">Transaction No.</label>
            <input
              type="text"
              id="transaction-num"
              value={transactionNum}
              onChange={(e) => setTransactionNum(e.target.value)}
              className="w-full p-2"
            />
          </div>
          <div>
            <label htmlFor="audit-num" className="block text-sm font-bold mb-1">Enter Audit No.</label>
            <input
              type="text"
              id="audit-num"
              value={auditNum}
              onChange={(e) => setAuditNum(e.target.value)}
              className="w-full p-2"
            />
          </div>
          <button className="w-full bg-blue-500 text-white p-2 font-bold hover:bg-blue-600" onClick={handleShowData}>Show Data</button>
        </div>

        <div className="flex-grow bg-gray-100 p-4">
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="flex justify-center items-center border border-gray-300 -mt-13">
              <img src="noImage.png" alt="Audit 1" className="object-contain h-full w-full" />
            </div>
            <div className="flex justify-center items-center border border-gray-300 -mt-13">
              <img src="noImage.png" alt="Audit 2" className="object-contain h-full w-full" />
            </div>
            <div className="flex justify-center items-center border border-gray-300 -mt-13">
              <img src="noImage.png" alt="Audit 1" className="object-contain h-full w-full" />
            </div>
            <div className="flex justify-center items-center border border-gray-300 -mt-13">
              <img src="noImage.png" alt="Audit 2" className="object-contain h-full w-full" />
            </div>
          </div>

          <div className="flex justify-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10 2xl:space-x-18  pb-10">
            <div className="bg-blue-500 text-white px-2 py-2 font-bold rounded">
              Total Transaction: 
            </div>
            <div className="bg-blue-500 text-white px-2 py-2 font-bold rounded">
              Total Amount: 
            </div>
            <div className="bg-blue-500 text-white px-2 py-2 font-bold rounded">
              Total Cancel:
            </div>
          </div>

         <div>
         <Audit_Table rows={data} />
         </div>

          <div className="mt-4 flex space-x-2">
            {/* <button className="bg-blue-500 text-white px-2 py-2 font-bold hover:bg-blue-600 rounded">Total Transaction</button>
            <button className="bg-green-500 text-white px-2 py-2 font-bold hover:bg-green-600  rounded">Total Amount</button>
            <button className="bg-yellow-500 text-white px-4 py-2 font-bold hover:bg-yellow-600  rounded">Total Cancel</button> */}
            <button className="bg-red-500 text-white px-2 py-2 font-bold hover:bg-red-600  rounded">Operator Correct</button>
            <button className="bg-red-500 text-white px-2 py-2 font-bold hover:bg-red-600  rounded">AVC Correct</button>
            <button className="bg-red-500 text-white px-2 py-2 font-bold hover:bg-red-600  rounded">Invalid Exempt</button>
            <button className="bg-red-500 text-white px-2 py-2 font-bold hover:bg-red-600  rounded">Vehicle Run Through</button>
            <button className="bg-red-500 text-white px-2 py-2 font-bold hover:bg-red-600  rounded">Cancel Receipts</button>
            <button className="bg-red-500 text-white px-2 py-2 font-bold hover:bg-red-600  rounded">Restore Receipts</button>
            <button className="bg-red-500 text-white px-2 py-2 font-bold hover:bg-red-600  rounded">Add AVC Class</button>
            <button className="bg-red-500 text-white px-2 py-2 font-bold hover:bg-red-600  rounded  ">Operator Debit All</button>
          </div>
        </div>
      </div>

    </>
  );
}

export default Audit;
