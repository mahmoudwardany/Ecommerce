import React from 'react'
import { Button, Row ,Form} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const CheckOut = () => {
   const navigate=useNavigate() 
   const handleSubmit=(e)=>{
        e.preventDefault()
        MySwal.fire({
          title: <p>We're recived Your Order</p>,
          didOpen: () => {
          
          },
        }).then(() => {
          return MySwal.fire(<p>Your request is now being processed</p>)
        })
        navigate('/ecommerce')
    }
  return (
    <>
    <h2 className='text-center'>Check Out</h2>
      <Form
        className=" bg-light col-sm-9 col-md-6 mt-5  mx-md-auto  m-sm-auto"
        onSubmit={handleSubmit}
      >
        <Row className="mb-3">
          <Form.Group
          
            className="m-sm-auto my-2 col-md-6"
            controlId="validationCustom01"
          >
            <Form.Label className="text-sm-start m-2 ">Name</Form.Label>
            <Form.Control required type="text" placeholder="Your Name" />
          </Form.Group>
            <Form.Group
              controlId="validationCustom02"
              className="m-sm-auto my-2 col-md-6"
            >
              <Form.Label className="text-md-start m-2">
                Your Address
              </Form.Label>
              <Form.Control required type="text" placeholder="Address" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
          <Form.Group
          
            className="m-sm-auto my-2 col-md-6"
            controlId="validationCustom01"
          >
            <Form.Label className="text-sm-start m-2 ">Email</Form.Label>
            <Form.Control required type="email" placeholder="Your Email" />
          </Form.Group>
            <Form.Group
              controlId="validationCustom02"
              className="m-sm-auto my-2 col-md-6"
            >
              <Form.Label className="text-md-start m-2">
                Your Number
              </Form.Label>
              <Form.Control required type="tel" placeholder="Number" />
            </Form.Group>
          </Row>
       <textarea className='col-md-12 col-sm-12 w-100' placeholder='Any message'></textarea>
        <div className="text-center">
          <Button
            type="submit"
            variant="success"
            className="mx-3 m-auto my-3 text-md-center text-sm-center"
          >
            Order Now
          </Button>
          <Button
            type="submit"
            variant="primary"
            className="mx-3 m-auto my-3 text-md-center text-sm-center"
          >
            <Link to='/cart' className='nav-link'>Back to shopping</Link>
          </Button>
        </div>
      </Form>
    </>
  );
}

export default CheckOut