//https://www.pluralsight.com/guides/how-to-use-radio-buttons-in-reactjs
//https://www.robinwieruch.de/react-radio-button/
//https://stackblitz.com/edit/availity-reactstrap-validation-72?file=Example.js

//1-(555)-555-5555
import React, { useState, Fragment, useEffect, Component } from "react"

import {
  Card,
  CardBody,
  Col,
  CardTitle,
  Container,
  FormGroup,
  Label,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Spinner,
  Modal,
  Button,
  Input
} from "reactstrap"

import classnames from "classnames"
import { Link, Prompt, useLocation } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { 
  AvForm, 
  AvField, 
  AvRadioGroup, 
  AvRadio,
  AvGroup,
  AvInput,
  AvFeedback
 } from "availity-reactstrap-validation"

//SweetAlert
import SweetAlert from "react-bootstrap-sweetalert"

import NumberFormat from "react-number-format"

import SignaturePad from 'react-signature-canvas'

import styles from './styles.module.css'
import { values } from "lodash"
import { baseUrl } from "../FBLibrary/fbglobals"

//const baseUrl = 'https://fbnarf.mktalt.com/pub';
//const baseUrl = 'http://localhost:19391';
//const baseUrl = "http://courage.co.in/testrestapi/index.php"


class MySignature extends Component {
  state = {trimmedDataURL: null}
  sigPad = {}
  clear = () => {
    this.sigPad.clear();
    this.setState({trimmedDataURL: null});
  }
  trim = () => {
    if(!this.sigPad.isEmpty()){
      this.setState({trimmedDataURL: this.sigPad.getTrimmedCanvas()
      .toDataURL('image/png')});
      this.props.mySignatureCallback(this.sigPad.getTrimmedCanvas().toDataURL('image/png'));
    }
  }
  render () {
    let {trimmedDataURL} = this.state
    let capturedMesg = "";
    let captureMesg = "";
    if(this.props.showSigPadFor==="PersonalGuarantee"){
      capturedMesg = "Captured!! Personal Guarantee Authorized Signature";
      captureMesg = "Capture Personal Guarantee Authorized Signature"
    }
    else if(this.props.showSigPadFor==="Consent"){
      capturedMesg = "Captured!! Consent Authorized Signature";
      captureMesg = "Capture Consent Authorized Signature"
    }
    return (
    <div className={styles.container}>
      <div className={styles.sigContainer}>
        <SignaturePad canvasProps={{className: styles.sigPad}}
          ref={(ref) => { this.sigPad = ref }} />
      </div>
      <div>
        <div className="d-grid gap-2">
          <Button
            color="secondary"
            className="btn btn-secondary btn-lg btn-block waves-effect waves-light mb-1"
            onClick={this.trim}
          >
            {this.state.trimmedDataURL?capturedMesg:captureMesg}
          </Button>
          <Button
            color="light"
            className="btn btn-primary btn-lg btn-block waves-effect waves-light mb-1"
            onClick={this.clear}
          >
            Clear Signature Pad
          </Button>
        </div>
      </div>
    </div>
    )
  }
}

const AccountApplication = () => {

  const isDebug = true;
  const location = useLocation();

  const usStates= [
    {
      "masterCode": "","masterDesc": "Select State"
    },
    {
      "masterCode": "AL","masterDesc": "Alabama"
    },
    {
      "masterCode": "AK","masterDesc": "Alaska"
    },
    {
      "masterCode": "AZ","masterDesc": "Arizona"
    },
    {
      "masterCode": "AR","masterDesc": "Arkansas"
    },
    {
      "masterCode": "CA","masterDesc": "California"
    },
    {
      "masterCode": "CO","masterDesc": "Colorado"
    },
    {
      "masterCode": "CT","masterDesc": "Connecticut"
    },
    {
      "masterCode": "DE","masterDesc": "Delaware"
    },
    {
      "masterCode": "DC","masterDesc": "District Of Columbia"
    },
    {
      "masterCode": "FL","masterDesc": "Florida"
    },
    {
      "masterCode": "GA","masterDesc": "Georgia"
    },
    {
      "masterCode": "HI","masterDesc": "Hawaii"
    },
    {
      "masterCode": "ID","masterDesc": "Idaho"
    },
    {
      "masterCode": "IL","masterDesc": "Illinois"
    },
    {
      "masterCode": "IN","masterDesc": "Indiana"
    },
    {
      "masterCode": "IA","masterDesc": "Iowa"
    },
    {
      "masterCode": "KS","masterDesc": "Kansas"
    },
    {
      "masterCode": "KY","masterDesc": "Kentucky"
    },
    {
      "masterCode": "LA","masterDesc": "Louisiana"
    },
    {
      "masterCode": "ME","masterDesc": "Maine"
    },
    {
      "masterCode": "MD","masterDesc": "Maryland"
    },
    {
      "masterCode": "MA","masterDesc": "Massachusetts"
    },
    {
      "masterCode": "MI","masterDesc": "Michigan"
    },
    {
      "masterCode": "MN","masterDesc": "Minnesota"
    },
    {
      "masterCode": "MS","masterDesc": "Mississippi"
    },
    {
      "masterCode": "MO","masterDesc": "Missouri"
    },
    {
      "masterCode": "MT","masterDesc": "Montana"
    },
    {
      "masterCode": "NE","masterDesc": "Nebraska"
    },
    {
      "masterCode": "NV","masterDesc": "Nevada"
    },
    {
      "masterCode": "NH","masterDesc": "New Hampshire"
    },
    {
      "masterCode": "NJ","masterDesc": "New Jersey"
    },
    {
      "masterCode": "NM","masterDesc": "New Mexico"
    },
    {
      "masterCode": "NY","masterDesc": "New York"
    },
    {
      "masterCode": "NC","masterDesc": "North Carolina"
    },
    {
      "masterCode": "ND","masterDesc": "North Dakota"
    },
    {
      "masterCode": "OH","masterDesc": "Ohio"
    },
    {
      "masterCode": "OK","masterDesc": "Oklahoma"
    },
    {
      "masterCode": "OR","masterDesc": "Oregon"
    },
    {
      "masterCode": "PA","masterDesc": "Pennsylvania"
    },
    {
      "masterCode": "RI","masterDesc": "Rhode Island"
    },
    {
      "masterCode": "SC","masterDesc": "South Carolina"
    },
    {
      "masterCode": "SD","masterDesc": "South Dakota"
    },
    {
      "masterCode": "TN","masterDesc": "Tennessee"
    },
    {
      "masterCode": "TX","masterDesc": "Texas"
    },
    {
      "masterCode": "UT","masterDesc": "Utah"
    },
    {
      "masterCode": "VT","masterDesc": "Vermont"
    },
    {
      "masterCode": "VA","masterDesc": "Virginia"
    },
    {
      "masterCode": "WA","masterDesc": "Washington"
    },
    {
      "masterCode": "WV","masterDesc": "West Virginia"
    },
    {
      "masterCode": "WI","masterDesc": "Wisconsin"
    },
    {
      "masterCode": "WY","masterDesc": "Wyoming"
    }
  ];

  const getCurrDateYYYYMMDD = () =>{
    var cdate = new Date();
    var tmonth = cdate.getMonth()+1; // 1-12
    var tdate = cdate.getDate(); //1-31
    var cDateStr = ""; //yyyy-mm-dd
    cDateStr = cDateStr + cdate.getFullYear();
    cDateStr = cDateStr + "-" + (tmonth<10?"0"+tmonth:""+tmonth);
    cDateStr = cDateStr + "-" + (tdate<10?"0"+tdate:""+tdate);
  
    return(cDateStr) //returns date string in yyyy-mm-dd
  }

  const getCurrDateYYYYMM = () =>{

    var cDateStr = getCurrDateYYYYMMDD();
    var rDateStr = cDateStr.split("-")[0] + "-" + cDateStr.split("-")[1];
    return(rDateStr) //returns date string in yyyy-mm
  }

  const getYearsList = () => {
    var lst = [{masterCode:"", masterDesc:"Year"}];
    var cdate = new Date();
    for(let index=1980; index<=cdate.getFullYear(); index++){
      var dict = {masterCode:""+index, masterDesc:""+index};
      lst.push(dict);
    }
    return(lst);
  }

  const getMonthsList = (yyyy) => {
    var cdate = new Date();
    var mlst = [{masterCode:"01", masterDesc:"Jan"}, {masterCode:"02", masterDesc:"Feb"}, {masterCode:"03", masterDesc:"Mar"},
                {masterCode:"04", masterDesc:"Apr"}, {masterCode:"05", masterDesc:"May"}, {masterCode:"06", masterDesc:"Jun"},
                {masterCode:"07", masterDesc:"Jul"}, {masterCode:"08", masterDesc:"Aug"}, {masterCode:"09", masterDesc:"Sep"},
                {masterCode:"10", masterDesc:"Oct"}, {masterCode:"11", masterDesc:"Nov"}, {masterCode:"12", masterDesc:"Dec"},
                ]
    var lst = [{masterCode:"", masterDesc:"Month"}];
    var endMonth = (parseInt(yyyy)===cdate.getFullYear())?cdate.getMonth()+1:12;
    for(let index=0; index<endMonth; index++){
      lst.push(mlst[index]);
    }
    return(lst);
  }

const [activeTab, setactiveTab] = useState(1);

//state variables for alerts
const [showSuccessAlert, setShowSuccessAlert] = useState(false);
const [showErrorAlert, setShowErrorAlert] = useState(false);
const [showWarningAlert, setShowWarningAlert] = useState(false);
const [alertType, setAlertType] = useState("error"); //success, warning, error
const [alertTitle, setAlertTitle] = useState("Error");
const [alertMsg, setAlertMsg] = useState("");

//form field state variables below

const [headerRecord, setHeaderRecord] = useState(null);
const [recordMode, setRecordMode] = useState("create"); //create-edit-readonly
const [CustomerID, setCustomerID] = useState("");
  
//Company Information (First Tab)
const [DUNSNumber, setDUNSNumber] = useState("");
const [Name, setName] = useState("")
const [DBAName, setDBAName] = useState("")
const [Phone, setPhone] = useState("")
const [Email, setEmail] = useState("")
const [BillingAddress, setBillingAddress] = useState("")
const [BillingCity, setBillingCity] = useState("")
const [BillingState, setBillingState] = useState("")
const [BillingZip, setBillingZip] = useState("")
const [BillingPhone, setBillingPhone] = useState("")
const [DeliveryAddress, setDeliveryAddress] = useState("") //TODO Remove
const [DeliveryAddress1, setDeliveryAddress1] = useState("")
const [DeliveryAddress2, setDeliveryAddress2] = useState("")
const [DeliveryAddress3, setDeliveryAddress3] = useState("")
const [DeliveryAddress4, setDeliveryAddress4] = useState("")
const [DeliveryCity, setDeliveryCity] = useState("")
const [DeliveryState, setDeliveryState] = useState("")
const [DeliveryZip, setDeliveryZip] = useState("")
const [CompanyType, setCompanyType] = useState("Corp")
const [PrincipalOfficer, setPrincipalOfficer] = useState("")
const [PrincipalOfficerTitle, setPrincipalOfficerTitle] = useState("")
const [PrincipalCell, setPrincipalCell] = useState("")
const [PrincipalEmail, setPrincipalEmail] = useState("")
const [NatureOfBusiness, setNatureOfBusiness] = useState("")
const [EstablishedYear, setEstablishedYear] = useState("")
const [StateIncorporated, setStateIncorporated] = useState("")
const [FederalTaxID, setFederalTaxID] = useState("")
const [ResaleCertificateNumber, setResaleCertificateNumber] = useState("")
const [TaxExempt, setTaxExempt] = useState("")
const [AlreadyHasFBAccount, setAlreadyHasFBAccount] = useState("")
const [PORequired, setPORequired] = useState("")
const [FBAccount, setFBAccount] = useState("")
const [AccountPayableContact, setAccountPayableContact] = useState("")
const [AccountPayableTitle, setAccountPayableTitle] = useState("")
const [AccountPayablePhone, setAccountPayablePhone] = useState("")
const [AccountPayableEmail, setAccountPayableEmail] = useState("")
const [SecondaryAccountPayableContact, setSecondaryAccountPayableContact] = useState("")
const [SecondaryAccountPayableTitle, setSecondaryAccountPayableTitle] = useState("")
const [SecondaryAccountPayablePhone, setSecondaryAccountPayablePhone] = useState("")
const [SecondaryAccountPayableEmail, setSecondaryAccountPayableEmail] = useState("")
const [TaxExemptFileUploaded, setTaxExemptFileUploaded] = useState(null)
const [ResaleCertificateNoFileUploaded, setResaleCertificateNoFileUploaded] = useState(null)
const [DifferentDeliveryAndBillingAddress, setDifferentDeliveryAndBillingAddress] = useState(false)

//Trade and Bank Reference (Second Tab)
const [inputFields, setInputFields] = useState([
  { CompanyName: '', AccountID: '', Phone: '', EmailID: '' },
  { CompanyName: '', AccountID: '', Phone: '', EmailID: '' },
  { CompanyName: '', AccountID: '', Phone: '', EmailID: '' }
  ]);
const [BankName, setBankName] = useState("");
const [BankAccountNo, setBankAccountNo] = useState("");
const [BankAddress, setBankAddress] = useState("");
const [BankCity, setBankCity] = useState("");
const [BankState, setBankState] = useState("");
const [BankZip, setBankZip] = useState("");
const [BankPhone, setBankPhone] = useState("");
const [BankEmailID, setBankEmailID] = useState("");
const [BankRefDocumentUploaded, setBankRefDocumentUploaded] = useState(null);

//Personal Guarantee (Third Tab)
const [PGFirstName, setPGFirstName] = useState("");
const [PGMiddleName, setPGMiddleName] = useState("");
const [PGLastName, setPGLastName] = useState("");
const [PGTitle, setPGTitle] = useState("");
const [PGPresentHomeAddress, setPGPresentHomeAddress] = useState("");
const [PGCity, setPGCity] = useState("");
const [PGState, setPGState] = useState("");
const [PGZipCode, setPGZipCode] = useState("");
const [PGDOB, setPGDOB] = useState("");
const [PGSSN, setPGSSN] = useState("");
const [PGDriverLicenceNoAndState, setPGDriverLicenceNoAndState] = useState("");
const [PGAuthorizedSig, setPGAuthorizedSig] = useState(""); //TODO - remove
const [PGDate, setPGDate] = useState(getCurrDateYYYYMMDD());
const [PGAuthorizedSigFileUploaded, setPGAuthorizedSigFileUploaded] = useState(null);

//Consent and Signature (Fourth Tab)
const [ConsentPrintName, setConsentPrintName] = useState("");
const [ConsentAuthorizedSig, setConsentAuthorizedSig] = useState(""); //TODO - remove
const [ConsentTitle, setConsentTitle] = useState("");
const [ConsentDate, setConsentDate] = useState(getCurrDateYYYYMMDD());
const [ConsentTermsAndConditions, setConsentTermsAndConditions] = useState(false);
const [ConsentAuthorizedSigFileUploaded, setConsentAuthorizedSigFileUploaded] = useState(null);

//console.log("PGDate: "+PGDate);
//console.log("ConsentDate: "+ConsentDate);

//Other state variables n other variables 
const [showPGTab, setShowPGTab] = useState(true);
const [showSSN, setShowSSN] = useState(false)
const [showDriverLicenceNum,setShowDriverLicenceNum] = useState(false);
const [modalFullScreen, setModalFullScreen] = useState(false);
const [showPGAuthSigPad, setShowPGAuthSigPad] = useState(false);
const [showConsentAuthSigPad, setShowConsentAuthSigPad] = useState(false);
const zipCodeMinLen = 5;
//const [duplicateRecordMsg, setDuplicateRecordMsg] = useState("");
const [yearsList, setYearsList] = useState(getYearsList());
const [monthsList, setMonthsList] = useState([]);
const [selectedYear, setSelectedYear] = useState("");
const [selectedMonth, setSelectedMonth] = useState("");
  const [establishAgeInMonths, setEstablishAgeInMonths] = useState(0);

const [validation, setValidation] = useState({
  EstablishedYear: null,
});

var form1 = null;
var form2 = null;
var form3 = null;
var form4 = null;
var showSSNField = null;
var maskSSNField = null;
var establishedYearField = null;

var maskValues = {
  tel: "(###) ### - ####",
  date: "##/##/####",
  ssn: "###-##-####"
}

//for change tooltip display propery
const onChangeValidation = (fieldName, value) => {
  const modifiedV = { ...validation };
  if (value !== "") {
    modifiedV[fieldName] = true;
  } else {
    modifiedV[fieldName] = false;
  }
  setValidation(modifiedV);
};

const onSelectEstablishYear = (value) => {
  if(value !== "" && value.length > 0){
    setSelectedYear(value);
    setMonthsList(getMonthsList(value));
    //setEstablishedYear(value);
    setSelectedMonth("");
  }
  else{
    setSelectedYear("");
    setMonthsList([]);
    setSelectedMonth("");
  }
}

const onSelectEstablishMonth = (value) => {
  if(value !== "" && value.length > 0){
    let s = selectedYear + "-" + value;
    setSelectedMonth(value);
    //setEstablishedYear(s);
    onChangeEstablishedYear(s);
  }
  else{
    setSelectedMonth("");
  }
}


useEffect(() => {
  document.title = "CREDIT APPLICATION (FB1) | Farmer Brothers "
}, []);

useEffect(() => {
  console.log("useEffect - location.pathname: " + location.pathname);
  console.log("useEffect - location.search:" + location.search);
  
  if (location.state && location.state.headerRecord) {
    console.log("useEffect - location.state.headerRecord:");
    console.log(location.state.headerRecord);

    setHeaderRecord(JSON.parse(JSON.stringify(location.state.headerRecord)));
    setRecordMode(location.state.recordMode);
    setCustomerID(location.state.headerRecord["CustomerID"]);

    setDUNSNumber(location.state.headerRecord["DUNSNumber"]);
    setName(location.state.headerRecord["CustomerName"]);
    setDBAName(location.state.headerRecord["DBAName"]);
    setDeliveryAddress1(location.state.headerRecord["DeliveryAddress1"]);
    setDeliveryAddress2(location.state.headerRecord["DeliveryAddress2"]);
    setDeliveryAddress3(location.state.headerRecord["DeliveryAddress3"]);
    setDeliveryAddress4(location.state.headerRecord["DeliveryAddress4"]);
    setDeliveryCity(location.state.headerRecord["DeliveryCity"]);
    setDeliveryState(location.state.headerRecord["DeliveryState"]);
    setDeliveryZip(location.state.headerRecord["DeliveryZip"]);
    setPhone(location.state.headerRecord["Phone"]);
    setEmail(location.state.headerRecord["Email"]);
    setPrincipalOfficer(location.state.headerRecord["PrincipalOfficer"]);
    setPrincipalOfficerTitle(location.state.headerRecord["PrincipalOfficerTitle"]);
    setPrincipalCell(location.state.headerRecord["PrincipalCell"]);
    setPrincipalEmail(location.state.headerRecord["PrincipalEmail"]);
    setBillingAddress(location.state.headerRecord["BillingAddress"]);
    setBillingState(location.state.headerRecord["BillingState"]);
    setBillingCity(location.state.headerRecord["BillingCity"]);
    setBillingZip(location.state.headerRecord["BillingZip"]);

    setFederalTaxID(location.state.headerRecord["FederalTaxID"]);
    setResaleCertificateNumber(location.state.headerRecord["ResaleCertificateNumber"]);
    setCompanyType(location.state.headerRecord["CompanyType"]);
    setNatureOfBusiness(location.state.headerRecord["NatureOfBusiness"]);
    console.log("location.state.headerRecord['EstablishedYear'].split('-'): " + location.state.headerRecord["EstablishedYear"].split("-"))

    if (location.state.headerRecord["EstablishedYear"]!=='' && location.state.headerRecord["EstablishedYear"].length>0)
    {
      onSelectEstablishYear(location.state.headerRecord["EstablishedYear"].split("-")[0]);
      onSelectEstablishMonth(location.state.headerRecord["EstablishedYear"].split("-")[1]);
    }
    else
    {
      setEstablishedYear('');
      setSelectedYear('');
      setSelectedMonth('');
    }
    //setEstablishedYear(location.state.headerRecord["EstablishedYear"]);
    setStateIncorporated(location.state.headerRecord["StateIncorporated"]);
    setTaxExempt(location.state.headerRecord["TaxExempt"]);
    setPORequired(location.state.headerRecord["PORequired"]);
    setAlreadyHasFBAccount(location.state.headerRecord["AlreadyHasFBAccount"]);
    setFBAccount(location.state.headerRecord["FBAccount"]);
  }
}, [location]);

function removeBodyCss() {
  document.body.classList.add("no_padding")
}

function tog_fullscreen() {
  setModalFullScreen(!modalFullScreen)
  removeBodyCss()
}

function onClickPGAuthSigCapture(){
  setShowPGAuthSigPad(true);
  setShowConsentAuthSigPad(false);
  tog_fullscreen();
}

function onClickConsentAuthSigCapture(){
  setShowConsentAuthSigPad(true);
  setShowPGAuthSigPad(false);
  tog_fullscreen();
}

function onClickPGAuthSigClose(){
  setShowPGAuthSigPad(false);
  setShowConsentAuthSigPad(false);
  tog_fullscreen();
}

function onClickConsentAuthSigClose(){
  setShowPGAuthSigPad(false);
  setShowConsentAuthSigPad(false);
  tog_fullscreen();
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

function toggleTab(tab) {
  showAnElement("linkPrevious");
  showAnElement("linkNext");
  if (activeTab !== tab) {
    if (tab >= 1 && tab <= 4) {
      setactiveTab(tab)
    }
  }
}

function getRequestData()
{
  let addCustomerRequest = {
    "CompanyInfo":{},
    "TradeAndBankRef":{},
    "PersonalGuarantee":{},
    "ConsentAndSignature":{},
    "UserInfo":{}
  };

  //Company Information
  addCustomerRequest.CompanyInfo.CustomerID = CustomerID;
  addCustomerRequest.CompanyInfo.CustomerJDE = ""; //TODO
  addCustomerRequest.CompanyInfo.fb1Status = "COMPLETED"; //TODO

  addCustomerRequest.CompanyInfo.CompanyType = CompanyType;
  addCustomerRequest.CompanyInfo.DUNSNumber = DUNSNumber;
  addCustomerRequest.CompanyInfo.Name = Name; //TODO remove
  addCustomerRequest.CompanyInfo.CustomerName = Name;
  addCustomerRequest.CompanyInfo.DBAName = DBAName;
  addCustomerRequest.CompanyInfo.Phone = Phone;
  addCustomerRequest.CompanyInfo.Email = Email;

  addCustomerRequest.CompanyInfo.OwnerName = ""; //TODO
  addCustomerRequest.CompanyInfo.Fax = ""; //TODO
  addCustomerRequest.CompanyInfo.County = ""; //TODO
  addCustomerRequest.CompanyInfo.TaxGroup = ""; //TODO

  addCustomerRequest.CompanyInfo.DeliveryAddress = DeliveryAddress1; //TODO remove
  addCustomerRequest.CompanyInfo.DeliveryAddress1 = DeliveryAddress1;
  addCustomerRequest.CompanyInfo.DeliveryAddress2 = DeliveryAddress2;
  addCustomerRequest.CompanyInfo.DeliveryAddress3 = DeliveryAddress3;
  addCustomerRequest.CompanyInfo.DeliveryAddress4 = DeliveryAddress4;

  addCustomerRequest.CompanyInfo.DeliveryCity = DeliveryCity;
  addCustomerRequest.CompanyInfo.DeliveryState = DeliveryState;
  addCustomerRequest.CompanyInfo.DeliveryZip = DeliveryZip;

  if(DifferentDeliveryAndBillingAddress===true)
  {
    addCustomerRequest.CompanyInfo.BillingAddress = BillingAddress;
    addCustomerRequest.CompanyInfo.BillingCity = BillingCity;
    addCustomerRequest.CompanyInfo.BillingState = BillingState;
    addCustomerRequest.CompanyInfo.BillingZip = BillingZip;
    addCustomerRequest.CompanyInfo.BillingPhone = BillingPhone;
  }
  else
  {
    addCustomerRequest.CompanyInfo.BillingAddress = DeliveryAddress1;
    addCustomerRequest.CompanyInfo.BillingCity = DeliveryCity;
    addCustomerRequest.CompanyInfo.BillingState = DeliveryState;
    addCustomerRequest.CompanyInfo.BillingZip = DeliveryZip;
    addCustomerRequest.CompanyInfo.BillingPhone = Phone;
  }

  addCustomerRequest.CompanyInfo.NatureOfBusiness = NatureOfBusiness;
  addCustomerRequest.CompanyInfo.PrincipalOfficer = PrincipalOfficer;
  addCustomerRequest.CompanyInfo.PrincipalOfficerTitle = PrincipalOfficerTitle;
  addCustomerRequest.CompanyInfo.PrincipalCell = PrincipalCell;
  addCustomerRequest.CompanyInfo.PrincipalEmail = PrincipalEmail;
  addCustomerRequest.CompanyInfo.EstablishedYear = EstablishedYear;
  addCustomerRequest.CompanyInfo.StateIncorporated = StateIncorporated;
  addCustomerRequest.CompanyInfo.FederalTaxID = FederalTaxID;
  addCustomerRequest.CompanyInfo.ResaleCertificateNumber = ResaleCertificateNumber;
  addCustomerRequest.CompanyInfo.TaxExempt = TaxExempt;
  addCustomerRequest.CompanyInfo.AlreadyHasFBAccount = AlreadyHasFBAccount;
  addCustomerRequest.CompanyInfo.PORequired = PORequired;
  addCustomerRequest.CompanyInfo.FBAccount = FBAccount;
  addCustomerRequest.CompanyInfo.AccountPayableContact = AccountPayableContact;
  addCustomerRequest.CompanyInfo.AccountPayableTitle = AccountPayableTitle;
  addCustomerRequest.CompanyInfo.AccountPayablePhone = AccountPayablePhone;
  addCustomerRequest.CompanyInfo.AccountPayableEmail = AccountPayableEmail;
  addCustomerRequest.CompanyInfo.SecondaryAccountPayableContact = SecondaryAccountPayableContact;
  addCustomerRequest.CompanyInfo.SecondaryAccountPayableTitle = SecondaryAccountPayableTitle;
  addCustomerRequest.CompanyInfo.SecondaryAccountPayablePhone = SecondaryAccountPayablePhone;
  addCustomerRequest.CompanyInfo.SecondaryAccountPayableEmail = SecondaryAccountPayableEmail;

  //Trade and Bank References
  addCustomerRequest.TradeAndBankRef.TradeReferences = inputFields; //12-fields = 3-rows*4-columns
  addCustomerRequest.TradeAndBankRef.BankName = BankName;
  addCustomerRequest.TradeAndBankRef.BankAccountNo = BankAccountNo;
  addCustomerRequest.TradeAndBankRef.BankAddress = BankAddress;
  addCustomerRequest.TradeAndBankRef.BankCity = BankCity;
  addCustomerRequest.TradeAndBankRef.BankState = BankState;
  addCustomerRequest.TradeAndBankRef.BankZip = BankZip;
  addCustomerRequest.TradeAndBankRef.BankPhone = BankPhone;
  addCustomerRequest.TradeAndBankRef.BankEmailID = BankEmailID;

  //Personal Guarantee
  if(showPGTab){
    addCustomerRequest.PersonalGuarantee.FirstName = PGFirstName;
    addCustomerRequest.PersonalGuarantee.MiddleName = PGMiddleName;
    addCustomerRequest.PersonalGuarantee.LastName = PGLastName;
    addCustomerRequest.PersonalGuarantee.Title = PGTitle;
    addCustomerRequest.PersonalGuarantee.PresentHomeAddress = PGPresentHomeAddress;
    addCustomerRequest.PersonalGuarantee.City = PGCity;
    addCustomerRequest.PersonalGuarantee.State = PGState;
    addCustomerRequest.PersonalGuarantee.Zip = PGZipCode;
    addCustomerRequest.PersonalGuarantee.DOB = PGDOB;
    addCustomerRequest.PersonalGuarantee.SSN = PGSSN;
    addCustomerRequest.PersonalGuarantee.DriverLicenceNoAndState = PGDriverLicenceNoAndState;
    addCustomerRequest.PersonalGuarantee.Date = PGDate;
    //TODO - Authorized Signature
  }
  else{
    addCustomerRequest.PersonalGuarantee.FirstName = "";
    addCustomerRequest.PersonalGuarantee.MiddleName = "";
    addCustomerRequest.PersonalGuarantee.LastName = "";
    addCustomerRequest.PersonalGuarantee.Title = "";
    addCustomerRequest.PersonalGuarantee.PresentHomeAddress = "";
    addCustomerRequest.PersonalGuarantee.City = "";
    addCustomerRequest.PersonalGuarantee.State = "";
    addCustomerRequest.PersonalGuarantee.Zip = "";
    addCustomerRequest.PersonalGuarantee.DOB = "";
    addCustomerRequest.PersonalGuarantee.SSN = "";
    addCustomerRequest.PersonalGuarantee.DriverLicenceNoAndState = "";
    addCustomerRequest.PersonalGuarantee.Date = "";
  }
 
  //Consent and Signature
  addCustomerRequest.ConsentAndSignature.TermsAndConditions=ConsentTermsAndConditions;
  addCustomerRequest.ConsentAndSignature.PrintName = ConsentPrintName;
  addCustomerRequest.ConsentAndSignature.Title = ConsentTitle;
  addCustomerRequest.ConsentAndSignature.Date = ConsentDate;
  //TODO - Authorized Signature

  var date = new Date();
  var tMonth = date.getMonth()+1; // 1-12
  var tDate = date.getDate(); //1-31
  var tHours = date.getHours(); //0-59;
  var tMinutes = date.getMinutes(); //0-59
  var tSeconds = date.getSeconds(); //0-59
  var tCreatedDate = "" + date.getFullYear();
  tCreatedDate = tCreatedDate + "-" + (tMonth<10?"0"+tMonth:""+tMonth);
  tCreatedDate = tCreatedDate + "-" + (tDate<10?"0"+tDate:""+tDate);
  tCreatedDate = tCreatedDate + " " + (tHours<10?"0"+tHours:""+tHours);
  tCreatedDate = tCreatedDate + ":" + (tMinutes<10?"0"+tMinutes:""+tMinutes);
  tCreatedDate = tCreatedDate + ":" + (tSeconds<10?"0"+tSeconds:""+tSeconds);

  //User Information
  addCustomerRequest.UserInfo.CreatedUserID = "123";
  addCustomerRequest.UserInfo.CreatedUserName = "CreatedUserName";
  addCustomerRequest.UserInfo.CreatedDate = tCreatedDate; //date;//"2021-10-21 13:28:06";
  addCustomerRequest.UserInfo.ModifiedUserID = "222";
  addCustomerRequest.UserInfo.ModifiedUserName = "ModifiedUserName";
  addCustomerRequest.UserInfo.ModifiedDate = tCreatedDate; //date;//"2021-10-21 14:28:06";

  return JSON.stringify(addCustomerRequest);

}

function execAddNewCustomerRequest(postData) {
  console.log("execAddNewCustomerRequest>>>");
  console.log("execAddNewCustomerRequest: postData");
  console.log(postData);

  //let url = "/api/customer/add";
  //let url = "https://fbnarf.mktalt.com/pub/api/customer/add";

  let url = `${baseUrl}/api/customer/add`;
  let applicationId="";

  
  if(TaxExempt === "0"){
    setTaxExemptFileUploaded(null);
    //alert("TaxExempt === 0");
  }

  if(ResaleCertificateNumber.length === 0){
    setResaleCertificateNoFileUploaded(null);
    //alert("ResaleCertificateNumber.length === 0")
  }

  if(TaxExempt === "1" && TaxExemptFileUploaded === null){
    showAlert("error", "Error" ,"Please attach Tax Exempt File")
    return;
  }
  else if(ResaleCertificateNumber.length > 0 && ResaleCertificateNoFileUploaded === null){
    showAlert("error", "Error" , "Please attach Resale Certificate Number File");
    return;
  }
  else if(CompanyType==="Corp" && BankRefDocumentUploaded === null){
    showAlert("error", "Error" , "Please attach Bank Reference Document");
    return;
  }
  else if(showPGTab && PGAuthorizedSigFileUploaded === null){
    showAlert("error", "Error" , "Please capture personal guarantee authorized signature");
    return;
  }
  else if(ConsentAuthorizedSigFileUploaded === null){
    showAlert("error", "Error" , "Please capture consent authorized signature");
    return;
  }

  showLoadingIndicator();
  
  fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: postData
  })
  .then(response => response.json())
  .then(
    (data) => {
      //applicationId = data.data.ApplicationId;

      let str=JSON.stringify(data);
      //console.log("------------1");
      //console.log(str);
      str=str.replace(/"/g,'');
      str=str.replace(/'/g,'"');
      //console.log("------------2");
      //console.log(str);
      let jsonResult= JSON.parse(str);
      let restApiResult = jsonResult.result;   
      applicationId = jsonResult.data.ApplicationId;
      if(restApiResult === "Failed" || applicationId === undefined || applicationId === null || applicationId === "NA" || applicationId === 0){
        //alert("failure");
        handleFormDataFailure();
      }
      else if(restApiResult === "Success" && applicationId > 0){
        if((BankRefDocumentUploaded !== null) || 
            (ConsentAuthorizedSigFileUploaded !== null) || 
            (showPGTab && PGAuthorizedSigFileUploaded !== null) || 
            (TaxExempt === "1" && TaxExemptFileUploaded !== null) || 
            (ResaleCertificateNumber.length > 0 && ResaleCertificateNoFileUploaded !== null )
          ){
          uploadFiles(applicationId);
        }
        else{
          //alert("success");
          handleFormDataSuccess();
        }
      }
    
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    (error) => {
      console.log("Rest API - add: Server/Network Error !");
      console.log(error);
      //alert("Server/Network error !");
      handleFormDataNetworkFailure();
    }
  )
  .catch((error) => {
    // Handle the error
    console.log("Rest API - add: Server/Network Error !!");
    console.log(error)
    //alert("Server/Network error !!");
    handleFormDataNetworkFailure();
  });
}

const uploadFiles = (ApplicationId) => {
  const formData = new FormData();
  //let url = "/api/customer/uploadDocs";
  //let url = "https://fbnarf.mktalt.com/pub/api/customer/uploadDocs";

  let url = `${baseUrl}/api/customer/uploadDocs`;

  //alert("uploadFiles called");

  if(TaxExempt === "1" && TaxExemptFileUploaded != null){
    formData.append(
      "TaxExemptFile",
      TaxExemptFileUploaded,
      TaxExemptFileUploaded.name
    );
  }
  
  if(ResaleCertificateNumber.length > 0 && ResaleCertificateNoFileUploaded != null){
    formData.append(
      "ResaleCertificateNoFile",
      ResaleCertificateNoFileUploaded,
      ResaleCertificateNoFileUploaded.name
    );
  }

  if(CompanyType==="Corp" && BankRefDocumentUploaded !== null){
    formData.append(
      "BankRefDocumentFile",
      BankRefDocumentUploaded,
      BankRefDocumentUploaded.name
    );
  }

  if(showPGTab && PGAuthorizedSigFileUploaded !== null){
    let signBlob = dataURLToBlob(PGAuthorizedSigFileUploaded);
    formData.append(
      "PersonalGuaranteeAuthSignFile",
      signBlob,
      "pg_auth_signature.png"
    );
  }

  if(ConsentAuthorizedSigFileUploaded !== null){
    let signBlob = dataURLToBlob(ConsentAuthorizedSigFileUploaded);
    formData.append(
      "ConsentAuthSignFile",
      signBlob,
      "consent_auth_signature.png"
    );
  }
  
  formData.append(
    "ApplicationId",
    ApplicationId
  );

  fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      //'Content-Type': 'application/json',//causes error on server side
    },
    body: formData
  })
  .then(response => response.json())
  .then(
    (data) => {
    let str=JSON.stringify(data);
    //console.log("------------1");
    //console.log(str);
    str=str.replace(/"/g,'');
    str=str.replace(/'/g,'"');
    //console.log("------------2");
    //console.log(str);
    let jsonResult= JSON.parse(str);
    let restApiResult = jsonResult.result;   
    
    if(restApiResult === "Failed"){
      //alert("Form data submitted successfully without attachments !!");
      handleFormDataSuccessWithoutAttachments();
    }
    else if(restApiResult === "Success"){
      //alert("Form data submitted successfully with attachments !!");
      handleFormDataSuccessWithAttachments();
    }
    
  },
  // Note: it's important to handle errors here
  // instead of a catch() block so that we don't swallow
  // exceptions from actual bugs in components.
  (error) => {
    console.log("Rest API - uploadDocs: Server/Network Error !!");
    console.log(error);
    //alert("Form data submitted successfully without attachments !!");
    handleFormDataSuccessWithoutAttachments();
  })
  .catch((error) => {
    // Handle the error
    console.log("Rest API - uploadDocs: Server/Network Error !!!");
    console.log(error)
    //alert("Form data submitted successfully without attachments !!");
    handleFormDataSuccessWithoutAttachments();
  });

  //alert(TaxExemptFileUploaded+" "+ResaleCertificateNoFileUploaded);
};

const handleInputChange = (index, event) => {
  const values = [...inputFields];
  var elementId;
  if (event.target.name.search("CompanyName") > -1) {
    elementId = "LblCompanyName"+index;
    setInnerHTML(elementId, "Company Name<code>*</code>");
    values[index].CompanyName = event.target.value;
  }
  else if(event.target.name.search("AccountID") > -1) {
    elementId = "LblAccountID"+index;
    setInnerHTML(elementId, "Account #<code>*</code>");
    values[index].AccountID = event.target.value;
  }
  else if(event.target.name.search("Phone") > -1){
    elementId = "LblPhone"+index;
    setInnerHTML(elementId, "Phone<code>*</code>");
    values[index].Phone = event.target.value;
  }
  else if(event.target.name.search("EmailID") > -1){
    elementId = "LblEmailID"+index;
    setInnerHTML(elementId, "Email<code>*</code>");
    values[index].EmailID = event.target.value;
  }

  setInputFields(values);
};

const handleInputOnBlur = (index, event) => {
  
  const values = [...inputFields];
  console.log("handleInputOnBlur: values - ");
  console.log(values);
  var elementId;

  if (event.target.name.search("CompanyName") > -1) {
    //pass
  }
  else if(event.target.name.search("AccountID") > -1) {
    const result = values.filter( element => element["AccountID"] === event.target.value );
    elementId = "LblAccountID"+index;
    if(result.length > 1){ //duplicate record, show error alert
      setInnerHTML(elementId, "Account #<code>* Duplicate</code>");
      setFocusOnElement(event.target.name);
      return;
    }
    else{
      setInnerHTML(elementId, "Account #<code>*</code>");
    }
  }
  else if(event.target.name.search("Phone") > -1){
    const result = values.filter( element => element["Phone"] === event.target.value );
    elementId = "LblPhone"+index;
    if(result.length > 1){ //duplicate record, show error alert
      setInnerHTML(elementId, "Phone<code>* Duplicate</code>");
      setFocusOnElement(event.target.name);
      return;
    }
    else{
      setInnerHTML(elementId, "Phone<code>*</code>");
    }
  }
  else if(event.target.name.search("EmailID") > -1){
    const result = values.filter( element => element["EmailID"].toLowerCase() === event.target.value.toLowerCase() );
    elementId = "LblEmailID"+index;
    if(result.length > 1){ //duplicate record, show error alert
      setInnerHTML(elementId, "Email<code>* Duplicate</code>");
      setFocusOnElement(event.target.name);
      return;
    }
    else{
      setInnerHTML(elementId, "Email<code>*</code>");
    }
  }
};

const handleSubmit = () => {
  console.log("handleSubmit>>>");
  if (true) {
    //event.preventDefault();
    //event.stopPropagation();

    //getRequestData();
    execAddNewCustomerRequest(getRequestData());
    //uploadFiles();
  }
};

const showLoadingIndicator = () => {
  console.log("showLoadingIndicator>>>");

  hideAnElement("divRestApiSuccess");
  hideAnElement("butRestApiSuccess");
  hideAnElement("divRestApiFailure");
  showAnElement("divLoadingIndicator");
  hideAnElement("linkPrevious");
  hideAnElement("linkNext");

  setactiveTab(5);

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

  setactiveTab(5);
  
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

  setactiveTab(5);

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

  setactiveTab(5);

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

  setactiveTab(5);

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

  setactiveTab(5);

};

const hideAnElement = (eleId) => {
  var x = document.getElementById(eleId);
  x.style.display = "none";
}

const showAnElement = (eleId) => {
  var x = document.getElementById(eleId);
  x.style.display = "block";
}

const setInnerHTML = (eleId, txt) => {
  var x = document.getElementById(eleId);
  x.innerHTML = txt;
}

const setFocusOnElement = (eleId) => {
  var x = document.getElementById(eleId);
  if(x){
    x.focus();
  }
}

const handleCheckbox = (value) => {
  setDifferentDeliveryAndBillingAddress(value);
  setBillingAddress("");
  setBillingCity("");
  setBillingState("");
  setBillingZip("");
  setBillingPhone("");
};

const handleValidationFailed = (event, errors, values) => {
  //TODO - set focus on first invalid field
  //alert("Please fill all mandatory fields !");
  console.log(errors);
  const selectorKey = errors[0];
  const selector = `[name="${selectorKey}"]`;
  const errorElement = document.querySelector(selector);
  if(errorElement){
      console.log(errorElement);
      errorElement.focus();
  }
}

const handleValidationFailedSecondTab = (event, errors, values) => {
  //TODO - set focus on first invalid field
  //alert("Please fill all mandatory fields !");
  console.log(errors);
  const selectorKey = errors[0];
  const selector = `[name="${selectorKey}"]`;
  const errorElement = document.querySelector(selector);
  if(errorElement){
      console.log(errorElement);
      errorElement.focus();
  }
}

const handleValidationFailedThirdTab = (event, errors, values) => {
  //TODO - set focus on first invalid field
  //alert("Please fill all mandatory fields !");
  console.log(errors);
  const selectorKey = errors[0];
  const selector = `[name="${selectorKey}"]`;
  const errorElement = document.querySelector(selector);
  if(errorElement){
    console.log("errorElement");
    console.log(errorElement);
    console.log("-------- id " + errorElement.id);
    if(errorElement.id === "PGSSN"){
      if(showSSN){
        showAnElement("invalidSSN");
        setFocusOnElement("showPGSSN");
        return;
      }
      else if(!showSSN){
        console.log("-------- maskSSNField id " + errorElement.id);
        errorElement.focus();
        return;
      }
    }
    errorElement.focus();
  }
}

const handleValidationFailedFourthTab = (event, errors, values) => {
  //TODO - set focus on first invalid field
  //alert("Please fill all mandatory fields !");
  console.log(errors);
  const selectorKey = errors[0];
  const selector = `[name="${selectorKey}"]`;
  const errorElement = document.querySelector(selector);
  if(errorElement){
      console.log(errorElement);
      errorElement.focus();
  }
}

const handleFirstTabNextButton = (event, fields) => {
  console.log("handleFirstTabNextButton: form1");
  console.log(form1)
  console.log("handleFirstTabNextButton: establishedYearField");
  console.log(establishedYearField);
  
  /*
  const modifiedV = { ...validation };
  var fieldEstablishedYear = document.getElementById("EstablishedYear").value;

  if (fieldEstablishedYear === "") {
    modifiedV["EstablishedYear"] = false;
  } else {
    modifiedV["EstablishedYear"] = true;
  }

  if (fieldEstablishedYear === "") {
    return;
  }
  */

  if(TaxExempt === "1" && TaxExemptFileUploaded === null){
    showAlert("error", "Error" ,"Please attach Tax Exempt File");
    return;
  }
  else if(ResaleCertificateNumber.length > 0 && ResaleCertificateNoFileUploaded === null){
    showAlert("error", "Error" ,"Please attach Resale Certificate Number File");
    return;
  }
  toggleTab(2)
};

const resetTradeRefFieldLabels = () =>{

  for(let index=0; index < values.length; index++){
    var lblElementId;

    lblElementId = "LblCompanyName"+index;
    setInnerHTML(lblElementId, "Company Name<code>*</code>");
    lblElementId = "LblAccountID"+index;
    setInnerHTML(lblElementId, "Account #<code>*</code>");
    lblElementId = "LblPhone"+index;
    setInnerHTML(lblElementId, "Phone<code>*</code>");
    lblElementId = "LblEmailID"+index;
    setInnerHTML(lblElementId, "Email<code>*</code>");
  }

}

const handleSecondTabNextButton = (event, fields) => {
    console.log("handleSecondTabNextButton: showPGTab - " + showPGTab);

  const values = [...inputFields];
  console.log("handleSecondTabNextButton: values - ");
  console.log(values);

  for(let index=0; index < values.length; index++){
    var lblElementId;
    var txtElementId

    let result = values.filter( element => element["AccountID"] === values[index]["AccountID"] );
    lblElementId = "LblAccountID"+index;
    txtElementId = "AccountID"+index;
    
    if(result.length > 1){ //duplicate record, show error alert
      setInnerHTML(lblElementId, "Account #<code>* Duplicate</code>");
      setFocusOnElement(txtElementId);
      return;
    }
    else{
      setInnerHTML(lblElementId, "Account #<code>*</code>");
    }

    result = values.filter( element => element["Phone"] === values[index]["Phone"] );
    lblElementId = "LblPhone"+index;
    txtElementId = "Phone"+index;
    
    if(result.length > 1){ //duplicate record, show error alert
      setInnerHTML(lblElementId, "Phone<code>* Duplicate</code>");
      setFocusOnElement(txtElementId);
      return;
    }
    else{
      setInnerHTML(lblElementId, "Phone<code>*</code>");
    }

    result = values.filter( element => element["EmailID"].toLowerCase() === values[index]["EmailID"].toLowerCase() );
    lblElementId = "LblEmailID"+index;
    txtElementId = "EmailID"+index;
    
    if(result.length > 1){ //duplicate record, show error alert
      setInnerHTML(lblElementId, "Email<code>* Duplicate</code>");
      setFocusOnElement(txtElementId);
      return;
    }
    else{
      setInnerHTML(lblElementId, "Email<code>*</code>");
    }
  }

  if(showPGTab === true){
    toggleTab(3);
  }
  else{
    toggleTab(4);
  }
};

const handleThirdTabNextButton = (event, fields) => {
  
  console.log("handleThirdTabNextButton");

  if(PGSSN.length !== 9){
    if(showSSN){
      showAnElement("invalidSSN");
      setFocusOnElement("showPGSSN");
      return;
    }
  }
  else if(PGAuthorizedSigFileUploaded === null){
    showAlert("error", "Error" ,"Please Capture Authorized Signature");
    return;  
  }
  toggleTab(4)
};

const handleFourthTabFinishButton = (event, fields) => {

  console.log("handleFourthTabFinishButton");

  if(ConsentAuthorizedSigFileUploaded === null){
    showAlert("error", "Error" ,"Please Capture Authorized Signature");
    return;  
  }

  handleSubmit();
};

const onTaxExemptFileChange = event => {
  if(event.target.files[0] !== undefined){
    setTaxExemptFileUploaded(event.target.files[0]);
  }
  else{
    setTaxExemptFileUploaded(null);
  }
};

const onChangeBankRefDocuments = event => {
  if(event.target.files[0] !== undefined){
    setBankRefDocumentUploaded(event.target.files[0]);
  }
  else{
    setBankRefDocumentUploaded(null);
  }
}

const onResaleCertificateNoFileChange = event => {
  if(event.target.files[0] !== undefined){
    setResaleCertificateNoFileUploaded(event.target.files[0]);
  }
  else{
    setResaleCertificateNoFileUploaded(null);
  }
};

const onChangeTaxExemptRadioGroup = value => {
  setTaxExempt(value);
  setTaxExemptFileUploaded(null);
}

const onChangePORequiredRadioGroup = value => {
  setPORequired(value);
}

const onChangeResaleCertificateNumber = event => {
  setResaleCertificateNumber(event.target.value);
  if(event.target.value === ""){
    setResaleCertificateNoFileUploaded(null);
  } 
}

const onChangeEstablishedYear = (value) => {
  if(isDebug)
    console.log("onChangeEstablishedYear: value - " + value);

  const modifiedV = { ...validation };
  if (value !== "") {
    modifiedV["EstablishedYear"] = true;
  } else {
    modifiedV["EstablishedYear"] = false;
  }
  setValidation(modifiedV);

  setEstablishedYear(value);
  let date = new Date();
  let currDate = new Date(date.getFullYear(), date.getMonth(), 1);
  let establishedDate = new Date(parseInt(value.split("-")[0]), parseInt(value.split("-")[1])-1, 1); //year, month(0-11), date(1-31)
  let mDiff = monthsDiff(establishedDate, currDate);

  setEstablishAgeInMonths(mDiff);

  if (mDiff < 12) {
    setShowPGTab(true);
    setInputFields([
      { CompanyName: '', AccountID: '', Phone: '', EmailID: '' },
    ]);
  }
  else {
    setShowPGTab(false);
    setInputFields([
      { CompanyName: '', AccountID: '', Phone: '', EmailID: '' },
      { CompanyName: '', AccountID: '', Phone: '', EmailID: '' },
      { CompanyName: '', AccountID: '', Phone: '', EmailID: '' }
    ]);
  }
  
  if(isDebug){
    console.log("onChangeEstablishedYear: currDate - " + currDate);
    console.log("onChangeEstablishedYear: establishedDate - " + establishedDate);
    console.log("onChangeEstablishedYear: establishedYear - " + value);
    console.log("onChangeEstablishedYear: mDiff - " + mDiff);
    //console.log("onChangeEstablishedYear: showPGTab - " + showPGTab);
  }

}

function onClickShowSSN(){
  console.log("onClickShowSSN")
  console.log("onClickShowSSN: Before change");
  console.log("onClickShowSSN: showSSN - " + showSSN + "; PGSSN - " + PGSSN + "; maskSSNField.value - " + maskSSNField.value + "; showSSNField.value - " + showSSNField.value)
  if(showSSN){ //already show unmasked field
    setShowSSN(false); //hide unmasked
    hideAnElement("invalidSSN");
    maskSSNField.value = PGSSN;
  }
  else{ //already hide unmasked field
    setShowSSN(true); //show unmasked field
    showSSNField.setState({numAsString:PGSSN});
    if(PGSSN.length !== 9)
      showAnElement("invalidSSN"); 
    
  }
}

const onChangePGSSN = (values, sourceInfo) => {

  setPGSSN(values.value);

  if(values.value.length !== 9)
    showAnElement("invalidSSN");
  else if(values.value.length === 9)
    hideAnElement("invalidSSN");
  if(maskSSNField)
    maskSSNField.value = values.value;

}

const monthsDiff = (d1, d2) => {
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}

const resetCompanyInfoTab = () => { //First Tab

  //Company Information (First Tab)
  setCustomerID("");
  setCompanyType("Corp");
  setDUNSNumber("");
  setName("");
  setDBAName("");
  setPhone("");
  setEmail("");
  setDeliveryAddress(""); //TODO - remove
  setDeliveryAddress1("");
  setDeliveryAddress2("");
  setDeliveryAddress3("");
  setDeliveryAddress4("");
  setDeliveryCity("");
  setDeliveryState("");
  setDeliveryZip("");
  setBillingAddress("");
  setBillingCity("");
  setBillingState("");
  setBillingZip("");
  setBillingPhone("");
  setNatureOfBusiness("");
  setPrincipalOfficer("");
  setPrincipalOfficerTitle("");
  setPrincipalCell("");
  setPrincipalEmail("");
  setEstablishedYear("");
  setStateIncorporated("");
  setFederalTaxID("");
  setResaleCertificateNumber("");
  setTaxExempt("");
  setPORequired("");
  setAlreadyHasFBAccount("");
  setFBAccount("");
  setAccountPayableContact("");
  setAccountPayableTitle("");
  setAccountPayablePhone("");
  setAccountPayableEmail("");
  setSecondaryAccountPayableContact("");
  setSecondaryAccountPayableTitle("");
  setSecondaryAccountPayablePhone("");
  setSecondaryAccountPayableEmail("");

  setTaxExemptFileUploaded(null);
  setResaleCertificateNoFileUploaded(null);
  setDifferentDeliveryAndBillingAddress(false);

  setSelectedYear("");
  setSelectedMonth("");
  setShowPGTab(true);

}

const resetTradeBankRefTab = () => { //Second Tab

  //Trade and Bank Reference (Second Tab)
  setEstablishAgeInMonths(0);
  setInputFields([
    { CompanyName: '', AccountID: '', Phone: '', EmailID: '' },
    ]);
  setBankName("");
  setBankAccountNo("");
  setBankAddress("");
  setBankCity("");
  setBankState("");
  setBankZip("");
  setBankPhone("");
  setBankEmailID("");
  setBankRefDocumentUploaded(null);

  resetTradeRefFieldLabels();

}

const resetPGTab = () => { //Third Tab

  //Personal Guarantee (Third Tab)
  setPGFirstName("");
  setPGMiddleName("");
  setPGLastName("");
  setPGTitle("");
  setPGPresentHomeAddress("");
  setPGCity("");
  setPGState("");
  setPGZipCode("");
  setPGDOB("");
  setPGSSN("");
  setPGDate("");
  setPGDriverLicenceNoAndState("");
  setPGAuthorizedSig(""); //TODO - remove
  setPGAuthorizedSigFileUploaded(null);
  setPGDate(getCurrDateYYYYMMDD());

  setShowPGAuthSigPad(false);
  setShowSSN(false);
  setShowDriverLicenceNum(false);

  hideAnElement("invalidSSN");

}

const resetConsentTab = () => { //Fourth Tab

  //Consent and Signature (Fourth Tab)
  setConsentPrintName("");
  setConsentDate("");
  setConsentAuthorizedSig(""); //TODO - remove
  setConsentAuthorizedSigFileUploaded(null);
  setConsentTitle("");
  setConsentDate(getCurrDateYYYYMMDD());
  setConsentTermsAndConditions(false);

  setShowConsentAuthSigPad(false);

}

const onClickRestApiSuccess = event => {
  console.log("onClickRestApiSuccess");

  //reset all forms
  form1 && form1.reset();
  form2 && form2.reset();
  form3 && form3.reset();
  form4 && form4.reset();

  setHeaderRecord(null);
  setRecordMode("create");
  setCustomerID("");

  resetCompanyInfoTab();
  resetTradeBankRefTab();
  resetPGTab();
  resetConsentTab();

  toggleTab(1);
}

const onChangeAlreadyHasFBAccount = (value) => {
  setAlreadyHasFBAccount(value);
  setFBAccount("");
}

const onChangeCompanyType = (value) => {
  setCompanyType(value);
  setDUNSNumber("");
}

const onChangeConsentTermsNConditions = (event) => {
  if(event.target.checked){
    setConsentTermsAndConditions(true);
  }
  else{
    setConsentTermsAndConditions(false);
  }
}

function onChangePGAuthSignature(trimmedDataURL){
  setPGAuthorizedSigFileUploaded(trimmedDataURL);
}

function onChangeConsentAuthSignature(trimmedDataURL){
  setConsentAuthorizedSigFileUploaded(trimmedDataURL);
}

function dataURLToBlob(dataURL) {
  // Code taken from https://github.com/ebidel/filer.js
  var parts = dataURL.split(';base64,');
  var contentType = parts[0].split(":")[1];
  var raw = window.atob(parts[1]);
  var rawLength = raw.length;
  var uInt8Array = new Uint8Array(rawLength);

  for (var i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uInt8Array], { type: contentType });
}



function onClickShowDriverLicenceNum(){
  console.log("onClickShowDriverLicenceNum")
  setShowDriverLicenceNum(!showDriverLicenceNum);
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

        if(location.pathname.search("accountapplication") > -1){
          return(null);
        }
        else{
          return("Are you sure, you want leave current page?");
        }
        
      }}
    />
    <div className="page-content">
      <Container fluid={true}>
        <Breadcrumbs title="NEW ACCOUNT REQUEST" breadcrumbItem="CREDIT APPLICATION (FB1)" />

        <Row>
          <Col lg="12">
            <Card>
              <CardBody>

                { showSuccessAlert? (
                <SweetAlert
                  success
                  title={alertTitle}
                  onConfirm={() => {
                    setShowSuccessAlert(false);
                  }}
                >
                  {alertMsg}
                </SweetAlert>
                ) : null}

                { showErrorAlert? (
                <SweetAlert
                  error
                  title={alertTitle}
                  onConfirm={() => {
                    setShowErrorAlert(false);
                  }}
                >
                  {alertMsg}
                </SweetAlert>
                ) : null}

                { showWarningAlert? (
                <SweetAlert
                  warning
                  title={alertTitle}
                  onConfirm={() => {
                    setShowWarningAlert(false);
                  }}
                >
                  {alertMsg}
                </SweetAlert>
                ) : null}

                <div className="wizard clearfix">
                  <div className="steps clearfix">
                    <ul>
                      <NavItem
                        className={classnames({ current: activeTab === 1 })}>
                        <NavLink
                          className={classnames({ current: activeTab === 1 })}
                          onClick={() => {
                            //setactiveTab(1)
                          }}
                        >
                          <span className="number">1.</span>{" "}
                          COMPANY INFORMATION
                        </NavLink>
                      </NavItem>
                      <NavItem className={classnames({ current: activeTab === 2 })}>
                        <NavLink
                          className={classnames({ active: activeTab === 2 })}
                          onClick={() => {
                            //setactiveTab(2)
                          }}
                        >
                          <span className="number me-2">2.</span>{" "}
                          TRADE AND BANK REFERENCES
                        </NavLink>
                      </NavItem>
                      <NavItem hidden={showPGTab===true?false:true} className={classnames({ current: activeTab === 3 })} >
                        <NavLink
                          className={classnames({ active: activeTab === 3 })}
                          onClick={() => {
                            //setactiveTab(3)
                          }}
                          disabled={showPGTab===true?false:true}
                        >
                          <span className="number">3.</span>{" "}
                          PERSONAL GUARANTEE
                        </NavLink>
                      </NavItem>
                      <NavItem className={classnames({ current: activeTab === 4 })}>
                        <NavLink
                          className={classnames({ active: activeTab === 4 })}
                          onClick={() => {
                            //setactiveTab(4)
                          }}
                        >
                          <span className="number">{showPGTab===true?"4.":"3."}</span>{" "}
                          CONSENT & SIGNATURE
                        </NavLink>
                      </NavItem>
                      <NavItem className={classnames({ current: activeTab === 5 })}>
                        <NavLink
                          className={classnames({ active: activeTab === 5 })}
                          onClick={() => {
                            //setactiveTab(5)
                          }}
                        >
                          <span className="number">{showPGTab===true?"5.":"4."}</span>{" "}
                          STATUS
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
                          {/*first tab - starts*/}
          <AvForm  className="needs-validation" onInvalidSubmit={handleValidationFailed} onValidSubmit={handleFirstTabNextButton} ref={c => {form1 = c}} disabled={(recordMode==="readonly")?true:false}>
            <Row>
              <p className="card-title-desc">Required fields are noted with <code>*</code></p>
              <Col md="6">
                <FormGroup className="mb-3">
                  <Label htmlFor="CompanyTypeRadioGroup">Company Type<code>*</code></Label><br/>
                  {/*
                  <AvRadioGroup onChange={e=>{onChangeCompanyType(e.target.value)}} value={CompanyType} inline name="CompanyTypeRadioGroup" id="CompanyTypeRadioGroup" label="" required errorMessage="Please select company type">
                    <AvRadio label="Corp" value="Corp" checked />
                    <AvRadio label="General Partnership" value="General Partnership" />
                    <AvRadio label="LP" value="LP" />
                    <AvRadio label="LLC" value="LLC" />
                    <AvRadio label="Sole Proprietorship" value="Sole Proprietorship" />
                  </AvRadioGroup>
                  */}
                  <input className="form-check-input" type="radio" value="Corp" checked={CompanyType==="Corp"} onChange={e => {onChangeCompanyType(e.target.value)}} name="CompanyTypeRadioGroup" />&nbsp;&nbsp;
                  <label className="form-check-label" htmlFor="formRadios1">Corp</label>&nbsp;&nbsp;
                  <input className="form-check-input" type="radio" value="General Partnership" checked={CompanyType==="General Partnership"} onChange={e => {onChangeCompanyType(e.target.value)}} name="CompanyTypeRadioGroup" />&nbsp;&nbsp; 
                  <label className="form-check-label" htmlFor="formRadios1">General Partnership</label>&nbsp;&nbsp;
                  <input className="form-check-input" type="radio" value="LP" checked={CompanyType==="LP"} onChange={e => {onChangeCompanyType(e.target.value)}} name="CompanyTypeRadioGroup" />&nbsp;&nbsp;
                  <label className="form-check-label" htmlFor="formRadios1">LP</label>&nbsp;&nbsp;
                  <input className="form-check-input" type="radio" value="LLC" checked={CompanyType==="LLC"} onChange={e => {onChangeCompanyType(e.target.value)}} name="CompanyTypeRadioGroup" />&nbsp;&nbsp; 
                  <label className="form-check-label" htmlFor="formRadios1">LLC</label>&nbsp;&nbsp;
                  <input className="form-check-input" type="radio" value="Sole Proprietorship" checked={CompanyType==="Sole Proprietorship"} onChange={e => {onChangeCompanyType(e.target.value)}} name="CompanyTypeRadioGroup" />&nbsp;&nbsp;
                  <label className="form-check-label" htmlFor="formRadios1">Sole Proprietorship</label>&nbsp;&nbsp; 
                </FormGroup>
              </Col>

              <Col md="6">
                <FormGroup className="mb-3">
                  <Label htmlFor="DUNSNumber">Dun & Bradstreet DUNS Number<code>*</code></Label>
                  <AvField
                  name="DUNSNumber"
                  type="text"
                  errorMessage="Enter valid DUNS no. without hyphens/dashes"
                  className="form-control"
                  id="DUNSNumber"
                  value={DUNSNumber}
                  onChange={e => {setDUNSNumber(e.target.value)}}
                  disabled = {(CompanyType === "Corp")? false : true}
                  validate={{
                    required: { value: (CompanyType === "Corp")?true:false},
                    pattern: {value: '^[0-9]+$'},
                    minLength: {value: (CompanyType === "Corp")?9:0},
                    maxLength: {value: (CompanyType === "Corp")?9:0}
                  }} 
                  />
                </FormGroup>
              </Col>

            </Row>
            
          	<Row>
	            <Col md="6">
		          <FormGroup className="mb-3">
		            <Label htmlFor="Name">Full Legal Name/Business Entity<code>*</code></Label>
		            <AvField
                name="Name"
                type="text"
                errorMessage="Enter Full Legal Name/Business Entity"
                className="form-control"
                validate={{ required: { value: true } }}
                id="Name"
                value={Name}
                onChange={e => {setName(e.target.value)}}
                />
          		</FormGroup>
	            </Col>
	            <Col md="6">
		          <FormGroup className="mb-3">
		            <Label htmlFor="DBAName">DBA Name(s)<code>*</code></Label>
		            <AvField
                name="DBAName"
                type="text"
                errorMessage="Enter DBA Name(s)"
                className="form-control"
                validate={{ required: { value: true } }}
                id="DBAName"
                value={DBAName}
                onChange={e => {setDBAName(e.target.value)}}
                />
          		</FormGroup>
	            </Col>
	          </Row>
	          <Row>
	            <Col md="6">
		          <FormGroup className="mb-3">
		          <Label htmlFor="validationCustom01">Phone Number#<code>*</code></Label>
              
        		  <AvField
              name="Phone"
              type="text"
              errorMessage="Please Enter Phone Number"
              className="form-control"
              required
              id="validationCustom01"
              value={Phone}
              onChange={e => {setPhone(e.target.value)}}
              />

          		</FormGroup>
	            </Col>
	            <Col md="6">
		          <FormGroup className="mb-3">
		            <Label htmlFor="validationCustom02">Email Address<code>*</code></Label>
		            <AvField
                name="Email"
                type="email"
                errorMessage="Enter Email Address"
                className="form-control"
                validate={{ 
                  required: { value: true,errorMessage: 'Enter valid email_id' }                  
                }}
                id="validationCustom02"
                value={Email}
                onChange={e => {setEmail(e.target.value)}}
                />
          		</FormGroup>
	            </Col>
              </Row>
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label htmlFor="DeliveryAddress1">Delivery Address1<code>*</code></label>
                    <AvField
                    name="DeliveryAddress1"
                    type="text"
                    errorMessage="Enter Delivery Address1"
                    className="form-control"
                    validate={{ required: { value: true } }}
                    id="DeliveryAddress1"
                    value={DeliveryAddress1}
                    onChange={e => {setDeliveryAddress1(e.target.value)}}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label htmlFor="DeliveryAddress2">Address2</label>
                    <AvField
                    name="DeliveryAddress2"
                    type="text"
                    errorMessage="Enter Delivery Address2"
                    className="form-control"
                    validate={{ required: { value: false } }}
                    id="DeliveryAddress2"
                    value={DeliveryAddress2}
                    onChange={e => {setDeliveryAddress2(e.target.value)}}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label htmlFor="DeliveryAddress3">Address3</label>
                    <AvField
                    name="DeliveryAddress3"
                    type="text"
                    errorMessage="Enter Delivery Address3"
                    className="form-control"
                    validate={{ required: { value: false } }}
                    id="DeliveryAddress3"
                    value={DeliveryAddress3}
                    onChange={e => {setDeliveryAddress3(e.target.value)}}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label htmlFor="DeliveryAddress4">Address4</label>
                    <AvField
                    name="DeliveryAddress4"
                    type="text"
                    errorMessage="Enter Delivery Address4"
                    className="form-control"
                    validate={{ required: { value: false } }}
                    id="DeliveryAddress4"
                    value={DeliveryAddress4}
                    onChange={e => {setDeliveryAddress4(e.target.value)}}
                    />
                  </div>
                </div>
              </div>

                  
              <div className="row">
                              {/*
              <div className="col-lg-6">
                <div className="mb-3">
                  <label htmlFor="DeliveryAddresss">Delivery Address<code>*</code></label>
                  <AvField
                  name="DeliveryAddress"
                  type="text"
                  errorMessage="Enter Delivery Address"
                  className="form-control"
                  validate={{ required: { value: true } }}
                  id="DeliveryAddresss"
                  value={DeliveryAddress}
                  onChange={e => {setDeliveryAddress(e.target.value)}}
                  />
                </div>
              </div>
              */}
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="DeliveryCity">Delivery City<code>*</code></label>
                <AvField
                name="DeliveryCity"
                type="text"
                errorMessage="Enter Delivery City"
                className="form-control"
                validate={{ required: { value: true } }}
                id="DeliveryCity"
                value={DeliveryCity}
                onChange={e => {setDeliveryCity(e.target.value)}}
                />
              </div>
            </div>
                              
            <div className="col-lg-6">
              <div className="mb-3">
                <Label htmlFor="DeliveryState">Delivery State<code>*</code></Label>
                <AvField 
                id="DeliveryState"
                type="select"  
                name="DeliveryState"
                className="form-control"
                errorMessage="Enter Delivery State"
                validate={{ required: { value: true}}}
                value={DeliveryState} 
                onChange={e => {setDeliveryState(e.target.value)}}
                >
                  {usStates.map((element) => 
                <option key={element.masterCode} value={element.masterCode}>{element.masterDesc}</option>
                )}
		            </AvField>
              </div>
            </div>
          </div>
          <div className="row">
            
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="DeliveryZip">Delivery Zip Code<code>*</code></label>
                <AvField
                name="DeliveryZip"
                type="text"
                errorMessage="Enter Delivery Zip Code"
                className="form-control"
                validate={{
                  required: { value: true },
                  pattern: {value: '^[0-9]+$'},
                  minLength: {value: zipCodeMinLen},
                  maxLength: {value: zipCodeMinLen}
                }} 
                id="DeliveryZip"
                value={DeliveryZip}
                onChange={e => {setDeliveryZip(e.target.value)}}
                />
              </div>
            </div>
          </div>
          <Row>
          	<Col md="6">
		          <FormGroup className="mb-3">
                <Label htmlFor="BillingAddress">Billing Address (if different from Delivery) <code>*</code><input checked={DifferentDeliveryAndBillingAddress} type="checkbox" className="form-check-input" onChange={e=>{handleCheckbox(e.target.checked)}}></input></Label> 
                <AvField
                  name="BillingAddress"
                  type="text"
                  errorMessage="Enter Billing Address"
                  className="form-control"
                  validate={{ required: { value: (DifferentDeliveryAndBillingAddress?true:false) } }}
                  id="BillingAddress"
                  value={BillingAddress}
                  onChange={e => {setBillingAddress(e.target.value)}}
                  disabled = {(DifferentDeliveryAndBillingAddress)? false : true}
                />
          		</FormGroup>
	          </Col>
	            <Col md="6">
		          <FormGroup className="mb-3">
		          <Label htmlFor="BillingCity">Billing City<code>*</code></Label>
		          <AvField
              name="BillingCity"
              type="text"
              errorMessage="Enter Billing City"
              className="form-control"
              validate={{ required: { value: (DifferentDeliveryAndBillingAddress?true:false) } }}
              id="BillingCity"
              value={BillingCity}
              onChange={e => {setBillingCity(e.target.value)}}
              disabled = {(DifferentDeliveryAndBillingAddress)? false : true}
              />
          		</FormGroup>
	            </Col>
	        </Row>
	        <Row>
	          <Col md="6">
		        <FormGroup className="mb-3">
              <Label htmlFor="BillingState">Billing State<code>*</code></Label>
              <AvField 
              id="BillingState"
              type="select" 
              name="BillingState" 
              className="form-control"
              errorMessage="Enter Billing State"
              validate={{ required: { value: (DifferentDeliveryAndBillingAddress?true:false) }}}
              value={BillingState} 
              onChange={e => {setBillingState(e.target.value)}}
              disabled = {(DifferentDeliveryAndBillingAddress)? false : true}
              >
			          {usStates.map((element) => 
                <option key={element.masterCode} value={element.masterCode}>{element.masterDesc}</option>
                )}
		          </AvField>
        		</FormGroup>
	          </Col>
	          <Col md="6">
		        <FormGroup className="mb-3">
		          <Label htmlFor="BillingZip">Billing Zip Code<code>*</code></Label>
		          <AvField
              name="BillingZip"
              type="text"
              errorMessage="Enter Billing Zip Code"
              className="form-control"
              validate={{ required: { value: (DifferentDeliveryAndBillingAddress?true:false) },
                          pattern: {value: '^[0-9]+$'},
                          minLength: {value: zipCodeMinLen},
                          maxLength: {value: zipCodeMinLen}
                        }}
              id="BillingZip"
              value={BillingZip}
              onChange={e => {setBillingZip(e.target.value)}}
              disabled = {(DifferentDeliveryAndBillingAddress)? false : true}
              />
        		</FormGroup>
	          </Col>
	        </Row>

          <Row>
            <Col md="6">
              <FormGroup className="mb-3">
                <Label htmlFor="BillingPhone">Billing Phone #<code>*</code></Label>
                
                <AvField
                  name="BillingPhone"
                  type="text"
                  errorMessage="Please Enter Billing Phone Number"
                  className="form-control"
                  validate={{ required: { value: (DifferentDeliveryAndBillingAddress?true:false) }}}
                  id="BillingPhone"
                  value={BillingPhone}
                  onChange={e => {setBillingPhone(e.target.value)}}
                  disabled = {(DifferentDeliveryAndBillingAddress)? false : true}
                />

              </FormGroup>
            </Col>
	          </Row>
	          

            <Row>
              <Col md="6">
                <FormGroup className="mb-3">
                  <Label htmlFor="NatureOfBusiness">Nature of business<code>*</code></Label>
                  <AvField
                  name="NatureOfBusiness"
                  type="text"
                  errorMessage="Enter Nature of Business"
                  className="form-control"
                  validate={{ required: { value: true }}}
                  id="NatureOfBusiness"
                  value={NatureOfBusiness}
                  onChange={e => {setNatureOfBusiness(e.target.value)}}
                  />
                </FormGroup>
              </Col>

              <Col md="6">
                <Row>
                  <Col md={6}>
                    <div className="mb-3">
                      <Label htmlFor="selectedYear">Business established - Year<code>*</code></Label>
                      <AvField 
                        id="selectedYear"
                        type="select"  
                        name="selectedYear"
                        className="form-control"
                        errorMessage="Please Select Year"
                        validate={{ required: { value: true}}}
                        value={selectedYear} 
                        onChange={e => {onSelectEstablishYear(e.target.value)}}
                        >
                          {yearsList.map((element) => 
                        <option key={element.masterCode} value={element.masterCode}>{element.masterDesc}</option>
                        )}
                      </AvField>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3">
                    <Label htmlFor="selectedMonth">Month<code>*</code></Label>
                      <AvField 
                        id="selectedMonth"
                        type="select"  
                        name="selectedMonth"
                        className="form-control"
                        errorMessage="Please Select Month"
                        validate={{ required: { value: true}}}
                        value={selectedMonth} 
                        onChange={e => {onSelectEstablishMonth(e.target.value)}}
                        disabled={(selectedYear !== "" && selectedYear.length>0)?false:true}
                        >
                          {monthsList.map((element) => 
                        <option key={element.masterCode} value={element.masterCode}>{element.masterDesc}</option>
                        )}
                      </AvField>
                    </div>
                  </Col>
                </Row>
              </Col>
	          </Row>

            <Row>
              <Col md="6">
                <FormGroup className="mb-3">
                  <Label htmlFor="PrincipalOfficer">Principal Officer Name<code>*</code></Label>
                  <AvField
                  name="PrincipalOfficer"
                  type="text"
                  errorMessage="Enter Principal Officer Name"
                  className="form-control"
                  validate={{ required: { value: true }}}
                  id="PrincipalOfficer"
                  value={PrincipalOfficer}
                  onChange={e => {setPrincipalOfficer(e.target.value)}}
                  />
                </FormGroup>
              </Col>

              <Col md="6">
                <FormGroup className="mb-3">
                  <Label htmlFor="PrincipalOfficerTitle">Principal Officer Title<code>*</code></Label>
                  <AvField
                    name="PrincipalOfficerTitle"
                    type="text"
                    errorMessage="Enter Principal Officer Title"
                    className="form-control"
                    validate={{ required: { value: true }}}
                    id="PrincipalOfficerTitle"
                    value={PrincipalOfficerTitle}
                    onChange={e => {setPrincipalOfficerTitle(e.target.value)}}
                    />
                </FormGroup>
              </Col>
              
            </Row>
                            
            <Row>
              <Col md="6">
                <FormGroup className="mb-3">
                  <Label htmlFor="PrincipalCell">Principal Cell<code>*</code></Label>
                  <AvField
                  name="PrincipalCell"
                  type="text"
                  errorMessage="Enter Principal Cell no."
                  className="form-control"
                  validate={{ required: { value: true }}}
                  id="PrincipalCell"
                  value={PrincipalCell}
                  onChange={e => {setPrincipalCell(e.target.value)}}
                  />
                </FormGroup>
              </Col>

              <Col md="6">
                <FormGroup className="mb-3">
                  <Label htmlFor="PrincipalEmail">Principal Email<code>*</code></Label>
                  <AvField
                    name="PrincipalEmail"
                    type="email"
                    errorMessage="Enter Principal email"
                    className="form-control"
                    validate={{ required: { value: true }}}
                    id="PrincipalEmail"
                    value={PrincipalEmail}
                    onChange={e => {setPrincipalEmail(e.target.value)}}
                    />
                </FormGroup>
              </Col>
                            
              
            </Row>

            <Row>
              <Col md="6">
                <FormGroup className="mb-3">
                  <Label htmlFor="StateIncorporated">State Incorporated<code>*</code></Label>
                  <AvField 
                  id="StateIncorporated"
                  type="select" 
                  name="StateIncorporated" 
                  errorMessage="Enter State Incorporated"
                  className="form-control"
                  validate={{ required: { value: true }}}
                  value={StateIncorporated} 
                  onChange={e => {setStateIncorporated(e.target.value)}}
                  >
                    {usStates.map((element) => 
                    <option key={element.masterCode} value={element.masterCode}>{element.masterDesc}</option>
                    )}
                  </AvField>
                </FormGroup>
              </Col>

	            <Col md="6">
                <FormGroup className="mb-3">
                  <Label htmlFor="FederalTaxID">Federal Tax ID #<code>*</code></Label>
                  <AvField
                    name="FederalTaxID"
                    type="text"
                    errorMessage="Enter Federal Tax ID"
                    className="form-control"
                    validate={{ required: { value: true } }}
                    id="FederalTaxID"
                    value={FederalTaxID}
                    onChange={e => {setFederalTaxID(e.target.value)}}
                    />
                </FormGroup>
	            </Col>
	          </Row>

            <Row>
              <Col md="6">
                <FormGroup className="mb-3">
                  <Label htmlFor="ResaleCertificateNumber">Resale Certificate No. (Attach a valid certificate)<code>*</code></Label>
                  <AvField
                    name="ResaleCertificateNumber"
                    type="text"
                    errorMessage="Enter Resale Certificate Number"
                    className="form-control"
                    validate={{ required: { value: true } }}
                    id="ResaleCertificateNumber"
                    value={ResaleCertificateNumber}
                    onChange={e => {onChangeResaleCertificateNumber(e);}}
                    />
                </FormGroup>
                <input type={ResaleCertificateNumber!==""?"file":"hidden"} onChange={onResaleCertificateNoFileChange} />
              </Col>

              <Col md="6">
                <FormGroup className="mb-3">
                  <Label htmlFor="TaxExemptRadioGroup">Tax Status Resale/Exempt (Attach a valid certificate)<code>*</code></Label>
                  <AvRadioGroup errorMessage="Select Yes or No" onChange={e=>{onChangeTaxExemptRadioGroup(e.target.value)}} value={TaxExempt} inline name="TaxExemptRadioGroup" id="TaxExemptRadioGroup" label="" required>
                    <AvRadio label="Yes" value="1" />
                    <AvRadio label="No" value="0" />
                  </AvRadioGroup>
                  <input type={TaxExempt==="1"?"file":"hidden"} onChange={onTaxExemptFileChange} />
                  </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md="6">
                <FormGroup className="mb-3">
                  <Label htmlFor="AlreadyHasFBAccountRadioGroup">Prior or Current account with Farmer Brothers? (Yes or No)<code>*</code></Label>
                  <AvRadioGroup errorMessage="Select Yes or No" onChange={e=>{onChangeAlreadyHasFBAccount (e.target.value)}} value={AlreadyHasFBAccount} inline name="AlreadyHasFBAccountRadioGroup" id="AlreadyHasFBAccountRadioGroup" label="" required>
                    <AvRadio label="Yes" value="1" />
                    <AvRadio label="No" value="0" />
                  </AvRadioGroup>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup className="mb-3">
                  <Label htmlFor="FBAccount">If yes, please provide Account Name, Farmer Brothers location<code>*</code></Label> 
                  <AvField
                  name="FBAccount"
                  type="text"
                  errorMessage="Enter Account Name, Farmer Brothers location"
                  className="form-control"
                  validate={{ required: { value: (AlreadyHasFBAccount==="1"?true:false) } }}
                  id="FBAccount"
                  value={FBAccount}
                  onChange={e => {setFBAccount(e.target.value)}}
                  disabled = {(AlreadyHasFBAccount)==="1"? false : true}
                  />
                  </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md="6">
                <FormGroup className="mb-3">
                  <Label htmlFor="PORequiredRadioGroup">PO Required?(Yes or No)<code>*</code></Label>
                  <AvRadioGroup errorMessage="Select Yes or No" onChange={e=>{onChangePORequiredRadioGroup(e.target.value)}} value={PORequired} inline name="PORequiredRadioGroup" id="PORequiredRadioGroup" label="" required>
                    <AvRadio label="Yes" value="1" />
                    <AvRadio label="No" value="0" />
                  </AvRadioGroup>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md="6">
                <FormGroup className="mb-3">
                  <Label htmlFor="AccountPayableContact">Accounts Payable Contact Name<code>*</code></Label>
                  <AvField
                    name="AccountPayableContact"
                    type="text"
                    errorMessage="Enter Accounts Payable Contact Name"
                    className="form-control"
                    validate={{ required: { value: true } }}
                    id="AccountPayableContact"
                    value={AccountPayableContact}
                    onChange={e => {setAccountPayableContact(e.target.value)}}
                    />
                </FormGroup>
              </Col>

	            <Col md="6">
                <FormGroup className="mb-3">
                  <Label htmlFor="AccountPayableTitle">Title<code>*</code></Label>
                  <AvField
                    name="AccountPayableTitle"
                    type="text"
                    errorMessage="Enter Accounts Payable Title"
                    className="form-control"
                    validate={{ required: { value: true } }}
                    id="AccountPayableTitle"
                    value={AccountPayableTitle}
                    onChange={e => {setAccountPayableTitle(e.target.value)}}
                    />
                </FormGroup>
	            </Col>
	          </Row>

            <Row>
              <Col md="6">
                <FormGroup className="mb-3">
                  <Label htmlFor="AccountPayablePhone">Phone Number<code>*</code></Label>
                  <AvField
                  name="AccountPayablePhone"
                  type="text"
                  errorMessage="Enter Accounts Payable Phone Number"
                  className="form-control"             
                  id="AccountPayablePhone"
                  validate={{ required: { value: true } }}
                  value={AccountPayablePhone}
                  onChange={e => {setAccountPayablePhone(e.target.value)}}
                  />
                </FormGroup> 
              </Col>

              <Col md="6">
                <FormGroup className="mb-3">
                  <Label htmlFor="AccountPayableEmail">Email<code>*</code></Label>
                  <AvField
                  name="AccountPayableEmail"
                  type="email"
                  errorMessage="Enter Accounts Payable Email"
                  className="form-control"
                  validate={{ required: { value: true } }}
                  id="AccountPayableEmail"
                  value={AccountPayableEmail}
                  onChange={e => {setAccountPayableEmail(e.target.value)}}
                  />
                </FormGroup>
              </Col>
            </Row>
            
            <Row>
              <Col md="6">
                <FormGroup className="mb-3">
                  <Label htmlFor="SecondaryAccountPayableContact">Secondary Accounts Payable Contact Name<code>*</code></Label>
                  <AvField
                    name="SecondaryAccountPayableContact"
                    type="text"
                    errorMessage="Enter Secondary Accounts Payable Contact Name"
                    className="form-control"
                    validate={{ required: { value: true } }}
                    id="SecondaryAccountPayableContact"
                    value={SecondaryAccountPayableContact}
                    onChange={e => {setSecondaryAccountPayableContact(e.target.value)}}
                    />
                </FormGroup>
              </Col>

	            <Col md="6">
                <FormGroup className="mb-3">
                  <Label htmlFor="SecondaryAccountPayableTitle">Title<code>*</code></Label>
                  <AvField
                    name="SecondaryAccountPayableTitle"
                    type="text"
                    errorMessage="Enter Secondary Accounts Payable Title"
                    className="form-control"
                    validate={{ required: { value: true } }}
                    id="SecondaryAccountPayableTitle"
                    value={SecondaryAccountPayableTitle}
                    onChange={e => {setSecondaryAccountPayableTitle(e.target.value)}}
                    />
                </FormGroup>
	            </Col>
	          </Row>

            <Row>
              <Col md="6">
                <FormGroup className="mb-3">
                  <Label htmlFor="SecondaryAccountPayablePhone">Phone Number<code>*</code></Label>
                  <AvField
                  name="SecondaryAccountPayablePhone"
                  type="text"
                  errorMessage="Enter Secondary Accounts Payable Phone Number"
                  className="form-control"             
                  id="SecondaryAccountPayablePhone"
                  validate={{ required: { value: true } }}
                  value={SecondaryAccountPayablePhone}
                  onChange={e => {setSecondaryAccountPayablePhone(e.target.value)}}
                  />
                </FormGroup> 
              </Col>

              <Col md="6">
                <FormGroup className="mb-3">
                  <Label htmlFor="SecondaryAccountPayableEmail">Email<code>*</code></Label>
                  <AvField
                  name="SecondaryAccountPayableEmail"
                  type="email"
                  errorMessage="Enter Secondary Accounts Payable Email"
                  className="form-control"
                  validate={{ required: { value: true } }}
                  id="SecondaryAccountPayableEmail"
                  value={SecondaryAccountPayableEmail}
                  onChange={e => {setSecondaryAccountPayableEmail(e.target.value)}}
                  />
                </FormGroup>
              </Col>
            </Row>

          <button id="hiddenSubmit" type="submit" hidden>Submit</button>
          </AvForm>
          <Row>
            <Col lg="2">
              <br/>
              <button
                hidden={(headerRecord) ? false : true}
                type="button"
                value="addfb1account"
                className="btn btn-success waves-effect waves-light"
                onClick={e => onClickRestApiSuccess ()}
                ><i className="uil-book-alt"></i>&nbsp;
                NEW FB1 ACCOUNT
              </button>                 
            </Col>
          </Row>
          {/*first tab - ends*/}
          </TabPane>
          <TabPane tabId={2}>
          <CardTitle className="h4">TRADE REFERENCES - Food Service related preffered <code>(Required if requesting payment terms)</code>
          </CardTitle><br/>
          <AvForm className="needs-validation" onInvalidSubmit={handleValidationFailedSecondTab} onValidSubmit={handleSecondTabNextButton} ref={c => {form2 = c}} disabled={(recordMode==="readonly")?true:false}>
                            {/*second tab - begins*/}
            <Row id="divBankRefDocument" hidden={CompanyType==="Corp"?false:true}>
              <Col md="6">
                <CardTitle className="h4">Bank Reference Documents<code>*</code></CardTitle>
                <div className="fallback">
                {/*<input type="file" multiple onChange={onChangeBankRefDocuments} />*/}
                <FormGroup className="mb-3">
                <Label htmlFor="BankRefDocument">Please upload the bank reference documents.<code>*</code></Label>
                <AvField
                  name={"BankRefDocument"}
                  type="file"
                  className="form-control"
                  id={"BankRefDocument"}
                  onChange={event => onChangeBankRefDocuments(event)}
                  validate={{ 
                    required: { value: (CompanyType==="Corp"?true:false), errorMessage: 'Please attach Bank Reference document' }                  
                  }}
                />
                </FormGroup>
              </div>
              </Col>
            </Row>

            {/*<h4 id="DuplicateRecord" hidden={duplicateRecordMsg.length>0?false:true}><code>{duplicateRecordMsg}</code></h4>*/}
            <div className="form-row">
              {inputFields.map((inputField, index) => (
                <Fragment key={`${inputField}~${index}`}>
                  <Row>
                    <div className="mb-3 col-lg-3">
                      <Label htmlFor="CompanyName" id={"LblCompanyName"+index}>Company Name<code>*</code></Label>
                      <AvField
                        name={"CompanyName"+index}
                        type="text"
                        className="form-control"
                        id={"CompanyName"+index}
                        value={inputField.CompanyNamePhone}
                        onChange={event => handleInputChange(index, event)}
                        validate={{ 
                          required: { value: true, errorMessage: 'Enter Company Name' }                  
                        }}
                      />
                    </div>
                    <div className="mb-3 col-lg-3">
                      <Label htmlFor="AccountID" id={"LblAccountID"+index}>Account #<code>*</code></Label>
                      <AvField
                        name={"AccountID"+index}
                        type="text"
                        className="form-control"
                        id={"AccountID"+index}
                        value={inputField.AccountID}
                        onChange={event => handleInputChange(index, event)}
                        onBlur={event => handleInputOnBlur(index, event)}
                        validate={{ 
                          required: { value: true, errorMessage: 'Enter Account No.' }                  
                        }}
                      />
                    </div>
                    <div className="mb-3 col-lg-3">
                      <Label htmlFor="Phone" id={"LblPhone"+index}>Phone<code>*</code></Label>
                      <AvField
                        name={"Phone"+index}
                        type="text"
                        className="form-control"
                        id={"Phone"+index}
                        value={inputField.Phone}
                        onChange={event => handleInputChange(index, event)}
                        onBlur={event => handleInputOnBlur(index, event)}
                        validate={{ 
                          required: { value: true, errorMessage: 'Enter Phone No.' }                  
                        }}
                      />
                    </div>
                    <div className="mb-3 col-lg-3">
                      <Label htmlFor="EmailID" id={"LblEmailID"+index}>Email<code>*</code></Label>
                      <AvField
                        name={"EmailID"+index}
                        errorMessage="Enter Valid Email Address"
                        type="email"
                        className="form-control"
                        id={"EmailID"+index}
                        value={inputField.EmailID}
                        onChange={event => handleInputChange(index, event)}
                        onBlur={event => handleInputOnBlur(index, event)}
                        validate={{ 
                          required: { value: true, errorMessage: 'Enter Email Address' }                  
                        }}
                      />
                    </div>
                  </Row>
                </Fragment>
              ))}
            </div>

          <div>
            <br/>
            <CardTitle className="h4">BANK REFERENCE <code>(Required if requesting payment terms)</code></CardTitle>
            <br/>
          </div>

          {/*                
          <Row>
            <Col md="6">
              <CardTitle className="h4">Bank Reference Documents<code>*</code></CardTitle>
              <div className="fallback">
              <FormGroup className="mb-3">
              <Label htmlFor="BankRefDocument">Please upload the bank reference documents.<code>*</code></Label>
              <AvField
                name={"BankRefDocument"}
                type="file"
                className="form-control"
                id={"BankRefDocument"}
                onChange={event => onChangeBankRefDocuments(event)}
                validate={{ 
                  required: { value: true, errorMessage: 'Please attach Bank Reference document' }                  
                }}
              />
              </FormGroup>
            </div>
            </Col>
          </Row>
          */}
                            
          <Row>
            <Col md="6">
              <FormGroup className="mb-3">
                <Label htmlFor="BankName">Bank Name<code>*</code></Label>
                <AvField
                  name={"BankName"}
                  type="text"
                  className="form-control"
                  id={"BankName"}
                  value={BankName} 
                  onChange={e => {setBankName(e.target.value)}}
                  validate={{ 
                    required: { value: true, errorMessage: 'Enter Bank Name' }                  
                  }}
                />
              </FormGroup>
            </Col>

            <Col md="6">
              <FormGroup className="mb-3">
                <Label htmlFor="BankAccountNo">Account #<code>*</code></Label>
                <AvField
                  name={"BankAccountNo"}
                  type="text"
                  className="form-control"
                  id={"BankAccountNo"}
                  value={BankAccountNo} 
                  onChange={e => {setBankAccountNo(e.target.value)}}
                  validate={{ 
                    required: { value: true, errorMessage: 'Enter Bank Account No.' }                  
                  }}
                />
              </FormGroup>
            </Col>
          </Row>

          
          <Row>
            <Col md="6">
              <FormGroup className="mb-3">
                <Label htmlFor="BankAddress">Address<code>*</code></Label>
                <AvField
                  name={"BankAddress"}
                  type="text"
                  className="form-control"
                  id={"BankAddress"}
                  value={BankAddress} 
                  onChange={e => {setBankAddress(e.target.value)}}
                  validate={{ 
                    required: { value: true, errorMessage: 'Enter Bank Address' }                  
                  }}
                />
              </FormGroup>
            </Col>

            <Col md="6">
              <FormGroup className="mb-3">
                <Label htmlFor="BankCity">City<code>*</code></Label>
                <AvField
                  name={"BankCity"}
                  type="text"
                  className="form-control"
                  id={"BankCity"}
                  value={BankCity} 
                  onChange={e => {setBankCity(e.target.value)}}
                  validate={{ 
                    required: { value: true, errorMessage: 'Enter Bank City' }                  
                  }}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md="6">
              <FormGroup className="mb-3">
                <Label htmlFor="BankState">State<code>*</code></Label>
                <AvField 
                  className="form-control"
                  type="select" 
                  name="BankState" 
                  id="BankState"
                  value={BankState} 
                  onChange={e => {setBankState(e.target.value)}}
                  validate={{ 
                    required: { value: true, errorMessage: 'Select Bank State' }                  
                  }}
                >
                  {usStates.map((element) => 
                  <option key={element.masterCode} value={element.masterCode}>{element.masterDesc}</option>
                  )}
		          </AvField>
              </FormGroup>
            </Col>

            <Col md="6">
              <FormGroup className="mb-3">
                <Label htmlFor="BankZip">Zip Code<code>*</code></Label>
                <AvField 
                  className="form-control"
                  type="text" 
                  name="BankZip" 
                  id="BankZip"
                  errorMessage="Enter Bank Zip Code"
                  value={BankZip} 
                  onChange={e => {setBankZip(e.target.value)}}
                  validate={{ 
                    required: { value: true },
                    pattern: {value: '^[0-9]+$'},
                    minLength: {value: zipCodeMinLen},
                    maxLength: {value: zipCodeMinLen}                  
                  }}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md="6">
              <FormGroup className="mb-3">
                <Label htmlFor="BankPhone">Phone #<code>*</code></Label>
                <AvField
                  name="BankPhone"              
                  type="text"                  
                  className="form-control"                  
                  id="BankPhone" 
                  value={BankPhone} 
                  onChange={e => {setBankPhone(e.target.value)}} 
                  validate={{ 
                    required: { value: true, errorMessage: 'Enter Bank Phone #' }                  
                  }}
                  />
              </FormGroup>
            </Col>

            <Col md="6">
              <FormGroup className="mb-3">
                <Label htmlFor="BankEmailID">Email Address<code>*</code></Label>
                <AvField
                  name="BankEmailID"
                  type="email"
                  errorMessage= 'Enter valid email id'
                  className="form-control"
                  validate={{ 
                    required: { value: true, errorMessage: 'Enter valid email id' }                  
                  }}
                  id="BankEmailID"
                  value={BankEmailID}
                  onChange={e => {setBankEmailID(e.target.value)}}
                  />
              </FormGroup>
            </Col>
          </Row>


          <button id="hiddenSubmitSecondTab" type="submit" hidden>Submit</button>
          </AvForm>
          {/*second tab - ends*/}
          </TabPane>

          <TabPane tabId={3}>
            <AvForm className="needs-validation" onInvalidSubmit={handleValidationFailedThirdTab} onValidSubmit={handleThirdTabNextButton} ref={c => {form3 = c}} disabled={(recordMode==="readonly")?true:false}>

              <Row>
                <CardTitle className="h4">Personal Guarantee / Authorization <code>(Required if in business &lt; 1 year and requesting Payment Terms &/or equipment to be assigned at place of business)</code></CardTitle>
              </Row>

              <Row>
                <p className="card-title-desc">
                By completing and signing this portion of the New Account Application, I authorize Farmer Bros Co. or its agent to obtain personal credit information from any consumer credit reporting agencies for the purpose of determining eligibility to be a Guarantor for this account with Farmer Bros Co.
                </p>
              </Row>

              <Row>
                <p>
                  The Federal Equal Credit Opportunity Act prohibits credit discrimination on the basis of race, color, religion, national origin, sex, marital status and age. If the application is denied, the undersigned have the right to request a written statement from Farmer Bros Co.
                </p>
              </Row>

              <Row>

                <div className="mb-3 col-lg-3">
                  <Label htmlFor="PGFirstName">First Name<code>*</code></Label>
                  <AvField
                    name={"PGFirstName"}
                    type="text"
                    className="form-control"
                    id={"PGFirstName"}
                    value={PGFirstName}
                    onChange={event => setPGFirstName(event.target.value)}
                    validate={{ 
                      required: { value: true, errorMessage: 'Enter First Name' }                  
                    }}
                  />
                </div>

                <div className="mb-3 col-lg-3">
                  <Label htmlFor="PGMiddleName">Middle Name</Label>
                  <AvField
                    name={"PGMiddleName"}
                    type="text"
                    className="form-control"
                    id={"PGMiddleName"}
                    value={PGMiddleName}
                    onChange={event => setPGMiddleName(event.target.value)}
                    validate={{ 
                      required: { value: false, errorMessage: 'Enter Middle Name' }                  
                    }}
                  />
                </div>

                <div className="mb-3 col-lg-3">
                  <Label htmlFor="PGLastName">Last Name<code>*</code></Label>
                  <AvField
                    name={"PGLastName"}
                    type="text"
                    className="form-control"
                    id={"PGLastName"}
                    value={PGLastName}
                    onChange={event => setPGLastName(event.target.value)}
                    validate={{ 
                      required: { value: true, errorMessage: 'Enter Last Name' }                  
                    }}
                  />
                </div>

                <div className="mb-3 col-lg-3">
                  <Label htmlFor="PGTitle">Title<code>*</code></Label>
                  <AvField
                    name={"PGTitle"}
                    type="text"
                    className="form-control"
                    id={"PGTitle"}
                    value={PGTitle}
                    onChange={event => setPGTitle(event.target.value)}
                    validate={{ 
                      required: { value: true, errorMessage: 'Enter Title' }                  
                    }}
                  />
                </div>

              </Row>

              <Row>

                <div className="mb-3 col-lg-3">
                  <Label htmlFor="PGPresentHomeAddress">Present Home Address<code>*</code></Label>
                  <AvField
                    name={"PGPresentHomeAddress"}
                    type="text"
                    className="form-control"
                    id={"PGPresentHomeAddress"}
                    value={PGPresentHomeAddress}
                    onChange={event => setPGPresentHomeAddress(event.target.value)}
                    validate={{ 
                      required: { value: true, errorMessage: 'Enter Present Home Address' }                  
                    }}
                  />
                </div>

                <div className="mb-3 col-lg-3">
                  <Label htmlFor="PGCity">City<code>*</code></Label>
                  <AvField
                    name={"PGCity"}
                    type="text"
                    className="form-control"
                    id={"PGCity"}
                    value={PGCity}
                    onChange={event => setPGCity(event.target.value)}
                    validate={{ 
                      required: { value: true, errorMessage: 'Enter City' }                  
                    }}
                  />
                </div>

                <div className="mb-3 col-lg-3">
                  <Label htmlFor="PGState">State<code>*</code></Label>
                  <AvField 
                    type="select" 
                    name="PGState" 
                    id="PGState"
                    value={PGState} 
                    onChange={e => {setPGState(e.target.value)}}
                    validate={{ 
                      required: { value: true, errorMessage: 'Select State' }                  
                    }}
                  >
                    {usStates.map((element) => 
                    <option key={element.masterCode} value={element.masterCode}>{element.masterDesc}</option>
                    )}
                  </AvField>
                </div>

                <div className="mb-3 col-lg-3">
                  <Label htmlFor="setPGZipCode">Zip<code>*</code></Label>
                  <AvField
                    name={"PGZipCode"}
                    type="text"
                    className="form-control"
                    errorMessage="Enter Zip Code"
                    id={"PGZipCode"}
                    value={PGZipCode}
                    onChange={event => setPGZipCode(event.target.value)}
                    validate={{ 
                      required: { value: true  },
                      pattern: {value: '^[0-9]+$'},
                      minLength: {value: zipCodeMinLen},
                      maxLength: {value: zipCodeMinLen}                
                    }}
                  />
                </div>

              </Row>

              <Row>
                <div className="mb-3 col-lg-3">
                  <Label htmlFor="PGDOB">Date Of Birth<code>*</code></Label>
                  <AvField
                    name={"PGDOB"}
                    type="date"
                    className="form-control"
                    id={"PGDOB"}
                    value={PGDOB}
                    max={getCurrDateYYYYMMDD()}
                    onChange={event => setPGDOB(event.target.value)}
                    validate={{ 
                      required: { value: true, errorMessage: 'Enter Date Of Birth' }                  
                    }}
                  />
                </div>
                <div className="mb-3 col-lg-3">
                  <Label>SSN<code>*</code></Label>
                  <div className="input-group">
                    {/*<div className="input-group-text" onClick={onClickShowSSN}><i className={!showSSN?"uil-eye":"uil-eye-slash"}></i></div>*/}
                      <NumberFormat
                        ref={c => {showSSNField = c}}
                        className="form-control"
                        id="showPGSSN"
                        name="showPGSSN"
                        format={"###-##-####"}
                        onValueChange={(values,sourceInfo) => onChangePGSSN(values, sourceInfo)}
                        
                        placeholder={"###-##-####"}
                        type={showSSN?"ssn":"hidden"}
                        required
                      />
                      
                      <AvInput
                      ref={c => {maskSSNField = c}}
                      errorMessage="Enter valid SSN"
                      name="PGSSN"
                      type={showSSN?"hidden":"password"}
                      className="form-control"
                      id="PGSSN"
                      value={PGSSN}
                      onChange={event => setPGSSN(event.target.value)}
                      validate={{ 
                        required: { value: true, errorMessage: "Enter valid SSN" },
                        pattern: {value: '^[0-9]+$', errorMessage: "Enter valid SSN"},
                        minLength: {value: 9, errorMessage: "Enter valid SSN"},
                        maxLength: {value: 9, errorMessage: "Enter valid SSN"}                 
                      }}
                      />
                      <div className="input-group-text" onClick={onClickShowSSN}><i className={!showSSN?"uil-eye":"uil-eye-slash"}></i></div>
                    {/*
                    <div className="input-group-append">
                      <Button type="button" color="primary" onClick={onClickShowSSN}>{showSSN?"Mask":"Show"}</Button>
                    </div>
                    */}
                  </div>
                  <div className="invalid-feedback" id="invalidSSN">
                    <label><code>Enter Valid SSN</code></label>
                  </div>
                </div>

                <div className="mb-3 col-lg-3">
                  <Label htmlFor="PGDriverLicenceNoAndState">Driver's License Number & State<code>*</code></Label>
                    <div className="input-group">
                      {/*<div className="input-group-text" onClick={onClickShowDriverLicenceNum}><i className={!showDriverLicenceNum?"uil-eye":"uil-eye-slash"}></i></div>*/}
                      <AvInput
                        name={"PGDriverLicenceNoAndState"}
                        type={showDriverLicenceNum?"text":"password"}
                        className="form-control"
                        id={"PGDriverLicenceNoAndState"}
                        value={PGDriverLicenceNoAndState}
                        maxLength={15}
                        onChange={event => setPGDriverLicenceNoAndState(event.target.value)}
                        validate={{ 
                          required: { value: true, errorMessage: 'Enter Drivers License Number & State' }                  
                        }}
                      />
                      {/*
                      <div className="input-group-append">
                        <Button type="button" color="primary" onClick={onClickShowDriverLicenceNum}><i className={!showDriverLicenceNum?"uil-eye":"uil-eye-slash"}></i></Button>
                      </div>
                      */}
                      <div className="input-group-text" onClick={onClickShowDriverLicenceNum}><i className={!showDriverLicenceNum?"uil-eye":"uil-eye-slash"}></i></div>
                    </div>
                  </div>
              </Row>

              <Row>
                <div className="mb-3 col-lg-3">
                  <Label htmlFor="PGAuthorizedSigFileUploaded">Authorized Signature<code>*</code></Label>
                  <div className="form-group">
                    <button
                      type="button"
                      onClick={() => {
                        onClickPGAuthSigCapture();
                      }}
                      className="btn btn-primary waves-effect waves-light"
                      data-toggle="modal"
                    >
                    Capture Signature
                    </button>
                  </div>
                </div>
                <div className="mb-3 col-lg-3">
                  <Label htmlFor="PGDate">Date<code>*</code></Label>
                  <AvField
                    name={"PGDate"}
                    type="date"
                    className="form-control"
                    errorMessage="Select Date"
                    id={"PGDate"}
                    defaultValue={getCurrDateYYYYMMDD()}
                    max={getCurrDateYYYYMMDD()}
                    onChange={event => setPGDate(event.target.value)}
                  />
                </div> 
                <div>
                {PGAuthorizedSigFileUploaded
                  ? <img className="rounded mr-2"
                    src={PGAuthorizedSigFileUploaded} 
                    alt=""
                    width="200"
                    />
                  : null}
                </div>
                    <div>
                      <Modal
                        size="xl"
                        isOpen={modalFullScreen}
                        toggle={() => {
                          tog_fullscreen()
                        }}
                        className="modal-fullscreen"
                      >
                        <div className="align-items-center">
                          <div className="text-center">
                            <h5
                              className="modal-title mt-0"
                              id="exampleModalFullscreenLabel"
                            >
                              {
                                showPGAuthSigPad?
                                "Personal Guarantee Authorized Signature":
                                "Consent Authorized Signature"
                              }
                            
                            
                            </h5>
                          </div>
                          <button
                            onClick={() => {
                              setModalFullScreen(false);
                              setShowPGAuthSigPad(false);
                              setShowConsentAuthSigPad(false);
                            }}
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          {showPGAuthSigPad?
                          <MySignature showSigPadFor="PersonalGuarantee" mySignatureCallback={onChangePGAuthSignature} />:
                          null
                          }
                          {showConsentAuthSigPad?
                          <MySignature showSigPadFor="Consent" mySignatureCallback={onChangeConsentAuthSignature} />:
                          null
                          }
                        </div>
                        <div className="modal-footer justify-content-between">
                          <div className="mb-3">
                            {showPGAuthSigPad && PGAuthorizedSigFileUploaded
                              ? <img className="rounded mr-2"
                                src={PGAuthorizedSigFileUploaded} 
                                alt=""
                                width="200"
                                />
                            : null
                            }
                            {showConsentAuthSigPad && ConsentAuthorizedSigFileUploaded
                              ? <img className="rounded mr-2"
                                src={ConsentAuthorizedSigFileUploaded} 
                                alt=""
                                width="200"
                                />
                            : null
                            }
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              tog_fullscreen();
                              setShowPGAuthSigPad(false);
                              setShowConsentAuthSigPad(false);
                            }}
                            className="btn btn-secondary waves-effect waves-light"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          {/*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                          {/*
                          <button
                            type="button"
                            className="btn btn-primary waves-effect waves-light"
                          >
                            Save changes
                                  </button>
                          */}
                        </div>
                      </Modal>
                    </div>  
              </Row>
              <button id="hiddenSubmitThirdTab" type="submit" hidden>Submit</button>
            </AvForm>
          {/*third tab - ends*/}
          </TabPane>

          <TabPane tabId={4}>
            {/*fourth tab - begins*/}
            <AvForm className="needs-validation" onInvalidSubmit={handleValidationFailedFourthTab} onValidSubmit={handleFourthTabFinishButton} ref={c => {form4 = c}} disabled={(recordMode==="readonly")?true:false}>

              <Row>
                <p>Should the account default from its payment obligations, Farmer Bros Co reserves the right to terminate credit terms and delivery of products without further notice. Customer hereby agrees to pay all cost associated with the collection of past due invoices and recovery of assets, including interest and legal fees.</p>
                <p>If Payment Terms are being requested, we hereby authorize FARMER BROS CO to investigate the credit worthiness of Applicant from information obtained via 3rd party credit reporting agencies, any available public records and/or from Trade references. </p>
                <p>If approved, Terms will be granted and all payments will be due based from invoice date. The approved Payment Terms on this application supersedes alternate payment terms that may be stated on any Purchase Orders submitted to Farmer Bros Co.</p>
                <p>I CERTIFY THAT THE FOREGOING INFORMATION IS TRUE AND CORRECT and agree to the above Terms and Conditions.</p>
              </Row>

              <Row>
                <Col md="6">
                  <AvGroup check className="mb-3">
                    <AvInput 
                      name={"ConsentTermsAndConditions"}
                      errorMessage= 'Please Agree to terms and conditions'
                      trueValue={true}
                      falseValue={false}
                      type="checkbox"
                      className="form-check-input"
                      id={"ConsentTermsAndConditions"}
                      onChange={event => onChangeConsentTermsNConditions(event)}
                      validate={{ 
                        required: { value: true, errorMessage: 'Please Agree to terms and conditions' },
                        max: {value: 1},
                        min: {value: 1}                
                      }} 
                      />
                    <Label check>
                       Agree to terms and conditions<code>*</code>
                    </Label>
                    <AvFeedback>Please Agree to terms and conditions</AvFeedback>
                  </AvGroup>
                </Col>
              </Row>

              <Row>
                <div className="mb-3 col-lg-3">
                  <Label htmlFor="ConsentPrintName">PRINT NAME<code>*</code></Label>
                  <AvField
                    name={"ConsentPrintName"}
                    type="text"
                    className="form-control"
                    id={"ConsentPrintName"}
                    value={ConsentPrintName}
                    onChange={event => setConsentPrintName(event.target.value)}
                    validate={{ 
                      required: { value: true, errorMessage: 'Enter Name' }                  
                    }}
                  />
                </div>
                <div className="mb-3 col-lg-3">
                  <Label htmlFor="ConsentAuthorizedSig">Authorized Signature<code>*</code></Label>
                  {/*
                  <AvField
                    name={"ConsentAuthorizedSig"}
                    type="text"
                    className="form-control"
                    id={"ConsentAuthorizedSig"}
                    value={ConsentAuthorizedSig}
                    onChange={event => setConsentAuthorizedSig(event.target.value)}
                    validate={{ 
                      required: { value: true, errorMessage: 'Enter Authorized Signature' }                  
                    }}
                  />
                  */}
                  <div className="form-group">
                    <button
                      type="button"
                      onClick={() => {
                        onClickConsentAuthSigCapture();
                      }}
                      className="btn btn-primary waves-effect waves-light"
                      data-toggle="modal"
                    >
                    Capture Signature
                    </button>
                  </div>
                </div>
                <div className="mb-3 col-lg-3">
                  <Label htmlFor="ConsentTitle">Title<code>*</code></Label>
                  <AvField
                    name={"ConsentTitle"}
                    type="text"
                    className="form-control"
                    id={"ConsentTitle"}
                    value={ConsentTitle}
                    onChange={event => setConsentTitle(event.target.value)}
                    validate={{ 
                      required: { value: true, errorMessage: 'Enter Title' }                  
                    }}
                  />
                </div>
                <div className="mb-3 col-lg-3">
                  <Label htmlFor="ConsentDate">Date<code>*</code></Label>
                  <AvField
                    name={"ConsentDate"}
                    type="date"
                    className="form-control"
                    errorMessage="Select Date"
                    id={"ConsentDate"}
                    defaultValue={getCurrDateYYYYMMDD()}
                    max={getCurrDateYYYYMMDD()}
                    onChange={event => setConsentDate(event.target.value)}
                  />
                </div>
              </Row>
              <Row>
                <div>
                {ConsentAuthorizedSigFileUploaded
                  ? <img className="rounded mr-2"
                    src={ConsentAuthorizedSigFileUploaded} 
                    alt=""
                    width="200"
                    />
                  : null}
                </div>
              </Row>
              <button id="hiddenSubmitFourthTab" type="submit" hidden>Submit</button>
            </AvForm>

            {/*fourth tab - ends*/}
          </TabPane>

          <TabPane tabId={5}>
            {/*fifth tab - begins*/}
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
                  onClick={e => {onClickRestApiSuccess(e)}}
                >New Account Request
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
            {/*fifth tab - ends*/}
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
                            if(activeTab - 1 === 3){ //Personal guarantee tab
                              if(showPGTab === true)
                                toggleTab(activeTab - 1);
                              else
                                toggleTab(activeTab - 2); 
                            }
                            else
                              toggleTab(activeTab - 1);
                          }}
                        >
                          Previous
                        </Link>
                      </li>
                      <li
                        className={activeTab === 5 ? "next disabled" : "next"}
                      >
                        <Link
                          id="linkNext"
                          to="#"
                          className="btn btn-primary"
                          onClick={() => {
                            switch(activeTab)
                            {
                              case 1://we have field validations on this tab
                                if (recordMode !== "readonly")
                                  document.getElementById("hiddenSubmit").click();
                                else if (recordMode === "readonly")
                                  toggleTab(2);
                                break;
                              case 2://we have field validations on this tab
                                if (recordMode !== "readonly")
                                  document.getElementById("hiddenSubmitSecondTab").click();
                                else if (recordMode === "readonly")
                                  if(showPGTab === true)
                                    toggleTab(3);
                                  else
                                    toggleTab(4);
                                break;
                              case 3://we have field validations on this tab
                                if (recordMode !== "readonly")
                                  document.getElementById("hiddenSubmitThirdTab").click();
                                else if (recordMode === "readonly")
                                  toggleTab(4);
                                break;
                              case 4://we have field validations on this tab
                                if (recordMode !== "readonly")
                                  document.getElementById("hiddenSubmitFourthTab").click();
                                else if (recordMode === "readonly")
                                  showAlert("warning", "It's Read-only Record", "");
                                break;
                              default:
                                break;

                            }
                          }}
                        >
                        {activeTab===4?"Finish":"Next"}
                        </Link>
                      </li>
                    </ul>
                  </div>

                </div>
              </CardBody>
            </Card>
          </Col>
          </Row>
      </Container>
    </div>
  </React.Fragment>
)
}

export default AccountApplication