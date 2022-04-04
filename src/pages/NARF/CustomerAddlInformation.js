import { Fragment, useState, useEffect } from "react"

import {
  Button,
  Row,
  Col,
  Label,
  FormGroup,
  Card, CardBody, CardTitle, CardSubtitle
} from "reactstrap"

import {
  AvField,
  AvInput,
  AvFeedback
} from "availity-reactstrap-validation"

import { isValid } from "./CustomerInformation"

import {
  NARFTaxGroupList,
  NARFManagedByList,
  NARFCustomerSegmentList,
  NARFNewAcctAcqByList,
  NARFEquipSerLevelList,
  NARFCustomerGroupList,
  NARFPOSProgrameList,
  NARFAlliedEquipProgList,
  NARFPriceProtectionList,
  NARFAlliedDiscountList,
  NARFWeeklyCoffeeVolumeList,
  NARFEquipProgrameList,
  NARFEstiBiWeeklySalesList,
  NARFTermsOFSaleList,
  NARFCreditLimitList,
  NARFAdjustmentScheduleList,
  NARFFreightHandlingCodeList,
  NARFDailyDeliverySequenceList,
  NARFFreqDailyDeliveryList,
  NARFParentNoList,
  NARFEmployeeTitleList,
  
  NARFCatValueRDSList,
  NARFCatCodeNTLList,
  NARFCatCodeDSDList,
  NARFCatValueDSDList,

  validateObject,

} from "../FBLibrary/fbglobals"


export const CustomerAddlInformation = (props) => {
  const isDebug = true;
  
  const [NARFCatValueRDSListFiltered, setNARFCatValueRDSListFiltered] = useState(NARFCatValueRDSList);
  const [NARFCatCodeNTLListFiltered, setNARFCatCodeNTLListFiltered] = useState(NARFCatCodeNTLList);
  const [NARFCatCodeDSDListFiltered, setNARFCatCodeDSDListFiltered] = useState(NARFCatCodeDSDList);
  const [NARFCatValueDSDListFiltered, setNARFCatValueDSDListFiltered] = useState(NARFCatValueDSDList);
  
  useEffect(() => {
    
    if (isDebug) {
      console.log("CustomerAddlInformation - useEffect: Begin - props");
      console.log(props)
    }
    //set filtered list
    if ((props.operatingUnitValue === "RDS")) {
      filterNARFCatValueRDSList(props.inputFields);
    }
    if (props.operatingUnitValue === "NTL") {
      filterNARFCatCodeNTLList(props.inputFields);
    }
    if (props.operatingUnitValue === "DSD") {
      filterNARFCatCodeDSDList(props.inputFields);
      filterNARFCatValueDSDList(props.inputFields);
    }
    if(isDebug)
      console.log("CustomerAddlInformation - useEffect: End");
    
  }, [props.operatingUnitValue]);

  const handleAddFields = () => {
    const values = [...props.inputFields];
    if(props.operatingUnitValue === "RDS")
      values.push({ categoryCode: "Category Allied Adjustment", categoryValue: "" });
    if(props.operatingUnitValue === "NTL" || props.operatingUnitValue === "DSD")
      values.push({ categoryCode: "", categoryValue: "" });
    props.setInputFields(values);
  };
  
  const handleRemoveFields = index => {
    const values = [...props.inputFields];
    values.splice(index, 1);
    props.setInputFields(values);

    if (props.operatingUnitValue === "RDS") {
      filterNARFCatValueRDSList(values);
    }
    else if (props.operatingUnitValue === "NTL") {
      filterNARFCatCodeNTLList(values);
    }
    else if (props.operatingUnitValue === "DSD") {
      filterNARFCatCodeDSDList(values);
      filterNARFCatValueDSDList(values);
    }

  };
  
  const handleInputChange = (index, event) => {
    var values = [...props.inputFields];
    let key = "";
    
    if (event.target.name.search("categoryCode") > -1) {
      key = "categoryCode";
    }
    else if (event.target.name.search("categoryValue") > -1) {
      key = "categoryValue";
    }

    values[index][key] = event.target.value;
    
    props.setInputFields(values);

    //set filtered list
    if (key === "categoryValue" && (props.operatingUnitValue === "RDS")) {
      filterNARFCatValueRDSList(values);
    }
    if (key === "categoryCode" && props.operatingUnitValue === "NTL") {
      filterNARFCatCodeNTLList(values);
    }
    if (key === "categoryCode" && props.operatingUnitValue === "DSD") {
      filterNARFCatCodeDSDList(values);
    }
    if (key === "categoryValue" && props.operatingUnitValue === "DSD") {
      filterNARFCatValueDSDList(values);
    }
  };

  /////////////////////////////////////

  function filterNARFCatValueRDSList(values) {
    if (!values) //undefined
      values = [...props.inputFields];
    const filteredList = NARFCatValueRDSList.filter(element => {
      if (values.find(e => e.categoryValue === element.code + " - " + element.desc))
        return false;
      else
        return true;
    });
    setNARFCatValueRDSListFiltered(filteredList);  
  }

  function filterNARFCatCodeNTLList(values) {
    if (!values) //undefined
      values = [...props.inputFields];
    const filteredList = NARFCatCodeNTLList.filter(element => {
      if (values.find(e => e.categoryCode === element.desc))
        return false;
      else
        return true;
    });
    setNARFCatCodeNTLListFiltered(filteredList);  
  }

  function filterNARFCatCodeDSDList(values) {
    if (!values) //undefined
      values = [...props.inputFields];
    const filteredList = NARFCatCodeDSDList.filter(element => {
      if (values.find(e => e.categoryCode === element.code + " - " + element.desc))
        return false;
      else
        return true;
    });
    setNARFCatCodeDSDListFiltered(filteredList);  
  }

  function filterNARFCatValueDSDList(values) {
    if (!values) //undefined
      values = [...props.inputFields];
    const filteredList = NARFCatValueDSDList.filter(element => {
      if (values.find(e => e.categoryValue === element.code + " - " + element.desc))
        return false;
      else
        return true;
    });
    setNARFCatValueDSDListFiltered(filteredList);  
  }

  //////////////////////////////////////

  return (
    <div>

      <Row disabled={(props.recordMode==="readonly")?true:false}>
        <CardTitle>Customer Additional Details</CardTitle>
        <Col className="col-12">
          <Card>
            <CardBody>
              <Row>
        <Col lg="6">
          <div className="mb-3">
            <Label for="federalTaxIDNo">Federal Tax ID#</Label>
            <AvField
              name="federalTaxIDNo"
              type="text"
              errorMessage="Enter Federal Tax ID"
              className="form-control"
              validate={{ required: { value: false } }}
              id="federalTaxIDNo"
              value={props.federalTaxIDNoValue}
              onChange={e => {props.federalTaxIDNoOnchange(e.target.value)}}
            />
          </div>
        </Col>

        <Col lg="6">
          <FormGroup className="mb-3">
            <Label htmlFor="newAcctAcquiredBy">New Acct Acquired by: SA, BDM, TSR, NAM<code hidden={(props.operatingUnitValue === "RDS" || props.operatingUnitValue === "DSD") ? false : true}>*</code></Label>
            <div className="input-group">
              <div className="input-group-text"><i className={"uil-search"}></i></div>
              <AvInput
              placeholder="Type to search..."
              id="newAcctAcquiredBy"
              name="newAcctAcquiredBy"
              className="form-control"
              errorMessage="Select New Acct Acquired by"
              validate={{ required: { value: (props.operatingUnitValue==="RDS" || props.operatingUnitValue==="DSD")?true:false}}}
              value={props.newAcctAcquiredByValue} 
              onChange={e => { props.newAcctAcquiredByOnchange(e.target.value) }}
              list="newAcctAcquiredByList"
              onBlur={e=>{validateObject("code", e.target.value.split(" - ")[0], NARFNewAcctAcqByList)?props.newAcctAcquiredByOnchange(e.target.value):props.newAcctAcquiredByOnchange("")}}
              >
              </AvInput>
              <datalist id="newAcctAcquiredByList">
                <option key="" value="">{"Select New Acct Acquired by"}</option>
                  {NARFNewAcctAcqByList.map((element) => 
                <option key={element.code}>{element.code + " - " + element.desc}</option>
                )}
              </datalist>
            </div>
          </FormGroup>
        </Col>
        
      </Row>

              <Row>
        <Col lg="6">
          <FormGroup className="mb-3">
            <Label for="resaleCertificateNo">Resale Certificate#<code hidden={(props.taxGroupValue==="R")?false:true}>*</code></Label>
            <AvField
              name="resaleCertificateNo"
              type="text"
              errorMessage="Enter Resale Certificate No."
              className="form-control"
              validate={{ required: { value: (props.taxGroupValue==="R")?true:false } }}
              id="resaleCertificateNo"
              value={props.resaleCertificateNoValue}
              onChange={e => {props.resaleCertificateNoOnchange(e.target.value)}}
            />
          </FormGroup>
          <input type={((props.resaleCertificateNoValue!=="" && props.headerRecord===null) || (props.resaleCertificateNoValue!=="" && props.headerRecord!==null && props.headerRecord["ResaleCertificateNumber"]===""))?"file":"hidden"} onChange={props.onResaleCertificateNoFileChange} />
        </Col>

        <Col lg="6">
          <FormGroup className="mb-3">
            <Label htmlFor="equipmentServiceLevel">Equipment Service Level<code hidden={(props.operatingUnitValue === "RDS" || props.operatingUnitValue === "DSD") ? false : true}>*</code></Label>
            <div className="input-group">
              <div className="input-group-text"><i className={"uil-search"}></i></div>
              <AvInput
              id="equipmentServiceLevel"
              placeholder="Type to search..."
              name="equipmentServiceLevel"
              className="form-control"
              errorMessage="Select Equipment Service Level"
              validate={{ required: { value: (props.operatingUnitValue==="RDS" || props.operatingUnitValue==="DSD")?true:false}}}
              value={props.equipmentServiceLevelValue} 
              onChange={e => { props.equipmentServiceLevelOnchange(e.target.value) }}
              list="equipmentServiceLevelList"
              onBlur={e=>{validateObject("code", e.target.value.split(" - ")[0], NARFEquipSerLevelList)?props.equipmentServiceLevelOnchange(e.target.value):props.equipmentServiceLevelOnchange("")}}          
              >
                
              </AvInput>
              <datalist id="equipmentServiceLevelList">
              <option key="" value="">{"Select Equipment Service Level"}</option>
                {NARFEquipSerLevelList.map((element) => 
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
          <FormGroup className="mb-3">
            <Label htmlFor="taxGroup">Tax Group<code>*</code></Label>
            <div className="input-group">
              <div className="input-group-text"><i className={"uil-search"}></i></div>
              <AvInput
              placeholder="Type to search..."
              id="taxGroup" 
              name="taxGroup"
              className="form-control"
              errorMessage="Select Tax Group"
              validate={{ required: { value: true}}}
              value={props.taxGroupValue} 
                onChange={e => { props.taxGroupOnchange(e.target.value) }}
              list="taxGroupList"
              onBlur={e=>{validateObject("code", e.target.value.split(" - ")[0], NARFTaxGroupList)?props.taxGroupOnchange(e.target.value):props.taxGroupOnchange("")}}
              >
                
              </AvInput>
              <datalist
                id="taxGroupList"
                >
                <option key="" value="">{"Select Tax Group"}</option>
                {NARFTaxGroupList.map((element) => 
              <option key={element.code}>{element.code + " - " + element.desc}</option>
              )}
              </datalist>
            </div>
          </FormGroup>
        </Col>
        
        <Col lg="6">
          <FormGroup className="mb-3">
            <Label htmlFor="managedBy">Managed by: STR or Sales Rep Code<code>*</code></Label>
            <div className="input-group">
              <div className="input-group-text"><i className={"uil-search"}></i></div>
              <AvInput
              placeholder="Type to search..."
              id="managedBy" 
              name="managedBy"
              className="form-control"
              errorMessage="Enter Managed by"
              validate={{ required: { value: true}}}
              value={props.managedByValue} 
                onChange={e => { props.managedByOnchange(e.target.value) }}
              list="managedByList"
              onBlur={e=>{validateObject("code", e.target.value.split(" - ")[0], NARFManagedByList)?props.managedByOnchange(e.target.value):props.managedByOnchange("")}}
              >
              </AvInput>
              <datalist
                id="managedByList"
                >
                {NARFManagedByList.map((element) => 
              <option key={element.code}>{element.code + " - " + element.desc}</option>
              )}
              </datalist>
            </div>
          </FormGroup>
          
        </Col>


              </Row>
              <Row>
        <Col lg="6">
          <FormGroup className="mb-3">
            <Label htmlFor="customerSegment">Customer Segment<code hidden={(props.operatingUnitValue === "RDS" || props.operatingUnitValue === "DSD") ? false : true}>*</code></Label>
            <div className="input-group">
              <div className="input-group-text"><i className={"uil-search"}></i></div>
              <AvInput
              id="customerSegment"
              placeholder="Type to search..."
              name="customerSegment"
              className="form-control"
              errorMessage="Select Customer Segment"
              validate={{ required: { value: (props.operatingUnitValue==="RDS" || props.operatingUnitValue==="DSD")?true:false}}}
              value={props.customerSegmentValue} 
              onChange={e => { props.customerSegmentOnchange(e.target.value) }}
              list="customerSegmentList"
              onBlur={e=>{validateObject("code", e.target.value.split(" - ")[0], NARFCustomerSegmentList)?props.customerSegmentOnchange(e.target.value):props.customerSegmentOnchange("")}}
              >
              </AvInput>
              <datalist id="customerSegmentList">
              <option key="" value="">{"Select Customer Segment"}</option>
                {NARFCustomerSegmentList.map((element) => 
              <option key={element.code}>{element.code + " - " + element.desc}</option>
              )}
            </datalist>
            </div>
          </FormGroup>
        </Col>
        <Col lg="6" hidden={(props.operatingUnitValue==="RDS")?false:true}>
          <FormGroup className="mb-3">
            <Label htmlFor="posProgram">POS Program</Label>
            <div className="input-group">
              <div className="input-group-text"><i className={"uil-search"}></i></div>
              <AvInput
              placeholder="Type to search..."
              id="posProgram"
              name="posProgram"
              className="form-control"
              errorMessage="Select POS Program"
              validate={{ required: { value: false}}}
              value={props.posProgramValue} 
              onChange={e => { props.posProgramOnchange(e.target.value) }}
              list="posProgramList"
              onBlur={e=>{validateObject("code", e.target.value.split(" - ")[0], NARFPOSProgrameList)?props.posProgramOnchange(e.target.value):props.posProgramOnchange("")}}
              >
              </AvInput>
              <datalist id="posProgramList">
              <option key="" value="">{"Select POS Program"}</option>
                {NARFPOSProgrameList.map((element) => 
              <option key={element.code}>{element.code + " - " + element.desc}</option>
              )}
              </datalist>
            </div>
          </FormGroup>
        </Col>

        </Row>

              <Row>
        
              </Row>

              <Row>
                
        <Col lg="6" hidden={(props.operatingUnitValue==="RDS")?false:true}>
          <FormGroup className="mb-3">
            <Label htmlFor="alliedEquipProgram">Allied Equip Program</Label>
            <div className="input-group">
              <div className="input-group-text"><i className={"uil-search"}></i></div>
              <AvInput
              placeholder="Type to search..."
              id="alliedEquipProgram" 
              name="alliedEquipProgram"
              className="form-control"
              errorMessage="Select Allied Equip Program"
              validate={{ required: { value: false}}}
              value={props.alliedEquipProgramValue} 
              onChange={e => { props.alliedEquipProgramOnchange(e.target.value) }}
              list="alliedEquipProgramList"
              onBlur={e=>{validateObject("code", e.target.value.split(" - ")[0], NARFAlliedEquipProgList)?props.alliedEquipProgramOnchange(e.target.value):props.alliedEquipProgramOnchange("")}}
              >
              </AvInput>
              <datalist id="alliedEquipProgramList">
              <option key="" value="">{"Select Allied Equip Program"}</option>
                {NARFAlliedEquipProgList.map((element) => 
              <option key={element.code}>{element.code + " - " + element.desc}</option>
              )}
            </datalist>
            </div>
          </FormGroup>
      </Col>
      <Col lg="6" hidden={(props.operatingUnitValue==="RDS")?false:true}>
          <FormGroup className="mb-3">
            <Label htmlFor="priceProtection">Price Protection</Label>
            <div className="input-group">
              <div className="input-group-text"><i className={"uil-search"}></i></div>
              <AvInput
              placeholder="Type to search..."
              id="priceProtection" 
              name="priceProtection"
              className="form-control"
              errorMessage="Select Price Protection"
              validate={{ required: { value: false}}}
              value={props.priceProtectionValue} 
              onChange={e => { props.priceProtectionOnchange(e.target.value) }}
              list="priceProtectionList"
              onBlur={e=>{validateObject("code", e.target.value.split(" - ")[0], NARFPriceProtectionList)?props.priceProtectionOnchange(e.target.value):props.priceProtectionOnchange("")}}
              >
              </AvInput>
              <datalist id="priceProtectionList">
              {NARFPriceProtectionList.map((element) => 
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
          <FormGroup className="mb-3">
            <Label htmlFor="customerGroup">Customer Group<code hidden={(props.operatingUnitValue==="RDS" || props.operatingUnitValue==="DSD")?false:true}>*</code></Label>
            <div className="input-group">
              <div className="input-group-text"><i className={"uil-search"}></i></div>
              <AvInput
              placeholder="Type to search..."
              id="customerGroup" 
              name="customerGroup"
              className="form-control"
              errorMessage="Select Customer Group"
              validate={{ required: { value: (props.operatingUnitValue==="RDS" || props.operatingUnitValue==="DSD")?true:false}}}
              value={props.customerGroupValue} 
                onChange={e => { props.customerGroupOnchange(e.target.value) }}
              list="customerGroupList"
              onBlur={e=>{validateObject("code", e.target.value.split(" - ")[0], NARFCustomerGroupList)?props.customerGroupOnchange(e.target.value):props.customerGroupOnchange("")}}
              >
              </AvInput>
              <datalist id="customerGroupList">
                <option key="" value="">{"Select Customer Group"}</option>
                {NARFCustomerGroupList.map((element) => 
                  <option key={element.code}>{element.code + " - " + element.desc}</option>
                )}
              </datalist>
            </div>
          </FormGroup>
        </Col>

        <Col lg="6">
          <FormGroup className="mb-3">
            <Label htmlFor="alliedDiscount">Allied Discount</Label>
            <div className="input-group">
              <div className="input-group-text"><i className={"uil-search"}></i></div>
              <AvInput
              placeholder="Type to search..."
              id="alliedDiscount" 
              name="alliedDiscount"
              className="form-control"
              errorMessage="Select Allied Discount"
              validate={{ required: { value: false}}}
              value={props.alliedDiscountValue} 
                onChange={e => { props.alliedDiscountOnchange(e.target.value) }}
              list="alliedDiscountList"
              onBlur={e=>{validateObject("code", e.target.value.split(" - ")[0], NARFAlliedDiscountList)?props.alliedDiscountOnchange(e.target.value):props.alliedDiscountOnchange("")}}
              >
              </AvInput>
              <datalist id="alliedDiscountList">
              {NARFAlliedDiscountList.map((element) => 
              <option key={element.code}>{element.code + " - " + element.desc}</option>
              )}
              </datalist>
            </div>
          </FormGroup>
        </Col>
      </Row>

              <Row>
        <Col lg="6">
          <FormGroup className="mb-3">
            <Label htmlFor="weeklyCoffeeVolume">Weekly Coffee Volume</Label>
            <div className="input-group">
              <div className="input-group-text"><i className={"uil-search"}></i></div>
              <AvInput
              placeholder="Type to search..."
              id="weeklyCoffeeVolume" 
              name="weeklyCoffeeVolume"
              className="form-control"
              errorMessage="Select Weekly Coffee Volume"
              validate={{ required: { value: false}}}
              value={props.weeklyCoffeeVolumeValue} 
              onChange={e => { props.weeklyCoffeeVolumeOnchange(e.target.value) }}
              list="weeklyCoffeeVolumeList"
              onBlur={e=>{validateObject("code", e.target.value.split(" - ")[0], NARFWeeklyCoffeeVolumeList)?props.weeklyCoffeeVolumeOnchange(e.target.value):props.weeklyCoffeeVolumeOnchange("")}}
              >
                
              </AvInput>
              <datalist id="weeklyCoffeeVolumeList">
              <option key="" value="">{"Select Weekly Coffee Volume"}</option>
                {NARFWeeklyCoffeeVolumeList.map((element) => 
              <option key={element.code}>{element.code + " - " + element.desc}</option>
              )}
              </datalist>
            </div>
          </FormGroup>
        </Col>
        
        <Col lg="6">
          <FormGroup className="mb-3">
            <Label htmlFor="equipmentProgram">Equipment Program</Label>
            <div className="input-group">
              <div className="input-group-text"><i className={"uil-search"}></i></div>
              <AvInput
                placeholder="Type to search..."
                id="equipmentProgram" 
                name="equipmentProgram"
                className="form-control"
                errorMessage="Select Equipment Program"
                validate={{ required: { value: false}}}
                value={props.equipmentProgramValue} 
                onChange={e => { props.equipmentProgramOnchange(e.target.value) }}
                list="equipmentProgramList"
                onBlur={e=>{validateObject("code", e.target.value.split(" - ")[0], NARFEquipProgrameList)?props.equipmentProgramOnchange(e.target.value):props.equipmentProgramOnchange("")}}
                >
                  
              </AvInput>
              <datalist id="equipmentProgramList">
              <option key="" value="">{"Select Equipment Program"}</option>
                  {NARFEquipProgrameList.map((element) => 
                <option key={element.code}>{element.code + " - " + element.desc}</option>
                )}
              </datalist>
            </div>
          </FormGroup>
        </Col>
      </Row>

              <Row>
        <Col lg="6">
          <FormGroup className="mb-3">
            <Label htmlFor="estimatedBiWeeklySales">Estimated Bi-Weekly Sales<code hidden={(props.operatingUnitValue === "DSD") ? false : true}>*</code></Label>
            <div className="input-group">
              <div className="input-group-text"><i className={"uil-search"}></i></div>
              <AvInput
              placeholder="Type to search..."
              id="estimatedBiWeeklySales"
              name="estimatedBiWeeklySales"
              className="form-control"
              errorMessage="Select Estimated Bi-Weekly Sales"
              validate={{ required: { value: (props.operatingUnitValue==="DSD")?true:false}}}
              value={props.estimatedBiWeeklySalesValue} 
              onChange={e => { props.estimatedBiWeeklySalesOnchange(e.target.value) }}
              list="estimatedBiWeeklySalesList"
              onBlur={e=>{validateObject("code", e.target.value.split("$")[1], NARFEstiBiWeeklySalesList)?props.estimatedBiWeeklySalesOnchange(e.target.value):props.estimatedBiWeeklySalesOnchange("")}}
              >
              </AvInput>
              <datalist id="estimatedBiWeeklySalesList">
              <option key="" value="">{"Select Estimated Bi-Weekly Sales"}</option>
                {NARFEstiBiWeeklySalesList.map((element) => 
              <option key={element.code}>{element.desc}</option>
              )}
              </datalist>
            </div>
          </FormGroup>
        </Col>
        
        <Col lg="6">
          <FormGroup className="mb-3">
            <Label htmlFor="termsOfSale">Terms of Sale<code>*</code></Label>
            <div className="input-group">
              <div className="input-group-text"><i className={"uil-search"}></i></div>
              <AvInput
              placeholder="Type to search..."
              id="termsOfSale"
              name="termsOfSale"
              className="form-control"
              errorMessage="Select Terms of Sale"
              validate={{ required: { value: true}}}
              value={props.termsOfSaleValue} 
              onChange={e => { props.termsOfSaleOnchange(e.target.value) }}
              list="termsOfSaleList"
              onBlur={e=>{validateObject("code", e.target.value.split(" - ")[0], NARFTermsOFSaleList)?props.termsOfSaleOnchange(e.target.value):props.termsOfSaleOnchange("")}}
              >

              </AvInput>
              <datalist id="termsOfSaleList">
              <option key="" value="">{"Select Terms of Sale"}</option>
                {NARFTermsOFSaleList.map((element) => 
              <option key={element.code}>{element.desc}</option>
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
            <Label htmlFor="creditLimit">Credit Limit<code>*</code></Label>
            <AvField
            id="creditLimit"
            type="text"  
            name="creditLimit"
            className="form-control"
            errorMessage="Enter Credit Limit"
            validate={{ required: { value: true}}}
            value={props.creditLimitValue} 
            onChange={e => {props.creditLimitOnchange(e.target.value)}}
            />
          </div>
        </Col>
        
        <Col lg="6">
          <FormGroup className="mb-3">
            <Label htmlFor="adjustmentSchedule">Adjustment Schedule<code>*</code></Label>
            <div className="input-group">
              <div className="input-group-text"><i className={"uil-search"}></i></div>
              <AvInput
              placeholder="Type to search..."
              id="adjustmentSchedule"
              name="adjustmentSchedule"
              className="form-control"
              errorMessage="Select Adjustment Schedule"
              validate={{ required: { value: true}}}
              value={props.adjustmentScheduleValue} 
              onChange={e => { props.adjustmentScheduleOnchange(e.target.value) }}
              list="adjustmentScheduleList"
              onBlur={e=>{validateObject("code", e.target.value, NARFAdjustmentScheduleList)?props.adjustmentScheduleOnchange(e.target.value):props.adjustmentScheduleOnchange("")}}
              >
                
              </AvInput>
              <datalist id="adjustmentScheduleList">
              <option key="" value="">{"Select Adjustment Schedule"}</option>
                {NARFAdjustmentScheduleList.map((element) => 
              <option key={element.code}>{element.code}</option>
              )}
              </datalist>
            </div>
          </FormGroup>
        </Col>
      </Row>

              <Row>
        <Col lg="6">
          <FormGroup className="mb-3">
            <Label htmlFor="freightHandlingCode">Freight Handling Code<code>*</code></Label>
            <div className="input-group">
              <div className="input-group-text"><i className={"uil-search"}></i></div>
              <AvInput
              placeholder="Type to search..."
              id="freightHandlingCode"
              name="freightHandlingCode"
              className="form-control"
              errorMessage="Select Freight Handling Code"
              validate={{ required: { value: true}}}
              value={props.freightHandlingCodeValue} 
              onChange={e => { props.freightHandlingCodeOnchange(e.target.value) }}
              list="freightHandlingCodeList"
              onBlur={e=>{validateObject("code", e.target.value.split(" - ")[0], NARFFreightHandlingCodeList)?props.freightHandlingCodeOnchange(e.target.value):props.freightHandlingCodeOnchange("")}}
              >
              </AvInput>
              <datalist id="freightHandlingCodeList">
              <option key="" value="">{"Select Freight Handling Code"}</option>
                {NARFFreightHandlingCodeList.map((element) => 
              <option key={element.code}>{element.code + " - " + element.desc}</option>
              )}
              </datalist>
            </div>
          </FormGroup>
        </Col>
        
        <Col lg="6" hidden={(props.operatingUnitValue==="RDS" || props.operatingUnitValue==="DSD")?false:true}>
          <FormGroup className="mb-3">
            <Label htmlFor="dailyDeliverySequence">Daily Delivery Sequence</Label>
            <div className="input-group">
              <div className="input-group-text"><i className={"uil-search"}></i></div>
              <AvInput
              placeholder="Type to search..."
              id="dailyDeliverySequence" 
              name="dailyDeliverySequence"
              className="form-control"
              errorMessage="Select Daily Delivery Sequence"
              validate={{ required: { value: false}}}
              value={props.dailyDeliverySequenceValue} 
              onChange={e => { props.dailyDeliverySequenceOnchange(e.target.value) }}
              list="dailyDeliverySequenceList"
              onBlur={e=>{validateObject("code", e.target.value, NARFDailyDeliverySequenceList)?props.dailyDeliverySequenceOnchange(e.target.value):props.dailyDeliverySequenceOnchange("")}}
              >
                
              </AvInput>
              <datalist id="dailyDeliverySequenceList">
              <option key="" value="">{"Select Daily Delivery Sequence"}</option>
                {NARFDailyDeliverySequenceList.map((element) => 
              <option key={element.code}>{element.code}</option>
                )}
              </datalist>
            </div>
          </FormGroup>
        </Col>
      </Row>

              <Row>
        <Col lg="6">
          <FormGroup className="mb-3">
            <Label htmlFor="frequencyDailyDelivery">Frequency/Daily Delivery</Label>
            <div className="input-group">
              <div className="input-group-text"><i className={"uil-search"}></i></div>
              <AvInput
              placeholder="Type to search..."
              id="frequencyDailyDelivery"
              name="frequencyDailyDelivery"
              className="form-control"
              errorMessage="Select Frequency/Daily Delivery"
              validate={{ required: { value: false}}}
              value={props.frequencyDailyDeliveryValue} 
              onChange={e => { props.frequencyDailyDeliveryOnchange(e.target.value) }}
              list="frequencyDailyDeliveryList"
              onBlur={e=>{validateObject("code", e.target.value.split(" - ")[0], NARFFreqDailyDeliveryList)?props.frequencyDailyDeliveryOnchange(e.target.value):props.frequencyDailyDeliveryOnchange("")}}
              >
              </AvInput>
              <datalist id="frequencyDailyDeliveryList">
              <option key="" value="">{"Select Frequency/Daily Delivery"}</option>
                {NARFFreqDailyDeliveryList.map((element) => 
              <option key={element.code}>{element.code + " - " + element.desc}</option>
              )}
              </datalist>
            </div>
          </FormGroup>
        </Col>
        
        <Col lg="6">
          <div className="mb-3">
            <Label htmlFor="parentNumberName">Parent Number - Name</Label>
            <AvField
            id="parentNumberName"
            type="select"  
            name="parentNumberName"
            className="form-control"
            errorMessage="Select Parent Number"
            validate={{ required: { value: false}}}
            value={props.parentNumberValue} 
            onChange={e => {props.parentNumberOnchange(e.target.value)}}
            >
              <option key="" value="">{"Select Parent Number"}</option>
              {NARFParentNoList.map((element) => 
            <option key={element.code} value={element.code}>{element.desc}</option>
            )}
            </AvField>
          </div>
        </Col>
      </Row>

              <Row>
        <Col lg="6">
          <div className="mb-3">
            <Label htmlFor="parentChainNumber">Parent Chain Number</Label>
            <AvField
            id="parentChainNumber"
            type="text"  
            name="parentChainNumber"
            className="form-control"
            errorMessage="Enter Parent Chain Number"
            validate={{ required: { value: false}}}
            value={props.parentChainNumberValue} 
            onChange={e => {props.parentChainNumberOnchange(e.target.value)}}
            />
          </div>
        </Col>
        
        <Col lg="6">
          <div className="mb-3">
            <Label htmlFor="newAcctAcquiredBy1">New Acct Acquired by: RSR,RSA,RSM,ASM,ISR(EMP #)</Label>
            <AvField
            id="newAcctAcquiredBy1"
            type="text"  
            name="newAcctAcquiredBy1"
            className="form-control"
            errorMessage="Enter New Acct Acquired by"
            validate={{ required: { value: false}}}
            value={props.newAcctAcquiredBy1Value} 
            onChange={e => {props.newAcctAcquiredBy1Onchange(e.target.value)}}
            />
              
          </div>
        </Col>
      </Row>

              <Row>
        <Col lg="6">
          <FormGroup className="mb-3">
            <Label htmlFor="employeeTitle">Employee Title</Label>
            <div className="input-group">
              <div className="input-group-text"><i className={"uil-search"}></i></div>
              <AvInput
              placeholder="Type to search..."
              id="employeeTitle"
              name="employeeTitle"
              className="form-control"
              errorMessage="Select Employee Title"
              validate={{ required: { value: false}}}
              value={props.employeeTitleValue} 
              onChange={e => { props.employeeTitleOnchange(e.target.value) }}
              list="employeeTitleList"
              onBlur={e=>{validateObject("code", e.target.value.split(" - ")[0], NARFEmployeeTitleList)?props.employeeTitleOnchange(e.target.value):props.employeeTitleOnchange("")}}
              >
                
              </AvInput>
              <datalist id="employeeTitleList">
              <option key="" value="">{"Select Employee Title"}</option>
                {NARFEmployeeTitleList.map((element) => 
              <option key={element.code}>{element.code + " - " + element.desc}</option>
              )}
            </datalist>
            </div>
          </FormGroup>
        </Col>
        
        <Col lg="6">
          <div className="mb-3">
            <Label htmlFor="employeeNameNo">Employee Name#</Label>
            <AvField
            id="employeeNameNo"
            type="text"  
            name="employeeNameNo"
            className="form-control"
            errorMessage="Enter Employee Name#"
            validate={{ required: { value: false}}}
            value={props.employeeNameNoValue} 
            onChange={e => {props.employeeNameNoOnchange(e.target.value)}}
            />
              
          </div>
        </Col>
      </Row>

            </CardBody>
          </Card>
        </Col>
      </Row>
              
      
      <Row hidden={(props.operatingUnitValue === "RDS") ? false : true}>
        <CardTitle>Category - Price Adjustment</CardTitle>
        <Col className="col-12">
          <Card>
            <CardBody>
              {/*
              <CardTitle></CardTitle>
              <CardSubtitle className="mb-3"></CardSubtitle>
              */}
              <Row>
                <Col lg="6">
                  <Label>Category Code</Label>
                </Col>
                <Col lg="5">
                  <Label>Price Adjustment</Label>
                </Col>
                <Col lg="1">
                  <Label>{ "Action" }</Label>
                </Col>
              </Row>
              {props.inputFields.map((inputField, index) => (
                <Fragment key={`${inputField}~${index}`}>
                  <Row>
                <Col lg="6">
                  <FormGroup className="mb-3">    
                      <AvField
                      type="text"
                      id={"categoryCode" + index}
                      name={"categoryCode" + index}
                      className="form-control"
                      validate={{ required: { value: false}}}
                      value={inputField.categoryCode} 
                      onChange={event => handleInputChange(index, event)}
                      disabled={true}
                      >
                      </AvField>
                    
                  </FormGroup>
                </Col>

                <Col lg="5">
                  {/*<FormGroup className="mb-3">*/}
                    <div className="input-group">
                      <div className="input-group-text"><i className={"uil-search"}></i></div>
                      <AvInput
                      placeholder="Type to search..."
                      id={"categoryValue" + index}
                      name={"categoryValue" + index}
                      className="form-control"
                      errorMessage="Select Category Allied Price Adjustment"
                      validate={{ required: { value: false}}}
                      value={inputField.categoryValue}
                      onChange={event => handleInputChange(index, event)}
                      list="NARFCatValueRDSListFiltered"
                      onBlur={e=>{validateObject("code", e.target.value.split(" - ")[0], NARFCatValueRDSList)?handleInputChange(index, e):handleInputChange(index, {target:{name:"categoryValue", value:""}})}}   
                      >
                      </AvInput>
                      <datalist id="NARFCatValueRDSListFiltered">
                        {NARFCatValueRDSListFiltered.map((element) => 
                      <option key={element.code}>{element.code + " - " + element.desc}</option>
                      )}
                      </datalist>
                    </div>
                      {/*</FormGroup>*/}
                </Col>
                    <Col lg="1">
                      <FormGroup className="mb-3">
                        <button
                          id={"action" + index}
                          className="btn btn-primary"
                          type="button"
                          disabled={props.inputFields.length === 1 ? true : false}
                          onClick={() => { handleRemoveFields(index);  }}
                        >
                          <i className={"uil-minus"}></i>
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button
                          className="btn btn-success mt-3 mt-lg-0"
                          type="button"
                          onClick={() => { handleAddFields() }}
                        >
                          <i className={"uil-plus"}></i>
                        </button>
                      </FormGroup>
                </Col>
              </Row>
                </Fragment>
            ))}
            </CardBody>
          </Card>
        </Col>
      </Row>

      
      <Row hidden={(props.operatingUnitValue === "NTL") ? false : true}>
        <CardTitle>Category - Price Adjustment</CardTitle>
        <Col className="col-12">
          <Card>
            <CardBody>
              {/*
              <CardTitle></CardTitle>
              <CardSubtitle className="mb-3"></CardSubtitle>
              */}
              <Row>
                <Col lg="6">
                  <Label>Category Code</Label>
                </Col>
                <Col lg="5">
                  <Label>Price Adjustment</Label>
                </Col>
                <Col lg="1">
                  <Label>Action</Label>
                </Col>
              </Row>
              {props.inputFields.map((inputField, index) => (
                <Fragment key={`${inputField}~${index}`}>
                  <Row>
                <Col lg="6">
                  <FormGroup className="mb-3">
                    <div className="input-group">
                      <div className="input-group-text"><i className={"uil-search"}></i></div>
                      <AvInput
                      placeholder="Type to search..."
                      id={"categoryCode" + index}
                      name={"categoryCode" + index}
                      className="form-control"
                      errorMessage="Select Category Code"
                      validate={{ required: { value: false}}}
                      value={inputField.categoryCode} 
                      onChange={event => handleInputChange(index, event)}
                      onBlur={e=>{validateObject("desc", e.target.value, NARFCatCodeNTLList)?handleInputChange(index, e):handleInputChange(index, {target:{name:"categoryCode", value:""}})}}   
                      list="NARFCatCodeNTLListFiltered"
                      >
                      </AvInput>
                      <datalist id="NARFCatCodeNTLListFiltered">
                      {NARFCatCodeNTLListFiltered.map((element) => 
                      <option key={element.code}>{element.desc}</option>
                      )}
                      </datalist>
                    </div>
                  </FormGroup>
                </Col>

                <Col lg="5">
                  <FormGroup className="mb-3">
                    <div className="input-group">
                      <div className="input-group-text"><i className={"uil-search"}></i></div>
                      <AvInput
                      placeholder="Type to search..."
                      id={"categoryValue" + index}
                      name={"categoryValue" + index}
                      className="form-control"
                      errorMessage="Select Category Allied Adjustment"
                      validate={{ required: { value: false}}}
                      value={inputField.categoryValue} 
                      onChange={event => handleInputChange(index, event)}
                      onBlur={e=>{validateObject("code", e.target.value.split(" - ")[0], NARFCatValueRDSList)?handleInputChange(index, e):handleInputChange(index, {target:{name:"categoryValue", value:""}})}}   
                      list="NARFCatValueNTLList"
                      >
                      </AvInput>
                      <datalist id="NARFCatValueNTLList">
                        {NARFCatValueRDSList.map((element) => 
                      <option key={element.code}>{element.code + " - " + element.desc}</option>
                      )}
                      </datalist>
                    </div>
                  </FormGroup>
                </Col>

                <Col lg="1">
                  <FormGroup className="mb-3">
                    <button
                      id={"action" + index}
                      className="btn btn-primary"
                      type="button"
                      disabled={props.inputFields.length === 1 ? true : false}
                          onClick={() => { handleRemoveFields(index);  }}
                    >
                      <i className={"uil-minus"}></i>
                    </button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button
                      className="btn btn-success mt-3 mt-lg-0"
                      type="button"
                          onClick={() => handleAddFields()}
                      disabled={(props.inputFields.length === NARFCatCodeNTLList.length)?true:false}
                    >
                      <i className={"uil-plus"}></i>
                    </button>
                  </FormGroup>
                </Col>

              </Row>

              </Fragment>
            ))}
            </CardBody>
          </Card>
        </Col>
      </Row>

      
      <Row hidden={(props.operatingUnitValue === "DSD") ? false : true}>
        <CardTitle>Category - Price Adjustment</CardTitle>
        <Col className="col-12">
          <Card>
            <CardBody>
              {/*
              <CardTitle></CardTitle>
              <CardSubtitle className="mb-3"></CardSubtitle>
              */}
              <Row>
                <Col lg="6">
                  <Label>Category Code</Label>
                </Col>
                <Col lg="5">
                  <Label>Price Adjustment</Label>
                </Col>
                <Col lg="1">
                  <Label>Action</Label>
                </Col>
              </Row>
              {props.inputFields.map((inputField, index) => (
                <Fragment key={`${inputField}~${index}`}>
                  <Row>
                <Col lg="6">
                  <FormGroup className="mb-3">
                    <div className="input-group">
                      <div className="input-group-text"><i className={"uil-search"}></i></div>
                      <AvInput
                      placeholder="Type to search..."
                      id={"categoryCode" + index}
                      name={"categoryCode" + index}
                      className="form-control"
                      errorMessage="Select Category Code"
                      validate={{ required: { value: false}}}
                      value={inputField.categoryCode} 
                      onChange={event => handleInputChange(index, event)}
                      onBlur={e=>{validateObject("code", e.target.value.split(" - ")[0], NARFCatCodeDSDList)?handleInputChange(index, e):handleInputChange(index, {target:{name:"categoryCode", value:""}})}}   
                      list="NARFCatCodeDSDListFiltered"
                      >
                      </AvInput>
                      <datalist id="NARFCatCodeDSDListFiltered">
                      {NARFCatCodeDSDListFiltered.map((element) => 
                      <option key={element.code}>{element.code + " - " + element.desc}</option>
                      )}
                      </datalist>
                    </div>
                  </FormGroup>
                </Col>

                <Col lg="5">
                  <FormGroup className="mb-3">
                    <div className="input-group">
                      <div className="input-group-text"><i className={"uil-search"}></i></div>
                      <AvInput
                      placeholder="Type to search..."
                      id={"categoryValue" + index}
                      name={"categoryValue" + index}
                      className="form-control"
                      errorMessage="Select Category Allied Adjustment"
                      validate={{ required: { value: false}}}
                      value={inputField.categoryValue} 
                      onChange={event => handleInputChange(index, event)}
                      onBlur={e=>{validateObject("code", e.target.value.split(" - ")[0], NARFCatValueDSDList)?handleInputChange(index, e):handleInputChange(index, {target:{name:"categoryValue", value:""}})}}   
                      list="NARFCatValueDSDList"
                      >
                      </AvInput>
                      <datalist id="NARFCatValueDSDList">
                        {NARFCatValueDSDList.map((element) => 
                      <option key={element.code}>{element.code + " - " + element.desc}</option>
                      )}
                      </datalist>
                    </div>
                  </FormGroup>
                </Col>

                <Col lg="1">
                  <FormGroup className="mb-3">
                    <button
                      id={"action" + index}
                      className="btn btn-primary"
                      type="button"
                      disabled={props.inputFields.length === 1 ? true : false}
                          onClick={() => { handleRemoveFields(index);  }}
                    >
                      <i className={"uil-minus"}></i>
                    </button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button
                      className="btn btn-success mt-3 mt-lg-0"
                      type="button"
                          onClick={() => handleAddFields()}
                      disabled={(props.inputFields.length === NARFCatCodeDSDList.length)?true:false}
                    >
                      <i className={"uil-plus"}></i>
                    </button>
                  </FormGroup>
                </Col>

              </Row>

              </Fragment>
            ))}
            </CardBody>
          </Card>
        </Col>
      </Row>

    </div>
  )

}