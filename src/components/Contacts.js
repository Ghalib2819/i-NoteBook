import React from "react";
import mirza from "./mirza.jpg";

function Contacts() {
  const styles = {
    container: {
    
      width: "100%",
      height: "20%",
      display: "flex",
      alignItems: "center",
    },
    leftSide: {
      flex: "50%",
      height: "100%",
    },
    rightSide: {
      flex: "50%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  };

  // Mobile-specific styles
  const mobileStyles = {
    container: {
      flexDirection: "column",
    },
    leftSide: {
      flex: "100%",
    },
    rightSide: {
      flex: "100%",
    },
  };

  // Function to check if the screen size is mobile
  const isMobile = () => {
    return window.innerWidth <= 768; // Adjust the breakpoint as needed
  };

  // Determine the current styles based on the screen size
  const currentStyles = isMobile() ? mobileStyles : styles;

  return (
    <div className="container-fluid contact" style={{ ...currentStyles.container }}>
      <div style={{ ...currentStyles.leftSide }}>
        <img src={mirza} style={{marginTop: "116px", width: "100%", height: "100%" }} alt="mirza" />
      </div>
      <div style={{ ...currentStyles.rightSide }} className="my-3 mx-3">
        <h1>Contact Us</h1>
        <form action="/">
          <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label"> Email: </label>
            <input required type="email" className="form-control" id="email" placeholder="Enter your email" name="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="number" className="form-label leftSide"> Number </label>
            <input required type="number" className="form-control" id="pwd" placeholder="Enter your number" name="pwd" />
          </div>
            <center><strong><button type="submit" className="btn btn-primary">Share</button></strong></center>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
