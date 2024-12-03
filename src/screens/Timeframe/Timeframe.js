import React, { useState } from "react"; // Import useState hook
import { useNavigate } from "react-router-dom";
import "./Timeframe.css";

const Timeframe = () => {
  const navigate = useNavigate();

  // State variables for Time Limitations
  const [isTimeLimitChecked, setIsTimeLimitChecked] = useState(false);
  const [duration, setDuration] = useState("");
  const [unit, setUnit] = useState("hour");

  // State variables for Start and Expiry Date/Time
  const [startsOnDate, setStartsOnDate] = useState("");
  const [startsOnTime, setStartsOnTime] = useState("");
  const [expiresOnDate, setExpiresOnDate] = useState("");
  const [expiresOnTime, setExpiresOnTime] = useState("");

  // State for active picker to toggle between options
  const [activePicker, setActivePicker] = useState("");

  // Function to handle form submission
  const handleNextStep = () => {
    // Validate the input values before proceeding
    if (!startsOnDate || !startsOnTime || !expiresOnDate || !expiresOnTime) {
      alert("Please fill in all required fields.");
      return;
    }

    // Log the form data (you can send it to your backend here)
    console.log("Timeframe Data:", {
      startsOnDate,
      startsOnTime,
      expiresOnDate,
      expiresOnTime,
      isTimeLimitChecked,
      duration,
      unit,
    });

    // Navigate to the next page
    navigate("/discount-value");
  };

  // Function to toggle visibility of the Starts On Specific Date picker
  const toggleStartsOnSpecificDate = () => {
    if (document.getElementById("startsOnCreation").checked) {
      setActivePicker("creation");
    } else if (document.getElementById("startsOnSpecific").checked) {
      setActivePicker("specification");
    }
  };

  // Function to toggle visibility of the Expires On Specific Date picker
  const toggleExpiresOnSpecificDate = () => {
    if (document.getElementById("expiresOnNever").checked) {
      setActivePicker("never");
    } else if (document.getElementById("expiresOnSpecific").checked) {
      setActivePicker("specification1");
    }
  };

  return (
    <div className="timeframe-container">
      <h1>Timeframe</h1>

      <div className="form-container">
        <form>
          <div className="form-group">
            <label>Starts On</label>
          </div>

          {/* Group for the Starts On options */}
          <div className="form-group single-box">
            <div className="option-group">
              <label>
                <input
                  id="startsOnCreation"
                  type="radio"
                  name="startsOnOption"
                  onClick={toggleStartsOnSpecificDate}
                />
                Creation
              </label>
              <label>
                <input
                  id="startsOnSpecific"
                  type="radio"
                  name="startsOnOption"
                  onClick={toggleStartsOnSpecificDate}
                />
                Specific Date
              </label>
            </div>

            {/* Show the Specific Date picker when clicked */}
            {activePicker === "specification" && (
              <div className="date-time-picker">
                <div className="input-with-icon">
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                  <input
                    type="date"
                    value={startsOnDate}
                    onChange={(e) => setStartsOnDate(e.target.value)}
                    placeholder="Choose a specific date"
                  />
                </div>
                <input
                  type="time"
                  value={startsOnTime}
                  onChange={(e) => setStartsOnTime(e.target.value)}
                  placeholder="Choose time"
                />
              </div>
            )}
          </div>

          <div className="form-group">
            <label>Expires On</label>
          </div>

          {/* Group for the Expires On options */}
          <div className="form-group single-box">
            <div className="option-group">
              <label>
                <input
                  id="expiresOnNever"
                  type="radio"
                  name="expiresOnOption"
                  onClick={toggleExpiresOnSpecificDate}
                />
                Never
              </label>
              <label>
                <input
                  id="expiresOnSpecific"
                  type="radio"
                  name="expiresOnOption"
                  onClick={toggleExpiresOnSpecificDate}
                />
                On Specific Date
              </label>
            </div>

            {/* Show the Expiration Specific Date picker when clicked */}
            {activePicker === "specification1" && (
              <div className="date-time-picker">
                <div className="input-with-icon">
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                  <input
                    type="date"
                    value={expiresOnDate}
                    onChange={(e) => setExpiresOnDate(e.target.value)}
                    placeholder="Choose a date"
                  />
                </div>
                <input
                  type="time"
                  value={expiresOnTime}
                  onChange={(e) => setExpiresOnTime(e.target.value)}
                  placeholder="Choose time"
                />
              </div>
            )}
          </div>

          {/* <div className="form-group">
            <label>Time limitations</label>
            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  checked={isTimeLimitChecked}
                  onChange={(e) => setIsTimeLimitChecked(e.target.checked)}
                />
                <span>
                  Keep valid for a specific amount of time after publishing
                </span>
              </label>

              {isTimeLimitChecked && (
                <div className="time-limitations-group">
                  <label>Active after publishing for</label>
                  <div className="duration-unit-group">
                    <input
                      type="number"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      placeholder="Enter duration"
                      className="duration-input"
                    />
                    <select
                      value={unit}
                      onChange={(e) => setUnit(e.target.value)}
                      className="unit-select"
                    >
                      <option value="hour">Hour(s)</option>
                      <option value="day">Day(s)</option>
                      <option value="week">Week(s)</option>
                      <option value="month">Month(s)</option>
                      <option value="year">Year(s)</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div> */}

          <button type="button" onClick={handleNextStep}>
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export { Timeframe };
