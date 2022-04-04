import React, { useState, useEffect} from "react"

import { 
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  FormGroup,
  Label,
  Row,
  Button,
  Spinner,

} from "reactstrap"
import { 
  MDBDataTable, 
 } from "mdbreact"

import { AvForm, AvField } from "availity-reactstrap-validation"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import 'datatables.net-bs4'
import exportFromJSON from "export-from-json";

//SweetAlert
import SweetAlert from "react-bootstrap-sweetalert"

import $ from 'jquery';

import { Prompt } from 'react-router-dom'
import { baseUrl } from "../FBLibrary/fbglobals"

const NewMDBDataTable = (props) =>{
  var tableData = {columns:props.cols, rows:props.rows};
  console.log("NewMDBDataTable: tableData");
  console.log(tableData);
  return(
    <div>
    <MDBDataTable
      id="datatable-buttons"
      displayEntries={false}
      searching={false}
      paging={false}
      entries={20}
      noBottomColumns 
      responsive 
      striped 
      bordered
      data={tableData} 
    />
    </div>
  );
}

const PriceList = () => {

  //const baseUrl = 'http://courage.co.in/testrestapi/index.php'
  //const baseUrl = 'https://fbnarf.mktalt.com/pub';
  //const baseUrl = 'http://localhost:19391';

  const isDebug = true;
  
  const fileName = 'pricelist'  
  const exportType = 'xls'

  //fixed columns
  const dummyRecords = [
    {
      "Category": "",
      "FBDSDLISTPRICE": "",
      "Description": "",
      "ItemNumber": "",
      "SubCategory": "",
      "Brand": ""
    },
    {
      "Category": "Cappuccino",
      "FBDSDLISTPRICE": "$8.75",
      "Description": "CAPP WHT CHOC CARAMEL  2LB/6CS",
      "ItemNumber": "1088",
      "SubCategory": "CAPPUCCINO - BAGS",
      "Brand": "Boyd"
    },
    {
      "Category": "Cappuccino",
      "FBDSDLISTPRICE": "$8.75",
      "Description": "CAPP ENGLISH TOFFEE 2LB/6CS",
      "ItemNumber": "1089",
      "SubCategory": "CAPPUCCINO - BAGS",
      "Brand": "Boyd"
    },
    {
      "Category": "Cappuccino",
      "FBDSDLISTPRICE": "$8.75",
      "Description": "CAPP HI REV MOCHA  2LB/6CS",
      "Item Number": "1092",
      "SubCategory": "CAPPUCCINO - BAGS",
      "Brand": "Boyd"
    },
    {
      "Category": "Cappuccino",
      "FBDSDLISTPRICE": "$8.75",
      "Description": "CAPP VANILLA BASE 2LB",
      "ItemNumber": "40263",
      "SubCategory": "CAPPUCCINO - BAGS",
      "Brand": "Boyd"
    },
    {
      "Category": "Cappuccino",
      "FBDSDLISTPRICE": "$8.75",
      "Description": "CAPP CARAMEL MACCHIATO 2LB/6CS",
      "ItemNumber": "126123",
      "SubCategory": "CAPPUCCINO - BAGS",
      "Brand": "Boyd"
    },
    {
      "Category": "Cappuccino",
      "FBDSDLISTPRICE": "$8.75",
      "Description": "CAPP FR VANILLA 2LB/6CS",
      "ItemNumber": "1087",
      "SubCategory": "CAPPUCCINO - BAGS",
      "Brand": "Boyd"
    },
    {
      "Category": "Cappuccino",
      "FBDSDLISTPRICE": "$8.75",
      "Description": "CAPP WHT CHOC CARAMEL  2LB/6CS",
      "ItemNumber": "1088",
      "SubCategory": "CAPPUCCINO - BAGS",
      "Brand": "Boyd"
    },
  ];
  
  
  const fixedDataColumns = ["Category", "SubCategory", "Brand", "ItemNumber", "Description", "FBDSDLISTPRICE", ]; 
  const tableDataColumns = [
    {
      label: "Category",
      field: "Category",
      sort: "asc",
    },
    {
      label: "Sub Category",
      field: "SubCategory",
      sort: "asc",
    },
    {
      label: "Brand",
      field: "Brand",
      sort: "asc",
    },
    {
      label: "Item Number",
      field: "ItemNumber",
      sort: "asc",
    },
    {
      label: "Description",
      field: "Description",
      sort: "asc",
    },
    {
      label: "FBDSD LIST PRICE",
      field: "FBDSDLISTPRICE",
      sort: "asc",
    },
  ]

  //form field state variables below
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [priceGroup, setPriceGroup] = useState("");
  const [categoryCode, setCategoryCode] = useState("");
  const [brand, setBrand] = useState("");
  const [itemNumber, setItemNumber] = useState("");
  const [priceLevelStart, setPriceLevelStart] = useState("");
  const [priceLevelEnd, setPriceLevelEnd] = useState("");
  
  //state variables for lists
  const [categoryList, setCategoryList] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState([]);
  const [priceGroupList, setPriceGroupList] = useState([]);
  const [categoryCodeList, setCategoryCodeList] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [itemNumberList, setItemNumberList] = useState([]);
  const [priceLevelStartList, setPriceLevelStartList] = useState([]);
  const [priceLevelEndList, setPriceLevelEndList] = useState([]);

  //other state variable
  const [masterData, setMasterData] = useState(null);
  const [showLoadingIndicator, setShowLoadingIndicator] = useState(false);
  const [tableData, setTableData] = useState({columns:tableDataColumns, rows:[]});
  const [showDataTable, setShowDataTable] = useState(true)

  //state variables for alerts
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showWarningAlert, setShowWarningAlert] = useState(false);
  const [alertType, setAlertType] = useState("error"); //success, warning, error
  const [alertTitle, setAlertTitle] = useState("Error");
  const [alertMsg, setAlertMsg] = useState("");

  var searchForm = null;

  useEffect(() => {
  
    if(isDebug)
      console.log("useEffect: Begin");

    document.title = "Price List | Farmer Brothers";
    
    let arr1 = priceLevelStartList;
    let arr2 = range(1, 60);
    setPriceLevelStartList([...arr1, ...arr2]);

    getMasterData();

    if(isDebug)
      console.log("useEffect: End");

  }, []);

  useEffect(() => {

    setTimeout(()=>{
      console.log("useEffect - setTimeout");
      var table = $('#datatable-buttons').DataTable();
      if(table){
        console.log("useEffect - setTimeout - if(table)");
        $("#datatable-buttons").DataTable({
          destroy: true,
          dom: "rBftlip",
          pageLength: 15,
        });
      }
    },1000);
  })

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

  function onChangePriceLevelStart(value){

    if(isDebug)
      console.log("onChangePriceLevelStart: Begin");

    if(value !== null && value !== "Select Price Level Start"){
      setPriceLevelStart(value);
      value = parseInt(value);
      
      console.log("onChangePriceLevelStart: value - " + value + "; type of " + typeof(value));
      let arr2 = range(value+1, 60);
      if(value < 60)
        setPriceLevelEndList([...arr2]);
    }
    else{
      setPriceLevelStart("");
    }

    if(isDebug)
      console.log("onChangePriceLevelStart: End");
  }

  function onChangePriceLevelEnd(value){

    if(isDebug)
      console.log("onChangePriceLevelEnd: Begin");

    if(value !== null && value !== "Select Price Level End"){
      setPriceLevelEnd(value);
    }
    else{
      setPriceLevelEnd("");
    }

    if(isDebug)
      console.log("onChangePriceLevelEnd: End");
    
  }

  function onChangeCategory(value){

    if(isDebug)
      console.log("onChangeCategory: Begin");

    if(value !== null && value.trim().length > 0 && value !== "Select Category"){
      setCategory(value);
      if(isDebug)
        console.log("onChangeCategory: value - " + value);
    }
    else{
      setCategory("");
    }

    if(isDebug){
      console.log("onChangeCategory: value - " + value + "; type - " + typeof(value));
      console.log("onChangeCategory: masterData");
      console.log(masterData);
      console.log("onChangeCategory: Object.keys(masterData)");
      console.log(Object.keys(masterData));
      console.log("onChangeCategory: Object.keys(masterData).indexOf(value) - " + Object.keys(masterData).indexOf(String(value).trim()));
    }
    
    if(Object.keys(masterData).indexOf(String(value)) !== -1){
      let subcatlst = masterData[value]["SubCategory"].slice();
      let catcodelst = masterData[value]["CatCode"].slice();
      let pricegrouplst = masterData[value]["PriceGroup"].slice();
      let brandlst = masterData[value]["Brand"].slice();
      let itemnolst = masterData[value]["ItemNumber"].slice();

      setSubCategoryList([...["Select SubCategory"], ...subcatlst]);
      setCategoryCodeList([...["Select CategoryCode"], ...catcodelst]);
      setPriceGroupList([...["Select PriceGroup"], ...pricegrouplst]);
      setBrandList([...["Select Brand"], ...brandlst]);
      setItemNumberList([...["Select ItemNumber"], ...itemnolst]);

      setSubCategory("");
      setCategoryCode("");
      setPriceGroup("");
      setBrand("");
      setItemNumber("");
      setPriceLevelStart("");
      setPriceLevelEnd("");
    }

    if(isDebug)
      console.log("onChangeCategory: End");

  }

  function onChangeSubCategory(value){

    if(isDebug)
      console.log("onChangeSubCategory: Begin");

    if(value !== null && value.trim().length > 0 && value !== "Select SubCategory"){
      setSubCategory(value);
      if(isDebug)
        console.log("onChangeSubCategory: value - " + value);
    }
    else{
      setSubCategory("");
    }

    if(isDebug)
      console.log("onChangeSubCategory: End");

  }

  function onChangeCategoryCode(value){

    if(isDebug)
      console.log("onChangeCategoryCode: Begin");

    if(value !== null && value.trim().length > 0 && value !== "Select CategoryCode"){
      setCategoryCode(value);
      if(isDebug)
        console.log("onChangeCategoryCode: value - " + value);
    }
    else{
      setCategoryCode("");
    }

    if(isDebug)
      console.log("onChangeCategoryCode: End");

  }

  function onChangePriceGroup(value){

    if(isDebug)
      console.log("onChangePriceGroup: Begin");

    if(value !== null && value.trim().length > 0 && value !== "Select PriceGroup"){
      setPriceGroup(value);
      if(isDebug)
        console.log("onChangePriceGroup: value - " + value);
    }
    else{
      setPriceGroup("");
    }

    if(isDebug)
      console.log("onChangePriceGroup: End");

  }

  function onChangeBrand(value){

    if(isDebug)
      console.log("onChangeBrand: Begin");

    if(value !== null && value.trim().length > 0 && value !== "Select Brand"){
      setBrand(value);
      if(isDebug)
        console.log("onChangeBrand: value - " + value);
    }
    else{
      setBrand("");
    }

    if(isDebug)
      console.log("onChangeBrand: End");

  }

  function onChangeItemNumber(value){

    if(isDebug)
      console.log("onChangeItemNumber: Begin");

    if(value !== null && value.trim().length > 0 && value !== "Select ItemNumber"){
      setItemNumber(value);
      if(isDebug)
        console.log("onChangeItemNumber: value - " + value);
    }
    else{
      setItemNumber("");
    }

    if(isDebug)
      console.log("onChangeItemNumber: End");

  }

  function range(start, end)  {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }

  function getMasterData(){

    if(isDebug)
      console.log("getMasterData: Begin");

    let postData = {};

    execMasterDataRequest(JSON.stringify(postData));

    if(isDebug)
      console.log("getMasterData: End");
  }

  function handleMasterDataSuccess(masterDataDict){

    if(isDebug)
      console.log("handleMasterDataSuccess: Begin");

    let catList = Object.keys(masterDataDict).slice();
    catList.splice(0,0,"Select Category"); //insert at 0 index

    setCategoryList(catList);
    setMasterData(JSON.parse(JSON.stringify(masterDataDict)));

    if(isDebug){
      console.log("handleMasterDataSuccess: masterDataDict");
      console.log(masterDataDict);
      console.log(Object.keys(masterDataDict));
    }

    if(isDebug)
      console.log("handleMasterDataSuccess: End");
  }

  function handleMasterDataFailure() {

    if(isDebug)
      console.log("handleMasterDataFailure: End");

    setCategoryList(["Select Category",]);
    setSubCategoryList(["Select SubCategory",]);
    setCategoryCodeList(["Select CategoryCode",]);
    setPriceGroupList(["Select PriceGroup",]);
    setBrandList(["Select Brand",]);
    setItemNumberList(["Select ItemNumber",]);

    setCategory("");
    setSubCategory("");
    setCategoryCode("");
    setPriceGroup("");
    setBrand("");
    setItemNumber("");
    setPriceLevelStart("");
    setPriceLevelEnd("");

    let cols = tableData.columns;
    setShowDataTable(false);
    setTableData({columns:cols, rows:[]});

    if(isDebug)
      console.log("handleMasterDataFailure: End");
    
  }

  function execMasterDataRequest(postData) {

    if(isDebug)
      console.log("execMasterDataRequest: Begin");

    let url = `${baseUrl}/api/pricelist/getPriceListMaster`;
    
    setShowLoadingIndicator(true);
    
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

        if(isDebug){
          console.log("execMasterDataRequest: data");
          console.log(data);
        }

        /*let strData =JSON.stringify(data);
        let jsonResult= JSON.parse(strData);*/
        
        let jsonResult= JSON.parse(data);
        let restApiResult = jsonResult.result; 
        
        let masterData = jsonResult.data;

        if(restApiResult === "Failed"){
          console.log("execMasterDataRequest: master data call failed");
          setShowLoadingIndicator(false);
          showAlert("error", "Error" ,"Data Fetch Error !")
          handleMasterDataFailure();
          return;
        }
        else if(restApiResult === "Success" && !masterData){
          console.log("execMasterDataRequest: master data empty - masterData");
          console.log(masterData);
          setShowLoadingIndicator(false);
          showAlert("error", "Error" ,"Data Fetch Error !!")
          handleMasterDataFailure();
          return;
        }
        else{
          console.log("execMasterDataRequest: master data call success");
          handleMasterDataSuccess(masterData);
          setShowLoadingIndicator(false);
        }
      
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log("execMasterDataRequest: Server/Network Error !");
        console.log(error);
        setShowLoadingIndicator(false);
        showAlert("error", "Error" ,"Data Fetch Server/Network error !");
        handleMasterDataFailure();
        return;
      }
    )
    .catch((error) => {
      // Handle the error
      console.log("execMasterDataRequest: Server/Network Error !!");
      console.log(error)
      setShowLoadingIndicator(false);
      showAlert("error", "Error" ,"Data Fetch Server/Network error !!");
      handleMasterDataFailure();
      return;
    });

    if(isDebug)
      console.log("execMasterDataRequest: End");
  }

  const handleSearchSubmit = () => {

    if(isDebug)
      console.log("handleSearchSubmit>>>");

    if (true) {
      //event.preventDefault();
      //event.stopPropagation();
  
      let postData = getSearchRequestPostData();
      execSearchDataRequest(postData);

    }
  };

  function execSearchDataRequest(postData) {

    if(isDebug)
      console.log("execSearchDataRequest: Begin");

    if(isDebug){
      console.log("execSearchDataRequest: postData");
      console.log(postData);  
    }

    let url = `${baseUrl}/api/pricelist/getPriceListLookup`;
    
    setShowLoadingIndicator(true);
    
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

        if(isDebug){
          console.log("execSearchDataRequest: response data");
          console.log(data);
        }

        //applicationId = data.data.ApplicationId;
  
        /*let strData =JSON.stringify(data);
        let jsonResult= JSON.parse(strData);*/
        
        let jsonResult= JSON.parse(data);
        let restApiResult = jsonResult.result; 
        
        let searchData = jsonResult.data;

        if(restApiResult === "Failed"){
          console.log("execSearchDataRequest: search data call failed");
          handleSearchDataFailure();
          setShowLoadingIndicator(false);
          showAlert("error", "Error" ,"Search Data Fetch Error !")
          return;
        }
        else if(restApiResult === "Success" && searchData.length === 0){
          console.log("execSearchDataRequest: search data empty - searchData");
          console.log(searchData);
          handleSearchDataFailure();
          setShowLoadingIndicator(false);
          showAlert("error", "Error" ,"No Record Found !!")
          return;
        }
        else{
          console.log("execSearchDataRequest: search data call success");
          handleSearchDataSuccess(searchData);
          setShowLoadingIndicator(false);
        }
      
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log("execSearchDataRequest: Server/Network Error !");
        console.log(error);
        handleSearchDataFailure();
        setShowLoadingIndicator(false);
        showAlert("error", "Error" ,"Search Data Fetch Server/Network error !")
        return;
      }
    )
    .catch((error) => {
      // Handle the error
      console.log("execSearchDataRequest: Server/Network Error !!");
      console.log(error)
      handleSearchDataFailure();
      setShowLoadingIndicator(false);
      showAlert("error", "Error" ,"Search Data Fetch Server/Network error !!")
      return;
    });

    if(isDebug)
      console.log("execSearchDataRequest: End");
  }

  function handleSearchDataSuccess(jsonData) {

    if(isDebug)
      console.log("handleSearchDataSuccess: Start");

    if(isDebug){
      console.log("handleSearchDataSuccess: jsonData");
      console.log(jsonData);
    }

    var tableElement = document.getElementById("datatable-buttons");
    var butGrpElement = document.getElementById("datatable-buttons_wrapper");
    var butGrpPaginate = document.getElementById("datatable-buttons_paginate");

    if(tableElement){
      console.log("handleSearchDataSuccess: remove tableElement");
      tableElement.remove();
    }
      
    if(butGrpElement){
      console.log("handleSearchDataSuccess: remove butGrpElement");
      butGrpElement.remove();
    }

    if(butGrpPaginate){
      console.log("handleSearchDataSuccess: remove butGrpPaginate");
      butGrpPaginate.remove();
    }
      
      
    if(jsonData !== null && jsonData.length > 0){
      
      let sortedColumns = Object.keys(jsonData[0]).sort();
      if(isDebug){
        console.log("handleSearchDataSuccess: sortedColumns");
        console.log(sortedColumns);  
      }

      //tableData.columns = tableDataColumns; // assign fixed columns
      let columns = tableDataColumns; // assign fixed columns
      sortedColumns.forEach(key => {
        if(key === 'levels'){
          let sortedColumnsChild = Object.keys(jsonData[0]['levels']).sort();
          sortedColumnsChild.forEach(key1 => {
            if(fixedDataColumns.indexOf(key1) === -1){
              let colObj = {
                label: key1,
                field: key1,
                sort: "asc",
              }
              columns.push(colObj);
            }
            
          });
        }
        else{
          if(fixedDataColumns.indexOf(key) === -1){
            let colObj = {
              label: key,
              field: key,
              sort: "asc",
            }
            columns.push(colObj);
          }
        }
      });

      //now create data table records from json
      let tableRows = [];
      jsonData.forEach(record => {
        let tableRecord = {};
        for(const [key, val] of Object.entries(record)) {
          if(key === 'levels'){
            for(const [key1, val1] of Object.entries(val)){
              tableRecord[key1] = "$"+val1;
            }
          }
          else if(key === "FBDSDLISTPRICE"){
            tableRecord[key] = "$"+val;
          }
          else{
            tableRecord[key] = val;
          }
        }
        tableRows.push(tableRecord);
      });

      setShowDataTable(false);
      setTableData({columns: columns, rows: tableRows});
      setShowDataTable(true);
      
    }
    else{
      setShowDataTable(false);      
      setTableData({columns: tableDataColumns, rows: dummyRecords});
      setShowDataTable(true);
    }

    if(isDebug)
      console.log("handleSearchDataSuccess: End");

  }

  function handleSearchDataFailure(){

    if(isDebug)
      console.log("handleSearchDataFailure: Begin");

    let cols = tableData.columns;
    setShowDataTable(false);
    setTableData({columns: cols, rows: []});
    
    if(isDebug)
      console.log("handleSearchDataFailure: End");
  }

  function getSearchRequestPostData() {

    if(isDebug)
      console.log("getSearchRequestPostData: Begin");

    let searchRequestData = {
      "category": category,
      "subCategory": subCategory,
      "priceGroup": priceGroup,
      "categoryCode": categoryCode,
      "brand": brand,
      "itemNumber": itemNumber,
      "priceLevelStart": priceLevelStart,
      "priceLevelEnd": priceLevelEnd,
    }

    if(isDebug)
      console.log("getSearchRequestPostData: End");

    return JSON.stringify(searchRequestData);

  }

  const handleValidationFailed = (event, errors, values) => {

    if(isDebug)
      console.log("handleValidationFailed: Begin");

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

    if(isDebug)
      console.log("handleValidationFailed: End");
  };

  const onClickClearRefresh = () => {

    if(isDebug)
      console.log("onClickClearRefresh: Begin");

    searchForm && searchForm.reset();

    if(masterData && Object.keys(masterData).length > 0){
      setCategory("");
      setSubCategory("");
      setCategoryCode("");
      setPriceGroup("");
      setBrand("");
      setItemNumber("");

      let cols = tableData.columns;
      setShowDataTable(false);
      setTableData({columns: cols, rows: []});
    }
    else{
      getMasterData();
    }

    if(isDebug)
      console.log("onClickClearRefresh: End");

  }

  const exportToExcel = () => {

    if(isDebug)
      console.log("exportToExcel: End");

    var current = new Date();
    var timestamp = `${current.getDate()}${current.getMonth()+1}${current.getFullYear()}_${current.getHours()}${current.getMinutes()}${current.getSeconds()}`;
    var fileNameWithTimestamp = `${fileName}_${timestamp}`; 
    var data = [];
    var colArray = [];

    var table = $("#datatable-buttons").DataTable();
    //var currentpage = table.rows( {page:'current'} ).data();
    var filteredRows = table.rows( { filter : 'applied'} ).data();
    
    if(isDebug){
      console.log("exportToExcel: filteredRows");
      console.log(filteredRows);
    }

    //push column names array into data
    colArray = [];
    tableData.columns.forEach(element =>{
      colArray.push(element["label"]);
    });

    for(let rowIdx=0; rowIdx<filteredRows.length; rowIdx++){
      let record = {};
      for(let colIdx=0; colIdx<colArray.length; colIdx++){
        record[colArray[colIdx]] = filteredRows[rowIdx][colIdx];
      }
      data.push(record);
    }

    data = JSON.parse(JSON.stringify(data));
    console.log("exportToExcel: fileNameWithTimestamp - " + fileNameWithTimestamp + " ; exportType - " + exportType);
    console.log("exportToExcel: data.length - " + data.length + "; data -");
    console.log(data);
    
    //exportFromJSON({ "data":data, "fileName":fileNameWithTimestamp, "extension":exportType, "exportType":exportType, "fields":colArray });
    exportFromJSON({ data, fileNameWithTimestamp, exportType });
    if(isDebug)
      console.log("exportToExcel: End");
  } 

  return (
    <React.Fragment>
      <Prompt
        message={(location, action) => {

          if(isDebug){
            console.log("PROMPT");
            console.log(location);
            console.log(action);
          }

          if (action === 'POP') {
            if(isDebug)
              console.log("Backing up...")
          }

          if(location.pathname.search("pricelist") > -1){
            return(null);
          }
          else{
            return("Are you sure, you want leave current page?");
          }
          
        }}
      />
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="PRICING TOOLS" breadcrumbItem="Farmer Brothers DSD Price List" />

          <Row>

            <Col className="col-12">

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

                  {/*<CardTitle className="card-title mb-4">Farmer Brothers DSD Price List</CardTitle>*/}
                  <h4 className="card-title mb-4">Farmer Brothers DSD Price List</h4>
                  <AvForm className="needs-validation" onInvalidSubmit={handleValidationFailed} onValidSubmit={handleSearchSubmit} ref={c => {searchForm = c}}>
                    <Row>
                      <Col lg={4}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="category" className="form-label">Category</Label>
                          <div className="col-md-10">
                            <AvField 
                            type="select" 
                            name="category"
                            className="form-select"
                            id="category"
                            errorMessage="Enter Category"
                            validate={{ required: { value: true } }} 
                            value={category} 
                            onChange={e => {onChangeCategory(e.target.value)}}
                            >
                              {categoryList.map((element) => 
                              <option key={element} value={element}>{element}</option>
                              )}
                            </AvField>
                          </div>
                        </FormGroup>
                      </Col>

                      <Col lg={4}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="subCategory" className="form-label">Sub Category</Label>
                          <div className="col-md-10">
                            <AvField 
                            type="select" 
                            name="subCategory"
                            className="form-select"
                            id="subCategory"
                            errorMessage="Enter Sub Category"
                            validate={{ required: { value: false } }} 
                            value={subCategory} 
                            onChange={e => {onChangeSubCategory(e.target.value)}}
                            disabled={category?false:true}
                            >
                              {subCategoryList.map((element) => 
                              <option key={element} value={element}>{element}</option>
                              )}
                            </AvField>
                          </div>
                        </FormGroup>
                      </Col>
                      {/*
                      <Col lg={4}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="categoryCode" className="form-label">Category Code</Label>
                          <div className="col-md-10">
                            <AvField 
                            type="select" 
                            name="categoryCode"
                            className="form-select"
                            id="categoryCode"
                            errorMessage="Enter Category Code"
                            validate={{ required: { value: false } }} 
                            value={categoryCode} 
                            onChange={e => {onChangeCategoryCode(e.target.value)}}
                            disabled={category?false:true}
                            >
                              {categoryCodeList.map((element) => 
                              <option key={element} value={element}>{element}</option>
                              )}
                            </AvField>
                          </div>
                        </FormGroup>
                      </Col>
                      */}
                    
                      <Col lg={4}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="priceGroup" className="form-label">Price Group</Label>
                          <div className="col-md-10">
                            <AvField 
                            type="select" 
                            name="priceGroup"
                            className="form-select"
                            id="priceGroup"
                            errorMessage="Enter Price Group"
                            validate={{ required: { value: false } }} 
                            value={priceGroup} 
                            onChange={e => {onChangePriceGroup(e.target.value)}}
                            disabled={category?false:true}
                            >
                              {priceGroupList.map((element) => 
                              <option key={element} value={element}>{element}</option>
                              )}
                            </AvField>
                          </div>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg={4}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="brand" className="form-label">Brand</Label>
                          <div className="col-md-10">
                            <AvField 
                            type="select" 
                            name="brand"
                            className="form-select"
                            id="brand"
                            errorMessage="Enter Brand"
                            validate={{ required: { value: false } }} 
                            value={brand} 
                            onChange={e => {onChangeBrand(e.target.value)}}
                            disabled={category?false:true}
                            >
                              {brandList.map((element) => 
                              <option key={element} value={element}>{element}</option>
                              )}
                            </AvField>
                          </div>
                        </FormGroup>
                      </Col>
                      
                      <Col lg={4}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="itemNumber" className="form-label">Item Number</Label>
                          <div className="col-md-10">
                            <AvField 
                            placeholder="Type to search..."
                            name="itemNumber"
                            className="form-control"
                            id="itemNumber"
                            errorMessage="Enter Item Number"
                            validate={{ required: { value: false } }} 
                            value={itemNumber} 
                            onChange={e => {onChangeItemNumber(e.target.value)}}
                            list="itemNumberList"
                            disabled={category?false:true}
                            >
                            </AvField>
                            <datalist
                              id="itemNumberList"
                            >
                              {itemNumberList.map((element) => 
                              <option key={element} value={element}>{element}</option>
                              )} 
                            </datalist>
                          </div>
                        </FormGroup>
                      </Col>
                    </Row>
                                            
                    <Row>
                    <Col lg={4}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="priceLevelStart" className="form-label">Price Level Start</Label>
                          <div className="col-md-10">
                            <AvField 
                            type="select" 
                            name="priceLevelStart"
                            className="form-select"
                            id="priceLevelStart"
                            errorMessage="Enter Price Level Start"
                            validate={{ required: { value: true } }} 
                            value={priceLevelStart} 
                            onChange={e => {onChangePriceLevelStart(e.target.value)}}
                            disabled={category?false:true}
                            >
                              <option value="">Select Price Level Start</option>
                              {priceLevelStartList.map((element) => 
                              <option key={element} value={element}>{element}</option>
                              )}
                            </AvField>
                          </div>
                        </FormGroup>
                      </Col>

                      <Col lg={4}>
                        <FormGroup className="mb-3">
                          <Label htmlFor="priceLevelEnd" className="form-label">Price Level End</Label>
                          <div className="col-md-10">
                            <AvField 
                            type="select" 
                            name="priceLevelEnd"
                            className="form-select"
                            id="priceLevelEnd"
                            errorMessage="Enter Price Level End"
                            validate={{ required: { value: true } }} 
                            value={priceLevelEnd} 
                            onChange={e => {onChangePriceLevelEnd(e.target.value)}}
                            disabled={priceLevelStart && category ? false : true}
                            >
                              <option value="">Select Price Level End</option>
                              {priceLevelEndList.map((element) => 
                              <option key={element} value={element}>{element}</option>
                              )}
                            </AvField>
                          </div>
                        </FormGroup>
                      </Col>

                    </Row>

                    <Row>
                        {
                        /*
                        <div className="col-12">
                          <button 
                            type="submit" 
                            className="btn btn-primary"
                            disabled={category?false:true}
                          >SEARCH
                          </button>
                          <button 
                            type="button" 
                            className="btn btn-primary"
                            onClick={onClickClearRefresh}
                          >Clear/Refresh
                          </button>
                        </div>
                        */
                        }
                      <div className="button-items">
                        <Button
                          type="submit"
                          color="primary"
                          className="btn btn-primary waves-effect waves-light"
                          disabled={category?false:true}
                        >
                          SEARCH
                        </Button>{" "}
                        <Button
                          type="button"
                          color="primary"
                          className="btn btn-primary waves-effect waves-light"
                          onClick={onClickClearRefresh}
                        >
                          CLEAR
                      </Button>{" "}
                      </div>
                    </Row>

                  </AvForm>
                  
                </CardBody>

              </Card>

            </Col>

          </Row>

          <Row>
            <Col className="col-sm-12">
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Search Results </CardTitle>
                  <CardSubtitle className="mb-3">
                  You can export the results to pdf or excel. You can pick what columns you want to export.
                  </CardSubtitle>
                  <div className="col-12">
                    <button 
                      type="button" 
                      className="btn btn-secondary"
                      disabled={tableData.rows.length>0?false:true}
                      onClick={exportToExcel}
                    >EXCEL
                    </button>
                  </div>
                  
                  {
                  showDataTable && tableData.rows.length>0?(
                  <NewMDBDataTable
                    cols={tableData.columns} 
                    rows={tableData.rows}
                  />):null
                  }

                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}

export default PriceList
