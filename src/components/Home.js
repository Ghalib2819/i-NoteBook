
import Notes from "./Notes";
import Typical from "react-typical"
const Home = (props) => {
 const {showAlert} = props
  return (
    <div>
      <div className="container">
  <div className="wrapper">
    <h2 className="static-txt "><b>Mirza!</b></h2>
    <h2>
      <Typical loop={Infinity} steps={
        [
          " create", 1000,
          " update notes", 1000,
          " signup", 1000,
          " login", 1000,
          " Add a notes", 1000,
           // Add a blank step with a longer duration (e.g., 5 seconds)
        ]}>
      </Typical>
    </h2>
  </div>
</div>

<Notes showAlert={showAlert}/>

    </div>
  );
};

export default Home;
