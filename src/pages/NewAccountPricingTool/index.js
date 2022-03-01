import React, { useState, useEffect } from "react"

import {
    Card,
    CardBody,
    CardSubtitle,
    Col,
    CardTitle,
    Container,
    FormGroup,
    Label,
    Row,
    Spinner,
    Input,
} from "reactstrap"
  
import { 
  MDBDataTable,
  MDBDataTableV5
   } from "mdbreact"
  
  import { Prompt } from "react-router-dom"
  
  //Import Breadcrumb
  import Breadcrumbs from "../../components/Common/Breadcrumb"
  import { 
    AvForm, 
  AvField,
    AvInput
   } from "availity-reactstrap-validation"

   //SweetAlert
import SweetAlert from "react-bootstrap-sweetalert"

import exportFromJSON from "export-from-json";

import {
    baseUrl,
    NAPTtableDataColumns,
    setInnerHTML,
} from "../FBLibrary/fbglobals"
import { set } from "lodash"

//import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const NewAccountPricingTool = () => {

    //constant variables
    const isDebug = true;
    const fileName = 'new_account_pt'  
    const exportType = 'xls'
    const dataColumnMapping = {
        "Category": "Category",
        "SubCategory": "SubCategory",
        "PriceGroup": "PriceGroup",
        "CatCode": "CatCode",
        "Brand": "Brand",
        "ItemNumber": "ItemNumber",
        "Description": "Description",
        "UOM": "UOM",
        "FBFLOOR": "FBFLOOR",
        "FBDSDLISTPRICE": "FBDSDLISTPRICE",
        "ListPriceLevel": "ListPriceLevel",
        "Useup": "Useup",
        "COGS": "COGS",
        "CHECKGPMARGIN": "CHECKGPMARGIN",
        "GPMarginper": "GPMarginper"
    };

    var tableDataColumns = JSON.parse(JSON.stringify(NAPTtableDataColumns));
    
    tableDataColumns.push({
        label: "Action",
        field: "action",
        //width: 100,
        sort: "disabled"
    },
    );

    //Other variables
    var calculateItemForm = null;
    var mdbDTWidget = null;
    var itemNoWidget = null;

    //state variables for alerts
    const [showLoadingIndicator, setShowLoadingIndicator] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [showWarningAlert, setShowWarningAlert] = useState(false);
    const [alertType, setAlertType] = useState("error"); //success, warning, error
    const [alertTitle, setAlertTitle] = useState("Error");
    const [alertMsg, setAlertMsg] = useState("");
    const [showDeleteRowAlert, setShowDeleteRowAlert] = useState(false);
    const [deleteRowDetails, setDeleteRowDetails] = useState(null);

    //state variables for others
    const [tableData, setTableData] = useState({ columns: tableDataColumns, rows: [] });
    const [addItemList, setAddItemList] = useState([]);
    const [calculatedItem, setCalculatedItem] = useState(null);
    const [masterData, setMasterData] = useState(null);
    const [itemsList, setItemsList] = useState([]);
    const [coffeeEquipProgList, setCoffeeEquipProgList] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    //const [rowsForRender, setRowsForRender] = useState([]);

    //state variable for form
    const [acctName, setAcctName] = useState("");
    const [itemNo, setItemNo] = useState("");
    const [description, setDescription] = useState("");
    const [priceGroup, setPriceGroup] = useState("");
    const [catCode, setCatCode] = useState("");
    const [priceUoM, setPriceUoM] = useState("");
    const [coffeeEquipProg, setCoffeeEquipProg] = useState("");
    const [coffeeEquipChg, setCoffeeEquipChg] = useState("");
    const [targetPrice, setTargetPrice] = useState("");
    const [indicatedPriceLevel, setIndicatedPriceLevel] = useState("");
    const [invoicePrice, setInvoicePrice] = useState("");
    const [isCoffeeCategory, setIsCoffeeCategory] = useState(false);

    useEffect(() => {
  
        if(isDebug)
          console.log("useEffect: Begin");
    
        document.title = "New Account Pricing Tool | Farmer Brothers";
        getMasterData();
    
        if(isDebug)
          console.log("useEffect: End");
    
    }, []);

  useEffect(() => {

    onChangeTargetPrice(targetPrice);
      
  },[coffeeEquipChg]);

  useEffect(() => {
    let array = JSON.parse(JSON.stringify(addItemList));
    let data = [];
    if (array.length > 0) {
      if (isDebug) {
        console.log("useEffect: addItemList");
        console.log(addItemList)
      }
      array.map((item, index) => {
        item.action = (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              className="px-3 text-danger"
              style={{
                cursor: "pointer",
                color: "black",
              }}
              onClick={() => onClickDeleteRow(index, item.AcctName, item.ItemNumber)}
            ><i className="uil uil-trash-alt font-size-22"></i>
            </div>
          </div>
        );
        data.push(item);
      });
      //setRowsForRender(data);
      setTableData({ columns: tableDataColumns, rows: data });
    }
    else {
      setTableData({ columns: tableDataColumns, rows: [] });
    }
  }, [addItemList]);

    
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

    const handleItemCalculationSubmit = () => {

        if(isDebug)
          console.log("handleItemCalculationSubmit: Begin");
    
        //event.preventDefault();
        //event.stopPropagation();

        onClickAddItem();

        if(isDebug)
          console.log("handleItemCalculationSubmit: End");
    };
    
  const exportToExcel = () => {

    if (isDebug)
      console.log("exportToExcel: End");
        
    console.log(mdbDTWidget.state.filteredRows);
    
    var current = new Date();
    var timestamp = `${current.getDate()}${current.getMonth() + 1}${current.getFullYear()}_${current.getHours()}${current.getMinutes()}${current.getSeconds()}`;
    var fileNameWithTimestamp = `${fileName}_${timestamp}`;
    var data = [];
    var colArray = [];
    var excelColumns = [];

    var filteredRows = JSON.parse(JSON.stringify(mdbDTWidget.state.filteredRows));
        
    if (isDebug) {
      console.log("exportToExcel: filteredRows");
      console.log(filteredRows);
    }
    
    //push column names array into data
        
    colArray = [];
    excelColumns = [];
    tableData.columns.forEach(element => {
      if (element["field"] !== "action") {
        colArray.push(element["field"]);
        excelColumns.push(element["label"]);
      }
    });

    if (isDebug) {
      console.log("exportToExcel: colArray");
      console.log(colArray);
    }
    
    for (let rowIdx = 0; rowIdx < filteredRows.length; rowIdx++) {
      let record = {};
      for (let colIdx = 0; colIdx < colArray.length; colIdx++) {
        record[excelColumns[colIdx]] = filteredRows[rowIdx][colArray[colIdx]];
      }
      data.push(record);
    }
    
    data = JSON.parse(JSON.stringify(data));
    console.log("exportToExcel: fileNameWithTimestamp - " + fileNameWithTimestamp + " ; exportType - " + exportType);
    console.log("exportToExcel: data.length - " + data.length + "; data -");
    console.log(data);
        
    //exportFromJSON({ "data":data, "fileName":fileNameWithTimestamp, "extension":exportType, "exportType":exportType, "fields":colArray });
    exportFromJSON({ data, fileNameWithTimestamp, exportType });

    if (isDebug)
      console.log("exportToExcel: End");
  }

    function onClickAddItem() {

        if(isDebug)
            console.log("onClickAddItem: Begin");
        
        let array = JSON.parse(JSON.stringify(addItemList));

      if (targetPrice.length>0 && calculatedItem) {
        if (isDebug) {
          console.log("onClickAddItem: calculatedItem");
          console.log(calculatedItem);
        }
        let calcItem = JSON.parse(JSON.stringify(calculatedItem));
        calcItem.AcctName = acctName;
        array.push(calcItem);

        let data = [];
        if (array.length > 0) {
          
          array.map((item, index) => {
            item.action = (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  className="px-3 text-danger"
                  style={{
                    cursor: "pointer",
                    color: "black",
                  }}
                  onClick={() => onClickDeleteRow(index, item.AcctName, item.ItemNumber)}
                ><i className="uil uil-trash-alt font-size-22"></i>
                </div>
              </div>
            );
            data.push(item);
          });
          setAddItemList(data);
          setTableData({ columns: tableDataColumns, rows: data });
          onClickClear();
        }
      }

        if(isDebug)
            console.log("onClickAddItem: End");
    }

    function onClickDeleteRow(rowId, account, itemNumber ) {
          //Delete row from table
          if (isDebug) {
            console.log("onClickDeleteRow: Begin");
            console.log("onClickDeleteRow: rowId - " + rowId + "; account - " + account + "; itemNumber" + itemNumber);
          }
      
          setDeleteRowDetails({
            rowId: rowId,
            acctName: account,
            itemNumber: itemNumber
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
      console.log("onConfirmDeleteRowAlert: rowId - " + deleteRowDetails.rowId + "; Account Name - " + deleteRowDetails.acctName + "; Item Number - " + deleteRowDetails.itemNumber);
    }

    setAddItemList(addItemList.filter((item, index) => (index !== deleteRowDetails.rowId)));

    if (isDebug) {
      console.log("onConfirmDeleteRowAlert: End");
    }

  }

    function onClickClear() {

        if(isDebug)
            console.log("onClickClear: Begin");
        
        calculateItemForm && calculateItemForm.reset();

        setInnerHTML("itemNoLbl", "Item #<code>*</code>");
        //setAcctName("");
        setItemNo("");
        setDescription("");
        setPriceGroup("");
        setCatCode("");
        setPriceUoM("");
        setCoffeeEquipProg("");
        setCoffeeEquipChg("");
        setTargetPrice("");
        setIndicatedPriceLevel("");
        setInvoicePrice("");

        setIsCoffeeCategory(false);
        setSelectedItem(null);
        setCalculatedItem(null);
        
        if(isDebug)
            console.log("onClickClear: End");
        
    }

    function printData(event)
    {
        var divToPrint=document.getElementsByName("datatable-pricetool")[0];
        var newWin= window.open("");
        newWin.document.write(divToPrint.outerHTML);
        newWin.print();
        newWin.close();
    }

    function PrintTable(event) {
        //var printWindow = window.open('', '', 'height=200,width=400');
        var printWindow = window.open('');
        //printWindow.document.write('<html><head><title>Pricing Tool FY22 - Existing Account</title>');
        printWindow.document.write('<html><head><title></title>');
        /*
        //Print the Table CSS.
        var table_style = document.getElementsByName("datatable-pricetool")[0].innerHTML;
        printWindow.document.write('<style type = "text/css">');
        printWindow.document.write(table_style);
        printWindow.document.write('</style>');
        printWindow.document.write('</head>');
        */
        //Print the DIV contents i.e. the HTML Table.
        printWindow.document.write('<body>');
        printWindow.document.write('<div><h3 style="text-align:center">Pricing Tool FY22 - NEW Account</h3></div>')
        //var divContents = document.getElementById("dvContents").innerHTML;
        var divContents = document.getElementsByName("datatable-pricetool")[0];
        printWindow.document.write(divContents.outerHTML);
        printWindow.document.write('</body>');
 
        printWindow.document.write('</html>');
        printWindow.document.close();
        printWindow.print();
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
    
          setMasterData(JSON.parse(JSON.stringify(masterDataDict)));
          setItemsList(JSON.parse(JSON.stringify(masterDataDict["items"])));
          setCoffeeEquipProgList(JSON.parse(JSON.stringify(masterDataDict["coffeeEquipChg"])));
    
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
    
    
        if(isDebug)
          console.log("handleMasterDataFailure: End");
        
      }
    
      function execMasterDataRequest(postData) {
    
        if(isDebug)
          console.log("execMasterDataRequest: Begin");
    
        let url = `${baseUrl}/api/newaccountpt/getNewAccountPTMaster`;
        
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
                        
          //  let strData =JSON.stringify(data);           
            let jsonResult= JSON.parse(data);            
            console.log("JSON RESULT: "+jsonResult);
            
            //let jsonResult= JSON.parse(data);
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

    function onChangeItemNo(value) {
        if(isDebug)
            console.log("onChangeItemNo: Begin - itemNumber: " + value);
        
        if(value !== null && value.trim().length > 0 && value !== "Select ItemNumber"){
            setItemNo(value);
        }
        else{
            setItemNo("");
            return;
        }

        //get item details
        let itemDetails = itemsList.find((element, index) => {
            if (parseInt(element[dataColumnMapping.ItemNumber]) === parseInt(value))
                return (true);
        });

        if (itemDetails) {
            setSelectedItem(JSON.parse(JSON.stringify(itemDetails)));
            //fbFloorPrice in string with 2 decimals
            let fbFloorPrice = parseFloat("" + itemDetails[dataColumnMapping.FBFLOOR]).toFixed(2);
            let indicatedPL = "L00";
            //let pg = itemDetails[dataColumnMapping.priceGroup];
            let calcItem = {
                "AcctName": acctName,
                "ItemNumber": value,
                "Description": itemDetails[dataColumnMapping.Description],
                "PriceGroup": itemDetails[dataColumnMapping.PriceGroup],
                "CatCode": itemDetails[dataColumnMapping.CatCode],
                "UOM": itemDetails[dataColumnMapping.UOM],
                "TargetPrice": "",
                "CoffeeEquipProg": "",
                "CoffeeEquipChg": "",
                "IndicatedPriceLevel": indicatedPL,
                "InvoicePrice": "$" + fbFloorPrice,
                "FBFLOOR": fbFloorPrice
            };
            
            setSelectedItem(JSON.parse(JSON.stringify(calcItem)));
            setCalculatedItem(JSON.parse(JSON.stringify(calcItem)));

            setInnerHTML("itemNoLbl", "Item #<code>*</code>");
            setDescription(calcItem.Description);
            setPriceGroup(calcItem.PriceGroup);
            setCatCode(calcItem.CatCode);
            setPriceUoM(calcItem.UOM);
            setCoffeeEquipProg("");
            setCoffeeEquipChg("");
            setTargetPrice("");
            setIndicatedPriceLevel(indicatedPL);
            setInvoicePrice("$" + fbFloorPrice);

            if (calcItem.PriceGroup.trim() === "RNG")
              setIsCoffeeCategory(true);
            else
              setIsCoffeeCategory(false);

            if (isDebug) {
              console.log("onChangeItemNo: calculatedItem - ");
              console.log(calcItem);
            }
        }
        else { //item not found
            setDescription("");
            setPriceGroup("");
            setCatCode("");
            setPriceUoM("");
            setCoffeeEquipProg("");
            setCoffeeEquipChg("");
            setTargetPrice("");
            setIndicatedPriceLevel("");
            setInvoicePrice("");
            setCalculatedItem(null);
            setSelectedItem(null);
        }


        if(isDebug)
            console.log("onChangeItemNo: End - itemNumber: " + value);
    }

    function onChangeCoffeeEquipProg(event) {
        if(isDebug){
            console.log("onChangeCoffeeEquipProg: Begin - value: " + event.target.value);
            //console.log(event.target.value);
        }

        if (event.target.value !== null && event.target.value.trim().length > 0 && event.target.value !== "Select") {

            setCoffeeEquipProg(event.target.value);

            //set coffee equip charge
            let coffeeEquipProgDetails = coffeeEquipProgList.find((element, index) => {
              if (element["Code"] === event.target.value)
                return (true);
              else
                return (false);
            });

            if (coffeeEquipProgDetails) {
                setCoffeeEquipChg("$" + parseFloat(coffeeEquipProgDetails["PerLb"]).toFixed(2));
            }
            else
              setCoffeeEquipChg("$0.00");
        }

        if(isDebug){
            console.log("onChangeCoffeeEquipProg: End");
        }
    }

  function onChangeTargetPrice(value) {
    
    if(isDebug)
      console.log("onChangeTargetPrice: Begin - value: " + value);

    if (value !== null && value.trim().length > 0) {
      setTargetPrice(value);
      if (selectedItem) {

        let calcItem = JSON.parse(JSON.stringify(selectedItem));
        if (isDebug) {
          console.log("onChangeTargetPrice: Begin - value: " + value);
        }
        let tPrice = parseFloat(value);
        let fbFloor = parseFloat(calcItem.FBFLOOR);
        let equipCharge = 0.00;
        let indicatedPLevel = 0;
        let invPrice = 0.00;

        //calculate indicated 
        //((@(Target Price-Coffee Equipment Charge))/(Floor Price)-1 ) ÷0.05 
        if (coffeeEquipProg != null && coffeeEquipProg.trim().length > 0 && coffeeEquipChg != null && coffeeEquipChg.trim().length > 0) {
          equipCharge = parseFloat(coffeeEquipChg.replace("$",""));
        }

        if (isDebug) {
          console.log("onChangeTargetPrice: calcItem - ");
          console.log(calcItem);
          console.log("onChangeTargetPrice: target price - " + tPrice);
          console.log("onChangeTargetPrice: fb floor price - " + fbFloor);
          console.log("onChangeTargetPrice: coffee equipment charge - " + equipCharge);
        }

        indicatedPLevel = Math.ceil((((tPrice - equipCharge) / fbFloor) - 1) / 0.05);

        //calculate invoice price
        //Floor Price * (1 + (0.05 * Level)) + Coffee Equipment Charge

        invPrice = (fbFloor * (1 + (0.05 * indicatedPLevel))) + equipCharge;

        if (isDebug) {
          console.log("onChangeTargetPrice: indicated Price Level - " + indicatedPLevel);
          console.log("onChangeTargetPrice: invoice Price - " + invPrice);
        }

        if(coffeeEquipProg && coffeeEquipProg.length > 0)
          calcItem.CoffeeEquipProg = coffeeEquipProg;
        else
          calcItem.CoffeeEquipProg = "";
        if(coffeeEquipChg && coffeeEquipChg.length>0)
          calcItem.CoffeeEquipChg = "$" + equipCharge.toFixed(2);
        else
          calcItem.CoffeeEquipChg = "";
        
        calcItem.InvoicePrice = "$" + invPrice.toFixed(2);
        calcItem.TargetPrice = "$" + tPrice.toFixed(2);
        if (indicatedPLevel >= 0 && indicatedPLevel < 10) {
          calcItem.IndicatedPriceLevel = "L0" + indicatedPLevel;
        }
        else if (indicatedPLevel > 9) {
          calcItem.IndicatedPriceLevel = "L" + indicatedPLevel;
        }

        setCalculatedItem(calcItem);
        setIndicatedPriceLevel(calcItem.IndicatedPriceLevel);
        setInvoicePrice("$" + invPrice.toFixed(2));

        if (isDebug) {
          console.log("onChangeTargetPrice: indicated Price Level - " + indicatedPLevel);
          console.log("onChangeTargetPrice: invoice Price - " + invPrice);
          console.log("onChangeTargetPrice: calculated Item - ");
          console.log(calcItem);
        }
        
      }

    }

    if(isDebug)
      console.log("onChangeTargetPrice: End");

  }
    
return(
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

                if(location.pathname.search("newaccountpt") > -1){
                    return(null);
                }
                else{
                    return("Are you sure, you want leave current page?");
                }
            
            }}
        />

        <div className="page-content">
            <Container fluid={true}>
                <Breadcrumbs title="PRICING TOOLS" breadcrumbItem="New Account Pricing Tool" />
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
                                ) : null}

                                <h4 className="card-title mb-4">New Account Pricing Tool</h4>
                <AvForm className="needs-validation" onInvalidSubmit={handleValidationFailed} onValidSubmit={handleItemCalculationSubmit} ref={c => { calculateItemForm = c }}>
                                    
                                    <Row>
                                        <Col lg={6}>
                                            <FormGroup className="mb-3">
                                                <Label htmlFor="acctName" className="form-label">Account Name<code>*</code></Label>
                                                <div className="col-md-10">
                                                    <AvField 
                                                        name="acctName"
                                                        className="form-control"
                                                        id="acctName"
                                                        errorMessage="Enter Account Name"
                                                        validate={{ required: { value: true } }} 
                                                        value={acctName} 
                                                        onChange={e => {setAcctName(e.target.value)}}
                                                    >
                                                    </AvField>
                                                </div>
                                            </FormGroup>  
                                        </Col>
                                    </Row>

                                  <Row>
                    
                                      <div className="col-lg-3">
                                        
                                        <FormGroup className="mb-3">
                                          <label htmlFor="itemNo" id="itemNoLbl">Item #<code>*</code></label>
                                          <div className="input-group">
                                              <div className="input-group-text"><i className={"uil-search"}></i></div>
                                              <AvInput
                                                ref={c => { itemNoWidget = c }}
                                                placeholder="Type to search..."
                                                name="itemNo"
                                                className="form-control"
                                                id="itemNo"
                                                errorMessage="Enter Item Number"
                                                validate={{ required: { value: false } }} 
                                                value={itemNo} 
                                                onChange={e => {
                                                    onChangeItemNo(e.target.value);
                                                    setInnerHTML("itemNoLbl", "Item #<code>*</code>");
                                                }}
                                                list="itemNumberList"
                                                >
                                              </AvInput>
                                              <datalist
                                                id="itemNumberList"
                                                >
                                                {itemsList.map((element) => 
                                                <option key={element[dataColumnMapping.ItemNumber]+"#"+element[dataColumnMapping.FBFLOOR]} value={element[dataColumnMapping.ItemNumber]}>{element[dataColumnMapping.ItemNumber] + " | " + element[dataColumnMapping.Description]}</option>
                                                )} 
                                                </datalist>
                                              </div>
                                        </FormGroup>    
                                        </div>
                                                
                                      <div className="col-lg-3">
                                        <div className="mb-3">
                                            <label htmlFor="targetPrice">Target Price<code>*</code></label>
                                            <AvField
                                            name="targetPrice"
                                            type="number"
                                            errorMessage="Enter Target Price"
                                            className="form-control"
                                            validate={{ required: { value: (description.length > 0) ? true : false } }}
                                            id="targetPrice"
                                            value={targetPrice}
                                            onBlur={e => { onChangeTargetPrice(e.target.value) }}
                                            disabled={description.length > 0?false:true}
                                            />
                                        </div>
                                      </div>
                    
                                      <div className="col-lg-3">
                                        <div className="mb-3">
                                            <Label htmlFor="coffeeEquipProg">Coffee Equip Prog.<code>*</code></Label>
                                            <AvField 
                                            id="coffeeEquipProg"
                                            type="select"  
                                            name="coffeeEquipProg"
                                            className="form-control"
                                            errorMessage="Select Coffee Equip Prog." 
                                            validate={{ required: { value: (isCoffeeCategory===true)?true:false}}}
                                            value={coffeeEquipProg} 
                                            onChange={e => { onChangeCoffeeEquipProg(e)}}
                                            disabled={(isCoffeeCategory===true)?false:true}       
                                                >
                                            <option key="" value="">Select</option>
                                            {coffeeEquipProgList.map((element, index) => 
                                            <option key={element["Code"]} value={element["Code"]}>{element["Code"]}</option>
                                            )}
                                            </AvField>
                                        </div>
                                    </div>
                                        
                                    <div className="col-lg-3">
                                        <div className="mb-3">
                                            <label htmlFor="coffeeEquipChg">Coffee Equip Chg.<code>*</code></label>
                                            <AvField
                                            readOnly={true}
                                            name="coffeeEquipChg"
                                            type="text"
                                            errorMessage="Enter Coffee Equip Chg."
                                            className="form-control"
                                            validate={{ required: { value: false } }}
                                            id="coffeeEquipChg"
                                            value={coffeeEquipChg}
                                            onChange={e => { setCoffeeEquipChg(e.target.value);}}
                                            />
                                        </div>
                                    </div>

                                  </Row>
                  
                                  <Row>
                                    <div className="col-lg-3">
                                        <div className="mb-3">
                                            <label htmlFor="description">Description</label>
                                            <Input        
                                            readOnly={true}        
                                            name="description"
                                            type="text"
                                            className="form-control"
                                            validate={{ required: { value: false } }}
                                            id="description"
                                            value={description}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-3">
                                        <div className="mb-3">
                                            <label htmlFor="priceGroup">Pricing Group</label>
                                            <Input        
                                            readOnly={true}        
                                            name="priceGroup"
                                            type="text"
                                            className="form-control"
                                            validate={{ required: { value: false } }}
                                            id="priceGroup"
                                            value={priceGroup}
                                            />
                                        </div>
                                    </div>    

                                    <div className="col-lg-3">
                                        <div className="mb-3">
                                            <label htmlFor="catCode">Cat Code #</label>
                                            <Input        
                                            readOnly={true}        
                                            name="catCode"
                                            type="text"
                                            className="form-control"
                                            validate={{ required: { value: false } }}
                                            id="catCode"
                                            value={catCode}
                                            />
                                        </div>
                                    </div>
                                        
                                    <div className="col-lg-3">
                                        <div className="mb-3">
                                            <label htmlFor="priceUoM">Pricing UoM</label>
                                            <Input        
                                            readOnly={true}        
                                            name="priceUoM"
                                            type="text"
                                            className="form-control"
                                            validate={{ required: { value: false } }}
                                            id="priceUoM"
                                            value={priceUoM}
                                            />
                                        </div>
                                    </div>
                                    </Row>

                                    <Row>
                                    <div className="col-lg-3">
                                        <div className="mb-3">
                                            <label htmlFor="indicatedPriceLevel">Indicated Pricing Level</label>
                                            <Input        
                                            readOnly={true}        
                                            name="indicatedPriceLevel"
                                            type="text"
                                            className="form-control"
                                            validate={{ required: { value: false } }}
                                            id="indicatedPriceLevel"
                                            value={indicatedPriceLevel}
                                            />
                                        </div>
                                    </div>
                                        
                                    <div className="col-lg-3">
                                        <div className="mb-3">
                                            <label htmlFor="indicatedPriceLevel">Invoice Price</label>
                                            <Input        
                                            readOnly={true}        
                                            name="invoicePrice"
                                            type="text"
                                            className="form-control"
                                            validate={{ required: { value: false } }}
                                            id="invoicePrice"
                                            value={invoicePrice}
                                            />
                                        </div>
                                    </div>
                  
                                    </Row>

                                    <Row><br/></Row>

                                    <Row>
                                      <div className="col-lg-6 align-self-center">
                                        <button disabled={calculatedItem?false:true} type="submit" value="Add" className="btn btn-success waves-effect waves-light">
                                            <i className="uil uil-check me-2"></i>ADD
                                        </button>&nbsp;&nbsp;
                                        <button
                                            type="button"
                                                className="btn btn-primary waves-effect waves-light"
                                            onClick={e=>onClickClear()}
                                            >
                                            CLEAR
                                        </button>    
                                    </div>
                                    </Row>
                                    <Row><br/></Row>
                  </AvForm>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row>
            <Col className="col-sm-12">
              <Card>
                <CardBody>
                  <CardTitle className="mb-4"> </CardTitle>
                  <CardSubtitle className="mb-3">         
                  <div className="col-12">
                    <button 
                      type="button" 
                      className="btn btn-secondary"
                      disabled={tableData.rows.length>0?false:true}
                      onClick={exportToExcel}
                    >Export To EXCEL
                    </button>&nbsp;&nbsp;
                    <button
                    onClick={e => PrintTable(e)}
                    type="button"
                    disabled={tableData.rows.length>0?false:true}
                    className="btn btn-primary waves-effect waves-light">
                        PRINT <i className="bx bx-printer"></i> 
                    </button>                     
                </div>
                </CardSubtitle>
                  
                  {/*}              
                  <div>  
                        <ReactHTMLTableToExcel  
                                className="btn btn-info"  
                                table="datatable-pricetool"  
                                filename="PricingTool"  
                                sheet="Sheet"  
                                buttonText="Export excel" />  
                                </div>
                */}
                <Row>
                  <MDBDataTable
                    name="datatable-pricetool"
                    ref={c=>{mdbDTWidget=c}}                
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
                </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
            </Container>
        </div>

    </React.Fragment>
    )
}

export default NewAccountPricingTool