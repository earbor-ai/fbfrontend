import React, { useState, Fragment, useEffect, Component } from "react"

import {
  Card,
  CardBody,
  Col,
  CardTitle,
  CardSubtitle,
  Container,
  FormGroup,
  Form,
  Label,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Spinner,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

import classnames from "classnames"
import { Link, Prompt, useHistory } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { 
  AvForm, 
  AvField, 
  AvRadioGroup, 
  AvRadio,
} from "availity-reactstrap-validation"
 
import { MDBDataTable } from "mdbreact"

//SweetAlert
import SweetAlert from "react-bootstrap-sweetalert"

import NumberFormat from "react-number-format"

import { set, values } from "lodash"

import {
  isDebug,
  usStates,
  NARFsearchTableDataColumns as tableDataColumns,
  NARFsearchDummyRecords,
  showAnElement,
  hideAnElement,
  setInnerHTML,
  baseUrl,
  getCurrDateMMDDYYYYwithSep,
} from "../FBLibrary/fbglobals"

import {
  getNARFLookup,
  addRecordNARF,
  uploadDocsNARF,
} from "../FBLibrary/NWCallsRepository"

import { CustomerInformation } from "./CustomerInformation"
import { CustomerInformation1 } from "./CustomerInformation1"
import { CustomerAddlInformation } from "./CustomerAddlInformation"
import { BillingDetails } from "./BillingDetails"
import { BillingDetails1 } from "./BillingDetails1"

const NARF = () => {

  const [activeTab, setactiveTab] = useState(1);

  var form1 = null;
  var form2 = null;
  var form3 = null;
  var form4 = null;
  var form5 = null;
  var searchTableWidget = null;
  var history = useHistory();
  var searchResults = [];

  const [visitedTabs, setVisitedTabs] = useState([1]);
  const [isHiddenFB1But, setIsHiddenFB1But] = useState(true);
  const [isHiddenNARFBut, setIsHiddenNARFBut] = useState(true);
  const [headerRecord, setHeaderRecord] = useState(null);
  const [recordMode, setRecordMode] = useState("create"); //create-edit-readonly
  const [customerId, setCustomerId] = useState(null); //existing customer-id available in headerRecord
  const [fb1RedirectStateDict, setFb1RedirectStateDict] = useState(null);

  //form state variables - Tab1
  const [isNewParent, setIsNewParent] = useState(null);
  const [isEquipmentOnly, setIsEquipmentOnly] = useState(null);
  const [isRevive, setIsRevive] = useState(null);
  const [isNewShipPaysBill, setIsNewShipPaysBill] = useState(null);
  const [isNewShipExistingBill, setIsNewShipExistingBill] = useState(null);

  //form state variables - Tab2
  const [searchAccountNo, setSearchAccountNo] = useState("");
  const [searchCompanyName, setSearchCompanyName] = useState("");
  const [searchAddress, setSearchAddress] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [searchState, setSearchState] = useState("");
  const [searchStatus, setSearchStatus] = useState("");

  //form state variables - Tab3 - Customer Information
  const [purpose, setPurpose] = useState("");
  const [operatingUnit, setOperatingUnit] = useState("");
  const [route, setRoute] = useState("");
  const [businessUnitNTL, setBusinessUnitNTL] = useState("");
  const [originatorName, setOriginatorName] = useState("");
  const [originatorPhone, setOriginatorPhone] = useState("");
  const [searchType, setSearchType] = useState("");
  const [branchNo, setBranchNo] = useState("");
  const [districtNo, setDistrictNo] = useState("");
  const [regionNo, setRegionNo] = useState("");
  const [alphaDBAName, setAlphaDBAName] = useState("");
  const [legalName, setLegalName] = useState("");
  const [deliveryAddressLine1, setDeliveryAddressLine1] = useState("");
  const [deliveryAddressLine2, setDeliveryAddressLine2] = useState("");
  const [deliveryAddressLine3, setDeliveryAddressLine3] = useState("");
  const [deliveryAddressLine4, setDeliveryAddressLine4] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [county, setCounty] = useState("");
  const [locationPhoneNo, setLocationPhoneNo] = useState("");
  const [locationFaxNo, setLocationFaxNo] = useState("");
  const [customerContactName, setCustomerContactName] = useState("");
  const [customerCellNumber, setCustomerCellNumber] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [isBillingAddressDiffThanDelivery, setIsBillingAddressDiffThanDelivery] = useState(false);
  const [billingAlphaName, setBillingAlphaName] = useState("");
  const [legalMailingName, setLegalMailingName] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [billingCity, setBillingCity] = useState("");
  const [billingState, setBillingState] = useState("");
  const [billingZipCode, setBillingZipCode] = useState("");
  
  //state variables for Tab4 - Customer Additional Information
  const [federalTaxIDNo, setFederalTaxIDNo] = useState("");
  const [resaleCertificateNo, setResaleCertificateNo] = useState("");
  const [taxGroup, setTaxGroup] = useState("");
  const [managedBy, setManagedBy] = useState("");
  const [customerSegment, setCustomerSegment] = useState("");
  const [newAcctAcquiredBy, setNewAcctAcquiredBy] = useState("");
  const [equipmentServiceLevel, setEquipmentServiceLevel] = useState("");
  const [customerGroup, setCustomerGroup] = useState("");
  const [posProgram, setPosProgram] = useState("");
  const [alliedEquipProgram, setAlliedEquipProgram] = useState("");
  const [priceProtection, setPriceProtection] = useState("");
  const [alliedDiscount, setAlliedDiscount] = useState("");
  const [weeklyCoffeeVolume, setWeeklyCoffeeVolume] = useState("");
  const [equipmentProgram, setEquipmentProgram] = useState("");
  const [estimatedBiWeeklySales, setEstimatedBiWeeklySales] = useState("");
  const [termsOfSale, setTermsOfSale] = useState("");
  const [creditLimit, setCreditLimit] = useState("");
  const [adjustmentSchedule, setAdjustmentSchedule] = useState("");
  const [freightHandlingCode, setFreightHandlingCode] = useState("");
  const [dailyDeliverySequence, setDailyDeliverySequence] = useState("");
  const [frequencyDailyDelivery, setFrequencyDailyDelivery] = useState("");
  const [parentNumber, setParentNumber] = useState("");
  const [parentChainNumber, setParentChainNumber] = useState("");
  const [newAcctAcquiredBy1, setNewAcctAcquiredBy1] = useState(""); //Doubt - duplicate
  const [employeeTitle, setEmployeeTitle] = useState("");
  const [employeeNameNo, setEmployeeNameNo] = useState("");
  const [categoryAlliedAdjustment, setCategoryAlliedAdjustment] = useState("");
  const [resaleCertificateNoFileUploaded, setResaleCertificateNoFileUploaded] = useState(null);

  /*
  const [catAlliedAdj1, setCatAlliedAdj1] = useState("");
  const [catAlliedAdj2, setCatAlliedAdj2] = useState("");
  const [catAlliedAdj3, setCatAlliedAdj3] = useState("");
  const [catAlliedAdj4, setCatAlliedAdj4] = useState("");
  const [catCode19PriceAdj, setCatCode19PriceAdj] = useState("");
  const [catCode20PriceAdj, setCatCode20PriceAdj] = useState("");
  const [catCode26PriceAdj, setCatCode26PriceAdj] = useState("");
  const [catCode30PriceAdj, setCatCode30PriceAdj] = useState("");
  */
  const [inputFields, setInputFields] = useState([{categoryCode:"", categoryValue:""}]);

  //State variables for Tab5 - BillingDetails
  const [enterExistingBillToAccountNo, setEnterExistingBillToAccountNo] = useState("");
  const [createNewBillToAccountNo, setCreateNewBillToAccountNo] = useState("");
  const [billingNotes, setBillingNotes] = useState("");
  
  //Other state variable
  const [searchDataList, setSearchDataList] = useState([]);
  const [tableData, setTableData] = useState({ columns: tableDataColumns, rows: [] });
  const [showDeleteRowAlert, setShowDeleteRowAlert] = useState(false);
  const [deleteRowDetails, setDeleteRowDetails] = useState(null);
  const [showRedirectionAlert, setShowRedirectionAlert] = useState(false);

  //state variables for alerts
  const [showLoadingIndicator, setShowLoadingIndicator] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showWarningAlert, setShowWarningAlert] = useState(false);
  const [alertType, setAlertType] = useState("error"); //success, warning, error
  const [alertTitle, setAlertTitle] = useState("Error");
  const [alertMsg, setAlertMsg] = useState("");

  function handleCheckbox(value) {
    setIsBillingAddressDiffThanDelivery(value);
    setBillingAlphaName("");
    setLegalMailingName("");
    setBillingAddress("");
    setBillingCity("");
    setBillingState("");
    setBillingZipCode("");
  };

  useEffect(() => {
  
    if(isDebug)
      console.log("useEffect: Begin");

    document.title = "New Account Request Form | Farmer Brothers";

    if(isDebug)
      console.log("useEffect: End");

  }, []);

  /*
  useEffect(() => {
    let array = JSON.parse(JSON.stringify(searchDataList));
    let data = [];
    if (array.length > 0) {
      if (isDebug) {
        console.log("useEffect: searchDataList");
        console.log(searchDataList)
      }
      array.map((element, index) => {
        let elem = JSON.parse(JSON.stringify(element));
        //elem.action = actionItems(index, element.AcctName);
        elem.NARFStatus = narfActionItem(index, element.NARFStatus);
        elem.FB1Status = fb1ActionItem(index, element.FB1Status);
        data.push(element);
      });
      
      setTableData({ columns: tableDataColumns, rows: data });
    }
    else {
      setTableData({ columns: tableDataColumns, rows: [] });
    }
  }, [searchDataList]);
  */

  const onResaleCertificateNoFileChange = event => {
    if(event.target.files[0] !== undefined){
      setResaleCertificateNoFileUploaded(event.target.files[0]);
    }
    else{
      setResaleCertificateNoFileUploaded(null);
    }
  };

  function actionItems(index, acctName) {
    return ((
      <ul className="list-inline font-size-20 contact-links mb-0">
        <li className="list-inline-item">
          <Link to="#" className="px-2 text-primary"><i className="uil uil-pen font-size-18"></i></Link>
        </li>
        <li className="list-inline-item">
          <Link to="#" onClick={() => onClickDeleteRow(index, acctName)} className="px-2 text-danger"><i className="uil uil-trash-alt font-size-18"></i></Link>
        </li>
        <li className="list-inline-item dropdown">
          <UncontrolledDropdown>
            <DropdownToggle tag="a" className="text-muted font-size-18 px-2" caret>
              <i className="uil uil-ellipsis-v"></i>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-end">
              <DropdownItem href="#">Action</DropdownItem>
              <DropdownItem href="#">Another action</DropdownItem>
              <DropdownItem href="#">Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </li>
      </ul>
    ));
  }

  function fb1ActionItem(index, description) {
    /*
    return ((
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/accountapplication" className="px-2 text-primary">{description}</Link>
      </div>
    ));
    */
    return ((
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          className= "px-2 text"
          style={{
            cursor: "pointer",
            color: "black",
          }}
          onClick={() => onClickFB1ActionItem(index, description)}
        >{(isHiddenFB1But===true && description.toLowerCase()==="create")?"":description}
        </div>
      </div>
    ));
  }

  function narfActionItem(index, description) {
    /*
    return ((
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="#" onClick={onClickNARFActionItem(index)} className="px-2 text-primary">{description}</Link>
      </div>
    ));
    */
    return ((
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          className= "px-2 text"
          style={{
            cursor: "pointer",
            color: "black",
          }}
          onClick={() => onClickNARFActionItem(index, description)}
        >{(isHiddenNARFBut===true && description.toLowerCase()==="create")?"":description}
        </div>
      </div>
    ));
  }

  function onClickFB1ActionItem(index, description) {
    //history.push("/accountapplication");

    let record = searchResults[index];
    let type = "";
    if (!isHiddenFB1But && description.toLowerCase() === "create") {
      type = "create";
      history.push({
        pathname: '/accountapplication',
        search: '?type='+type,
        state: { detail: record, recordMode: type, headerRecord: record }
      });
    }
    else {
      type = "readonly";
      history.push({
        pathname: '/accountapplication',
        search: '?type='+type,
        state: { detail: record, recordMode: type, headerRecord: record }
      });
    }
    //setFb1RedirectStateDict({ detail: record, recordMode: type, headerRecord: record });
    //setShowRedirectionAlert(true);
  }

  function onClickNARFActionItem(index, description) {
    if (isDebug) {
      console.log("onClickNARFActionItem - index: " + index + " description: " + description);
    }
    clearTab3();
    clearTab4();
    clearTab5();

    if (!isHiddenNARFBut && description.toLowerCase().search("create") > -1) { // create NARF account
      fillHeaderData(index);
      setRecordMode("create");
      console.log("onClickNARFActionItem: recordMode - create");
    }
    else if (!isHiddenNARFBut && (description.toLowerCase().search("open") > -1 || description.toLowerCase().search("completed") > -1)) { // edit NARF account
      fillHeaderData(index);
      setRecordMode("readonly"); //TODO
      console.log("onClickNARFActionItem: recordMode - readonly");
    }
    else { //modify NARF account
      fillHeaderData(index);
      setRecordMode("readonly");
      console.log("onClickNARFActionItem: recordMode - readonly");
    }
    toggleTab(3);
    pushIntoVisitedTabs(3);
    
  }

  function fillHeaderData(index) {

    let record = searchResults[index];
    if (isDebug) {
      console.log("fillHeaderData - index: " + index + " record:");
      console.log(record);
    }
    if (record) {
      setHeaderRecord(JSON.parse(JSON.stringify(record)));

      setAlphaDBAName(record["DBAName"]);
      setLegalName(record["CustomerName"]);
      setDeliveryAddressLine1(record["DeliveryAddress1"]);
      setDeliveryAddressLine2(record["DeliveryAddress2"]);
      setDeliveryAddressLine3(record["DeliveryAddress3"]);
      setDeliveryAddressLine4(record["DeliveryAddress4"]);
      setCity(record["DeliveryCity"]);
      setState(record["DeliveryState"]);
      setZipCode(record["DeliveryZip"]);
      setLocationPhoneNo(record["Phone"]);
      setLocationFaxNo(record["Fax"]);
      setCustomerEmail(record["Email"]);
      setCounty(record["County"]);
      setOwnerName(record["OwnerName"]);
      setFederalTaxIDNo(record["FederalTaxID"]);
      setResaleCertificateNo(record["ResaleCertificateNumber"]);
      setTaxGroup(record["TaxGroup"]);
      setBillingAddress(record["BillingAddress"]);
      setBillingCity(record["BillingCity"]);
      setBillingState(record["BillingState"]);
      setBillingZipCode(record["BillingZip"]);

      setCustomerId(record["CustomerID"]);
    }
  }

  function toggleTab(tab) {
    showAnElement("linkPrevious");
    showAnElement("linkNext");
    if (activeTab !== tab) {
      if (tab >= 1 && tab <= 5) {
        setactiveTab(tab);
      }
    }
  }

  function onClickTab(tabNo) {
    if (tabNo < activeTab) {
      let array = visitedTabs
      if (array.findIndex(element => element === tabNo) > -1) {
        toggleTab(tabNo);
      }
      else {
        //pass
      }
    }
  }

  function showAlert(alertType, alertTitle, alertMsg){
    setAlertType(alertType);
    setAlertTitle(alertTitle);
    setAlertMsg(alertMsg);
  
    if(alertType === "error"){
      setShowErrorAlert(true);
    }
    else if(alertType === "warning"){
      setShowWarningAlert(true);
    }
    else if(alertType === "success"){
      setShowSuccessAlert(true);
    }
}
  
function hideAlert(){
    setShowErrorAlert(false);
    setShowWarningAlert(false);
    setShowSuccessAlert(false);
}

  const handleInvalidSubmit = (errors, values) => {

    if (isDebug) {
      console.log("handleInvalidSubmit: Begin - errors:");
      console.log(errors);
    }
    const selectorKey = errors[0];
    const selector = `[name="${selectorKey}"]`;
    const errorElement = document.querySelector(selector);
    if(errorElement){
        console.log(errorElement);
        errorElement.focus();
    }
    if (isDebug) {
      console.log("handleInvalidSubmit: End");
    }
  }

  const handleInvalidSubmitFirstTab = (event, errors, values) => {
    if (isDebug) {
      console.log("handleInvalidSubmitFirstTab: Begin");
    }
    
    handleInvalidSubmit(errors, values);

    if (isDebug) {
      console.log("handleInvalidSubmitFirstTab: End");
    }
  }

  const handleValidSubmitFirstTab = (event, fields) => {

    if (isDebug)
      console.log("handleValidSubmitFirstTab: Begin");
    
    let NARFhidden=((isRevive === "1" || isNewShipPaysBill === "1" || isNewShipExistingBill === "1") ||
      (isNewParent === "0" && isEquipmentOnly === "0" && isRevive === "0" && isNewShipPaysBill === "0" && isNewShipExistingBill === "0")) ? true : false;
    let FB1hidden = (isNewParent === "1" || isEquipmentOnly === "1") ? true : false;
    
    setIsHiddenFB1But(FB1hidden);
    setIsHiddenNARFBut(NARFhidden);
    
    clearTab2();
    toggleTab(2);
    pushIntoVisitedTabs(2);

    if (isDebug)
      console.log("handleValidSubmitFirstTab: End");

  }

  const handleInvalidSubmitSecondTab = (event, errors, values) => {
    if (isDebug) {
      console.log("handleInvalidSubmitSecondTab: Begin");
    }
    
    handleInvalidSubmit(errors, values);

    if (isDebug) {
      console.log("handleInvalidSubmitSecondTab: End");
    }
  }

  const handleValidSubmitSecondTab = (event, fields) => {

    if (isDebug)
      console.log("handleValidSubmitSecondTab: Begin");
    
    setShowLoadingIndicator(true);
    execLookupDataRequest();

    //handleLookupDataSuccess(JSON.parse(JSON.stringify(NARFsearchDummyRecords)));

    if (isDebug)
      console.log("handleValidSubmitSecondTab: End");

  }

  const handleInvalidSubmitThirdTab = (event, errors, values) => {
    if (isDebug) {
      console.log("handleInvalidSubmitThirdTab: Begin");
    }
    
    handleInvalidSubmit(errors, values);

    if (isDebug) {
      console.log("handleInvalidSubmitThirdTab: End");
    }
  }

  const handleValidSubmitThirdTab = (event, fields) => {

    if (isDebug)
      console.log("handleValidSubmitThirdTab: Begin");
    
    //clearTab4();
    toggleTab(4);
    pushIntoVisitedTabs(4);

    if (isDebug)
      console.log("handleValidSubmitThirdTab: End");

  }

  const handleInvalidSubmitFourthTab = (event, errors, values) => {
    if (isDebug) {
      console.log("handleInvalidSubmitFourthTab: Begin");
    }
    
    handleInvalidSubmit(errors, values);

    if (isDebug) {
      console.log("handleInvalidSubmitFourthTab: End");
    }
  }

  const handleValidSubmitFourthTab = (event, fields) => {

    if (isDebug)
      console.log("handleValidSubmitFourthTab: Begin");
    
    //clearTab5();
    toggleTab(5);
    pushIntoVisitedTabs(5);

    if (isDebug)
      console.log("handleValidSubmitFourthTab: End");

  }

  const handleInvalidSubmitFifthTab = (event, errors, values) => {
    if (isDebug) {
      console.log("handleInvalidSubmitFifthTab: Begin");
    }
    
    handleInvalidSubmit(errors, values);

    if (isDebug) {
      console.log("handleInvalidSubmitFifthTab: End");
    }
  }

  const handleValidSubmitFifthTab = (event, fields) => {

    if (isDebug)
      console.log("handleValidSubmitFifthTab: Begin");
    
    //TODO

    if (recordMode === "create") {
      if (resaleCertificateNo !== "" && resaleCertificateNo.length > 0) {
        if (resaleCertificateNoFileUploaded === null) {
          if (!customerId) { //null
            showAlert("error", "Error", "Please attach Resale Certificate Number File");
            return;
          }
        }
      }
    
      showUploadDataLoadingIndicator();
      execAddRecordRequest();
    }

    if (isDebug)
      console.log("handleValidSubmitFifthTab: End");

  }

  async function execAddRecordRequest() {
    if(isDebug)
      console.log("execAddRecordRequest: Begin");
    
    const postData = getAddRecordRequestPostData();
    const responseData1 = await addRecordNARF(postData);
    //const responseData = JSON.parse(JSON.stringify(responseData1)); //comment this for build
    const responseData = JSON.parse(responseData1); //uncomment this for build

    if (responseData) {
      
      if (Object.keys(responseData).findIndex(element => element === "result") > -1) {
        if (isDebug) {
          console.log("execAddRecordRequest - responseData");
          console.log(responseData);
        }

        if (responseData.result === "Success") {
          
          let jsonResult= responseData;
          let ID = jsonResult.data["customerID"];

          if (isDebug) {
            console.log("execAddRecordRequest - ID: " + ID);
          }

          if (ID === undefined || ID === null || ID === "NA" || ID === 0) {
            handleFormDataFailure();
            return;
          } 
          else if (ID > 0) {

            if (resaleCertificateNo.length > 0 && resaleCertificateNoFileUploaded !== null) {
              execUploadDocs(ID);
            }
            else {
              handleFormDataSuccess();
            }

          }
          
        }
        else if (responseData.result === "Failed") {
          console.log("execAddRecordRequest: Form Data Submission Failed");
          handleFormDataFailure();
        }
      }
      else {
        console.log("execAddRecordRequest: Server/Network Error ! - responseData");
        console.log(responseData);
        handleFormDataNetworkFailure();
      }
    }
    
    if(isDebug)
      console.log("execAddRecordRequest: End");
  }

  function getAddRecordRequestPostData() {
    
    if(isDebug)
      console.log("getAddRecordRequestPostData: Begin");

    let addRecord = {};
    let postData = {};
    let userInfo = {
      CreatedUserID: "123",
      CreatedUserName: "CreatedUserName",
      ModifiedUserID: "222",
      ModifiedUserName: "ModifiedUserName"
    }

    if (customerId) {
      addRecord.CustomerID = customerId;
    }
    else {
      addRecord.CustomerID = "";
    }

    addRecord.narfStatus = "COMPLETED";

    addRecord.Purpose = purpose.split(" - ")[0];
    addRecord.OperatingUnit = operatingUnit;
    if (operatingUnit === "RDS" || operatingUnit === "DSD") {
      addRecord.Route = route;
      addRecord.BranchNo = branchNo;
      addRecord.DistrictNo = districtNo;
      addRecord.RegionNo = regionNo;

      addRecord.BusinessUnit = "";
    }
    else {
      addRecord.BusinessUnit = businessUnitNTL.split(" - ")[0];
      addRecord.BranchNo = branchNo;
      addRecord.DistrictNo = districtNo.split(" - ")[0];
      addRecord.RegionNo = regionNo;

      addRecord.Route = "";
    }

    addRecord.OriginatorName = originatorName;
    addRecord.OriginatorPhone = originatorPhone;
    addRecord.SearchType = searchType.split(" - ")[0];
    addRecord.AlphaDBAName = alphaDBAName;
    addRecord.LegalName = legalName;
    addRecord.DeliveryAddressLine1 = deliveryAddressLine1;
    addRecord.DeliveryAddressLine2 = deliveryAddressLine2;
    addRecord.DeliveryAddressLine3 = deliveryAddressLine3;
    addRecord.DeliveryAddressLine4 = deliveryAddressLine4;
    addRecord.City = city;
    addRecord.State = state;
    addRecord.Zip = zipCode;
    addRecord.County = county;
    
    addRecord.LocationPhoneNo = locationPhoneNo;
    addRecord.LocationFaxNo = locationFaxNo;
    addRecord.CustomerContactName = customerContactName;
    addRecord.CustomerCellNo = customerCellNumber;
    addRecord.CustomerEmail = customerEmail;
    addRecord.OwnerName = ownerName;

    addRecord.FedTaxIDNo = federalTaxIDNo;
    addRecord.ResaleCertNo = resaleCertificateNo;
    addRecord.TaxGroup = taxGroup.split(" - ")[0];
    addRecord.ManagedBy = managedBy.split(" - ")[0];
    addRecord.CustomerSegment = customerSegment.split(" - ")[0];
    addRecord.NewAcctAcquiredBySABDM = newAcctAcquiredBy.split(" - ")[0];
    addRecord.EquipServiceLevel = equipmentServiceLevel.split(" - ")[0];
    addRecord.CustomerGroup = customerGroup.split(" - ")[0];
    addRecord.POSPrgram = posProgram.split(" - ")[0];
    addRecord.AlliedEquipProgram = alliedEquipProgram.split(" - ")[0];
    addRecord.PriceProtection = priceProtection.split(" - ")[0];
    addRecord.AlliedDiscount = alliedDiscount.split(" - ")[0];
    addRecord.WeeklyCoffeeVolume = weeklyCoffeeVolume.split(" - ")[0];
    addRecord.EquipmentProgram = equipmentProgram.split(" - ")[0];
    if (estimatedBiWeeklySales!=='' && estimatedBiWeeklySales.length>0)
      addRecord.EstBiWeeklySales = estimatedBiWeeklySales.split("$")[1];
    else
      addRecord.EstBiWeeklySales = '';
    addRecord.TermsOfSale = termsOfSale.split(" - ")[0];
    addRecord.CreditLimit = creditLimit;
    addRecord.AdjustmentSchedule = adjustmentSchedule.split(" - ")[0];
    
    addRecord.FreightHandlingCode = freightHandlingCode.split(" - ")[0];
    addRecord.ParentNo = parentNumber;
    addRecord.ParentChainNo = parentChainNumber;
    addRecord.NewAcctAcquiredByRSR = newAcctAcquiredBy1; //RSR, RSA ...
    addRecord.EmployeeTitle = employeeTitle.split(" - ")[0];
    addRecord.EmployeeNameNo = employeeNameNo;
      
    addRecord.BillingAddressIfDifferentThanDeliveryAddress = isBillingAddressDiffThanDelivery;
    addRecord.AlphaName = billingAlphaName;
    addRecord.LegalMailingName = legalMailingName;
    addRecord.BillingAddress = billingAddress;
    addRecord.ExistingOrCreateNewOption = ""; //TODO
    addRecord.EnterExistingBillToAcctNo = enterExistingBillToAccountNo;
    addRecord.CreateNewBillToAcctNo = createNewBillToAccountNo;
    addRecord.BillingCity = billingCity;
    addRecord.BillingState = billingState;
    addRecord.BillingZip = billingZipCode;
    addRecord.Notes = billingNotes;
    
    addRecord.CategoryAlliedAdjustment = [];
    for (let idx = 0; idx < inputFields.length; idx++){
      if (inputFields[idx]["categoryCode"].length > 0 && inputFields[idx]["categoryValue"].length > 0) {
        addRecord.CategoryAlliedAdjustment.push(inputFields[idx]);
      }
    }

    addRecord.DailyDeliverySequence = dailyDeliverySequence; //not available in fields excel-sheet ie webnarf
    addRecord.FrequencyDailyDelivery = frequencyDailyDelivery.split(" - ")[0]; //not available in fields excel-sheet ie webnarf
    
    postData.CompanyInfo = addRecord;
    postData.UserInfo = userInfo;

    if (isDebug) {
      console.log("getAddRecordRequestPostData: postData -");
      console.log(postData);
      console.log("getAddRecordRequestPostData: End");
    }

    return (postData);
    
  }

  async function execUploadDocs(ID) {

    if(isDebug)
      console.log("execUploadDocs: Begin");
    
    const postData = new FormData();
  
    if(resaleCertificateNo.length > 0 && resaleCertificateNoFileUploaded !== null){
      postData.append(
        "ResaleCertificateNoFile",
        resaleCertificateNoFileUploaded,
        resaleCertificateNoFileUploaded.name
      );
    }
    
    postData.append(
      "CustomerID",
      ID
    );
    
    const responseData1 = await uploadDocsNARF(postData);
    //const responseData = JSON.parse(JSON.stringify(responseData1)); //comment this for build
    const responseData = JSON.parse(responseData1); //uncomment this for build

    if (responseData) {
      
      if (Object.keys(responseData).findIndex(element => element === "result") > -1) {
        if (isDebug) {
          console.log("execUploadDocs - responseData");
          console.log(responseData);
        }

        if (responseData.result === "Success") {
          
          let jsonResult= responseData;
          let ID = jsonResult.data["customerID"];

          if (isDebug) {
            console.log("execUploadDocs - ID: " + ID);
          }

          handleFormDataSuccessWithAttachments();
          
        }
        else if (responseData.result === "Failed") {
          console.log("execUploadDocs: Upload File/Doc Submission Failed");
          handleFormDataSuccessWithoutAttachments();
        }
      }
      else {
        console.log("execUploadDocs: Server/Network Error ! - responseData");
        console.log(responseData);
        handleFormDataSuccessWithoutAttachments();
      }
    }
    
    if(isDebug)
      console.log("execUploadDocs: End");
  }

  function clearTab2() {
    console.log(form2);
    form2 && form2.reset();
    setSearchAccountNo("");
    setSearchCompanyName("");
    setSearchAddress("");
    setSearchCity("");
    setSearchState("");
    setSearchDataList([]);

    setTableData({ columns: tableDataColumns, rows: [] });
    setHeaderRecord(null);
    searchResults = null;
  }

  function clearTab3() {
    //TODO

    form3 && form3.reset();

    setPurpose("");
    setOperatingUnit("");
    setRoute("");
    setBusinessUnitNTL("");
    setOriginatorName("");
    setOriginatorPhone("");
    setSearchType("");
    setBranchNo("");
    setDistrictNo("");
    setRegionNo("");
    setAlphaDBAName("");
    setLegalName("");
    setDeliveryAddressLine1("");
    setDeliveryAddressLine2("");
    setDeliveryAddressLine3("");
    setDeliveryAddressLine4("");
    setCity("");
    setState("");
    setZipCode("");
    setCounty("");
    setIsBillingAddressDiffThanDelivery(false);
    setBillingAlphaName("");
    setLegalMailingName("");
    setBillingAddress("");
    setBillingCity("");
    setBillingState("");
    setBillingZipCode("");
    setLocationPhoneNo("");
    setLocationFaxNo("");
    setCustomerContactName("");
    setCustomerCellNumber("");
    setCustomerEmail("");
    setOwnerName("");
  }

  function clearTab4() {
    //TODO

    form4 && form4.reset();

    setFederalTaxIDNo("");
    setResaleCertificateNo("");
    setTaxGroup("");
    setManagedBy("");
    setCustomerSegment("");
    setNewAcctAcquiredBy("");
    setEquipmentServiceLevel("");
    setCustomerGroup("");
    setPosProgram("");
    setAlliedEquipProgram("");
    setPriceProtection("");
    setAlliedDiscount("");
    setWeeklyCoffeeVolume("");
    setEquipmentProgram("");
    setEstimatedBiWeeklySales("");
    setTermsOfSale("");
    setCreditLimit("");
    setAdjustmentSchedule("");
    setFreightHandlingCode("");
    setDailyDeliverySequence("");
    setFrequencyDailyDelivery("");
    setParentNumber("");
    setParentChainNumber("");
    setNewAcctAcquiredBy1("");
    setEmployeeTitle("");
    setEmployeeNameNo("");
    setCategoryAlliedAdjustment("");
    setResaleCertificateNoFileUploaded(null);
    /*
    setCatAlliedAdj1("");
    setCatAlliedAdj2("");
    setCatAlliedAdj3("");
    setCatAlliedAdj4("");
    setCatCode19PriceAdj("");
    setCatCode20PriceAdj("");
    setCatCode26PriceAdj("");
    setCatCode30PriceAdj("");
    */
  }

  function clearTab5() {
    //TODO

    form5 && form5.reset();

    setEnterExistingBillToAccountNo("");
    setCreateNewBillToAccountNo("");
    setBillingNotes("");
  }

  function onClickAddNARFAccount() {

    if (isDebug)
      console.log("onClickAddNARFAccount: Begin");
    
    setHeaderRecord(null);
    setRecordMode("create");
    setCustomerId(null);

    clearTab3();
    clearTab4();
    clearTab5();

    toggleTab(3);
    pushIntoVisitedTabs(3);

    if (isDebug)
      console.log("onClickAddNARFAccount: End");
    
  }

  function pushIntoVisitedTabs(tabNo) {
    let array = visitedTabs;
    if (array.findIndex(element => element === tabNo) === -1) {
      array.push(tabNo);
      setVisitedTabs(array);
    }
  }

  /*async function execLookupDataRequest() {

    if(isDebug)
      console.log("execLookupDataRequest: Begin");
    
    const postData = getLookupRequestPostData();
    const responseData1 = await getNARFLookup(postData);
    //const responseData = JSON.parse(JSON.stringify(responseData1)); //comment this for build
    const responseData = JSON.parse(responseData1); //uncomment this for build

    if (responseData) {
      
      if (Object.keys(responseData).findIndex(element => element === "result") > -1) {
        if (isDebug) {
          console.log("execLookupDataRequest - responseData");
          console.log(responseData);
        }
        if (responseData.result === "Success") {
          
          let jsonResult= responseData;
          let jsonData = jsonResult.data["accounts"];

          if (isDebug) {
            console.log("execLookupDataRequest - jsonData");
            console.log(jsonData);
          }

          if (!jsonData || jsonData.length==0) {
            console.log("execLookupDataRequest: Search Data Empty - jsonData");
            console.log(jsonData);
            setShowLoadingIndicator(false);
            showAlert("error", "Error", "Search Data Empty !!")
            handleLookupDataFailure();
            return;
          }
          else {
            console.log("execLookupDataRequest: Search Data Call Success");
            handleLookupDataSuccess(jsonData);
            setShowLoadingIndicator(false);
            return;
          }
        }
        else if (responseData.result === "Failed") {
          console.log("execLookupDataRequest: Search Data Call Failed");
          setShowLoadingIndicator(false);
          showAlert("error", "Error" ,"Search Data Fetch Error !")
          handleLookupDataFailure();
          return;
        }
      }
      else {
        console.log("execLookupDataRequest: Server/Network Error !");
        console.log(responseData);
        setShowLoadingIndicator(false);
        showAlert("error", "Error" ,"Search Data Fetch Server/Network error !");
        handleLookupDataFailure();
        return;
      }
    }
    
    if(isDebug)
      console.log("execLookupDataRequest: End");
  }*/

  async function execLookupDataRequest() {

    if(isDebug)
      console.log("execLookupDataRequest: Begin");
    
    const postData = getLookupRequestPostData();
    const responseData1 = await getNARFLookup(postData);
    //const responseData = JSON.parse(JSON.stringify(responseData1)); //comment this for build
    const responseData = JSON.parse(responseData1); //uncomment this for build

    if (responseData) {
      
      if (Object.keys(responseData).findIndex(element => element === "result") > -1) {
        if (isDebug) {
          console.log("execLookupDataRequest - responseData");
          console.log(responseData);
        }
        if (responseData.result === "Success") {
          
          let jsonResult= responseData;
          let jsonData = 
jsonResult.data
["accounts"];

          if (isDebug) {
            console.log("execLookupDataRequest - jsonData");
            console.log(jsonData);
          }

          if (!jsonData || jsonData.length===0) {
            console.log("execLookupDataRequest: Search Data Empty - jsonData");
            console.log(jsonData);
            setShowLoadingIndicator(false);
            showAlert("warning", "OOPS!", "Search Data Empty")
            handleLookupDataFailure();
            return;
          }
          else {
            console.log("execLookupDataRequest: Search Data Call Success");
            handleLookupDataSuccess(jsonData);
            setShowLoadingIndicator(false);
            return;
          }
        }
        else if (responseData.result === "Failed") {
          console.log("execLookupDataRequest: Search Data Call Failed");
          setShowLoadingIndicator(false);
          showAlert("warning", "OOPS!!" ,"Search Data Empty")
          handleLookupDataFailure();
          return;
        }
      }
      else {
        console.log("execLookupDataRequest: Server/Network Error !");
        console.log(responseData);
        setShowLoadingIndicator(false);
        showAlert("warning", "OOPS!!" ,"Search Data Fetch Server/Network error");
        handleLookupDataFailure();
        return;
      }
    }
    
    if(isDebug)
      console.log("execLookupDataRequest: End");
  } 

  function getLookupRequestPostData() {

    if(isDebug)
      console.log("getLookupRequestPostData: Begin");

    let searchRequestData = {
      "searchAccountNo": searchAccountNo,
      "searchCompanyName": searchCompanyName,
      "searchAddress": searchAddress,
      "searchCity": searchCity,
      "searchStatus": searchStatus,
      "searchState": searchState,
    }

    if (isDebug) {
      console.log("getLookupRequestPostData: searchRequestData");
      console.log(JSON.stringify(searchRequestData));
      console.log("getLookupRequestPostData: End");
    }

    return (searchRequestData);

  }

  function handleLookupDataSuccess(jsonData) {
    if(isDebug)
      console.log("handleLookupDataSuccess: Begin");
    
    searchResults = JSON.parse(JSON.stringify(jsonData));

    let array = []

    if (searchResults && searchResults.length > 0) {

      searchResults.forEach(element => {

        let dict = {};
        dict["AcctName"] = element["CustomerName"];
        dict["Address"] = element["DeliveryAddress1"] + ", " + element["DeliveryCity"] + ", " + element["DeliveryState"].toUpperCase() + " " + element["DeliveryZip"];

        if (element["fb1Status"] && element["fb1Status"].length > 0) {
          dict["FB1Status"] = element["fb1Status"];
          if (element["fb1UpdatedDate"] && element["fb1UpdatedDate"].length > 0) {
            dict["FB1Status"] = dict["FB1Status"] + " - " + element["fb1UpdatedDate"];
          }
        }
        else {
          dict["FB1Status"] = "CREATE";
        }

        if (element["narfStatus"] && element["narfStatus"].length > 0) {
          dict["NARFStatus"] = element["narfStatus"];
          if (element["narfUpdatedDate"] && element["narfUpdatedDate"].length > 0) {
            dict["NARFStatus"] = dict["NARFStatus"] + " - " + element["narfUpdatedDate"];
          }
        }
        else {
          dict["NARFStatus"] = "CREATE";
        }

        array.push(dict);

      });

      setSearchDataList(JSON.parse(JSON.stringify(jsonData)));

      let data = [];
      if (array.length > 0) {
      
        array.map((element, index) => {
          let elem = JSON.parse(JSON.stringify(element));
          //elem.action = actionItems(index, element.acctName);
          elem.NARFStatus = narfActionItem(index, element.NARFStatus);
          elem.FB1Status = fb1ActionItem(index, element.FB1Status);
          data.push(elem);
        });
      
        setTableData({ columns: tableDataColumns, rows: data });
      } 
      
    }
    
    if(isDebug)
      console.log("handleLookupDataSuccess: End");
  }

  function handleLookupDataFailure(){

    if(isDebug)
      console.log("handleLookupDataFailure: Begin");

    //TODO
    
    if(isDebug)
      console.log("handleLookupDataFailure: End");
  }

  function onClickDeleteRow(rowId, account) {
    //Delete row from table
    if (isDebug) {
      console.log("onClickDeleteRow: Begin");
      console.log("onClickDeleteRow: rowId - " + rowId + "; account name - " + account);
    }

    setDeleteRowDetails({
      rowId: rowId,
      acctName: account,
    });

    setShowDeleteRowAlert(true);

    if (isDebug) {
      console.log("onClickDeleteRow: End");
    }

  }

  function onConfirmDeleteRowAlert() {
    //Delete row from table
    if (isDebug) {
    console.log("onConfirmDeleteRowAlert: Begin");
    console.log("onConfirmDeleteRowAlert: rowId - " + deleteRowDetails.rowId + "; Account Name - " + deleteRowDetails.acctName);
    }

    setSearchDataList(searchDataList.filter((item, index) => (index !== deleteRowDetails.rowId)));

    if (isDebug) {
    console.log("onConfirmDeleteRowAlert: End");
    }

  }

  function onConfirmRedirectionAlert() {
    /*
    history.push({
      pathname: '/accountapplication',
      search: '?type='+fb1RedirectStateDict["type"],
      state: JSON.parse(JSON.stringify(fb1RedirectStateDict))
    });
    */
  }

  const showUploadDataLoadingIndicator = () => {
    console.log("showLoadingIndicator>>>");
  
    hideAnElement("divRestApiSuccess");
    hideAnElement("butRestApiSuccess");
    hideAnElement("divRestApiFailure");
    showAnElement("divLoadingIndicator");
    hideAnElement("linkPrevious");
    hideAnElement("linkNext");
  
    setactiveTab(6);
  
  };
  
  const handleFormDataSuccess = () => {
    console.log("handleRestApiSuccess>>>");
  
    var msg = "Form Data Submitted successfully !";
  
    setInnerHTML("textRestApiSuccess", msg);
    showAnElement("divRestApiSuccess");
    showAnElement("butRestApiSuccess");
    hideAnElement("divRestApiFailure");
    hideAnElement("divLoadingIndicator");
    hideAnElement("linkPrevious");
    hideAnElement("linkNext");
  
    setactiveTab(6);
    
  };
  
  const handleFormDataSuccessWithAttachments = () => {
    console.log("handleFormDataSuccessWithAttachments>>>");
  
    var msg = "Form Data Submitted Successfully With Attachments !";
  
    setInnerHTML("textRestApiSuccess", msg);
    showAnElement("divRestApiSuccess");
    showAnElement("butRestApiSuccess");
    hideAnElement("divRestApiFailure");
    hideAnElement("divLoadingIndicator");
    hideAnElement("linkPrevious");
    hideAnElement("linkNext");
  
    setactiveTab(6);
  
  };
  
  const handleFormDataSuccessWithoutAttachments = () => {
    console.log("handleFormDataSuccessWithoutAttachments>>>");
  
    var msg = "Form Data Submitted Successfully Without Attachments !";
  
    setInnerHTML("textRestApiSuccess", msg);
    showAnElement("divRestApiSuccess");
    showAnElement("butRestApiSuccess");
    hideAnElement("divRestApiFailure");
    hideAnElement("divLoadingIndicator");
    hideAnElement("linkPrevious");
    hideAnElement("linkNext");
  
    setactiveTab(6);
  
  };
  
  const handleFormDataFailure = () => {
    console.log("handleFormDataFailure>>>");
  
    var msg = "Sorry, Form Data Submission Failed !";
  
    setInnerHTML("textRestApiFailure", msg);
    showAnElement("divRestApiFailure");
    hideAnElement("divRestApiSuccess");
    hideAnElement("butRestApiSuccess");
    hideAnElement("divLoadingIndicator");
    showAnElement("linkPrevious");
    hideAnElement("linkNext");
  
    setactiveTab(6);
  
  };
  
  const handleFormDataNetworkFailure = () => {
    console.log("handleFormDataNetworkFailure>>>");
    
    var msg = "Sorry, Network/Server Error !";
  
    setInnerHTML("textRestApiFailure", msg);
    showAnElement("divRestApiFailure");
    hideAnElement("divRestApiSuccess");
    hideAnElement("divLoadingIndicator");
    showAnElement("linkPrevious");
    hideAnElement("linkNext");
  
    setactiveTab(6);
  
  };

  const onClickAddRecordApiSuccess = event => {
    console.log("onClickAddRecordApiSuccess");
  
    //reset forms
    //form1 && form1.reset();
    //form2 && form2.reset();
    form3 && form3.reset();
    form4 && form4.reset();
    form5 && form5.reset();
  
    clearTab3();
    clearTab4();
    clearTab5();

    if (headerRecord && recordMode === "create" && customerId) {
      let list = JSON.parse(JSON.stringify(searchDataList));
      let findIndex = list.findIndex(element => element["CustomerID"] === customerId);
      if (findIndex > -1 && list[findIndex]["CustomerID"] === customerId) {
        var cdate = new Date();
        var tmonth = cdate.getMonth()+1; // 1-12
        var tdate = cdate.getDate(); //1-31
        var cDateStr = "" + tmonth + "/" + tdate + "/" + cdate.getFullYear(); //mm-dd-yyyy
        list[findIndex]["narfStatus"] = "COMPLETED";
        list[findIndex]["narfUpdatedDate"] = cDateStr;
        handleLookupDataSuccess(list);
        if (isDebug)
          console.log("onClickAddRecordApiSuccess: narfUpdatedDate = " + cDateStr);
      }
    }
    setHeaderRecord(null);
    setRecordMode("create");
    setCustomerId(null);

    toggleTab(2);
  }

  return (
    <React.Fragment>
      <Prompt
      message={(location, action) => {

        if(true){
          console.log("PROMPT");
          console.log(location);
          console.log(action);
        }

        if (action === 'POP') {
          if(true)
            console.log("Backing up...")
        }

        if(location.pathname.search("narf") > -1){
          return(null);
        }
        else{
          return("Are you sure, you want leave current page?");
        }
        
      }}
      />
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="NEW ACCOUNT REQUEST" breadcrumbItem="NEW ACCOUNT REQUEST FORM" />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  {showLoadingIndicator ? (
                      <SweetAlert
                      title="Fetching Data, Please Wait!"
                      show={showLoadingIndicator}
                      showConfirm={false}
                      onConfirm={() => {
                          //TODO
                      }}
                      >
                      <div>
                      <Spinner className="m-1" color="info" />
                      </div>
                      </SweetAlert>
                      ) : null
                  }

                  { showSuccessAlert? (
                    <SweetAlert
                        success
                        show={showSuccessAlert}
                        title={alertTitle}
                        onConfirm={() => {
                        hideAlert();
                        }}
                    >
                        {alertMsg}
                    </SweetAlert>
                    ) : null
                  }

                  { showErrorAlert? (
                      <SweetAlert
                          error
                          show={showErrorAlert}
                          title={alertTitle}
                          onConfirm={() => {
                          hideAlert();
                          }}
                      >
                          {alertMsg}
                      </SweetAlert>
                      ) : null
                      }

                      { showWarningAlert? (
                      <SweetAlert
                          warning
                          show={showWarningAlert}
                          title={alertTitle}
                          onConfirm={() => {
                          hideAlert();
                          }}
                      >
                          {alertMsg}
                      </SweetAlert>
                      ) : null
                      }
                  
                    {showDeleteRowAlert ? (
                      <SweetAlert
                        title="Are you sure to delete?"
                        warning
                        showCancel
                        confirmButtonText="Yes, delete it!"
                        confirmBtnBsStyle="success"
                        cancelBtnBsStyle="danger"
                        onConfirm={() => {
                          setShowDeleteRowAlert(false);
                          onConfirmDeleteRowAlert();
                        }}
                        onCancel={() => setShowDeleteRowAlert(false)}
                      >
                        You won't be able to revert this!
                      </SweetAlert>
                      ) : null
                    }
                  
                    {showRedirectionAlert ? (
                      <SweetAlert
                        title="You will be redirected to Credit Application (FB1) page"
                        warning
                        showCancel
                        confirmButtonText="Yes, please !"
                        confirmBtnBsStyle="success"
                        cancelBtnBsStyle="danger"
                        onConfirm={() => {
                          setShowRedirectionAlert(false);
                          onConfirmRedirectionAlert();
                        }}
                        onCancel={() => setShowRedirectionAlert(false)}
                      >
                      
                      </SweetAlert>
                      ) : null
                    }


                  <h4 className="card-title mb-4">&nbsp;&nbsp;</h4>
                  <div className="wizard clearfix">
                    <div className="steps clearfix">
                      <ul>
                        <NavItem
                          className={classnames({ current: activeTab === 1 })}>
                          <NavLink
                            className={classnames({ current: activeTab === 1 })}
                            onClick={() => {
                              setactiveTab(1)
                            }}
                          >
                            <span className="number">1.</span>{" "}
                            Questions
                          </NavLink>
                        </NavItem>
                        <NavItem className={classnames({ current: activeTab === 2 })}>
                          <NavLink
                            className={classnames({ active: activeTab === 2 })}
                            onClick={() => {
                              onClickTab(2)
                            }}
                          >
                            <span className="number me-2">2.</span>{" "}
                            Select Customer
                          </NavLink>
                        </NavItem>
                        <NavItem className={classnames({ current: activeTab === 3 })}>
                          <NavLink
                            className={classnames({ active: activeTab === 3 })}
                            onClick={() => {
                              onClickTab(3)
                            }}
                          >
                            <span className="number">3.</span>{" "}
                          Customer Details
                        </NavLink>
                        </NavItem>
                        <NavItem className={classnames({ current: activeTab === 4 })}>
                          <NavLink
                            className={classnames({ active: activeTab === 4 })}
                            onClick={() => {
                              onClickTab(4)
                            }}
                          >
                            <span className="number">4.</span>{" "}
                          Additional Details
                        </NavLink>
                        </NavItem>
                        <NavItem className={classnames({ current: activeTab === 5 })}>
                          <NavLink
                            className={classnames({ active: activeTab === 5 })}
                            onClick={() => {
                              onClickTab(5)
                            }}
                          >
                            <span className="number">5.</span>{" "}
                          Billing Details
                        </NavLink>
                        </NavItem>
                        <NavItem className={classnames({ current: activeTab === 6 })}>
                          <NavLink
                            className={classnames({ active: activeTab === 6 })}
                            onClick={() => {
                              //setactiveTab(6)
                            }}
                          >
                            <span className="number">6.</span>{" "}
                          Status
                        </NavLink>
                        </NavItem>
                      </ul>
                    </div>
                    <div className="content clearfix">
                      <div className="body">
                        <TabContent
                          activeTab={activeTab}
                        >
                          <TabPane tabId={1}>
                            <AvForm className="needs-validation" onInvalidSubmit={handleInvalidSubmitFirstTab} onValidSubmit={handleValidSubmitFirstTab} ref={c => {form1 = c}}>
                              <Row>
                                <Col md="3">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="isNewParent">Is this a Parent (for pricing)?<code>*</code></Label>
                                    <AvRadioGroup
                                      errorMessage="Select Yes or No"
                                      onChange={e => { setIsNewParent(e.target.value); setIsEquipmentOnly(null); setIsRevive(null); setIsNewShipPaysBill(null); setIsNewShipExistingBill(null)}}
                                      value={isNewParent}
                                      inline
                                      name="isNewParent"
                                      id="isNewParent"
                                      label=""
                                      required
                                    >
                                      <AvRadio label="Yes" value="1" />
                                      <AvRadio label="No" value="0" />
                                    </AvRadioGroup>
                                  </FormGroup>
                                </Col>
                              </Row>

                              <Row hidden = {(isNewParent==="0")?false:true}>
                                <Col md="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="isEquipmentOnly">Is this an Equipment Only location linked to an associated CFS/CFD account (not billed directly)?<code>*</code></Label>
                                    <AvRadioGroup
                                      errorMessage="Select Yes or No"
                                      onChange={e => { setIsEquipmentOnly(e.target.value); setIsRevive(null); setIsNewShipPaysBill(null); setIsNewShipExistingBill(null)}}
                                      value={isEquipmentOnly}
                                      inline
                                      name="isEquipmentOnly"
                                      id="isEquipmentOnly"
                                      label=""
                                      validate={{ required: { value: (isNewParent === "0") ? true : false } }}
                                    >
                                      <AvRadio label="Yes" value="1" />
                                      <AvRadio label="No" value="0" />
                                    </AvRadioGroup>
                                  </FormGroup>
                                </Col>
                              </Row>

                              <Row hidden = {(isNewParent === "0" && isEquipmentOnly==="0")?false:true}>
                                <Col md="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="isRevive">Is this a Revive/Service/Parts account that will be billed directly?<code>*</code></Label>
                                    <AvRadioGroup
                                      errorMessage="Select Yes or No"
                                      onChange={e => { setIsRevive(e.target.value); setIsNewShipPaysBill(null); setIsNewShipExistingBill(null) }}
                                      value={isRevive}
                                      inline
                                      name="isRevive"
                                      id="isRevive"
                                      label=""
                                      validate={{ required: { value: (isNewParent === "0" && isEquipmentOnly === "0") ? true : false } }}
                                    >
                                      <AvRadio label="Yes" value="1" />
                                      <AvRadio label="No" value="0" />
                                    </AvRadioGroup>
                                  </FormGroup>
                                </Col>
                              </Row>

                              <Row hidden = {(isNewParent === "0" && isEquipmentOnly==="0" && isRevive==="0")?false:true}>
                                <Col md="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="isNewShipPaysBill">Is this a new ship-to location that pays their own bills?<code>*</code></Label>
                                    <AvRadioGroup
                                      errorMessage="Select Yes or No"
                                      onChange={e => { setIsNewShipPaysBill(e.target.value); setIsNewShipExistingBill(null) }}
                                      value={isNewShipPaysBill}
                                      inline
                                      name="isNewShipPaysBill"
                                      id="isNewShipPaysBill"
                                      label=""
                                      validate={{ required: { value: (isNewParent === "0" && isEquipmentOnly==="0" && isRevive === "0") ? true : false } }}
                                    >
                                      <AvRadio label="Yes" value="1" />
                                      <AvRadio label="No" value="0" />
                                    </AvRadioGroup>
                                  </FormGroup>
                                </Col>
                              </Row>

                              <Row hidden = {(isNewParent === "0" && isEquipmentOnly==="0" && isRevive==="0" && isNewShipPaysBill === "0")?false:true}>
                                <Col md="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="isNewShipExistingBill">Is this a new ship-to location linked to an existing active bill-to/payor in JDE?<code>*</code></Label>
                                    <AvRadioGroup
                                      errorMessage="Select Yes or No"
                                      onChange={e => { setIsNewShipExistingBill(e.target.value); }}
                                      value={isNewShipExistingBill}
                                      inline
                                      name="isNewShipExistingBill"
                                      id="isNewShipExistingBill"
                                      label=""
                                      validate={{ required: { value: (isNewParent === "0" && isEquipmentOnly==="0" && isRevive === "0" && isNewShipPaysBill === "0") ? true : false } }}
                                    >
                                      <AvRadio label="Yes" value="1" />
                                      <AvRadio label="No" value="0" />
                                    </AvRadioGroup>
                                  </FormGroup>
                                </Col>
                              </Row>
                            
                              <button id="hiddenSubmitFirstTab" type="submit" hidden>Submit</button>
                            </AvForm>

                          </TabPane>

                          <TabPane tabId={2}>
                            <Row>
                              <Col className="col-12">
                                <Card>
                                  <CardBody>
                                    <AvForm className="needs-validation" onInvalidSubmit={handleInvalidSubmitSecondTab} onValidSubmit={handleValidSubmitSecondTab} ref={c => {form2 = c}}>
                                      <Row>
                                        <Col lg="6">
                                          <div className="mb-3">
                                            <Label for="searchAcctNo">Account #</Label>
                                            <AvField
                                              name="searchAccountNo"
                                              type="text"
                                              errorMessage="Enter Account No."
                                              className="form-control"
                                              validate={{ required: { value: false } }}
                                              id="searchAccountNo"
                                              value={searchAccountNo}
                                              onChange={e => {setSearchAccountNo(e.target.value)}}
                                            />
                                          </div>
                                        </Col>
                                        <Col lg="6">
                                          <div className="mb-3">
                                            <Label for="searchCompanyName">Company Name</Label>
                                            <AvField
                                              name="searchCompanyName"
                                              type="text"
                                              errorMessage="Enter Company Name"
                                              className="form-control"
                                              validate={{ required: { value: false } }}
                                              id="searchCompanyName"
                                              value={searchCompanyName}
                                              onChange={e => {setSearchCompanyName(e.target.value)}}
                                            />
                                          </div>
                                        </Col>
                                      </Row>

                                      <Row>
                                        <Col lg="6">
                                          <div className="mb-3">
                                            <Label for="searchAddress">Address</Label>
                                            <AvField
                                              name="searchAddress"
                                              type="text"
                                              errorMessage="Enter Address"
                                              className="form-control"
                                              validate={{ required: { value: false } }}
                                              id="searchAddress"
                                              value={searchAddress}
                                              onChange={e => {setSearchAddress(e.target.value)}}
                                            />
                                          </div>
                                        </Col>
                                        <Col lg="6">
                                          <div className="mb-3">
                                            <Label for="searchCity">City</Label>
                                            <AvField
                                              name="searchCity"
                                              type="text"
                                              errorMessage="Enter City"
                                              className="form-control"
                                              validate={{ required: { value: false } }}
                                              id="searchCity"
                                              value={searchCity}
                                              onChange={e => {setSearchCity(e.target.value)}}
                                            />
                                          </div>
                                        </Col>
                                      </Row>

                                      <Row>
                                        <Col lg="6">
                                          <div className="mb-3">
                                            <Label htmlFor="searchStatus">Status</Label>
                                            <AvField
                                            id="searchStatus"
                                            type="select"  
                                            name="searchStatus"
                                            className="form-control"
                                            errorMessage="Enter Status"
                                            validate={{ required: { value: false}}}
                                            value={searchStatus} 
                                            onChange={e => {setSearchStatus(e.target.value)}}
                                            >
                                              <option key="" value="">Select Status</option>
                                              <option key="Open" value="Open">Open</option>
                                              <option key="Hold" value="Hold">Hold</option>
                                              <option key="Closed" value="Closed">Closed</option>
                                            </AvField>
                                          </div>
                                        </Col>

                                        <Col lg="6">
                                          <div className="mb-3">
                                            <Label htmlFor="searchState">State</Label>
                                            <AvField
                                            id="searchState"
                                            type="select"  
                                            name="searchState"
                                            className="form-control"
                                            errorMessage="Enter State"
                                            validate={{ required: { value: false}}}
                                            value={searchState} 
                                            onChange={e => {setSearchState(e.target.value)}}
                                            >
                                              {usStates.map((element) => 
                                            <option key={element.masterCode} value={element.masterCode}>{element.masterDesc}</option>
                                            )}
                                            </AvField>
                                          </div>
                                        </Col>
                                      </Row>
                                      <Row><br/></Row>
                                      <Row>
                                        <div className="col-lg-6 align-self-center">
                                          <br/>
                                          <button
                                            type="submit"
                                            value="search"
                                            className="btn btn-primary waves-effect waves-light"
                                          ><i className="uil-search"></i>&nbsp;
                                            SEARCH
                                          </button>&nbsp;&nbsp;
                                        
                                          <Link
                                            className="btn btn-success waves-effect waves-light"
                                            to="/accountapplication"
                                            hidden={(isNewParent === "1" || isEquipmentOnly === "1")?true:false}
                                          ><i className="uil-focus-add"></i>&nbsp;ADD FB1 ACCOUNT</Link>&nbsp;&nbsp;

                                          {/*
                                          <button
                                            hidden={(isNewParent === "1" || isEquipmentOnly === "1")?true:false}
                                            type="button"
                                            value="addfb1account"
                                            className="btn btn-success waves-effect waves-light"
                                            ><i className="uil-focus-add"></i>&nbsp;
                                            ADD FB1 ACCOUNT
                                          </button>&nbsp;&nbsp;
                                          */}

                                          <button
                                            hidden={((isRevive === "1" || isNewShipPaysBill === "1" || isNewShipExistingBill === "1") ||
                                              (isNewParent === "0" && isEquipmentOnly === "0" && isRevive === "0" && isNewShipPaysBill === "0" && isNewShipExistingBill === "0")) ? true : false}
                                            type="button"
                                            value="addnarfaccount"
                                            className="btn btn-success waves-effect waves-light"
                                            onClick={e => onClickAddNARFAccount()}
                                            ><i className="uil-book-alt"></i>&nbsp;
                                            ADD NARF ACCOUNT
                                          </button>   
                                        </div>
                                      </Row>
                                    </AvForm>
                                  </CardBody>
                                </Card> 
                              </Col>
                            </Row>
                            
                            <Row>
                              <Col className="col-12">
                                <Card>
                                  <CardBody>
                                    <MDBDataTable
                                      name="datatable-narfsearch"
                                      ref={c=>{searchTableWidget=c}}                
                                      displayEntries={false}
                                      searching={false}
                                      paging={true}
                                      entries={15}
                                      noBottomColumns 
                                      responsive 
                                      striped 
                                      bordered
                                      data={tableData}
                                    />
                                  </CardBody>
                                </Card> 
                              </Col>
                            </Row>
                          </TabPane>

                          <TabPane tabId={3}>

                            <Row>
                              <Col className="col-12">
                                <CardTitle>{legalName}{(headerRecord)?" - #"+headerRecord["CustomerID"]:""}</CardTitle>
                                <CardSubtitle className="mb-3">Required fields are noted with{" "}<code>*</code>.</CardSubtitle>
                              </Col>
                            </Row>

                            <AvForm className="needs-validation" onInvalidSubmit={handleInvalidSubmitThirdTab} onValidSubmit={handleValidSubmitThirdTab} ref={c => { form3 = c }} disabled={(recordMode==="readonly")?true:false}>
                              <CustomerInformation
                                inputFields={inputFields}
                                setInputFields={setInputFields}
                                recordMode={recordMode}
                                
                                purposeValue={purpose} 
                                purposeOnchange={setPurpose} 
                                operatingUnitValue={operatingUnit} 
                                operatingUnitOnchange={setOperatingUnit}
                                routeValue={route} 
                                routeOnchange={setRoute}
                                businessUnitNTLValue={businessUnitNTL}
                                businessUnitNTLOnchange={ setBusinessUnitNTL}
                                originatorNameValue={originatorName}
                                originatorNameOnchange={setOriginatorName}
                                originatorPhoneValue={originatorPhone}
                                originatorPhoneOnchange={setOriginatorPhone}
                                searchTypeValue={searchType}
                                searchTypeOnchange={setSearchType}
                                branchNoValue={branchNo}
                                branchNoOnchange={setBranchNo}
                                districtNoValue={districtNo}
                                districtNoOnchange={setDistrictNo}
                                regionNoValue={regionNo}
                                regionNoOnchange={setRegionNo}
                                alphaDBANameValue={alphaDBAName}
                                alphaDBANameOnchange={setAlphaDBAName}
                                legalNameValue={legalName}
                                legalNameOnchange={setLegalName}
                                deliveryAddressLine1Value={deliveryAddressLine1}
                                deliveryAddressLine1Onchange={setDeliveryAddressLine1}
                                deliveryAddressLine2Value={deliveryAddressLine2}
                                deliveryAddressLine2Onchange={setDeliveryAddressLine2}
                                deliveryAddressLine3Value={deliveryAddressLine3}
                                deliveryAddressLine3Onchange={setDeliveryAddressLine3}
                                deliveryAddressLine4Value={deliveryAddressLine4}
                                deliveryAddressLine4Onchange={setDeliveryAddressLine4}
                                cityValue={city}
                                cityOnchange={setCity}
                                stateValue={state}
                                stateOnchange={setState}
                                zipCodeValue={zipCode}
                                zipCodeOnchange={setZipCode}
                                countyValue={county}
                                countyOnchange={setCounty}
                              />
                              
                              <Row>
                                <p className="card-title-desc">Billing Address if Different Than Delivery Address Provided {"  "}
                                <input
                                    checked={isBillingAddressDiffThanDelivery}
                                    type="checkbox"
                                    className="form-check-input"
                                    onChange={e => { handleCheckbox(e.target.checked) }}
                                  />
                                </p>
                              </Row>

                              <BillingDetails1
                                recordMode={recordMode}
                                
                                isBillingAddressDiffThanDeliveryValue={isBillingAddressDiffThanDelivery}
                                billingAlphaNameValue={billingAlphaName}
                                billingAlphaNameOnchange={setBillingAlphaName}
                                legalMailingNameValue={legalMailingName}
                                legalMailingNameOnchange={setLegalMailingName}
                                billingAddressValue={billingAddress}
                                billingAddressOnchange={setBillingAddress}
                                billingCityValue={billingCity}
                                billingCityOnchange={setBillingCity}
                                billingStateValue={billingState}
                                billingStateOnchange={setBillingState}
                                billingZipCodeValue={billingZipCode}
                                billingZipCodeOnchange={setBillingZipCode}  
                              />

                              <CustomerInformation1
                                recordMode={recordMode}

                                locationPhoneNoValue={locationPhoneNo}
                                locationPhoneNoOnchange={setLocationPhoneNo}
                                locationFaxNoValue={locationFaxNo}
                                locationFaxNoOnchange={setLocationFaxNo}
                                customerContactNameValue={customerContactName}
                                customerContactNameOnchange={setCustomerContactName}
                                customerCellNumberValue={customerCellNumber}
                                customerCellNumberOnchange={setCustomerCellNumber}
                                customerEmailValue={customerEmail}
                                customerEmailOnchange={setCustomerEmail}
                                ownerNameValue={ownerName}
                                ownerNameOnchange={setOwnerName}
                              />

                              <button id="hiddenSubmitThirdTab" type="submit" hidden>Submit</button>
                            </AvForm>

                          </TabPane>
                          <TabPane tabId={4}>

                            <Row>
                              <Col className="col-12">
                                <CardTitle>{legalName}{(headerRecord)?" - #"+headerRecord["CustomerID"]:""}</CardTitle>
                                <CardSubtitle className="mb-3">Required fields are noted with{" "}<code>*</code>.</CardSubtitle>
                              </Col>
                            </Row>

                            <AvForm className="needs-validation" onInvalidSubmit={handleInvalidSubmitFourthTab} onValidSubmit={handleValidSubmitFourthTab} ref={c => { form4 = c }} disabled={(recordMode==="readonly")?true:false}>
                              
                              <CustomerAddlInformation
                                operatingUnitValue={operatingUnit}
                                headerRecord={headerRecord}
                                inputFields={inputFields}
                                setInputFields={setInputFields}
                                recordMode={recordMode}

                                federalTaxIDNoValue={federalTaxIDNo}
                                federalTaxIDNoOnchange={setFederalTaxIDNo}
                                resaleCertificateNoValue={resaleCertificateNo}
                                resaleCertificateNoOnchange={setResaleCertificateNo}
                                onResaleCertificateNoFileChange={onResaleCertificateNoFileChange}
                                taxGroupValue={taxGroup}
                                taxGroupOnchange={setTaxGroup}
                                managedByValue={managedBy}
                                managedByOnchange={setManagedBy}
                                customerSegmentValue={customerSegment}
                                customerSegmentOnchange={setCustomerSegment}
                                newAcctAcquiredByValue={newAcctAcquiredBy}
                                newAcctAcquiredByOnchange={setNewAcctAcquiredBy}
                                equipmentServiceLevelValue={equipmentServiceLevel}
                                equipmentServiceLevelOnchange={setEquipmentServiceLevel}
                                customerGroupValue={customerGroup}
                                customerGroupOnchange={setCustomerGroup}
                                posProgramValue={posProgram}
                                posProgramOnchange={setPosProgram}
                                alliedEquipProgramValue={alliedEquipProgram}
                                alliedEquipProgramOnchange={setAlliedEquipProgram}
                                priceProtectionValue={priceProtection}
                                priceProtectionOnchange={setPriceProtection}
                                alliedDiscountValue={alliedDiscount}
                                alliedDiscountOnchange={setAlliedDiscount}
                                weeklyCoffeeVolumeValue={weeklyCoffeeVolume}
                                weeklyCoffeeVolumeOnchange={setWeeklyCoffeeVolume}
                                equipmentProgramValue={equipmentProgram}
                                equipmentProgramOnchange={setEquipmentProgram}
                                estimatedBiWeeklySalesValue={estimatedBiWeeklySales}
                                estimatedBiWeeklySalesOnchange={setEstimatedBiWeeklySales}
                                termsOfSaleValue={termsOfSale}
                                termsOfSaleOnchange={setTermsOfSale}
                                creditLimitValue={creditLimit}
                                creditLimitOnchange={setCreditLimit}
                                adjustmentScheduleValue={adjustmentSchedule}
                                adjustmentScheduleOnchange={setAdjustmentSchedule}
                                freightHandlingCodeValue={freightHandlingCode}
                                freightHandlingCodeOnchange={setFreightHandlingCode}
                                dailyDeliverySequenceValue={dailyDeliverySequence}
                                dailyDeliverySequenceOnchange={setDailyDeliverySequence}
                                frequencyDailyDeliveryValue={frequencyDailyDelivery}
                                frequencyDailyDeliveryOnchange={setFrequencyDailyDelivery}
                                parentNumberValue={parentNumber}
                                parentNumberOnchange={setParentNumber}
                                parentChainNumberValue={parentChainNumber}
                                parentChainNumberOnchange={setParentChainNumber}
                                newAcctAcquiredBy1Value={newAcctAcquiredBy1}
                                newAcctAcquiredBy1Onchange={setNewAcctAcquiredBy1}
                                employeeTitleValue={employeeTitle}
                                employeeTitleOnchange={setEmployeeTitle}
                                employeeNameNoValue={employeeNameNo}
                                employeeNameNoOnchange={setEmployeeNameNo}
                                categoryAlliedAdjustmentValue={categoryAlliedAdjustment}
                                categoryAlliedAdjustmentOnchange={setCategoryAlliedAdjustment}
          
                              />

                              <button id="hiddenSubmitFourthTab" type="submit" hidden>Submit</button>
                            </AvForm>

                          </TabPane>
                          <TabPane tabId={5}>

                            <Row>
                              <Col className="col-12">
                                <CardTitle>{legalName}{(headerRecord)?" - #"+headerRecord["CustomerID"]:""}</CardTitle>
                                <CardSubtitle className="mb-3">Required fields are noted with{" "}<code>*</code>.</CardSubtitle>
                              </Col>
                            </Row>

                            <AvForm className="needs-validation" onInvalidSubmit={handleInvalidSubmitFifthTab} onValidSubmit={handleValidSubmitFifthTab} ref={c => { form5 = c }} disabled={(recordMode==="readonly")?true:false}>
                              
                              <BillingDetails
                                isBillingAddressDiffThanDeliveryValue={isBillingAddressDiffThanDelivery}
                                enterExistingBillToAccountNoValue={enterExistingBillToAccountNo}
                                enterExistingBillToAccountNoOnchange={setEnterExistingBillToAccountNo}
                                createNewBillToAccountNoValue={createNewBillToAccountNo}
                                createNewBillToAccountNoOnchange={setCreateNewBillToAccountNo}
                                billingNotesValue={billingNotes}
                                billingNotesOnchange={setBillingNotes}
                              />

                              <button id="hiddenSubmitFifthTab" type="submit" hidden>Submit</button>
                            </AvForm>

                          </TabPane>
                          <TabPane tabId={6}>
                          <Row className="align-items-center" id="divRestApiSuccess">
              <div className="row justify-content-center">
                <Col>
                  <div className="text-center">
                    <div className="mb-4">
                      <i className="mdi mdi-check-circle-outline text-success display-4" />
                    </div>
                    <div>
                      <h5>Success</h5>
                      <p className="text-muted" id="textRestApiSuccess">
                        Form Data Submitted successfully !
                      </p>
                    </div>
                  </div>
                </Col>
              </div>
            </Row>
            <Row className="align-items-right" id="butRestApiSuccess">
              <div>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={e => {onClickAddRecordApiSuccess(e)}}
                >Back
                </button>
              </div>
            </Row>
            <Row className="align-items-center" id="divRestApiFailure">
              <div className="row justify-content-center">
                <Col>
                  <div className="text-center">
                    <div>
                      <i className="uil uil-exclamation-octagon d-block display-4 mt-2 mb-3 text-danger"></i>
                      <h5 className="text-danger">Error</h5>
                      <p id="textRestApiFailure">Failure: Network/Server Error !</p>
                    </div>
                  </div>
                </Col>
              </div>
            </Row>
            <Row className="align-items-center" id="divLoadingIndicator">
              <div className="row justify-content-center">
                <Col>
                <div className="text-center">
                  <h5>Uploading data, please wait !</h5>
                    <div>
                      <Spinner className="m-1" color="primary" />
                      <Spinner className="m-1" color="secondary" />
                      <Spinner className="m-1" color="success" />
                      <Spinner className="m-1" color="danger" />
                      <Spinner className="m-1" color="warning" />
                      <Spinner className="m-1" color="info" />
                      <Spinner className="m-1" color="light" />
                      <Spinner className="m-1" color="dark" />
                    </div>
                  </div>
                </Col>
              </div>
            </Row>
            
                          </TabPane>
                        </TabContent>
                      </div>
                    </div>
                    <div className="actions clearfix">
                      <ul>
                        <li
                          className={
                            activeTab === 1 ? "previous disabled" : "previous"
                          }
                        >
                          <Link
                            
                            id="linkPrevious"
                            to="#"
                            className="btn btn-primary"
                            onClick={() => {
                              toggleTab(activeTab - 1)
                            }}
                          >
                            Previous
                          </Link>
                        </li>
                        <li
                          className={activeTab === 6 ? "next disabled" : "next"}
                        >
                          <Link
                          hidden={activeTab===2?true:false}
                          id="linkNext"
                          to="#"
                          className="btn btn-primary"
                          onClick={() => {
                            switch(activeTab)
                            {
                              case 1:
                                document.getElementById("hiddenSubmitFirstTab").click();
                                break;
                              case 2:
                                toggleTab(3); //document.getElementById("hiddenSubmitSecondTab").click();
                                break;
                              case 3:
                                if (recordMode !== "readonly")
                                  document.getElementById("hiddenSubmitThirdTab").click();
                                else if (recordMode === "readonly")
                                  toggleTab(4);
                                break;
                              case 4:
                                if (recordMode !== "readonly")
                                  document.getElementById("hiddenSubmitFourthTab").click();
                                else if (recordMode === "readonly")
                                  toggleTab(5);
                                break;
                              case 5:
                                if (recordMode !== "readonly")
                                  document.getElementById("hiddenSubmitFifthTab").click();
                                else if (recordMode === "readonly")
                                  showAlert("warning", "It's Read-only Record", "");  
                                break;
                              default:
                                break;

                            }
                          }}
                        >
                        {activeTab===5?"Finish":"Next"}
                        </Link>
                        </li>
                      </ul>
                    </div>

                  </div>
                </CardBody>
              </Card>
            </Col>
            {/*
            <Col lg="12">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">&nbsp;&nbsp;</h4>
                  <div className="content clearfix">

                  </div>
                </CardBody>
              </Card>
            </Col>
            */}
            </Row>
        </Container>
      </div>
    </React.Fragment>
  )
  

}

export default NARF