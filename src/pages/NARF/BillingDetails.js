import {
  Row,
  Col,
  Label,
  Card, CardBody, CardTitle, CardSubtitle
} from "reactstrap"

import {
  AvField,
} from "availity-reactstrap-validation"

export const BillingDetails = (props) => {
  

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
            <Label htmlFor="enterExistingBillToAccountNo">Enter existing bill-to account #</Label>
            <AvField
            id="enterExistingBillToAccountNo"
            type="text"  
            name="enterExistingBillToAccountNo"
            className="form-control"
            errorMessage="Enter existing bill-to account #"
            validate={{ required: { value: false}}} 
            value={props.enterExistingBillToAccountNoValue} 
            onChange={e => { props.enterExistingBillToAccountNoOnchange(e.target.value) }}
            disabled={!props.isBillingAddressDiffThanDeliveryValue?true:false}  
            />
          </div>
        </Col>
        
        <Col lg="6">
          <div className="mb-3">
            <Label htmlFor="createNewBillToAccountNo">Create new bill-to account #</Label>
            <AvField
            id="createNewBillToAccountNo"
            type="text"  
            name="createNewBillToAccountNo"
            className="form-control"
            errorMessage="Enter Create new bill-to account #"
            validate={{ required: { value: false}}}
            value={props.createNewBillToAccountNoValue} 
            onChange={e => { props.createNewBillToAccountNoOnchange(e.target.value) }}
            disabled={!props.isBillingAddressDiffThanDeliveryValue?true:false}
            />
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg="12">
          <div className="mb-3">
            <Label htmlFor="billingNotes">Notes</Label>
            <AvField
            id="billingNotes"
            type="textarea"
            rows={7}  
            name="billingNotes"
            className="form-control"
            errorMessage="Enter Notes"
            validate={{ required: { value: false}}}
            value={props.billingNotesValue} 
            onChange={e => { props.billingNotesOnchange(e.target.value) }}            
            />
          </div>
        </Col>

      </Row>
              
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}