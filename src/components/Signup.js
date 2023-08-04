import React, {useState} from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import Typical from "react-typical"


  const Signup = (props)=>{
    let location = useLocation();

const navigateTo = (path) => {
  window.location.href = path;
}
  const [credentials, setcredentials] = useState({name: "", email: "", password: "", cpassword:""})
    const handleSubmit=async (e)=>{
      e.preventDefault();
   
   
   const {name, email, password} = credentials;
      const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify({name, email, password }),
     });
     const json = await response.json()
     console.log(json);
     if(json.success){
      localStorage.setItem('token', json.authtoken);
      navigateTo("/")
      props.showAlert("Account created sucessfully", "success")
     }
     else{
       props.showAlert("invalid details", "danger")
     }
       }
   
       const onChange = (e) => {
         setcredentials({ ...credentials, [e.target.name]: e.target.value })
       }
  
  return (



    

    <div>
      <Container onSubmit={handleSubmit}>
        <center>
        <div className="container">
  <div className="wrapper">
    <h2 className="static-txt "><b>Mirza!</b></h2>
    <h2>
      <Typical loop={Infinity} steps={
        [
          " Sign-up", 1000,
          " here", 1000,
        ]}>
      </Typical>
    </h2>
  </div>
</div></center>
        <Row className=" d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-2 border-primary"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Mirza Signup
                  </h2>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="name" >
                        <Form.Label className="text-center">Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name"  name="name" onChange={onChange}/>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="email">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email"  name="email" onChange={onChange} />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="password"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"  name="password" onChange={onChange}/>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="cpassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="cPassword"  name="cpassword" onChange={onChange} />
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Create Account
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );

}
export default Signup;
