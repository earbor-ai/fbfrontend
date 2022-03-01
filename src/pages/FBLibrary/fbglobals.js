/*

    Global variables
    Common functions
    Common Components

*/
import { 
    MDBDataTable, 
   } from "mdbreact"

export const baseUrl = 'https://fbnarf.mktalt.com/pub';
//export const baseUrl = 'http://localhost:19391';
//export const baseUrl = 'http://courage.co.in/testrestapi/index.php';

export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

export const coffEquipProgList = {
  "Select": "",
  "B": "0.00",
  "A": "0.15",
  "E": "0.30",
  "F": "0.45",
  "G": "0.60",
  "H": "0.75",
  "J": "0.90",
  "M": "1.10",
  "N": "1.35",
  "O": "1.60"
};

export const NAPTtableDataColumns = [ //New Account Pricing Tool table data columns
  {
      label: "Acct Name",
      field: "AcctName",
      sort: "disabled",
  },
  {
      label: "Item #",
      field: "ItemNumber",
      sort: "disabled",
  },
  {
      label: "Description",
      field: "Description",
      sort: "disabled",
  },
  {
      label: "Pricing Group",
      field: "PriceGroup",
      sort: "disabled",
  },
  {
      label: "Cat Code #",
      field: "CatCode",
      sort: "disabled",
  },
  {
      label: "Pricing UoM",
      field: "UOM",
      sort: "disabled",
  },
  {
      label: "Target Price",
      field: "TargetPrice",
      sort: "disabled",
  },
  {
      label: "Coff Equip Prog",
      field: "CoffeeEquipProg",
      sort: "disabled",
  },
  {
      label: "Coff Equip Chg",
      field: "CoffeeEquipChg",
      sort: "disabled",
  },
  {
      label: "Indicated Pricing Level",
      field: "IndicatedPriceLevel",
      sort: "disabled",
  },
  {
      label: "Invoice Price",
      field: "InvoicePrice",
      sort: "disabled",
  },
];

export const usStates= [
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

export const getCurrDateYYYYMMDD = () =>{
  var cdate = new Date();
  var tmonth = cdate.getMonth()+1; // 1-12
  var tdate = cdate.getDate(); //1-31
  var cDateStr = ""; //yyyy-mm-dd
  cDateStr = cDateStr + cdate.getFullYear();
  cDateStr = cDateStr + "-" + (tmonth<10?"0"+tmonth:""+tmonth);
  cDateStr = cDateStr + "-" + (tdate<10?"0"+tdate:""+tdate);

  return(cDateStr) //returns date string in yyyy-mm-dd
}

export const getCurrDateYYYYMM = () =>{

  var cDateStr = getCurrDateYYYYMMDD();
  var rDateStr = cDateStr.split("-")[0] + "-" + cDateStr.split("-")[1];
  return(rDateStr) //returns date string in yyyy-mm
}

export const hideAnElement = (eleId) => {
  var x = document.getElementById(eleId);
  x.style.display = "none";
}

export const showAnElement = (eleId) => {
  var x = document.getElementById(eleId);
  x.style.display = "block";
}

export const setInnerHTML = (eleId, txt) => {
  var x = document.getElementById(eleId);
  x.innerHTML = txt;
}

export const setFocusOnElement = (eleId) => {
  var x = document.getElementById(eleId);
  if(x){
    x.focus();
  }
}

export const NewMDBDataTable = (props) =>{
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
