import React, { useState } from 'react';
import axios from 'axios';
import Report_Table from './Report_Table';

function Reports({ user, onLogout }) {
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
  const [mainReportFilter, setMainReportFilter] = useState('');
  const [subReportFilter, setSubReportFilter] = useState('');
  const [data, setData] = useState([]);

  const handleShowData = async () => {
    try {
      const formattedDate = date ? new Date(date).toISOString().slice(0, 10) : '';
      const response = await axios.post('http://localhost:8000/getReport', {
        date: formattedDate,
        shiftType,
        boothType,
        vehicleType,
        journeyType,
        paymentType,
        exemptType,
        vehicleNum,
        transactionNum,
        auditNum,
        mainReportFilter,
        subReportFilter
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
      <div className="flex flex-grow" style={{ overflowX: 'hidden' }}>
        <div className="w-1/10 bg-gray-200 p-4 space-y-4">
          {/* Main Report Filter */}
          <div>
            <label htmlFor="main-report-filter" className="block text-sm font-bold mb-1">Select Main Report Filters</label>
            <select
              id="main-report-filter"
              value={mainReportFilter}
              onChange={(e) => setMainReportFilter(e.target.value)}
              className="w-full p-2"
            >
              <option value="">Select Reports</option>
              <option value="AVC Reports">AVC Reports</option>
              <option value="Audit Reports">Audit Reports</option>
              <option value="Events Reports">Events Reports</option>
              <option value="Configurations Reports">Configurations Reports</option>
              <option value="ETC Reports">ETC Reports</option>
              <option value="Transactions Reports">Transactions Reports</option>
              <option value="Revenue Reports">Revenue Reports</option>
              <option value="Old MIT Reports">Old MIT Reports</option>
              <option value="Date-Wise Reports">Date-Wise Reports</option>
              <option value="Over-Weight Reports">Over-Weight Reports</option>
            </select>
          </div>
          {/* Sub Report Filter */}
          <div>
            <label htmlFor="sub-report-filter" className="block text-sm font-bold mt-2 mb-1">Select Sub Report Filters</label>
            <select
              id="sub-report-filter"
              value={subReportFilter}
              onChange={(e) => setSubReportFilter(e.target.value)}
              className="w-full p-2"
            >
              <option value="">Select Sub Reports</option>
              {/* Options should be dynamically generated based on the selected main report filter */}
            </select>
          </div>
          {/* Date Filter */}
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
          {/* Shift Type Filter */}
          <div>
            <label htmlFor="shift-type" className="block text-sm font-bold mb-1">Shift Types</label>
            <select
              id="shift-type"
              value={shiftType}
              onChange={(e) => setShiftType(e.target.value)}
              className="w-full p-2"
            >
              <option value="">Select Shift Type</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          {/* Booth Type Filter */}
          <div>
            <label htmlFor="booth-type" className="block text-sm font-bold mb-1">Booth Types</label>
            <select
              id="booth-type"
              value={boothType}
              onChange={(e) => setBoothType(e.target.value)}
              className="w-full p-2"
            >
              <option value="">Select Booth Type</option>
              <option value="L01">L01</option>
              <option value="L02">L02</option>
              <option value="L03">L03</option>
              <option value="L04">L04</option>
              <option value="L05">L05</option>
              <option value="L06">L06</option>
              <option value="L07">L07</option>
              <option value="L08">L08</option>
              <option value="L09">L09</option>
              <option value="L10">L10</option>
              <option value="L11">L11</option>
              <option value="L12">L12</option>
              <option value="L13">L13</option>
              <option value="L14">L14</option>
              <option value="L15">L15</option>
              <option value="L16">L16</option>
              <option value="L17">L17</option>
              <option value="L18">L18</option>
              <option value="L19">L19</option>
              <option value="L20">L20</option>
              <option value="L21">L21</option>
              <option value="L22">L22</option>
              <option value="L23">L23</option>
              <option value="L24">L24</option>
              <option value="L25">L25</option>
              <option value="L26">L26</option>
              <option value="L27">L27</option>
              <option value="L28">L28</option>
              <option value="L29">L29</option>
              <option value="L30">L30</option>
            </select>
          </div>
          {/* Vehicle Type Filter */}
          <div>
            <label htmlFor="vehicle-type" className="block text-sm font-bold mb-1">Vehicle Types</label>
            <select
              id="vehicle-type"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="w-full p-2"
            >
              <option value="">Select Vehicle Type</option>
              <option value="Car/Jeep/Van">Car/Jeep/Van</option>
              <option value="LCV">LCV</option>
              <option value="Bus/Truck">Bus/Truck</option>
              <option value="Upto 3 Axle Vehicle">Upto 3 Axle Vehicle</option>
              <option value="4 to 6 Axle">4 to 6 Axle</option>
              <option value="HCM/EME">HCM/EME</option>
              <option value="7 or more Axle">7 or more Axle</option>
            </select>
          </div>
          {/* Journey Type Filter */}
          <div>
            <label htmlFor="journey-type" className="block text-sm font-bold mb-1">Journey Types</label>
            <select
              id="journey-type"
              value={journeyType}
              onChange={(e) => setJourneyType(e.target.value)}
              className="w-full p-2"
            >
              <option value="">Select Journey Type</option>
              <option value="Single Journey">Single Journey</option>
              <option value="Return Journey">Return Journey</option>
              <option value="Monthly Pass">Monthly Pass</option>
              <option value="Daily Pass">Daily Pass</option>
            </select>
          </div>
          {/* Payment Type Filter */}
          <div>
            <label htmlFor="payment-type" className="block text-sm font-bold mb-1">Payment Types</label>
            <select
              id="payment-type"
              value={paymentType}
              onChange={(e) => setPaymentType(e.target.value)}
              className="w-full p-2"
            >
              <option value="">Select Payment Type</option>
              <option value="Cash">Cash</option>
              <option value="ETC">ETC</option>
            </select>
          </div>
          {/* Exempt Type Filter */}
          <div>
            <label htmlFor="exempt-type" className="block text-sm font-bold mb-1">Exempt Types</label>
            <select
              id="exempt-type"
              value={exemptType}
              onChange={(e) => setExemptType(e.target.value)}
              className="w-full p-2"
            >
              <option value="">Select Exempt Type</option>
              <option value="None">None</option>
              <option value="VIP">VIP</option>
            </select>
          </div>
          {/* Vehicle Number Filter */}
          <div>
            <label htmlFor="vehicle-num" className="block text-sm font-bold mb-1">Vehicle Number</label>
            <input
              type="text"
              id="vehicle-num"
              value={vehicleNum}
              onChange={(e) => setVehicleNum(e.target.value)}
              className="w-full p-2"
            />
          </div>
          {/* Transaction Number Filter */}
          <div>
            <label htmlFor="transaction-num" className="block text-sm font-bold mb-1">Transaction Number</label>
            <input
              type="text"
              id="transaction-num"
              value={transactionNum}
              onChange={(e) => setTransactionNum(e.target.value)}
              className="w-full p-2"
            />
          </div>
          {/* Audit Number Filter */}
          <div>
            <label htmlFor="audit-num" className="block text-sm font-bold mb-1">Audit Number</label>
            <input
              type="text"
              id="audit-num"
              value={auditNum}
              onChange={(e) => setAuditNum(e.target.value)}
              className="w-full p-2"
            />
          </div>
          <button
            onClick={handleShowData}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
          >
            Show Data
          </button>
        </div>
        <div className="w-9/10 p-4">
          <Report_Table rows={data} />
        </div>
      </div>
    </>
  );
}

export default Reports;
