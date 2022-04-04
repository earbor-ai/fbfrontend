import { useState } from "react"

import {
  Row,
  Col,
  Label,
  FormGroup,
  Card, CardBody, CardTitle, CardSubtitle
} from "reactstrap"

import {
  AvField,
  AvGroup,
  AvInput
} from "availity-reactstrap-validation"

import {
  NARFBranchNoList,
  NARFDistrictNoList,
  NARFOperatingUnitList,
  NARFPurposeList,
  NARFRegionNoList,
  NARFRouteList,
  NARFBusinessUnitList,
  NARFSearchTypeList,
  NARFSearchTypeListRDS,
  NARFSearchTypeListNTL,
  NARFSearchTypeListDSD,
  usStates,
  validateObject,
} from "../FBLibrary/fbglobals"

export const CustomerInformation = (props) => {

  const [searchTypeFilteredList, setSearchTypeFilteredList] = useState([]);

  function onClickRoute(value) {
    let found = NARFRouteList.find(element => element.code === value);
    if (found) {
      props.routeOnchange(value);
      props.businessUnitNTLOnchange("");
      props.regionNoOnchange(found["region"]);
      props.branchNoOnchange(found["branch"]);
      props.districtNoOnchange(found["district"]);
      }
    else {
      props.regionNoOnchange("");
      props.branchNoOnchange("");
      props.districtNoOnchange("");
    }
  }

  function onBlurRoute(value) {
    if (isValid("code", value, NARFRouteList)) {
      //pass
    }
    else {
      props.routeOnchange("");
      props.businessUnitNTLOnchange("");
      props.regionNoOnchange("");
      props.branchNoOnchange("");
      props.districtNoOnchange("");
    }
  }

  function onClickOperatingUnit(value) {
    props.routeOnchange("");
    props.branchNoOnchange("");
    props.districtNoOnchange("");
    props.regionNoOnchange("");
    props.businessUnitNTLOnchange("");

    if (value && value.length !== 0) {
      if (value === "RDS") {
        setSearchTypeFilteredList(NARFSearchTypeListRDS);
        props.setInputFields([{categoryCode:"Category Allied Adjustment", categoryValue:""}])
      }
      else if (value === "NTL") {
        setSearchTypeFilteredList(NARFSearchTypeListNTL);
        props.setInputFields([{categoryCode:"", categoryValue:""}])
      }
      else if (value === "DSD") { //highjump
        setSearchTypeFilteredList(NARFSearchTypeListDSD);
        props.setInputFields([{categoryCode:"", categoryValue:""}])
      } 
    }

  }

  function onClickBusinessUnit(value) {
    let found = NARFBusinessUnitList.find(element => element.code === value);
    if (found) {
      props.businessUnitNTLOnchange(value);
      props.routeOnchange("");
      props.regionNoOnchange(found["region"]);
      props.branchNoOnchange(found["branch"]);
      props.districtNoOnchange(found["district"]);
    }
    else {
      props.regionNoOnchange("");
      props.branchNoOnchange("");
      props.districtNoOnchange("");
    }
  }

  function onBlurBusinessUnitNTL(value) {
    if (isValid("code", value, NARFBusinessUnitList)) {
      //pass
    }
    else {
      props.businessUnitNTLOnchange("");
      props.routeOnchange("");
      props.regionNoOnchange("");
      props.branchNoOnchange("");
      props.districtNoOnchange("");
    }
  }

  function isValid(elementName, elementValue, records) {

    return (validateObject(elementName, elementValue, records));
    
  }

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
          <Label for="originatorName">Originator Name<code>*</code></Label>
          <AvField
            name="originatorName"
            type="text"
            errorMessage="Enter Originator Name"
            className="form-control"
            validate={{ required: { value: true } }}
            id="originatorName"
            value={props.originatorNameValue}
            onChange={e => { props.originatorNameOnchange(e.target.value) }}
          />
        </div>
      </Col>

      <Col lg="6">
        <div className="mb-3">
          <Label for="originatorPhone">Originator Phone</Label>
          <AvField
            name="originatorPhone"
            type="text"
            errorMessage="Enter Originator Phone"
            className="form-control"
            validate={{ required: { value: false } }}
            id="originatorPhone"
            value={props.originatorPhoneValue}
            onChange={e => { props.originatorPhoneOnchange(e.target.value) }}
          />
        </div>
      </Col>
    </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      
      
      <Row>
        <CardTitle></CardTitle>
        <Col className="col-12">
          <Card>
            <CardBody>
              <Row>
        <Col lg="6">
          <FormGroup className="mb-3">
            <Label htmlFor="purpose">Purpose<code>*</code></Label>
            <div className="input-group">
              <div className="input-group-text"><i className={"uil-search"}></i></div>
              <AvInput
              placeholder="Type to search..."
              id="purpose"  
              name="purpose"
              className="form-control"
              errorMessage="Enter purpose"
              validate={{ required: { value: true}}}
              value={props.purposeValue} 
              onChange={e => { props.purposeOnchange(e.target.value) }}
              list="purposeList"
              onBlur={e=>{isValid("code", e.target.value.split(" - ")[0], NARFPurposeList)?props.purposeOnchange(e.target.value):props.purposeOnchange("")}}
              >
              </AvInput>
              <datalist
                  id="purposeList"
                  >
                  {NARFPurposeList.map((element) => 
                  <option key={element.code}>{element.code + " - " + element.desc}</option>
                  )} 
                </datalist>
            </div>
          </FormGroup>
        </Col>
        
        <Col lg="6">
          <div className="mb-3">
            <Label htmlFor="operatingUnit">Operating Unit<code>*</code></Label>
            <AvField
            id="operatingUnit"
            type="select"  
            name="operatingUnit"
            className="form-control"
            errorMessage="Enter Operating Unit"
            validate={{ required: { value: true}}}
            value={props.operatingUnitValue} 
              onChange={e => { props.operatingUnitOnchange(e.target.value); onClickOperatingUnit(e.target.value)}}
            >
              {NARFOperatingUnitList.map((element) => 
            <option key={element.code} value={element.code}>{element.desc}</option>
            )}
            </AvField>
          </div>
        </Col>
      </Row>

              <Row>
        <Col lg="6" hidden={(props.operatingUnitValue==="RDS" || props.operatingUnitValue==="DSD")?false:true}>
          <FormGroup className="mb-3">
              <Label htmlFor="route">Route<code>*</code></Label>
              <div className="input-group">
                <div className="input-group-text"><i className={"uil-search"}></i></div>
                <AvInput
                  placeholder="Type to search..."
                  id="route"
                  name="route"
                  className="form-control"
                  errorMessage="Enter route no."
                  validate={{ required: { value: (props.operatingUnitValue === "RDS" || props.operatingUnitValue === "DSD") ? true : false } }}
                  value={props.routeValue}
                  onChange={e => { onClickRoute(e.target.value) }}
                  list="routeNoList"
                  onBlur={e => { onBlurRoute(e.target.value) }}
                >
                </AvInput>
                <datalist
                  id="routeNoList"
                  >
                  {NARFRouteList.map((element) => 
                  <option key={element.code}>{element.code}</option>
                  )} 
                </datalist>
              </div>
          </FormGroup>                              
        </Col>

        <Col lg="6" hidden={(props.operatingUnitValue==="NTL")?false:true}>
          <FormGroup className="mb-3">
            <Label htmlFor="businessUnitNTL">Business Unit<code>*</code></Label>
            <div className="input-group">
              <div className="input-group-text"><i className={"uil-search"}></i></div>
              <AvInput
              placeholder="Type to search..."
              id="businessUnitNTL"
              name="businessUnitNTL"
              className="form-control"
              errorMessage="Enter Business Unit"
              validate={{ required: { value: (props.operatingUnitValue==="NTL")?true:false}}}
              value={props.businessUnitNTLValue} 
                onChange={e => { onClickBusinessUnit(e.target.value); }}
                        list="businessUnitNTLlist"
              onBlur={e=> onBlurBusinessUnitNTL(e.target.value.split(" - ")[0])}
              >
                
              </AvInput>
              <datalist
                  id="businessUnitNTLlist"
                  >
                  {NARFBusinessUnitList.map((element) => 
                  <option key={element.code} >{element.code + " - " + element.desc}</option>
                  )}
                </datalist>
            </div>
          </FormGroup>
                </Col>
                
                <Col lg="6" hidden={(props.operatingUnitValue==="RDS" || props.operatingUnitValue==="DSD")?false:true}>
          <div className="mb-3">
            <Label htmlFor="branchNoRDSDSD">Branch#<code> *</code></Label>
            <AvField
            id="branchNoRDSDSD"
            type="text"  
            name="branchNoRDSDSD"
            className="form-control"
            errorMessage="Enter Branch No."
            validate={{ required: { value: (props.operatingUnitValue==="RDS" || props.operatingUnitValue==="DSD")?true:false}}}
            value={props.branchNoValue} 
                      onChange={e => { props.branchNoOnchange(e.target.value) }}
            disabled={true}
            />
          </div>
        </Col>
        
        <Col lg="6" hidden={(props.operatingUnitValue==="NTL")?false:true}>
          <div className="mb-3">
            <Label htmlFor="branchNoNTL">Branch#<code> *</code></Label>
            <AvField
            id="branchNoNTL"
            type="select"  
            name="branchNoNTL"
            className="form-control"
            errorMessage="Enter Branch No."
            validate={{ required: { value: (props.operatingUnitValue==="NTL")?true:false}}}
            value={props.branchNoValue} 
            onChange={e => {props.branchNoOnchange(e.target.value)}}
            >
              {NARFBranchNoList.map((element) => 
            <option key={element.code} value={element.code}>{element.desc}</option>
            )}
            </AvField>
          </div>
        </Col>
      
              </Row>
              <Row>
        <Col lg="6" hidden={(props.operatingUnitValue==="RDS" || props.operatingUnitValue==="DSD")?false:true}>
          <div className="mb-3">
            <Label htmlFor="districtNoRDSDSD">District#<code>*</code></Label>
            <AvField
            id="districtNoRDSDSD"
            type="text"  
            name="districtNoRDSDSD"
            className="form-control"
            errorMessage="Enter District No."
            validate={{ required: { value: (props.operatingUnitValue==="RDS" || props.operatingUnitValue==="DSD")?true:false}}}
            value={props.districtNoValue} 
                      onChange={e => { props.districtNoOnchange(e.target.value) }}
            disabled={true}
            />
          </div>
        </Col>
        <Col lg="6" hidden={(props.operatingUnitValue==="NTL")?false:true}>
          <FormGroup className="mb-3">
            <Label htmlFor="districtNoNTL">District#<code>*</code></Label>
            <div className="input-group">
              <div className="input-group-text"><i className={"uil-search"}></i></div>
              <AvInput
              placeholder="Type to search..."
              id="districtNoNTL"  
              name="districtNoNTL"
              className="form-control"
              errorMessage="Enter District No."
              validate={{ required: { value: (props.operatingUnitValue==="NTL")?true:false}}}
              value={props.districtNoValue} 
              onChange={e => { props.districtNoOnchange(e.target.value) }}
              list="districtNoNTLlist"
              onBlur={e=>{isValid("code", e.target.value.split(" - ")[0], NARFDistrictNoList)?props.districtNoOnchange(e.target.value):props.districtNoOnchange("")}}
              >
                
              </AvInput>
              <datalist
                id="districtNoNTLlist"
                >
                {NARFDistrictNoList.map((element) => 
              <option key={element.code}>{element.code + " - " + element.desc}</option>
              )}
              </datalist>
            </div>
          </FormGroup>
        </Col>

        <Col lg="6" hidden={(props.operatingUnitValue==="RDS" || props.operatingUnitValue==="DSD")?false:true}>
          <div className="mb-3">
            <Label htmlFor="regionNoRDSDSD">Region#<code>*</code></Label>
            <AvField
            id="regionNoRDSDSD"
            type="text"  
            name="regionNoRDSDSD"
            className="form-control"
            errorMessage="Enter Region No."
            validate={{ required: { value: (props.operatingUnitValue==="RDS" || props.operatingUnitValue==="DSD")?true:false}}}
            value={props.regionNoValue} 
                      onChange={e => { props.regionNoOnchange(e.target.value) }}
            disabled={true}
            />
          </div>
        </Col>
        
        <Col lg="6" hidden={(props.operatingUnitValue==="NTL")?false:true}>
          <div className="mb-3">
            <Label htmlFor="regionNo">Region#<code>*</code></Label>
            <AvField
            id="regionNo"
            type="select"  
            name="regionNo"
            className="form-control"
            errorMessage="Enter Region No."
            validate={{ required: { value: (props.operatingUnitValue==="NTL")?true:false}}}
            value={props.regionNoValue} 
            onChange={e => {props.regionNoOnchange(e.target.value)}}
            >
              {NARFRegionNoList.map((element) => 
            <option key={element.code} value={element.code}>{element.code + " - " + element.desc}</option>
            )}
            </AvField>
          </div>
        </Col>
      </Row>
            
            
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col className="col-12">
          <Card>
            <CardBody>
      
              <Row>
        <Col lg="6">
          <FormGroup className="mb-3">
            <Label htmlFor="searchType">Search Type<code>*</code></Label>
            <div className="input-group">
              <div className="input-group-text"><i className={"uil-search"}></i></div>
              <AvInput
              placeholder="Type to search..."
              id="searchType" 
              name="searchType"
              className="form-control"
              errorMessage="Enter Search Type"
              validate={{ required: { value: true}}}
              value={props.searchTypeValue} 
              onChange={e => { props.searchTypeOnchange(e.target.value) }}
              list="searchTypeList"
              onBlur={e=>{isValid("code", e.target.value.split(" - ")[0], searchTypeFilteredList)?props.searchTypeOnchange(e.target.value):props.searchTypeOnchange("")}}
              >
                
              </AvInput>
              <datalist
                id="searchTypeList"
                >
                {searchTypeFilteredList.map((element) => 
                <option key={element.code}>{element.code + " - " + element.desc}</option>
                )}
              </datalist>
            </div>
          </FormGroup>
        </Col>

        </Row>

              
              </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <CardTitle></CardTitle>
        <Col className="col-12">
          <Card>
            <CardBody>

              <Row>
        <Col lg="6">
          <div className="mb-3">
            <Label for="alphaDBAName">Alpha/DBA Name<code>*</code></Label>
            <AvField
              name="alphaDBAName"
              type="text"
              errorMessage="Enter Alpha/DBA Name"
              className="form-control"
              validate={{ required: { value: true } }}
              id="alphaDBAName"
              value={props.alphaDBANameValue}
              onChange={e => {props.alphaDBANameOnchange(e.target.value)}}
            />
          </div>
        </Col>

        <Col lg="6">
          <div className="mb-3">
            <Label for="legalName">Legal Name</Label>
            <AvField
              name="legalName"
              type="text"
              errorMessage="Enter Legal Name"
              className="form-control"
              validate={{ required: { value: false } }}
              id="legalName"
              value={props.legalNameValue}
              onChange={e => {props.legalNameOnchange(e.target.value)}}
            />
          </div>
        </Col>
      </Row>

              <Row>
        <Col lg="6">
          <div className="mb-3">
            <Label for="deliveryAddressLine1">Delivery Address Line 1<code>*</code></Label>
            <AvField
              name="deliveryAddressLine1"
              type="text"
              errorMessage="Enter Delivery Address Line 1"
              className="form-control"
              validate={{ required: { value: true } }}
              id="deliveryAddressLine1"
              value={props.deliveryAddressLine1Value}
              onChange={e => {props.deliveryAddressLine1Onchange(e.target.value)}}
            />
          </div>
        </Col>

        <Col lg="6">
          <div className="mb-3">
            <Label for="deliveryAddressLine2">Address Line 2</Label>
            <AvField
              name="deliveryAddressLine2"
              type="text"
              errorMessage="Enter Delivery Address Line 2"
              className="form-control"
              validate={{ required: { value: false } }}
              id="deliveryAddressLine2"
              value={props.deliveryAddressLine2Value}
              onChange={e => {props.deliveryAddressLine2Onchange(e.target.value)}}
            />
          </div>
        </Col>
      </Row>

              <Row>
        <Col lg="6">
          <div className="mb-3">
            <Label for="deliveryAddressLine3">Address Line 3</Label>
            <AvField
              name="deliveryAddressLine3"
              type="text"
              errorMessage="Enter Delivery Address Line 3"
              className="form-control"
              validate={{ required: { value: false } }}
              id="deliveryAddressLine3"
              value={props.deliveryAddressLine3Value}
              onChange={e => {props.deliveryAddressLine3Onchange(e.target.value)}}
            />
          </div>
        </Col>

        <Col lg="6">
          <div className="mb-3">
            <Label for="deliveryAddressLine4">Address Line 4</Label>
            <AvField
              name="deliveryAddressLine4"
              type="text"
              errorMessage="Enter Delivery Address Line 4"
              className="form-control"
              validate={{ required: { value: false } }}
              id="deliveryAddressLine4"
              value={props.deliveryAddressLine4Value}
              onChange={e => {props.deliveryAddressLine4Onchange(e.target.value)}}
            />
          </div>
        </Col>
      </Row>

              <Row>
        <Col lg="6">
          <div className="mb-3">
            <Label for="city">City<code>*</code></Label>
            <AvField
              name="city"
              type="text"
              errorMessage="Enter City"
              className="form-control"
              validate={{ required: { value: true } }}
              id="city"
              value={props.cityValue}
              onChange={e => {props.cityOnchange(e.target.value)}}
            />
          </div>
        </Col>

        <Col lg="6">
          <div className="mb-3">
            <Label for="state">State<code>*</code></Label>
            <AvField
              name="state"
              type="select"
              errorMessage="Enter State"
              className="form-control"
              validate={{ required: { value: true } }}
              id="state"
              value={props.stateValue}
              onChange={e => {props.stateOnchange(e.target.value)}}
            >
              {usStates.map((element) => 
              <option key={element.masterCode} value={element.masterCode}>{element.masterDesc}</option>
              )}
            </AvField>
          </div>
        </Col>
      </Row>
      
              <Row>
        <Col lg="6">
          <div className="mb-3">
            <Label for="zipCode">Zip Code<code>*</code></Label>
            <AvField
              name="zipCode"
              type="text"
              errorMessage="Enter Zip Code"
              className="form-control"
              validate={{ required: { value: true } }}
              id="zipCode"
              value={props.zipCodeValue}
              onChange={e => {props.zipCodeOnchange(e.target.value)}}
            />
          </div>
        </Col>

        <Col lg="6">
          <div className="mb-3">
            <Label for="country">County</Label>
            <AvField
              name="country"
              type="text"
              errorMessage="Enter County"
              className="form-control"
              validate={{ required: { value: false } }}
              id="country"
              value={props.countyValue}
              onChange={(e) => {props.countyOnchange(e.target.value)}}
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