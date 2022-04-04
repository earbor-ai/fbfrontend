import {
  Row,
  Col,
  Label,
  Card, CardBody, CardTitle, CardSubtitle
} from "reactstrap"

import {
  AvField,
} from "availity-reactstrap-validation"

import {
  usZipCodeMinLen,
  usStates,
} from "../FBLibrary/fbglobals"


export const BillingDetails1 = (props) => {
  

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
            <Label htmlFor="alphaName">Alpha Name<code>*</code></Label>
            <AvField
            id="alphaName"
            type="text"  
            name="alphaName"
            className="form-control"
            errorMessage="Enter Alpha Name"
            validate={{ required: { value: (props.isBillingAddressDiffThanDeliveryValue)?true:false}}}
            value={props.billingAlphaNameValue} 
            onChange={e => { props.billingAlphaNameOnchange(e.target.value) }}
            disabled={!props.isBillingAddressDiffThanDeliveryValue?true:false}
            />
          </div>
        </Col>
        
        <Col lg="6">
          <div className="mb-3">
            <Label htmlFor="legalMailingName">Legal/Mailing Name<code>*</code></Label>
            <AvField
            id="legalMailingName"
            type="text"  
            name="legalMailingName"
            className="form-control"
            errorMessage="Enter Legal/Mailing Name"
            validate={{ required: { value: (props.isBillingAddressDiffThanDeliveryValue)?true:false}}}
            value={props.legalMailingNameValue} 
            onChange={e => { props.legalMailingNameOnchange(e.target.value) }}
            disabled={!props.isBillingAddressDiffThanDeliveryValue?true:false}
            />
          </div>
        </Col>
      </Row>

              <Row>
        <Col lg="6">
          <div className="mb-3">
            <Label htmlFor="billingAddress">Address<code>*</code></Label>
            <AvField
            id="billingAddress"
            type="text"  
            name="billingAddress"
            className="form-control"
            errorMessage="Enter Address"
            validate={{ required: { value: (props.isBillingAddressDiffThanDeliveryValue)?true:false}}}
            value={props.billingAddressValue} 
            onChange={e => { props.billingAddressOnchange(e.target.value) }}
            disabled={!props.isBillingAddressDiffThanDeliveryValue?true:false}  
            />
          </div>
        </Col>
        
        <Col lg="6">
          <div className="mb-3">
            <Label htmlFor="billingCity">City<code>*</code></Label>
            <AvField
            id="billingCity"
            type="text"  
            name="billingCity"
            className="form-control"
            errorMessage="Enter City"
            validate={{ required: { value: (props.isBillingAddressDiffThanDeliveryValue)?true:false}}}
            value={props.billingCityValue} 
            onChange={e => { props.billingCityOnchange(e.target.value) }}
            disabled={!props.isBillingAddressDiffThanDeliveryValue?true:false}
            />
          </div>
        </Col>
      </Row>

              <Row>
        <Col lg="6">
          <div className="mb-3">
            <Label htmlFor="billingState">State<code>*</code></Label>
            <AvField
            id="billingState"
            type="select"  
            name="billingState"
            className="form-control"
            errorMessage="Enter State"
            validate={{ required: { value: (props.isBillingAddressDiffThanDeliveryValue)?true:false}}}
            value={props.billingStateValue} 
            onChange={e => { props.billingStateOnchange(e.target.value) }}
            disabled={!props.isBillingAddressDiffThanDeliveryValue?true:false}  
            >
            {usStates.map((element) => 
            <option key={element.masterCode} value={element.masterCode}>{element.masterDesc}</option>
            )}
            </AvField>
          </div>
        </Col>
        
        <Col lg="6">
          <div className="mb-3">
            <Label htmlFor="billingZipCode">Zip Code<code>*</code></Label>
            <AvField
            id="billingZipCode"
            type="text"  
            name="billingZipCode"
            className="form-control"
            errorMessage="Enter Zip Code"
            validate={{
                required: { value: (props.isBillingAddressDiffThanDeliveryValue) ? true : false },
                pattern: {value: '^[0-9]+$'},
                minLength: {value: usZipCodeMinLen},
                maxLength: {value: usZipCodeMinLen}
              }}
            value={props.billingZipCodeValue} 
            onChange={e => { props.billingZipCodeOnchange(e.target.value) }}
            disabled={!props.isBillingAddressDiffThanDeliveryValue?true:false}
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