import { CgFigma } from "react-icons/cg";
import './App.css';
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaPlusSquare } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsCalendarDateFill } from "react-icons/bs";
import { BsFillTruckFrontFill } from "react-icons/bs";
import { BsFillHexagonFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
import { TiArrowDown } from "react-icons/ti";
function App() {
  return (
    <div className="bg-container">
      <div className="side-bar">
        <div className="logo-div">
          <img className="logo-img"/>
          <h1 className="logo">LOGO</h1>
        </div>
        <div className="top-container">
          <div><CgFigma/><span>BID</span></div><br/>
          <div><CgFigma/><span>COD</span></div><br/>
          <div><CgFigma/><span>VENDER</span></div><br/>
          <div><CgFigma/><span>USER</span></div><br/>
        </div>
        <div className="bottom-container">
        <div><CgFigma/><span>Settings</span></div><br/>
        <div><CgFigma/><span>Profile</span></div><br/>
        <div><CgFigma/><span>Contact Us</span></div><br/>
        <div><CgFigma/><span>Logout</span></div><br/>
      </div>
      </div>
      <div className="main-container">
        <nav className="nav-bar">
          <div className="nav-items-container">
          <p className="bid color-navy">Bid</p>
          <p>POD</p>
          <p>Vendor</p>
          <p>User</p>
          <div className="nav-user-image-container">
          <FaUserCircle className="user-icon"/>
            <p>Frieght EG</p>
            <select className="select select-ele">
              <option></option>
              <option>Bid</option>
              <option>User</option>
              <option>Vender</option>
              <option>cod</option>
            </select>
          </div>
          </div>
        </nav>
        
        <div className="header-container">
          <div className="header-items-container">
            <p>Live</p>
            <p>Results</p>
            <p>History</p>
            <div className="input-container">
              <CiSearch className="search-icon"/>
              <input type="search" placeholder="Search" className="input"/>
          </div>
            
          </div>
          <button className="create-button">
            Create
            <FaPlusSquare className="plus-icon"/>
          </button>
        </div>
        <div className="main-bottom-container">
          <div className="live-resuls-container">
            <div className="live-results">
              <pre className="live">Live (30)</pre>
              <pre className="res">Responded (30)</pre>
              <pre className="unres">UnResponded (30)</pre>
            </div>
            <div className="calendar-container">
            <p className="bid-created">Bid Created</p>
            <p>Today</p>
            <p>Yesterday</p>
            <div className="calendar">
            Calender
            <select className="select-ele">
              <option></option>
            </select>
            </div>
            
            <FaFilter className="filter-icon"/>
            </div>
          </div>
          <div className="table-container">
            <div className="table">
              
                <p className="heading">S.No</p>
                <p>BidNumber<br/>Created by</p>
                <p>Start Date <br/>& Time</p>
                <p>Bid Time <br/>Remaining</p>
                <p>From city<br/>to city</p>
                <p>Vehicle Type,Size<br/>Body,No.of Vehicle</p>
                <p>Material Weight<br/>(in Kg)</p>
                <p>Response</p>
                <p>Assigned Staff</p>
                <p>Details</p>
              
            </div>
          </div>
          
            <div  className="table-content-container">
              <div className="table">
                <p className="para-dot"><div className="dot"></div>1</p>
                <p>#34234556733<br/>Sunder Yadav</p>
                <p>14/02/2024 <br/>05:40</p>
                <p>7hr 20min</p>
                <p>Gurgaon<br/><TiArrowDown className="down-arrow"/><br/>Mumbai</p>
                <p>Truck,20 ft<br/>Close body,1</p>
                <p>4000 kg</p>
                <p className="color-navy"><span className="four">4</span> <br/>View Results</p>
                <p>Mohit<br/>5382978497229</p>
                <p className="color-navy">View Details</p>
              </div>
            </div>
          <div className="details-top-container">
            <div className="details-container">
              <div>
                <p>Bid No: 16542673784 (Sunder Yadav)</p>
                <div className="maneswar">
                  <div className="location-icons-container">
                    <div className="dot-1"></div>
                    <div className="verticle-line"></div>
                    <div><FaLocationDot className="location-icon"/></div>
                  </div>
                  <div className="location-icons-container">
                    <p className="para"><div><span className="color-navy">Manesar,Gurugram,</span>Haryana<br/><p className="bottom-para"><span className="color-green">Loading Point:</span> Ramchandra Ramniwas oil mill,<br/>Alwar,Rajasthan</p></div></p>
                    <p className="para"><div><span className="color-navy">Kotputli,</span> Rajasthan<br/><p className="bottom-para"><span className="color-red">Unloading Point:</span> Ramchandra Ramniwas oil mill,<br/>Alwar,Rajasthan</p></div></p>
                  </div>
                </div>
              </div>
              <div className="vehi-details">
                <p className="vehicle-para"><BsCalendarDateFill className="all-icon-items" />Vehicle loading date:17/02/2024</p>
                <p className="color-light-blue"><BsFillTruckFrontFill  className="color-navy all-icon-items"/><span className="color-navy">Vehicle Type:</span> 20ft Truck (Close Body) <button className="button">CNG</button></p>
                <p className="color-light-blue"><BsFillHexagonFill  className="color-navy all-icon-items"/><span className="color-navy">Material:</span> Agricultural Products <span className="color-navy side-para">Weight: </span>14 Tonnes</p>
                <div className="req-ex"><p className="color-light-blue"><BsCalendarDateFill  className="color-navy all-icon-items"/><span className="color-navy">Request Date:</span>15/02/2024</p><p className="color-light-blue side-para"><BsCalendarDateFill  className="color-navy all-icon-items"/><span className="color-navy">Expiry Date:</span>15/02/2024</p></div>
                <div><p className="color-light-blue"><span className="color-navy">Remarks:</span>Urgent Delivery</p></div>
              </div>
              <div className="contact-details">
                <p className="color-light-blue contact"><FaUser  className="color-navy all-icon-items"/><span className="color-navy">Assigned Staff:</span> Rahul Pandey</p>
                <p className="color-light-blue contact"><FaPhoneAlt  className="color-navy all-icon-items"/><span className="color-navy">Phone number:</span> +91 33455387495</p>
                <p className="color-light-blue contact"><span className="color-navy">Target Price:</span> Rs 5000</p>
                <p className="color-light-blue contact"><span className="color-navy">Number of Bider for this Bid:</span> 54</p>
                <p className="color-light-blue contact">View Details</p>
                <p className="view-less color-navy all-icon-items">View less<IoTriangle /></p>
              </div>
            </div>
          </div>
          <div  className="table-content-container bottom-data-container">
              <div className="table">
                <p className="para-dot"><div className="dot"></div>1</p>
                <p>#34234556733<br/>Sunder Yadav</p>
                <p>14/02/2024 <br/>05:40</p>
                <p>7hr 20min</p>
                <p>Gurgaon<br/><TiArrowDown className="down-arrow"/><br/>Mumbai</p>
                <p>Truck,20 ft<br/>Close body,1</p>
                <p>4000 kg</p>
                <p className="color-navy"><span className="four">4 </span><br/>View Results</p>
                <p>Mohit<br/>5382978497229</p>
                <p className="color-navy">View Details</p>
              </div>
            </div>
            <div  className="table-content-container bottom-data-container">
              <div className="table">
                <p className="para-dot"><div className="dot"></div>1</p>
                <p>#34234556733<br/>Sunder Yadav</p>
                <p>14/02/2024 <br/>05:40</p>
                <p>7hr 20min</p>
                <p>Gurgaon<br/><TiArrowDown className="down-arrow"/><br/>Mumbai</p>
                <p>Truck,20 ft<br/>Close body,1</p>
                <p>4000 kg</p>
                <p className="color-navy"><span className="four">4 </span><br/>View Results</p>
                <p>Mohit<br/>5382978497229</p>
                <p className="color-navy">View Details</p>
              </div>
            </div>
            <div  className="table-content-container bottom-data-container">
              <div className="table">
                <p className="para-dot"><div className="dot"></div>1</p>
                <p>#34234556733<br/>Sunder Yadav</p>
                <p>14/02/2024 <br/>05:40</p>
                <p>7hr 20min</p>
                <p>Gurgaon<br/><TiArrowDown className="down-arrow"/><br/>Mumbai</p>
                <p>Truck,20 ft<br/>Close body,1</p>
                <p>4000 kg</p>
                <p className="color-navy"><span className="four">4 </span><br/>View Results</p>
                <p>Mohit<br/>5382978497229</p>
                <p className="color-navy">View Details</p>
              </div>
            </div>
            <div  className="table-content-container bottom-data-container">
              <div className="table">
                <p className="para-dot"><div className="dot"></div>1</p>
                <p>#34234556733<br/>Sunder Yadav</p>
                <p>14/02/2024 <br/>05:40</p>
                <p>7hr 20min</p>
                <p>Gurgaon<br/><TiArrowDown className="down-arrow"/><br/>Mumbai</p>
                <p>Truck,20 ft<br/>Close body,1</p>
                <p>4000 kg</p>
                <p className="color-navy"><span className="four">4</span> <br/>View Results</p>
                <p>Mohit<br/>5382978497229</p>
                <p className="color-navy">View Details</p>
              </div>
            </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
