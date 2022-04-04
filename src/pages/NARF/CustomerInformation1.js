import {
  Row,
  Col,
  Label,
  Card, CardBody, CardTitle, CardSubtitle
} from "reactstrap"

import {
  AvField,
} from "availity-reactstrap-validation"

export const CustomerInformation1 = (props) => {

  return (
    <div>

      <Row>
        <CardTitle></CardTitle>
        <Col className="col-12">
          <Card>
            <CardBody>
              <Row>
        <Col lg="6">
          <div className="mb-3">
            <Label for="locationPhoneNo">Location Phone Number<code>*</code></Label>
            <AvField
              name="locationPhoneNo"
              type="text"
              errorMessage="Enter Location Phone Number"
              className="form-control"
              validate={{ required: { value: true } }}
              id="locationPhoneNo"
              value={props.locationPhoneNoValue}
              onChange={e => {props.locationPhoneNoOnchange(e.target.value)}}
            />
          </div>
        </Col>

        <Col lg="6">
          <div className="mb-3">
            <Label for="locationFaxNo">Location Fax Number</Label>
            <AvField
              name="locationFaxNo"
              type="text"
              errorMessage="Enter Location Fax Number"
              className="form-control"
              validate={{ required: { value: false } }}
              id="locationFaxNo"
              value={props.locationFaxNoValue}
              onChange={e => {props.locationFaxNoOnchange(e.target.value)}}
            />
          </div>
        </Col>
      </Row>

              <Row>
        <Col lg="6">
          <div className="mb-3">
            <Label for="customerContactName">Customer Contact Name<code>*</code></Label>
            <AvField
              name="customerContactName"
              type="text"
              errorMessage="Enter Customer Contact Name"
              className="form-control"
              validate={{ required: { value: true } }}
              id="customerContactName"
              value={props.customerContactNameValue}
              onChange={e => {props.customerContactNameOnchange(e.target.value)}}
            />
          </div>
        </Col>

        <Col lg="6">
          <div className="mb-3">
            <Label for="customerCellNumber">Customer Cell Number</Label>
            <AvField
              name="customerCellNumber"
              type="text"
              errorMessage="Enter Customer Cell Number"
              className="form-control"
              validate={{ required: { value: false } }}
              id="customerCellNumber"
              value={props.customerCellNumberValue}
              onChange={e => {props.customerCellNumberOnchange(e.target.value)}}
            />
          </div>
        </Col>
      </Row>

              <Row>
        <Col lg="6">
          <div className="mb-3">
            <Label for="customerEmail">Customer Email<code>*</code></Label>
            <AvField
              name="customerEmail"
              type="email"
              errorMessage="Enter Customer Email"
              className="form-control"
              validate={{ required: { value: true } }}
              id="customerEmail"
              value={props.customerEmailValue}
              onChange={e => {props.customerEmailOnchange(e.target.value)}}
            />
          </div>
        </Col>

        <Col lg="6">
          <div className="mb-3">
            <Label for="ownerName">Owner Name</Label>
            <AvField
              name="ownerName"
              type="text"
              errorMessage="Enter Owner Name"
              className="form-control"
              validate={{ required: { value: false } }}
              id="ownerName"
              value={props.ownerNameValue}
              onChange={e => {props.ownerNameOnchange(e.target.value)}}
            />
          </div>
        </Col>
      </Row>
            
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
                             
  )
}