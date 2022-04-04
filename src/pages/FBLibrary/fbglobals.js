/*

    Global variables
    Common functions
    Common Components

*/

import { 
    MDBDataTable, 
   } from "mdbreact"

//export const baseUrl = 'https://fbnarf.mktalt.com/pub';
export const baseUrl = 'http://localhost:19391';
//export const baseUrl = "http://courage.co.in/testrestapi/index.php"

export const isDebug = true;

export const usZipCodeMinLen = 5;

export function getCurrDateYYYYMMDDwithSep(separator) {
  /*
  e.g. separator = "-"
  returns current date in yyyy-mm-dd
  */
  if (!separator) //undefined
    separator = "-";
  
  var cdate = new Date();
  var tmonth = cdate.getMonth()+1; // 1-12
  var tdate = cdate.getDate(); //1-31
  var cDateStr = ""; //yyyy-mm-dd
  cDateStr = cDateStr + cdate.getFullYear();
  cDateStr = cDateStr + separator + (tmonth<10?"0"+tmonth:""+tmonth);
  cDateStr = cDateStr + separator + (tdate<10?"0"+tdate:""+tdate);

  return(cDateStr) //returns date string in yyyy-mm-dd
}

export function getCurrDateMMDDYYYYwithSep(separator) {
  /*
  e.g. separator = "-"
  returns current date in mm-dd-yyyy
  */
  if (!separator) //undefined
    separator = "-";
  
  var cdate = new Date();
  var tmonth = cdate.getMonth()+1; // 1-12
  var tdate = cdate.getDate(); //1-31
  var cDateStr = ""; //mm-dd-yyyy
  
  cDateStr = cDateStr + (tmonth<10?"0"+tmonth:""+tmonth);
  cDateStr = cDateStr + separator + (tdate<10?"0"+tdate:""+tdate);
  cDateStr = cDateStr + separator + cdate.getFullYear();

  return(cDateStr) //returns date string in mm-dd-yyyy
}


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

export const clients = [
  {
    "AccountNo": "1000043",
    "Name": "ONE STOP MARKET"
  },
  {
    "AccountNo": "1000046",
    "Name": "FLORY INDUSTRIES"
  },
  {
    "AccountNo": "1000058",
    "Name": "YOSEMITE LIQUOR"
  },
  {
    "AccountNo": "1000064",
    "Name": "EASTERN PLUMAS LOYALTON HOSPITAL"
  },
  {
    "AccountNo": "1000066",
    "Name": "GARDNERVILLE HEALTH AND REHAB CENTER"
  },
  {
    "AccountNo": "1000068",
    "Name": "COMSTOCK CASINO"
  },
  {
    "AccountNo": "1000136",
    "Name": "YONGS DONUTS"
  },
  {
    "AccountNo": "1000161",
    "Name": "SHARON CARE CENTER"
  },
  {
    "AccountNo": "1000164",
    "Name": "PIONEER PLACE"
  },
  {
    "AccountNo": "1000208",
    "Name": "SANTA FE BAKERY"
  },
  {
    "AccountNo": "1000230",
    "Name": "UNIVERSITY OF ARKANSAS ELLAS"
  },
  {
    "AccountNo": "1000372",
    "Name": "ELKS #2106 RUPERT"
  },
  {
    "AccountNo": "1000547",
    "Name": "PIZZA VENDOR"
  },
  {
    "AccountNo": "1000851",
    "Name": "IRMA HOTEL"
  },
  {
    "AccountNo": "1001016",
    "Name": "JUICYS"
  },
  {
    "AccountNo": "1001180",
    "Name": "GOLDEN EAGLE"
  },
  {
    "AccountNo": "1001784",
    "Name": "DEPT OF CORRECTION CANTEEN"
  },
  {
    "AccountNo": "1001941",
    "Name": "HARRYS HOFBRAU R C"
  },
  {
    "AccountNo": "1001974",
    "Name": "TOMS FAMOUS"
  },
  {
    "AccountNo": "1002204",
    "Name": "MASON JAR 1"
  },
  {
    "AccountNo": "1002618",
    "Name": "SHANGHAI CAFE"
  },
  {
    "AccountNo": "1002626",
    "Name": "STAR BAR"
  },
  {
    "AccountNo": "1003145",
    "Name": "KING DONUTS"
  },
  {
    "AccountNo": "1003152",
    "Name": "SWING INN CAFE"
  },
  {
    "AccountNo": "1003426",
    "Name": "MOOSE CHUCK WAGON"
  },
  {
    "AccountNo": "1003467",
    "Name": "MOOSE HEAD RANCH"
  },
  {
    "AccountNo": "1003632",
    "Name": "WALNUT CITY LANES 1974"
  },
  {
    "AccountNo": "1003723",
    "Name": "YANNIS"
  },
  {
    "AccountNo": "1003988",
    "Name": "FIRST UNITED METHODIST CHURCH"
  },
  {
    "AccountNo": "1004291",
    "Name": "EL TORO LAKEWOOD"
  },
  {
    "AccountNo": "1004366",
    "Name": "EL SOMBRERO,INC."
  },
  {
    "AccountNo": "1004689",
    "Name": "LA FOGATA"
  },
  {
    "AccountNo": "1004697",
    "Name": "EXPRESS DONUTS"
  },
  {
    "AccountNo": "1004713",
    "Name": "DONUT HOUSE CALIMESA"
  },
  {
    "AccountNo": "1005157",
    "Name": "INYO COUNTY JAIL"
  },
  {
    "AccountNo": "1005363",
    "Name": "FOSTER FARMS ADMINSTRATION"
  },
  {
    "AccountNo": "1005470",
    "Name": "TONOPAH CONVENTION CENTER"
  },
  {
    "AccountNo": "1005546",
    "Name": "FRANK THE PIZZA KING"
  },
  {
    "AccountNo": "1005694",
    "Name": "TWIN FALLS REFORMED CHURCH"
  },
  {
    "AccountNo": "1005702",
    "Name": "CLEAR LAKES COUNTRY CLUB"
  },
  {
    "AccountNo": "1005744",
    "Name": "TWO GUYS FROM ITALY DALLAS"
  },
  {
    "AccountNo": "1005835",
    "Name": "JOLLY DONUTS-TOPANGA"
  },
  {
    "AccountNo": "1005868",
    "Name": "WILLIAMS CROISSANTS MUFFINS"
  },
  {
    "AccountNo": "1006023",
    "Name": "CAMPUS U TOTE EM"
  },
  {
    "AccountNo": "1006064",
    "Name": "NICELY'S RESTAURANT"
  },
  {
    "AccountNo": "1006353",
    "Name": "BODIE MIKE'S"
  },
  {
    "AccountNo": "1006478",
    "Name": "CHARLIES CAFE"
  },
  {
    "AccountNo": "1006643",
    "Name": "BROADWAY DONUTS"
  },
  {
    "AccountNo": "1006676",
    "Name": "MAZATLAN CEDAR MILL"
  },
  {
    "AccountNo": "1006700",
    "Name": "JUVENILE HALL"
  },
  {
    "AccountNo": "1007641",
    "Name": "DICICCOS BLACKSTONE/DIVISADERO"
  }
]

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

export const NARFsearchTableDataColumns = [ //NARF SEARCH table data columns
  {
      label: "Name",
      field: "AcctName",
      sort: "disabled",
  },
  {
      label: "Address",
      field: "Address",
      sort: "disabled",
  },
  {
      label: "NARF Status",
      field: "NARFStatus",
      sort: "disabled",
  },
  {
      label: "FB1 Status",
      field: "FB1Status",
      sort: "disabled",
  },
  /*
  {
      label: "Action",
      field: "action",
      sort: "disabled",
  },*/
];

export const NARFPurposeList = [
  { code: "New Account", desc: "New customer account" },
  { code: "Rewrite", desc: "Same owner rewrite due to inactivity" },
  { code: "Owner Change", desc: "New account due to ownership change" },
  { code: "Existing Account Maintenance", desc: "Update to an existing customer account" },
  { code: "Existing Account Pricing", desc: "Pricing request for existing account" },
];

export const NARFsearchDummyRecords = [
  { "AcctName": "Eastside Cafe", "Address": "120 S Ozark St., Girard, KS 66743", "NARFStatus": "Open - 2/3/2022", "FB1Status": "Completed - 2/9/2022" },
  { "AcctName": "Medina's", "Address": "302 W St. John St., Girard, KS 66743", "NARFStatus": "Completed - 1/21/2022", "FB1Status": "Completed - 2/9/2022" },
  { "AcctName": "Sassy's BBQ & Burgers Restaurant","Address": "2103 S Main St suite A, Elk City, OK 73644", "NARFStatus": "Open - 2/3/2022", "FB1Status": "Completed - 2/9/2022" },
  { "AcctName": "Western View Steakhouse", "Address": "6411 Central Ave. Abq. N.M. 87105, Albuquerque, NM 87105", "NARFStatus": "Open - 2/3/2022", "FB1Status": "Open - 2/9/2022" },
  { "AcctName": "Athena grill", "Address": "120 S Ozark St., Girard, KS 66743", "NARFStatus": "Open - 2/6/2022", "FB1Status": "" },
]

export const NARFOperatingUnitList = [
  { code: "", desc: "Select Operating Units"},
  { code: "RDS", desc: "FB RDS CS Direct Ship" },
  { code: "NTL", desc: "NTL CS Direct Ship" },
  { code: "DSD", desc: "DSD High Jump" },
];

export const NARFRouteList = [
  {code:"1001", desc:"", branch:"139", district:"F16", region:"F00"},
  {code:"1004", desc:"", branch:"117", district:"F04", region:"F00"},
  {code:"1006", desc:"", branch:"139", district:"F16", region:"F00"},
  {code:"1009", desc:"", branch:"2", district:"F01", region:"F00"},
  {code:"1010", desc:"", branch:"2", district:"F01", region:"F00"},
  {code:"1011", desc:"", branch:"2", district:"F01", region:"F00"},
  {code:"1012", desc:"", branch:"2", district:"F01", region:"F00"},
  {code:"1013", desc:"", branch:"2", district:"F01", region:"F00"},
  {code:"1014", desc:"", branch:"2", district:"F01", region:"F00"},
  {code:"1015", desc:"", branch:"2", district:"F01", region:"F00"},
  {code:"1016", desc:"", branch:"11", district:"H01", region:"H00"},
  {code:"1017", desc:"", branch:"11", district:"H01", region:"H00"},
  {code:"1019", desc:"", branch:"11", district:"H01", region:"H00"},
  {code:"1020", desc:"", branch:"11", district:"H01", region:"H00"},
  {code:"1021", desc:"", branch:"20", district:"F05", region:"F00"},
  {code:"1022", desc:"", branch:"20", district:"F05", region:"F00"},
  {code:"1023", desc:"", branch:"20", district:"F05", region:"F00"},
  {code:"1024", desc:"", branch:"20", district:"F05", region:"F00"},
  {code:"1025", desc:"", branch:"20", district:"F05", region:"F00"},
  {code:"1026", desc:"", branch:"117", district:"F04", region:"F00"},
  {code:"1027", desc:"", branch:"20", district:"F05", region:"F00"},
  {code:"1028", desc:"", branch:"24", district:"F03", region:"F00"},
  {code:"1029", desc:"", branch:"24", district:"F03", region:"F00"},
  {code:"1030", desc:"", branch:"24", district:"F03", region:"F00"},
  {code:"1031", desc:"", branch:"24", district:"F03", region:"F00"},
  {code:"1032", desc:"", branch:"24", district:"F03", region:"F00"},
  {code:"1046", desc:"", branch:"20", district:"F05", region:"F00"},
  {code:"1047", desc:"", branch:"20", district:"F05", region:"F00"},
  {code:"1048", desc:"", branch:"29", district:"F05", region:"F00"},
  {code:"1049", desc:"", branch:"20", district:"F05", region:"F00"},
  {code:"1050", desc:"", branch:"20", district:"F05", region:"F00"},
  {code:"1052", desc:"", branch:"31", district:"H01", region:"H00"},
  {code:"1053", desc:"", branch:"17", district:"H04", region:"H00"},
  {code:"1054", desc:"", branch:"17", district:"H04", region:"H00"},
  {code:"1055", desc:"", branch:"38", district:"F02", region:"F00"},
  {code:"1056", desc:"", branch:"38", district:"F02", region:"F00"},
  {code:"1057", desc:"", branch:"38", district:"F02", region:"F00"},
  {code:"1058", desc:"", branch:"38", district:"F02", region:"F00"},
  {code:"1060", desc:"", branch:"38", district:"F02", region:"F00"},
  {code:"1061", desc:"", branch:"38", district:"F02", region:"F00"},
  {code:"1062", desc:"", branch:"54", district:"F03", region:"F00"},
  {code:"1063", desc:"", branch:"54", district:"F03", region:"F00"},
  {code:"1064", desc:"", branch:"54", district:"F03", region:"F00"},
  {code:"1065", desc:"", branch:"67", district:"F06", region:"F00"},
  {code:"1066", desc:"", branch:"67", district:"F06", region:"F00"},
  {code:"1067", desc:"", branch:"67", district:"F06", region:"F00"},
  {code:"1068", desc:"", branch:"67", district:"F06", region:"F00"},
  {code:"1069", desc:"", branch:"67", district:"F06", region:"F00"},
  {code:"1070", desc:"", branch:"106", district:"F01", region:"F00"},
  {code:"1071", desc:"", branch:"2", district:"F01", region:"F00"},
  {code:"1072", desc:"", branch:"3", district:"F08", region:"F00"},
  {code:"1073", desc:"", branch:"3", district:"F08", region:"F00"},
  {code:"1074", desc:"", branch:"3", district:"F08", region:"F00"},
  {code:"1075", desc:"", branch:"3", district:"F08", region:"F00"},
  {code:"1076", desc:"", branch:"4", district:"H08", region:"H00"},
  {code:"1077", desc:"", branch:"4", district:"H08", region:"H00"},
  {code:"1078", desc:"", branch:"4", district:"H08", region:"H00"},
  {code:"1079", desc:"", branch:"4", district:"H08", region:"H00"},
  {code:"1080", desc:"", branch:"4", district:"H08", region:"H00"},
  {code:"1081", desc:"", branch:"4", district:"H08", region:"H00"},
  {code:"1082", desc:"", branch:"4", district:"H08", region:"H00"},
  {code:"1083", desc:"", branch:"4", district:"H08", region:"H00"},
  {code:"1084", desc:"", branch:"7", district:"H02", region:"H00"},
  {code:"1085", desc:"", branch:"7", district:"H02", region:"H00"},
  {code:"1086", desc:"", branch:"7", district:"H02", region:"H00"},
  {code:"1087", desc:"", branch:"7", district:"H02", region:"H00"},
  {code:"1089", desc:"", branch:"8", district:"H05", region:"H00"},
  {code:"1090", desc:"", branch:"8", district:"H05", region:"H00"},
  {code:"1091", desc:"", branch:"8", district:"H05", region:"H00"},
  {code:"1092", desc:"", branch:"8", district:"H05", region:"H00"},
  {code:"1093", desc:"", branch:"8", district:"H05", region:"H00"},
  {code:"1094", desc:"", branch:"8", district:"H05", region:"H00"},
  {code:"1096", desc:"", branch:"8", district:"H05", region:"H00"},
  {code:"1098", desc:"", branch:"8", district:"H05", region:"H00"},
  {code:"1099", desc:"", branch:"9", district:"H01", region:"H00"},
  {code:"1100", desc:"", branch:"9", district:"H01", region:"H00"},
  {code:"1101", desc:"", branch:"9", district:"H01", region:"H00"},
  {code:"1102", desc:"", branch:"9", district:"H01", region:"H00"},
  {code:"1103", desc:"", branch:"9", district:"H01", region:"H00"},
  {code:"1104", desc:"", branch:"9", district:"H01", region:"H00"},
  {code:"1105", desc:"", branch:"9", district:"H01", region:"H00"},
  {code:"1106", desc:"", branch:"10", district:"H05", region:"H00"},
  {code:"1107", desc:"", branch:"10", district:"H05", region:"H00"},
  {code:"1108", desc:"", branch:"10", district:"H05", region:"H00"},
  {code:"1109", desc:"", branch:"10", district:"H05", region:"H00"},
  {code:"1111", desc:"", branch:"10", district:"H05", region:"H00"},
  {code:"1112", desc:"", branch:"10", district:"H05", region:"H00"},
  {code:"1113", desc:"", branch:"13", district:"F11", region:"F00"},
  {code:"1114", desc:"", branch:"4", district:"H08", region:"H00"},
  {code:"1115", desc:"", branch:"4", district:"H08", region:"H00"},
  {code:"1116", desc:"", branch:"4", district:"H08", region:"H00"},
  {code:"1117", desc:"", branch:"14", district:"H03", region:"H00"},
  {code:"1118", desc:"", branch:"14", district:"H03", region:"H00"},
  {code:"1119", desc:"", branch:"14", district:"H03", region:"H00"},
  {code:"1120", desc:"", branch:"14", district:"H03", region:"H00"},
  {code:"1121", desc:"", branch:"14", district:"H03", region:"H00"},
  {code:"1122", desc:"", branch:"14", district:"H03", region:"H00"},
  {code:"1123", desc:"", branch:"15", district:"H02", region:"H00"},
  {code:"1124", desc:"", branch:"15", district:"H02", region:"H00"},
];

export const NARFBusinessUnitList = [
  { code:"5007", desc:"Public Domain", branch:"", region:"", district:""},
  { code:"6000", desc:"GIANT EAGLE", branch:"", region:"", district:""},
  { code:"6001", desc:"THE FRESH MARKET", branch:"", region:"", district:""},
  { code:"6002", desc:"DELHAISE INC CO", branch:"", region:"", district:""},
  { code:"6003", desc:"UN MOMENTO", branch:"", region:"", district:""},
  { code:"6004", desc:"WALMART", branch:"", region:"", district:""},
  { code:"6005", desc:"WAWA", branch:"", region:"", district:""},
  { code:"6006", desc:"McDONALDS", branch:"", region:"", district:""},
  { code:"6007", desc:"SHEETZ", branch:"", region:"", district:""},
  { code:"6008", desc:"WINN DIXIE", branch:"", region:"", district:""},
  { code:"6009", desc:"TOPCO", branch:"", region:"", district:""},
  { code:"6010", desc:"DUNKIN DONUTS", branch:"", region:"", district:""},
  { code:"6011", desc:"SUNOCO", branch:"", region:"", district:""},
  { code:"6012", desc:"BEAR CREEK", branch:"", region:"", district:""},
  { code:"6013", desc:"BIG APPLE BAGEL", branch:"", region:"", district:""},
  { code:"6014", desc:"Sturm/Treehouse Foods", branch:"", region:"", district:""},
  { code:"6015", desc:"WALGREENS", branch:"", region:"", district:""},
  { code:"6016", desc:"MACY'S", branch:"", region:"", district:""},
  { code:"6017", desc:"MRS FIELDS", branch:"", region:"", district:""},
  { code:"6018", desc:"NORDSTROM", branch:"", region:"", district:""},
  { code:"6019", desc:"ENRGI", branch:"", region:"", district:""},
  { code:"6020", desc:"WINCO FOODS", branch:"", region:"", district:""},
  { code:"6021", desc:"TARGET", branch:"", region:"", district:""},
  { code:"6022", desc:"JACKSON'S", branch:"", region:"", district:""},
  { code:"6023", desc:"COLLABORATIVE COFFE AND 1KL", branch:"", region:"", district:""},
  { code:"6024", desc:"NATIONAL - FOOD SERVICE", branch:"", region:"", district:""},
  { code:"6025", desc:"NATIONAL - CHAMELEON", branch:"", region:"", district:""},
  { code:"6026", desc:"NATIONAL - C- STORE", branch:"", region:"", district:""},
  { code:"6027", desc:"NATIONAL ACCOUNTS ADJ", branch:"", region:"", district:""},
  { code:"6028", desc:"SPROUTS", branch:"", region:"", district:""},
  { code:"6029", desc:"Oh Six Logistics", branch:"", region:"", district:""},
  { code:"6031", desc:"In N Out", branch:"", region:"", district:""},
  { code:"6033", desc:"STUMPTOWN", branch:"", region:"", district:""},
  { code:"6035", desc:"BIG LOTS", branch:"", region:"", district:""},
  { code:"6036", desc:"COSI INC", branch:"", region:"", district:""},
  { code:"6037", desc:"GROCERY OUTLET", branch:"", region:"", district:""},
  { code:"6038", desc:"CERTIFIED MGMT GROUP", branch:"", region:"", district:""},
  { code:"6041", desc:"La Colombe", branch:"", region:"", district:""},
  { code:"6042", desc:"AMAZON", branch:"", region:"", district:""},
  { code:"6043", desc:"Pod Pack", branch:"", region:"", district:""},
  { code:"6044", desc:"Pilot", branch:"", region:"", district:""},
  { code:"6045", desc:"AMPM", branch:"", region:"", district:""},
  { code:"6046", desc:"IHOP", branch:"", region:"", district:""},
  { code:"6047", desc:"Maverik", branch:"", region:"", district:""},
  { code:"6048", desc:"Aspen", branch:"", region:"", district:""},
  { code:"6049", desc:"Coremark", branch:"", region:"", district:""},
  { code:"6050", desc:"Seven Eleven", branch:"", region:"", district:""},
  { code:"6051", desc:"Aramark", branch:"", region:"", district:""},
  { code:"6300", desc:"SALES - COFFEE HOUSE", branch:"", region:"", district:""},
  { code:"6310", desc:"Grocery", branch:"", region:"", district:""},
  { code:"6320", desc:"C- Store", branch:"", region:"", district:""},
  { code:"6330", desc:"International Sales", branch:"", region:"", district:""},
  { code:"6340", desc:"Restaurant", branch:"", region:"", district:""},
  { code:"6350", desc:"Non- Comm", branch:"", region:"", district:""},
  { code:"6360", desc:"Hospitality", branch:"", region:"", district:""},
  { code:"7001", desc:"China Mist Selling", branch:"", region:"", district:""},
  { code:"7002", desc:"China Mist G&A", branch:"", region:"", district:""},
];

export const NARFSearchTypeList = [
  { code: "", desc: "Select Search Type" },
  { code: "CCP", desc: "OCF Parent (Office Coffee Service, formerly Custom Coffee Plan)" },
  { code: "CCS", desc: "OCF Ship-to (Office Coffee Service, formerly Custom Coffee Service)" },
  { code: "CE-1", desc: "Equip/Svc only, indirect product ship/bill-to CFS/CFD" },
  { code: "CE-2", desc: "Equip/Svc only, billed directly, no product" },
  { code: "CFD", desc: "RDS/house route direct ship UPS, orders managed by CS" },
  { code: "CFP", desc: "Parent, if DSD/FB/STR/RDS route delivered" },
  { code: "CFS", desc: "DSD/FB route delivered customer (ship-to), orders managed by RSR" },
  { code: "CNP", desc: "Parent, if National direct ship non-route account" },
  { code: "CNS", desc: "NTL ship-to customer, NO route, direct ship, non-UPS, orders managed by CS" },
  { code: "CF", desc: "If ship-to account is CFS or CFD" },
  { code: "CN", desc: "If ship-to account is CNS" },

];

export const NARFSearchTypeListRDS = [
  { code: "CFD", desc: "RDS/house route direct ship UPS, orders managed by CS" },
  { code: "CFP", desc: "Parent, if DSD/FB/STR/RDS route delivered" },
  { code: "CF", desc: "If ship-to account is CFS or CFD"},
  { code: "CE-1", desc: "Equip/Svc only, indirect product ship/bill-to CFS/CFD" },
];

export const NARFSearchTypeListNTL = [
  { code: "CNS", desc: "NTL ship-to customer, NO route, direct ship, non-UPS, orders managed by CS" },
  { code: "CNP", desc: "Parent, if National direct ship non-route account" },
  { code: "CN", desc: "If ship-to account is CNS" },
  { code: "CE-2", desc: "Equip/Svc only, billed directly, no product" },
];

export const NARFSearchTypeListDSD = [
  { code: "CFP", desc: "Parent, if DSD/FB/STR/RDS route delivered" },
  { code: "CFS", desc: "DSD/FB route delivered customer (ship-to), orders managed by RSR" },
  { code: "CF", desc: "If ship-to account is CFS or CFD" },
  { code: "CE-1", desc: "Equip/Svc only, indirect product ship/bill-to CFS/CFD" },

];

export const NARFBranchNoList = [
  { code: "", desc: "Select Branch" },
  { code: "HRT", desc: "HRT" },
  { code: "NTL", desc: "NTL" },
];

export const NARFDistrictNoList = [
  { code:"Q01", desc:"Oklahoma Natl House Route"},
  { code:"Q02", desc:"Northlake Ntl House Route"},
  { code:"Q03", desc:"Moonachie Natl House Route"},
  { code:"Q04", desc:"Torrance Natl House Route"},
  { code:"Q05", desc:"Houston Natl House Route"},
  { code:"Q06", desc:"PILOT HOUSE ROUTE"},
  { code:"Q99", desc:"Las Vegas House District (De-a"},
  { code:"T01", desc:"Strategic Accounts"},
  { code:"T02", desc:"Retail"},
  { code:"T03", desc:"Food Service"},
  { code:"T04", desc:"New Business"},
  { code:"T05", desc:"Grocery"},
  { code:"T06", desc:"C-Store"},
  { code:"T07", desc:"OCS"},
  { code:"T08", desc:"REGIONAL SALES"},
];

export const NARFRegionNoList = [
  { code: "", desc: "Select Region" },
  { code: "Q00", desc: "National House Route" },
  { code: "T00", desc: "National Accounts" },
];

export const NARFTaxGroupList = [
  { code: "C", desc: "Arizona Use Only - Cstore" },
  { code: "E", desc: "End User" },
  { code: "R", desc: "Resale/Restaurant" },
  { code: "U", desc: "Cash & Employee Sale" },
  { code: "X", desc: "Govt,NonProf,Schl,Retail,Distb" },
];

export const NARFManagedByList = [
  {code:"STR", desc:"Street Business"},
  {code:"K02", desc:"SCHREIBER-BDM-DSD-NORTH"},
  {code:"K04", desc:"EADY-BDM-DSD-SOUTH"},
  {code:"K10", desc:"PRILEY-BDM-DSD-NW"},
  {code:"K13", desc:"NEWTON-BDM"},
  {code:"K14", desc:"NAVARRO-BDM-DSD-SOUTH"},
  {code:"K17", desc:"LAMBERTI-BDM-DSD-WEST"},
  {code:"K18", desc:"SMIRIGLIO-BDM-DSD-WEST"},
  {code:"K19", desc:"VAN COTT-BDM-DSD-WEST"},
  {code:"K20", desc:"WILLS-BDM-DSD-NW"},
  {code:"K21", desc:"CARROLL-BDM-DSD-EAST"},
  {code:"K54", desc:"GRANLEY-BDM-DSD-NW"},
  {code:"K61", desc:"BOWEN-BDM-DSD-WEST"},
  {code:"N01", desc:"ALTILIO-NAM-GAMING/EAST"},
  {code:"N09", desc:"HSWE-DIR-RETAIL-DSH"},
  {code:"N14", desc:"BAIRD-VP/RBT"},
  {code:"N18", desc:"YOUNG-BDM-DSD-SOUTH"},
  {code:"N19", desc:"WAGNER-NAM"},
  {code:"N20", desc:"WILDERMUTH-NAM"},
  {code:"N22", desc:"BARDEN-NAM-DSD"},
  {code:"N23", desc:"BASSMAN-NAM"},
  {code:"N27", desc:"DERR-NAM-DIST"},
  {code:"S02", desc:"HERZOG-BDM-DSD-NORTH"},
  {code:"S08", desc:"FLORES-BDM-DSD-WEST"},
  {code:"S20", desc:"ARONSON-NAM-DSH"},
  {code:"T02", desc:"BUTTERFIELD-TSR-DSD-PHO"},
  {code:"T06", desc:"CENA-TSM-DSD-HOUSTON"},
  {code:"T07", desc:"FIELDS-TSM-DSD-HOUSTON"},
  {code:"U07", desc:"WARD-BDM-DSD-WEST"},
  {code:"U20", desc:"POTANIEC-BDM-DSD-EAST"},
  {code:"W30", desc:"SPENCER-DIR-GPO"},
  {code:"Y04", desc:"RUBIO-BDM-DSD-NW"},
  {code:"Y05", desc:"CARTER-DIR-DSD-DEV"},
  {code:"Y11", desc:"CAPONIGRI-BDM-DSD-MIDWEST"},
  {code:"Y12", desc:"GALICIA-BDM-DSD-SO CAL"},
  {code:"Y13", desc:"MCGEE-BDM-DSD-SOUTH"},
  {code:"Z08", desc:"BORUNDA-SA-DSD-LA"},
  {code:"Z12", desc:"TREVINO-SA-DSD-CASTROVILLE"},
  {code:"Z16", desc:"SANCHEZ-SA-DSD-SAN LUIS OB"},
  {code:"Z19", desc:"BLASCHKE-SA-DSD-RIALTO"},
  {code:"Z24", desc:"HANSON-SAII-DSD-DALLAS"},
  {code:"Z29", desc:"VARGAS-SA-DSD-PALM SPRINGS"},
  {code:"Z30", desc:"CATELLIER-SA-DSD-CRSN CITY"},
  {code:"Z31", desc:"BRENNAN-SA-DSD-KENT"},
  {code:"Z32", desc:"COLOVOS-SA-DSD-SACRAMENTO"},
  {code:"Z33", desc:"GONZALEZ-SA-DSD-DALLAS"},
  {code:"Z34", desc:"RUIZ-SA-DSD-HOUSTON"},
  {code:"Z35", desc:"PETERSON-SA-DSD-DENVER"},
  {code:"Z36", desc:"MORAITIS-SA-DSD-DETROIT"},
  {code:"Z37", desc:"ALVARADO-SA-DSD-SAN DIEGO"},
  {code:"Z38", desc:"BLACK-SA-DSD-NORTH REGION"},
  {code:"Z39", desc:"COLE-SA-DSD-CLEVELAND"},
  {code:"Z40", desc:"PACHECO-SA-DSD-MOONACHIE"},
  {code:"Z41", desc:"FOSS-SA-DSD-HAYWARD"},
  {code:"DGM", desc:"Digital Marketing"},
];

export const NARFCustomerSegmentList = [
  {code:"541", desc:"MINI MART, DELI, LIQUOR STORE"},
  {code:"546", desc:"DONUT, BAKERY, BAGEL SHOP"},
  {code:"549", desc:"FAST FOOD, OUTLET"},
  {code:"580", desc:"REST/CAFE/BUFFET-BRKFT-LCH-DNR"},
  {code:"581", desc:"REST/CAFE/BUFFET-LCH-DNR"},
  {code:"701", desc:"HOTEL/MOTEL REST OR BAR"},
  {code:"702", desc:"HOTEL/MOTEL LOBBY IN-ROOM"},
  {code:"730", desc:"OCD/VENDING"},
  {code:"735", desc:"IN PLANT FEEDER/COMMISARY"},
  {code:"738", desc:"OFFICE/COMMERCIAL BUSINESS"},
  {code:"790", desc:"GOLF/TENNIS CLUB/SKI LODGE"},
  {code:"794", desc:"STADIOMS/RACE TRACK/FAIRGRD"},
  {code:"799", desc:"CASINO/BINGO/CARD CLUBS"},
  {code:"800", desc:"HOSPITAL/CLINIC/MED CENTER"},
  {code:"820", desc:"SCHOOLS/COLLEGES"},
  {code:"920", desc:"PRISONS/COURT/POLICE/FIRE"},
  {code:"970", desc:"MILITARY/GOVT"},
  {code:"999", desc:"ROUTE CASH SALE/EMPLOYEE"},
  {code:"A1", desc:"REP./EQUIPMENT DUST-BW"},
  {code:"A2", desc:"DEALER (CARMALI)-BW"},
  {code:"A3", desc:"DEPENDABLE COFFEE & ASTRAL-BW"},
  {code:"A4", desc:"PARTS DISTRIBUTORS-BW"},
  {code:"A5", desc:"APFELL COFFEE & SERV U-BW"},
  {code:"A6", desc:"FIRST CHOICE & FOODCRAFT-BW"},
  {code:"A7", desc:"RESTAURANT DEALERS-BW"},
  {code:"A9", desc:"WATER INC.-BW"},
  {code:"B1", desc:"RESTAURANT DEALERS-BW"},
  {code:"B2", desc:"NOT ACTIVE-BW"},
  {code:"B4", desc:"OCS SPECIAL ACCOUNTS-BW"},
  {code:"B5", desc:"SERVICE AGENT-BW"},
  {code:"B7", desc:"GAVINA-BW"},
  {code:"B9", desc:"ROASTERS-BW"},
  {code:"C2", desc:"VARIOUS-BW"},
  {code:"C3", desc:"JIM DUKE-BW"},
  {code:"C4", desc:"ESPRESSO REPRESENTATIVE-BW"},
  {code:"C5", desc:"ESPRESSO DISTRIBUTOR-BW"},
  {code:"C6", desc:"COMMERCIAL COFFEE EQUIPMENT-"},
  {code:"C7", desc:"SERVICE CENTER-BW"},
  {code:"C9", desc:"TEXAS REFRESHMENTS-BW"},
  {code:"CBF", desc:"CAFETERIA STYLE OR BUFFET"},
  {code:"CCT", desc:"CATERER"},
  {code:"CF1", desc:"CASUAL LUNCH DINNER"},
  {code:"CF2", desc:"FAMILY 3 MEAL"},
  {code:"CF3", desc:"FINE DINING WHITE TABLECLOTH"},
  {code:"CF4", desc:"TRUCK STOP"},
  {code:"CF5", desc:"BANQUET HALL"},
  {code:"CL1", desc:"HOTEL/MOTEL"},
  {code:"CQ1", desc:"BAKERY CAFE"},
  {code:"CQ2", desc:"DELI"},
  {code:"CQ3", desc:"FAST FOOD"},
  {code:"CQ4", desc:"COFFEE CAFE/COFFEE SHOP"},
  {code:"CQ5", desc:"ICE CREAM/YOGURT SHOP"},
  {code:"CR1", desc:"CASINO"},
  {code:"CR2", desc:"CONVENTION"},
  {code:"CR3", desc:"COUNTRY CLUB/GOLF COURSE"},
  {code:"CR5", desc:"RECREATION"},
  {code:"CST", desc:"CONVENIENCE STORE"},
  {code:"CW1", desc:"SUPERMARKET FOODSERVICE"},
  {code:"DST", desc:"DISTRIBUTOR"},
  {code:"E1", desc:"AMTRAK-BW"},
  {code:"E2", desc:"AMTRAK SERVICE CENTERS-BW"},
  {code:"E3", desc:"AJAX & LEE ESPRESSO-BW"},
  {code:"F1", desc:"ULTAMAR-BW"},
  {code:"F2", desc:"SURFAS-BW"},
  {code:"F4", desc:"NEW PLANET COFFEE-BW"},
  {code:"F5", desc:"ESPRESSO GEARS-BW"},
  {code:"IN", desc:"INTERNATIONAL-BW"},
  {code:"NAL", desc:"AIRLINE"},
  {code:"NB1", desc:"BUSINESS & INDUSTRY CAFETERIA"},
  {code:"NB2", desc:"OCS/VEND END USER"},
  {code:"NCR", desc:"CHURCH OR RELIGIOUS ORG"},
  {code:"NCU", desc:"COLLEGE/UNIVERSITY"},
  {code:"NHC", desc:"HOSPITAL/HEALTHCARE"},
  {code:"NML", desc:"MILITARY"},
  {code:"NNH", desc:"NURSING HOME/RETIREMENT"},
  {code:"NPR", desc:"PRISONS"},
  {code:"NSC", desc:"PRIMARY/SECONDARY SCHOOLS"},
  {code:"P1", desc:"NET (LESS45%)-BW"},
  {code:"P2", desc:"NET (LESS40%)-BW"},
  {code:"R1", desc:"SALES REPRESENTATIVE-BW"},
  {code:"R2", desc:"IFE MARKKETING-BW"},
  {code:"RCA", desc:"CATALOG"},
  {code:"RCN", desc:"RETAIL CAINS"},
  {code:"RET", desc:"RETAIL"},
  {code:"REX", desc:"EXPORT"},
  {code:"RFD", desc:"FUND RAISING"},
  {code:"RMM", desc:"MASS MERCHANT"},
  {code:"SAM", desc:"SAMPLE ACCOUNT"},
  {code:"STK", desc:"ROUTE STOCK"},
  {code:"STO", desc:"STORE"},
  {code:"ZZZ", desc:"NON CUSTOMER"},
  {code:"ONL", desc:"Online Retailer"},
];

export const NARFNewAcctAcqByList = [
  {code:"K02", desc:"SCHREIBER-BDM-DSD-NORTH"},
  {code:"K04", desc:"EADY-BDM-DSD-SOUTH"},
  {code:"K10", desc:"PRILEY-BDM-DSD-NW"},
  {code:"K13", desc:"NEWTON-BDM"},
  {code:"K14", desc:"NAVARRO-BDM-DSD-SOUTH"},
  {code:"K17", desc:"LAMBERTI-BDM-DSD-WEST"},
  {code:"K18", desc:"SMIRIGLIO-BDM-DSD-WEST"},
  {code:"K19", desc:"VAN COTT-BDM-DSD-WEST"},
  {code:"K20", desc:"WILLS-BDM-DSD-NW"},
  {code:"K21", desc:"CARROLL-BDM-DSD-EAST"},
  {code:"K54", desc:"GRANLEY-BDM-DSD-NW"},
  {code:"K61", desc:"BOWEN-BDM-DSD-WEST"},
  {code:"N01", desc:"ALTILIO-NAM-GAMING/EAST"},
  {code:"N09", desc:"HSWE-DIR-RETAIL-DSH"},
  {code:"N14", desc:"BAIRD-VP/RBT"},
  {code:"N18", desc:"YOUNG-BDM-DSD-SOUTH"},
  {code:"N19", desc:"WAGNER-NAM"},
  {code:"N20", desc:"WILDERMUTH-NAM"},
  {code:"N22", desc:"BARDEN-NAM-DSD"},
  {code:"N23", desc:"BASSMAN-NAM"},
  {code:"N27", desc:"DERR-NAM-DIST"},
  {code:"S02", desc:"HERZOG-BDM-DSD-NORTH"},
  {code:"S08", desc:"FLORES-BDM-DSD-WEST"},
  {code:"S20", desc:"ARONSON-NAM-DSH"},
  {code:"T02", desc:"BUTTERFIELD-TSR-DSD-PHO"},
  {code:"T06", desc:"CENA-TSM-DSD-HOUSTON"},
  {code:"T07", desc:"FIELDS-TSM-DSD-HOUSTON"},
  {code:"U07", desc:"WARD-BDM-DSD-WEST"},
  {code:"U20", desc:"POTANIEC-BDM-DSD-EAST"},
  {code:"W30", desc:"SPENCER-DIR-GPO"},
  {code:"Y04", desc:"RUBIO-BDM-DSD-NW"},
  {code:"Y05", desc:"CARTER-DIR-DSD-DEV"},
  {code:"Y11", desc:"CAPONIGRI-BDM-DSD-MIDWEST"},
  {code:"Y12", desc:"GALICIA-BDM-DSD-SO CAL"},
  {code:"Y13", desc:"MCGEE-BDM-DSD-SOUTH"},
  {code:"Z08", desc:"BORUNDA-SA-DSD-LA"},
  {code:"Z12", desc:"TREVINO-SA-DSD-CASTROVILLE"},
  {code:"Z16", desc:"SANCHEZ-SA-DSD-SAN LUIS OB"},
  {code:"Z19", desc:"BLASCHKE-SA-DSD-RIALTO"},
  {code:"Z24", desc:"HANSON-SAII-DSD-DALLAS"},
  {code:"Z29", desc:"VARGAS-SA-DSD-PALM SPRINGS"},
  {code:"Z30", desc:"CATELLIER-SA-DSD-CRSN CITY"},
  {code:"Z31", desc:"BRENNAN-SA-DSD-KENT"},
  {code:"Z32", desc:"COLOVOS-SA-DSD-SACRAMENTO"},
  {code:"Z33", desc:"GONZALEZ-SA-DSD-DALLAS"},
  {code:"Z34", desc:"RUIZ-SA-DSD-HOUSTON"},
  {code:"Z35", desc:"PETERSON-SA-DSD-DENVER"},
  {code:"Z36", desc:"MORAITIS-SA-DSD-DETROIT"},
  {code:"Z37", desc:"ALVARADO-SA-DSD-SAN DIEGO"},
  {code:"Z38", desc:"BLACK-SA-DSD-NORTH REGION"},
  {code:"Z39", desc:"COLE-SA-DSD-CLEVELAND"},
  {code:"Z40", desc:"PACHECO-SA-DSD-MOONACHIE"},
  {code:"Z41", desc:"FOSS-SA-DSD-HAYWARD"},
  {code:"DGM", desc:"Digital Marketing"},
];

export const NARFEquipSerLevelList = [
  { code: "S00", desc: "no charge for service calls" },
  { code: "S01", desc: "2 free service calls per year" },
  { code: "S02", desc: "3 free service calls per year" },
  { code: "S03", desc: "4 free service calls per year" },
  { code: "S08", desc: "Bill for Service" },
];

export const NARFCustomerGroupList = [
  {code:"CNV", desc:"Convenience"},
  {code:"GME", desc:"Gaming and Travel"},
  {code:"HLT", desc:"Healthcare"},
  {code:"RST", desc:"Restaurant"},
  {code:"LED", desc:"Local - Education"},
  {code:"LFC", desc:"Local - Office Coffee"},
  {code:"LDS", desc:"Local - Distributor"},
  {code:"LCH", desc:"Local - Coffee House"},
  {code:"LGR", desc:"Local - Grocery"},
  {code:"LGV", desc:"Local-Government"},
  {code:"LAO", desc:"Local - All Other"},
  {code:"GCN", desc:"GPO - Convenience"},
  {code:"GGM", desc:"GPO - Gaming and Travel"},
  {code:"GHL", desc:"GPO - Healthcare"},
  {code:"GRS", desc:"GPO - Restaurant"},
  {code:"GLC", desc:"GPO - Local"},
  {code:"BRD", desc:"CMB BROADLINER"},
  {code:"FDM", desc:"CMB FOOD DRUG MASS MERCHANDISE"},
  {code:"INT", desc:"CMB INTERNATIONAL"},
  {code:"NAT", desc:"CMB NATIONAL"},
  {code:"OTH", desc:"CMB OTHER"},
  {code:"RET", desc:"CMB RETAIL"},
  {code:"SDP", desc:"CMB STRATEGIC DISTRBTR PARTNER"},
  {code:"RTB", desc:"Retail Branded"},
  {code:"ONL", desc:"Online Retailer"},
];

export const NARFPOSProgrameList = [
  {code:"A", desc:"NO POS"},
  {code:"B", desc:"0.00 TO 10.00  ADD.10C LB"},
  {code:"BRA", desc:"BRACKET ALL STREET CUST"},
  {code:"C", desc:"10.01 TO 20.00 ADD .20C LB"},
  {code:"D", desc:"20.01 TO 30.00 ADD .30hC LB"},
  {code:"E", desc:"30.01 TO 40.00 ADD .40C LB"},
  {code:"F", desc:"40.01 TO 50.00 ADD .50C LB"},
  {code:"G", desc:"50.01 TO 60.00 ADD .60C LB"},
  {code:"H", desc:"60.01 TO 70.00 ADD .70C LB"},
  {code:"I", desc:"70.01 TO 80.00 ADD .80C LB"},
  {code:"J", desc:"80.01 TO 90.00 ADD .90C LB"},
  {code:"K", desc:"90.01 TO 100.00 EXCEPTION"},
];

export const NARFAlliedEquipProgList = [
  {code:"B", desc:"BV DIST"},
  {code:"BD", desc:"BV Dist, Liquid Cof Bracket 2"},
  {code:"BDR", desc:"BV Dist,Liq Cof Br 2, In Room"},
  {code:"BE", desc:"BV Dist, Liquid Cof Bracket 3"},
  {code:"BER", desc:"BV Dist,Liq Cof Br 3, In Room"},
  {code:"BR", desc:"BV Dist, In Room"},
  {code:"D", desc:"Liquid Coffee Bracket 2"},
  {code:"DR", desc:"Liquid Cof Bracket 2, In Room"},
  {code:"E", desc:"Liquid Coffee Bracket 3"},
  {code:"ER", desc:"Liquid Cof Bracket 3, In Room"},
  {code:"R", desc:"In Room"},
];

export const NARFPriceProtectionList = [
  {code:"No Price Protection", desc:"No Price Protection"},
  {code:"A30", desc:"Allied 30 Day Price Protection"},
  {code:"A60", desc:"Allied 60 Day Price Protection"},
  {code:"B30", desc:"Both 30 Day Price Protection"},
  {code:"B60", desc:"Both 60 Day Price Protection"},
  {code:"C30", desc:"Coffee 30 Day Price Protection"},
  {code:"C60", desc:"Coffee 60 Day Price Protection"},
];
export const NARFAlliedDiscountList = [
  {code:"", desc:"List Price (default)"},
  {code:"A", desc:"5% Allied Discount Level"},
  {code:"B", desc:"10% Allied Discount Level"},
  {code:"C", desc:"12% Allied Discount Level"},
  {code:"D", desc:"18% Allied Discount Level"},
  {code:"E", desc:"20% Allied Discount Level"},
  {code:"F", desc:"22% Allied Discount Level"},
  {code:"G", desc:"15% Allied discount Level"},
  {code:"H", desc:"8% Allied Discount Level"},
  {code:"I", desc:"25% Allied Discount Level"},
  {code:"J", desc:"30% Allied Discount Level"},
  {code:"K", desc:"13% Allied Discount"},
  {code:"L", desc:"14% Allied Discount"},
  {code:"M", desc:"7% Allied Discount Level"},
  {code:"N", desc:"9% Allied Discount Level"},
  {code:"O", desc:"16% Allied Discount Level"},
  {code:"P", desc:"0% Allied Discount Level"},
  {code:"UA", desc:"5% Allied Upcharge Level"},
  {code:"UB", desc:"10% Allied Upcharge Level"},
  {code:"UC", desc:"20% Allied Upcharge Level"},
  {code:"UD", desc:"12% Allied Upcharge Level"},
  {code:"UE", desc:"14% Allied Upcharge Level"},
  {code:"UF", desc:"15% Allied Upcharge Level"},
  {code:"UG", desc:"16% Allied Upcharge Level"},
  {code:"UH", desc:"18% Allied Upcharge Level"},
];
export const NARFWeeklyCoffeeVolumeList = [
  {code:"0", desc:"Less than 5LBS/WK"},
  {code:"5", desc:"5 LB/WK - FB"},
  {code:"10", desc:"10 LB/WK-FB"},
  {code:"15", desc:"15 LB/WK - FB"},
  {code:"30", desc:"30 LB/WK - FB"},
  {code:"60", desc:"60 LB/WK - FB"},
  {code:"100", desc:"100 LB/WK - FB"},
  {code:"10T", desc:"1000 LB/WK - FB"},
  {code:"200", desc:"200 LB/WK - FB"},
  {code:"20T", desc:"2000 LB/WK - FB"},
  {code:"300", desc:"300 LB/WK - FB"},
  {code:"500", desc:"500 LB/WK - FB"},
  {code:"50T", desc:"5000 LB/WK - FB"},
];
export const NARFEquipProgrameList = [
  {code:"B", desc:"FB - $0.00 - 60.00/ lb"},
  {code:"A", desc:"FB - $60.01-75.00/ lb"},
  {code:"E", desc:"FB - $75.01-95.00/ lb"},
  {code:"F", desc:"FB - $95.01-115.00/ lb"},
  {code:"G", desc:"FB - $115.01-135.00/ lb"},
  {code:"H", desc:"FB - $135.01-155.00/ lb"},
  {code:"J", desc:"FB - $155.01-175.00/ lb"},
  {code:"M", desc:"FB - $175.01 - $195.00/ lb"},
  {code:"N", desc:"FB - $195.01 - $215.00/ lb"},
  {code:"O", desc:"FB - $215.01 - $235.00/ LB"},
  {code:"P", desc:"FB - $235.01+ DIV MGR APPROVAL"},
];

export const NARFEstiBiWeeklySalesList = [
  {code:"500", desc:"$500"},
  {code:"440", desc:"$440"}, 
  {code:"400", desc:"$400"},
  {code:"360", desc:"$360"}, 
  {code:"320", desc:"$320"}, 
  {code:"280", desc:"$280"}, 
  {code:"240", desc:"$240"}, 
  {code:"200", desc:"$200"}, 
  {code:"160", desc:"$160"}, 
  {code:"100", desc:"$100"}, 
  {code:"60", desc:"$60"},
  {code:"50", desc:"$50"}, 

];

export const NARFTermsOFSaleList = [
  {code:"CSH", desc:"CSH - Cash on Delivery"},
  {code:"Net 7 Days", desc:"Net 7 Days"},
  {code:"Net 14 Days", desc:"Net 14 Days"},
  {code:"Net 30 Days", desc:"Net 30 Days"},
  {code:"Net 60 Days", desc:"Net 60 Days"},
];

export const NARFCreditLimitList = [
  { code: "AE", desc: "1011" },
  { code: "VI", desc: "1012" },
  { code: "MC", desc: "1013" },
];

export const NARFAdjustmentScheduleList = [
  { code: "FBDSDHighjump", desc: "FBDSDHighjump" },
  { code: "FBCombo", desc: "FBCombo" },
  { code: "FBPort", desc: "FBPort" },
];

export const NARFFreightHandlingCodeList = [
  { code: "FES", desc: "Farmer Energy Surcharge <$150 = $10, >$150 = $7" },
  { code: "FBD", desc: "Foodbuy Delivery Charge, no fee if >$250" },
  { code: "FE8", desc: "Farmer Energy Surcharge $10" },
];

export const NARFDailyDeliverySequenceList = [
  {code:"10",desc:"10"},
  {code:"20",desc:"20"},
  {code:"30",desc:"30"},
  {code:"40",desc:"40"},
  {code:"50",desc:"50"},
  {code:"60",desc:"60"},
  {code:"70",desc:"70"},
  {code:"80",desc:"80"},
  {code:"90",desc:"90"},
  {code:"100",desc:"100"},
  {code:"110",desc:"110"},
  {code:"120",desc:"120"},
  {code:"130",desc:"130"},
  {code:"140",desc:"140"},
  {code:"150",desc:"150"},
  {code:"160",desc:"160"},
  {code:"170",desc:"170"},
  {code:"180",desc:"180"},
  {code:"190",desc:"190"},
  {code:"200",desc:"200"},
  {code:"210",desc:"210"},
  {code:"220",desc:"220"},
  {code:"230",desc:"230"},
  {code:"240",desc:"240"},
  {code:"250",desc:"250"},
  {code:"260",desc:"260"},
  {code:"270",desc:"270"},
  {code:"280",desc:"280"},
  {code:"290",desc:"290"},
  {code:"300",desc:"300"},
  {code:"310",desc:"310"},
  {code:"320",desc:"320"},
  {code:"330",desc:"330"},
  {code:"340",desc:"340"},
  {code:"350",desc:"350"},
  {code:"360",desc:"360"},
  {code:"370",desc:"370"},
  {code:"380",desc:"380"},
  {code:"390",desc:"390"},
  {code:"400",desc:"400"},
  {code:"410",desc:"410"},
  {code:"420",desc:"420"},
  {code:"430",desc:"430"},
  {code:"440",desc:"440"},
  {code:"450",desc:"450"},
  {code:"460",desc:"460"},
  {code:"470",desc:"470"},
  {code:"480",desc:"480"},
  {code:"490",desc:"490"},
  {code:"500",desc:"500"},
  {code:"510",desc:"510"},
  {code:"520",desc:"520"},
  {code:"530",desc:"530"},
  {code:"540",desc:"540"},
  {code:"550",desc:"550"},
  {code:"560",desc:"560"},
  {code:"570",desc:"570"},
  {code:"580",desc:"580"},
  {code:"590",desc:"590"},
  {code:"600",desc:"600"},
  {code:"610",desc:"610"},
  {code:"620",desc:"620"},
  {code:"630",desc:"630"},
  {code:"640",desc:"640"},
  {code:"650",desc:"650"},
  {code:"660",desc:"660"},
  {code:"670",desc:"670"},
  {code:"680",desc:"680"},
  {code:"690",desc:"690"},
  {code:"700",desc:"700"},
  {code:"710",desc:"710"},
  {code:"720",desc:"720"},
  {code:"730",desc:"730"},
  {code:"740",desc:"740"},
  {code:"750",desc:"750"},
  {code:"760",desc:"760"},
  {code:"770",desc:"770"},
  {code:"780",desc:"780"},
  {code:"790",desc:"790"},
  {code:"800",desc:"800"},
  {code:"810",desc:"810"},
  {code:"820",desc:"820"},
  {code:"830",desc:"830"},
  {code:"840",desc:"840"},
  {code:"850",desc:"850"},
  {code:"860",desc:"860"},
  {code:"870",desc:"870"},
  {code:"880",desc:"880"},
  {code:"890",desc:"890"},
  {code:"900",desc:"900"},
  {code:"910",desc:"910"},
  {code:"920",desc:"920"},
  {code:"930",desc:"930"},
  {code:"940",desc:"940"},
  {code:"950",desc:"950"},
  {code:"960",desc:"960"},
  {code:"970",desc:"970"},
  {code:"980",desc:"980"},
  {code:"990",desc:"990"},
  {code:"1000",desc:"1000"},
  {code:"1010",desc:"1010"},
  {code:"1020",desc:"1020"},
  {code:"1030",desc:"1030"},
  {code:"1040",desc:"1040"},
  {code:"1050",desc:"1050"},
  {code:"1060",desc:"1060"},
  {code:"1070",desc:"1070"},
  {code:"1080",desc:"1080"},
  {code:"1090",desc:"1090"},
  {code:"1100",desc:"1100"},
  {code:"1110",desc:"1110"},
  {code:"1120",desc:"1120"},
  {code:"1130",desc:"1130"},
  {code:"1140",desc:"1140"},
  {code:"1150",desc:"1150"},
  {code:"1160",desc:"1160"},
  {code:"1170",desc:"1170"},
  {code:"1180",desc:"1180"},
  {code:"1190",desc:"1190"},
  {code:"1200",desc:"1200"},
  {code:"1210",desc:"1210"},
  {code:"1220",desc:"1220"},
  {code:"1230",desc:"1230"},
  {code:"1240",desc:"1240"},
  {code:"1250",desc:"1250"},
  {code:"1260",desc:"1260"},
  {code:"1270",desc:"1270"},
  {code:"1280",desc:"1280"},
  {code:"1290",desc:"1290"},
  {code:"1300",desc:"1300"},
  {code:"1310",desc:"1310"},
  {code:"1320",desc:"1320"},
  {code:"1330",desc:"1330"},
  {code:"1340",desc:"1340"},
  {code:"1350",desc:"1350"},
  {code:"1360",desc:"1360"},
  {code:"1370",desc:"1370"},
  {code:"1380",desc:"1380"},
  {code:"1390",desc:"1390"},
  {code:"1400",desc:"1400"},
  {code:"1410",desc:"1410"},
  {code:"1420",desc:"1420"},
  {code:"1430",desc:"1430"},
  {code:"1440",desc:"1440"},
  {code:"1450",desc:"1450"},
  {code:"1460",desc:"1460"},
  {code:"1470",desc:"1470"},
  {code:"1480",desc:"1480"},
  {code:"1490",desc:"1490"},
  {code:"1500",desc:"1500"},
  {code:"PT",desc:"PT-Portland Route Truck"},
  {code:"SP",desc:"SP-Portland Small Packages"},
  {code:"TR",desc:"TR-Portland Trucking"},
  {code:"DFW",desc:"DFW"},
];

export const NARFFreqDailyDeliveryList = [
  {code:"11",desc:"Monday -Wk 1"},
  {code:"11O",desc:"Monday-Wk 1-EOM"},
  {code:"11Q",desc:"Monday-Wk 1-Qtrly"},
  {code:"12",desc:"Monday - Wk 2"},
  {code:"12E",desc:"Mon/Tues Every Week"},
  {code:"12O",desc:"Monday-Wk 2-EOM"},
  {code:"12Q",desc:"Monday-Wk 2-Qtrly"},
  {code:"13",desc:"Monday-Wk 3"},
  {code:"135",desc:"Mon/Wed/Fri Every Week"},
  {code:"13E",desc:"Mon/Wed Every Week"},
  {code:"13O",desc:"Monday-Wk 3-EOM"},
  {code:"13Q",desc:"Monday-Wk 3-Qtrly"},
  {code:"14",desc:"Monday-Wk 4"},
  {code:"14E",desc:"Mon/Thurs Every Week"},
  {code:"14O",desc:"Monday-Wk 4-EOM"},
  {code:"14Q",desc:"Monday-Wk 4-Qtrly"},
  {code:"15E",desc:"Mon/Fri Every Week"},
  {code:"1A",desc:"Monday-Wk A"},
  {code:"1B",desc:"Monday - Wk B"},
  {code:"1E",desc:"Monday - Wkly"},
  {code:"21",desc:"Tuesday-Wk 1"},
  {code:"21O",desc:"Tuesday-Wk 1-EOM"},
  {code:"21Q",desc:"Tuesday-Wk 1-Qtrly"},
  {code:"22",desc:"Tuesday-Wk 2"},
  {code:"22O",desc:"Tuesday-Wk 2-EOM"},
  {code:"22Q",desc:"Tuesday-Wk 2-Qtrly"},
  {code:"23",desc:"Tuesday-Wk 3"},
  {code:"23E",desc:"Tues/Wed Every Week"},
  {code:"23O",desc:"Tuesday-Wk 3-EOM"},
  {code:"23Q",desc:"Tuesday-Wk 3-Qtrly"},
  {code:"24",desc:"Tuesday-Wk 4"},
  {code:"24E",desc:"Tues/Thurs Every Week"},
  {code:"24O",desc:"Tuesday-Wk 4-EOM"},
  {code:"24Q",desc:"Tuesday-Wk 4-Qtrly"},
  {code:"25E",desc:"Tues/Fri Every Week"},
  {code:"2A",desc:"Tuesday-Wk A"},
  {code:"2B",desc:"Tuesday-Wk B"},
  {code:"2E",desc:"Tuesday - Wkly"},
  {code:"31",desc:"Wednesday-Wk 1"},
  {code:"31O",desc:"Wednesday-Wk 1-EOM"},
  {code:"32",desc:"Wednesday-Wk 2"},
  {code:"32O",desc:"Wednesday-Wk 2-EOM"},
  {code:"32Q",desc:"Wednesday-Wk 2-Qtrly"},
  {code:"33",desc:"Wednesday-Wk 3"},
  {code:"33O",desc:"Wednesday-Wk 3-EOM"},
  {code:"33Q",desc:"Wednesday-Wk 3-Qtrly"},
  {code:"34",desc:"Wednesday-Wk 4"},
  {code:"34E",desc:"Wed/Thurs Every Week"},
  {code:"34O",desc:"Wednesday-Wk 4-EOM"},
  {code:"34Q",desc:"Wednesday-Wk 4-Qtrly"},
  {code:"35E",desc:"Wed/Fri Every Week"},
  {code:"3A",desc:"Wednesday-Wk A"},
  {code:"3B",desc:"Wednesday-Wk B"},
  {code:"3E",desc:"Wednesday - Wkly"},
  {code:"41",desc:"Thursday - Wk 1"},
  {code:"41O",desc:"Thursday-Wk 1-EOM"},
  {code:"41Q",desc:"Thursday-Wk 1-Qtrly"},
  {code:"42",desc:"Thursday - Wk 2"},
  {code:"42O",desc:"Thursday-Wk 2-EOM"},
  {code:"42Q",desc:"Thursday-Wk 2-Qtrly"},
  {code:"43",desc:"Thursday - Wk 3"},
  {code:"43O",desc:"Thursday-Wk 3-EOM"},
  {code:"43Q",desc:"Thursday-Wk 3-Qtrly"},
  {code:"44",desc:"Thursday - Wk 4"},
  {code:"44O",desc:"Thursday-Wk 4-EOM"},
  {code:"44Q",desc:"Thursday-Wk 4-Qtrly"},
  {code:"45E",desc:"Thurs/Fri Every Week"},
  {code:"4A",desc:"Thursday - Wk A"},
  {code:"4B",desc:"Thursday - Wk B"},
  {code:"4E",desc:"Thursday - Wkly"},
  {code:"51",desc:"Friday - Wk 1"},
  {code:"51O",desc:"Friday-Wk 1-EOM"},
  {code:"51Q",desc:"Friday-Wk 1-Qtrly"},
  {code:"52",desc:"Friday - Wk 2"},
  {code:"52O",desc:"Friday-Wk 2-EOM"},
  {code:"52Q",desc:"Friday-Wk 2-Qtrly"},
  {code:"53",desc:"Friday - Wk 3"},
  {code:"53O",desc:"Friday-Wk 3-EOM"},
  {code:"53Q",desc:"Friday-Wk 3-Qtrly"},
  {code:"54",desc:"Friday - Wk 4"},
  {code:"54O",desc:"Friday-Wk 4-EOM"},
  {code:"54Q",desc:"Friday-Wk 4-Qtrly"},
  {code:"5A",desc:"Friday - Wk A"},
  {code:"5B",desc:"Friday - Wk B"},
  {code:"5E",desc:"Friday - Wkly"},
  {code:"7",desc:"Account Closed"},
  {code:"E",desc:"Every Day within 20 day cycle"},
  {code:"EA",desc:"Every Day in Week A"},
  {code:"EB",desc:"Every Day in Week B"},
  {code:"EOM",desc:"EVERY OTHER MONTH CUST"},
  {code:"LOS",desc:"LOS ANGELES"},
  {code:"Q",desc:"ONCE A QUARTER CUSTOMER"},
  {code:"S",desc:"Seasonal Customer Delivery"},
  {code:"STL",desc:"ST LOUIS"},
];

export const NARFParentNoList = [
  { code: "AE", desc: "1011" },
  { code: "VI", desc: "1012" },
  { code: "MC", desc: "1013" },
];

export const NARFEmployeeTitleList = [
  {code:"BDR", desc:"Business Development Rep"},
  {code:"RSR", desc:"Route Sales Representative"},
  {code:"RSM", desc:"Route Sales Manager"},
  {code:"ASM", desc:"Area Sales Manager"},
  {code:"KAM", desc:"Key Account Manager"},
  {code:"NAM", desc:"National Account Manager"},
  {code:"DRS", desc:"Director of Regional Sales"},
  {code:"ISR", desc:"Inside Sales Representative"},
  {code:"CSR", desc:"Customer Service Representative"},
];

/*
export const NARFCatCodePriceAdjList = [
  { code: "Cat-Code 19 Price Adjustment", desc: "Cat-Code 19 Price Adjustment"},
  { code: "Cat-Code 20 Price Adjustment", desc: "Cat-Code 20 Price Adjustment"},
  { code: "Cat-Code 26 Price Adjustment", desc: "Cat-Code 26 Price Adjustment"},
  { code: "Cat-Code 30 Price Adjustment", desc: "Cat-Code 30 Price Adjustment"},
];

export const NARFCatAlliedCodeList = [
  { code: "", desc: "Select Category Allied Adjustment"},
  { code: "Category Allied Adjustment1", desc: "Category Allied Adjustment1"},
  { code: "Category Allied Adjustment2", desc: "Category Allied Adjustment2"},
  { code: "Category Allied Adjustment3", desc: "Category Allied Adjustment3"},
  { code: "Category Allied Adjustment4", desc: "Category Allied Adjustment4" },
  { code: "Category Allied Adjustment5", desc: "Category Allied Adjustment5"},
  { code: "Category Allied Adjustment6", desc: "Category Allied Adjustment6"},
  { code: "Category Allied Adjustment7", desc: "Category Allied Adjustment7"},
  { code: "Category Allied Adjustment8", desc: "Category Allied Adjustment8" },
  { code: "Category Allied Adjustment9", desc: "Category Allied Adjustment9"},
  { code: "Category Allied Adjustment10", desc: "Category Allied Adjustment10"},
];

export const NARFCatAlliedValueList = [
  {
    "code": "CAA",
    "desc": "CAPPUCCINO +5%"
  },
  {
    "code": "CAB",
    "desc": "CAPPUCCINO +10%"
  },
  {
    "code": "CAC",
    "desc": "CAPPUCCINO +12%"
  },
  {
    "code": "CAD",
    "desc": "CAPPUCCINO +14%"
  },
  {
    "code": "CAE",
    "desc": "CAPPUCCINO +16%"
  },
  {
    "code": "CAF",
    "desc": "CAPPUCCINO +18%"
  },
  {
    "code": "CAG",
    "desc": "CAPPUCCINO +20%"
  },
  {
    "code": "CAH",
    "desc": "CAPPUCCINO -5%"
  },
  {
    "code": "CAI",
    "desc": "CAPPUCCINO -10%"
  },
  {
    "code": "CAJ",
    "desc": "CAPPUCCINO -12%"
  },
  {
    "code": "CAK",
    "desc": "CAPPUCCINO -14%"
  },
  {
    "code": "CAL",
    "desc": "CAPPUCCINO -16%"
  },
  {
    "code": "CAM",
    "desc": "CAPPUCCINO -18%"
  },
  {
    "code": "CAN",
    "desc": "CAPPUCCINO -20%"
  },
  {
    "code": "CAO",
    "desc": "CAPPUCCINO +15%"
  },
  {
    "code": "CAP",
    "desc": "CAPPUCCINO -15%"
  },
  {
    "code": "CAQ",
    "desc": "CAPPUCCINO 0%"
  },
  {
    "code": "COA",
    "desc": "HOT COCOA +5%"
  },
  {
    "code": "COB",
    "desc": "HOT COCOA +10%"
  },
  {
    "code": "COC",
    "desc": "HOT COCOA +12%"
  },
  {
    "code": "COD",
    "desc": "HOT COCOA +14%"
  },
  {
    "code": "COE",
    "desc": "HOT COCOA +16%"
  },
  {
    "code": "COF",
    "desc": "HOT COCOA +18%"
  },
  {
    "code": "COG",
    "desc": "HOT COCOA +20%"
  },
  {
    "code": "COH",
    "desc": "HOT COCOA -5%"
  },
  {
    "code": "COI",
    "desc": "HOT COCOA -10%"
  },
  {
    "code": "COJ",
    "desc": "HOT COCOA -12%"
  },
  {
    "code": "COK",
    "desc": "HOT COCOA -14%"
  },
  {
    "code": "COL",
    "desc": "HOT COCOA -16%"
  },
  {
    "code": "COM",
    "desc": "HOT COCOA -18%"
  },
  {
    "code": "CON",
    "desc": "HOT COCOA -20%"
  },
  {
    "code": "COO",
    "desc": "HOT COCOA +15%"
  },
  {
    "code": "COP",
    "desc": "HOT COCOA -15%"
  },
  {
    "code": "COQ",
    "desc": "HOT COCOA 0%"
  },
  {
    "code": "CUA",
    "desc": "CULINARY +5%"
  },
  {
    "code": "CUB",
    "desc": "CULINARY +10%"
  },
  {
    "code": "CUC",
    "desc": "CULINARY +12%"
  },
  {
    "code": "CUD",
    "desc": "CULINARY +14%"
  },
  {
    "code": "CUE",
    "desc": "CULINARY +16%"
  },
  {
    "code": "CUF",
    "desc": "CULINARY +18%"
  },
  {
    "code": "CUH",
    "desc": "CULINARY -5%"
  },
  {
    "code": "CUI",
    "desc": "CULINARY -10%"
  },
  {
    "code": "CUJ",
    "desc": "CULINARY -12%"
  },
  {
    "code": "CUK",
    "desc": "CULINARY -14%"
  },
  {
    "code": "CUL",
    "desc": "CULINARY -16%"
  },
  {
    "code": "CUM",
    "desc": "CULINARY -18%"
  },
  {
    "code": "CUN",
    "desc": "CULINARY -20%"
  },
  {
    "code": "CUO",
    "desc": "CULINARY +15%"
  },
  {
    "code": "CUP",
    "desc": "CULINARY -15%"
  },
  {
    "code": "CUQ",
    "desc": "CULINARY 0%"
  },
  {
    "code": "ICA",
    "desc": "ICED TEA +5%"
  },
  {
    "code": "ICB",
    "desc": "ICED TEA +10%"
  },
  {
    "code": "ICC",
    "desc": "ICED TEA +12%"
  },
  {
    "code": "ICD",
    "desc": "ICED TEA +14%"
  },
  {
    "code": "ICE",
    "desc": "ICED TEA +16%"
  },
  {
    "code": "ICF",
    "desc": "ICED TEA +18%"
  },
  {
    "code": "ICG",
    "desc": "ICED TEA +20%"
  },
  {
    "code": "ICH",
    "desc": "ICED TEA -5%"
  },
  {
    "code": "ICI",
    "desc": "ICED TEA -10%"
  },
  {
    "code": "ICJ",
    "desc": "ICED TEA -12%"
  },
  {
    "code": "ICK",
    "desc": "ICED TEA -14%"
  },
  {
    "code": "ICL",
    "desc": "ICED TEA -16%"
  },
  {
    "code": "ICM",
    "desc": "ICED TEA -18%"
  },
  {
    "code": "ICN",
    "desc": "ICED TEA -20%"
  },
  {
    "code": "ICO",
    "desc": "ICED TEA +15%"
  },
  {
    "code": "ICP",
    "desc": "ICED TEA -15%"
  },
  {
    "code": "ICQ",
    "desc": "ICED TEA 0%"
  },
  {
    "code": "JUA",
    "desc": "JUICE +5%"
  },
  {
    "code": "JUB",
    "desc": "JUICE +10%"
  },
  {
    "code": "JUC",
    "desc": "JUICE +12%"
  },
  {
    "code": "JUD",
    "desc": "JUICE +14%"
  },
  {
    "code": "JUE",
    "desc": "JUICE +16%"
  },
  {
    "code": "JUF",
    "desc": "JUICE +18%"
  },
  {
    "code": "JUG",
    "desc": "JUICE +20%"
  },
  {
    "code": "JUH",
    "desc": "JUICE -5%"
  },
  {
    "code": "JUI",
    "desc": "JUICE -10%"
  },
  {
    "code": "JUJ",
    "desc": "JUICE -12%"
  },
  {
    "code": "JUK",
    "desc": "JUICE -14%"
  },
  {
    "code": "JUL",
    "desc": "JUICE -16%"
  },
  {
    "code": "JUM",
    "desc": "JUICE -18%"
  },
  {
    "code": "JUN",
    "desc": "JUICE -20%"
  },
  {
    "code": "JUO",
    "desc": "JUICE +15%"
  },
  {
    "code": "JUP",
    "desc": "JUICE -15%"
  },
  {
    "code": "JUQ",
    "desc": "JUICE 0%"
  },
  {
    "code": "NFA",
    "desc": "NON-FOOD +5%"
  },
  {
    "code": "NFB",
    "desc": "NON-FOOD +10%"
  },
  {
    "code": "NFC",
    "desc": "NON-FOOD +12%"
  },
  {
    "code": "NFD",
    "desc": "NON-FOOD +14%"
  },
  {
    "code": "NFE",
    "desc": "NON-FOOD +16%"
  },
  {
    "code": "NFF",
    "desc": "NON-FOOD +18%"
  },
  {
    "code": "NFG",
    "desc": "NON-FOOD +20%"
  },
  {
    "code": "NFH",
    "desc": "NON-FOOD -5%"
  },
  {
    "code": "NFI",
    "desc": "NON-FOOD -10%"
  },
  {
    "code": "NFJ",
    "desc": "NON-FOOD -12%"
  },
  {
    "code": "NFK",
    "desc": "NON-FOOD -14%"
  },
  {
    "code": "NFL",
    "desc": "NON-FOOD -16%"
  },
  {
    "code": "NFM",
    "desc": "NON-FOOD -18%"
  },
  {
    "code": "NFN",
    "desc": "NON-FOOD -20%"
  },
  {
    "code": "NFO",
    "desc": "NON-FOOD +15%"
  },
  {
    "code": "NFP",
    "desc": "NON-FOOD -15%"
  },
  {
    "code": "NFQ",
    "desc": "NON FOOD 0%"
  },
  {
    "code": "OCA",
    "desc": "OTHER COLD BEVERAGE +5%"
  },
  {
    "code": "OCB",
    "desc": "OTHER COLD BEVERAGE +10%"
  },
  {
    "code": "OCC",
    "desc": "OTHER COLD BEVERAGE +12%"
  },
  {
    "code": "OCD",
    "desc": "OTHER COLD BEVERAGE +14%"
  },
  {
    "code": "OCE",
    "desc": "OTHER COLD BEVERAGE +16%"
  },
  {
    "code": "OCF",
    "desc": "OTHER COLD BEVERAGE +18%"
  },
  {
    "code": "OCG",
    "desc": "OTHER COLD BEVERAGE +20%"
  },
  {
    "code": "OCH",
    "desc": "OTHER COLD BEVERAGE -5%"
  },
  {
    "code": "OCI",
    "desc": "OTHER COLD BEVERAGE -10%"
  },
  {
    "code": "OCJ",
    "desc": "OTHER COLD BEVERAGE -12%"
  },
  {
    "code": "OCK",
    "desc": "OTHER COLD BEVERAGE -14%"
  },
  {
    "code": "OCL",
    "desc": "OTHER COLD BEVERAGE -16%"
  },
  {
    "code": "OCM",
    "desc": "OTHER COLD BEVERAGE -18%"
  },
  {
    "code": "OCN",
    "desc": "OTHER COLD BEVERAGE -20%"
  },
  {
    "code": "OCO",
    "desc": "OTHER COLD BEVERAGE +15%"
  },
  {
    "code": "OCP",
    "desc": "OTHER COLD BEVERAGE -15%"
  },
  {
    "code": "OCQ",
    "desc": "OTHER COLD BEVERAGE 0%"
  },
  {
    "code": "OHA",
    "desc": "OTHER HOT BEVERAGE +5%"
  },
  {
    "code": "OHB",
    "desc": "OTHER HOT BEVERAGE +10%"
  },
  {
    "code": "OHC",
    "desc": "OTHER HOT BEVERAGE +12%"
  },
  {
    "code": "OHD",
    "desc": "OTHER HOT BEVERAGE +14%"
  },
  {
    "code": "OHE",
    "desc": "OTHER HOT BEVERAGE +16%"
  },
  {
    "code": "OHF",
    "desc": "OTHER HOT BEVERAGE +18%"
  },
  {
    "code": "OHG",
    "desc": "OTHER HOT BEVERAGE +20%"
  },
  {
    "code": "OHH",
    "desc": "OTHER HOT BEVERAGE -5%"
  },
  {
    "code": "OHI",
    "desc": "OTHER HOT BEVERAGE -10%"
  },
  {
    "code": "OHJ",
    "desc": "OTHER HOT BEVERAGE -12%"
  },
  {
    "code": "OHK",
    "desc": "OTHER HOT BEVERAGE -14%"
  },
  {
    "code": "OHL",
    "desc": "OTHER HOT BEVERAGE -16%"
  },
  {
    "code": "OHM",
    "desc": "OTHER HOT BEVERAGE -18%"
  },
  {
    "code": "OHN",
    "desc": "OTHER HOT BEVERAGE -20%"
  },
  {
    "code": "OHO",
    "desc": "OTHER HOT BEVERAGE +15%"
  },
  {
    "code": "OHP",
    "desc": "OTHER HOT BEVERAGE -15%"
  },
  {
    "code": "OHQ",
    "desc": "OTHER HOT BEVERAGE 0%"
  },
  {
    "code": "SPA",
    "desc": "SPICE +5%"
  },
  {
    "code": "SPB",
    "desc": "SPICE +10%"
  },
  {
    "code": "SPC",
    "desc": "SPICE +12%"
  },
  {
    "code": "SPD",
    "desc": "SPICE +14%"
  },
  {
    "code": "SPE",
    "desc": "SPICE +16%"
  },
  {
    "code": "SPF",
    "desc": "SPICE +18%"
  },
  {
    "code": "SPG",
    "desc": "SPICE +20%"
  },
  {
    "code": "SPH",
    "desc": "SPICE -5%"
  },
  {
    "code": "SPI",
    "desc": "SPICE -10%"
  },
  {
    "code": "SPJ",
    "desc": "SPICE -12%"
  },
  {
    "code": "SPK",
    "desc": "SPICE -14%"
  },
  {
    "code": "SPL",
    "desc": "SPICE -16%"
  },
  {
    "code": "SPM",
    "desc": "SPICE -18%"
  },
  {
    "code": "SPN",
    "desc": "SPICE -20%"
  },
  {
    "code": "SPO",
    "desc": "SPICE +15%"
  },
  {
    "code": "SPP",
    "desc": "SPICE -15%"
  },
  {
    "code": "SPQ",
    "desc": "SPICE 0%"
  },
  {
    "code": "A",
    "desc": "List, 0"
  },
  {
    "code": "D",
    "desc": "10% Disc, "
  },
  {
    "code": 1,
    "desc": "100 lb Disc, -0.1"
  },
  {
    "code": 2,
    "desc": "250 lb Disc, -0.25"
  },
  {
    "code": 4,
    "desc": "400 lb Disc, -0.4"
  },
  {
    "code": "P",
    "desc": "PEP, -0.75"
  },
  {
    "code": 5,
    "desc": "PEP 100 lb Disc, -0.85"
  },
  {
    "code": 6,
    "desc": "PEP 250 lb Disc, -1"
  },
  {
    "code": 7,
    "desc": "PEP 400 lb Disc, -1.15"
  },
  {
    "code": "T",
    "desc": "$.50 off PEP, -1.25"
  },
  {
    "code": "U",
    "desc": "$.75 off PEP, -1.5"
  },
  {
    "code": "V",
    "desc": "$1.00 off PEP, -1.75"
  },
  {
    "code": 0,
    "desc": "California PEP, -1.25"
  },
  {
    "code": "F",
    "desc": "California 100 lb Disc, -1.35"
  },
  {
    "code": "G",
    "desc": "California 250 lb Disc, -1.5"
  },
  {
    "code": "H",
    "desc": "California 400 lb Disc, -1.65"
  }
];
*/


///////////////////////////////

export const NARFCatValueRDSList = [
  {
    "code": "CAA",
    "desc": "CAPPUCCINO +5%"
  },
  {
    "code": "CAB",
    "desc": "CAPPUCCINO +10%"
  },
  {
    "code": "CAC",
    "desc": "CAPPUCCINO +12%"
  },
  {
    "code": "CAD",
    "desc": "CAPPUCCINO +14%"
  },
  {
    "code": "CAE",
    "desc": "CAPPUCCINO +16%"
  },
  {
    "code": "CAF",
    "desc": "CAPPUCCINO +18%"
  },
  {
    "code": "CAG",
    "desc": "CAPPUCCINO +20%"
  },
  {
    "code": "CAH",
    "desc": "CAPPUCCINO -5%"
  },
  {
    "code": "CAI",
    "desc": "CAPPUCCINO -10%"
  },
  {
    "code": "CAJ",
    "desc": "CAPPUCCINO -12%"
  },
  {
    "code": "CAK",
    "desc": "CAPPUCCINO -14%"
  },
  {
    "code": "CAL",
    "desc": "CAPPUCCINO -16%"
  },
  {
    "code": "CAM",
    "desc": "CAPPUCCINO -18%"
  },
  {
    "code": "CAN",
    "desc": "CAPPUCCINO -20%"
  },
  {
    "code": "CAO",
    "desc": "CAPPUCCINO +15%"
  },
  {
    "code": "CAP",
    "desc": "CAPPUCCINO -15%"
  },
  {
    "code": "CAQ",
    "desc": "CAPPUCCINO 0%"
  },
  {
    "code": "COA",
    "desc": "HOT COCOA +5%"
  },
  {
    "code": "COB",
    "desc": "HOT COCOA +10%"
  },
  {
    "code": "COC",
    "desc": "HOT COCOA +12%"
  },
  {
    "code": "COD",
    "desc": "HOT COCOA +14%"
  },
  {
    "code": "COE",
    "desc": "HOT COCOA +16%"
  },
  {
    "code": "COF",
    "desc": "HOT COCOA +18%"
  },
  {
    "code": "COG",
    "desc": "HOT COCOA +20%"
  },
  {
    "code": "COH",
    "desc": "HOT COCOA -5%"
  },
  {
    "code": "COI",
    "desc": "HOT COCOA -10%"
  },
  {
    "code": "COJ",
    "desc": "HOT COCOA -12%"
  },
  {
    "code": "COK",
    "desc": "HOT COCOA -14%"
  },
  {
    "code": "COL",
    "desc": "HOT COCOA -16%"
  },
  {
    "code": "COM",
    "desc": "HOT COCOA -18%"
  },
  {
    "code": "CON",
    "desc": "HOT COCOA -20%"
  },
  {
    "code": "COO",
    "desc": "HOT COCOA +15%"
  },
  {
    "code": "COP",
    "desc": "HOT COCOA -15%"
  },
  {
    "code": "COQ",
    "desc": "HOT COCOA 0%"
  },
  {
    "code": "CUA",
    "desc": "CULINARY +5%"
  },
  {
    "code": "CUB",
    "desc": "CULINARY +10%"
  },
  {
    "code": "CUC",
    "desc": "CULINARY +12%"
  },
  {
    "code": "CUD",
    "desc": "CULINARY +14%"
  },
  {
    "code": "CUE",
    "desc": "CULINARY +16%"
  },
  {
    "code": "CUF",
    "desc": "CULINARY +18%"
  },
  {
    "code": "CUH",
    "desc": "CULINARY -5%"
  },
  {
    "code": "CUI",
    "desc": "CULINARY -10%"
  },
  {
    "code": "CUJ",
    "desc": "CULINARY -12%"
  },
  {
    "code": "CUK",
    "desc": "CULINARY -14%"
  },
  {
    "code": "CUL",
    "desc": "CULINARY -16%"
  },
  {
    "code": "CUM",
    "desc": "CULINARY -18%"
  },
  {
    "code": "CUN",
    "desc": "CULINARY -20%"
  },
  {
    "code": "CUO",
    "desc": "CULINARY +15%"
  },
  {
    "code": "CUP",
    "desc": "CULINARY -15%"
  },
  {
    "code": "CUQ",
    "desc": "CULINARY 0%"
  },
  {
    "code": "ICA",
    "desc": "ICED TEA +5%"
  },
  {
    "code": "ICB",
    "desc": "ICED TEA +10%"
  },
  {
    "code": "ICC",
    "desc": "ICED TEA +12%"
  },
  {
    "code": "ICD",
    "desc": "ICED TEA +14%"
  },
  {
    "code": "ICE",
    "desc": "ICED TEA +16%"
  },
  {
    "code": "ICF",
    "desc": "ICED TEA +18%"
  },
  {
    "code": "ICG",
    "desc": "ICED TEA +20%"
  },
  {
    "code": "ICH",
    "desc": "ICED TEA -5%"
  },
  {
    "code": "ICI",
    "desc": "ICED TEA -10%"
  },
  {
    "code": "ICJ",
    "desc": "ICED TEA -12%"
  },
  {
    "code": "ICK",
    "desc": "ICED TEA -14%"
  },
  {
    "code": "ICL",
    "desc": "ICED TEA -16%"
  },
  {
    "code": "ICM",
    "desc": "ICED TEA -18%"
  },
  {
    "code": "ICN",
    "desc": "ICED TEA -20%"
  },
  {
    "code": "ICO",
    "desc": "ICED TEA +15%"
  },
  {
    "code": "ICP",
    "desc": "ICED TEA -15%"
  },
  {
    "code": "ICQ",
    "desc": "ICED TEA 0%"
  },
  {
    "code": "JUA",
    "desc": "JUICE +5%"
  },
  {
    "code": "JUB",
    "desc": "JUICE +10%"
  },
  {
    "code": "JUC",
    "desc": "JUICE +12%"
  },
  {
    "code": "JUD",
    "desc": "JUICE +14%"
  },
  {
    "code": "JUE",
    "desc": "JUICE +16%"
  },
  {
    "code": "JUF",
    "desc": "JUICE +18%"
  },
  {
    "code": "JUG",
    "desc": "JUICE +20%"
  },
  {
    "code": "JUH",
    "desc": "JUICE -5%"
  },
  {
    "code": "JUI",
    "desc": "JUICE -10%"
  },
  {
    "code": "JUJ",
    "desc": "JUICE -12%"
  },
  {
    "code": "JUK",
    "desc": "JUICE -14%"
  },
  {
    "code": "JUL",
    "desc": "JUICE -16%"
  },
  {
    "code": "JUM",
    "desc": "JUICE -18%"
  },
  {
    "code": "JUN",
    "desc": "JUICE -20%"
  },
  {
    "code": "JUO",
    "desc": "JUICE +15%"
  },
  {
    "code": "JUP",
    "desc": "JUICE -15%"
  },
  {
    "code": "JUQ",
    "desc": "JUICE 0%"
  },
  {
    "code": "NFA",
    "desc": "NON-FOOD +5%"
  },
  {
    "code": "NFB",
    "desc": "NON-FOOD +10%"
  },
  {
    "code": "NFC",
    "desc": "NON-FOOD +12%"
  },
  {
    "code": "NFD",
    "desc": "NON-FOOD +14%"
  },
  {
    "code": "NFE",
    "desc": "NON-FOOD +16%"
  },
  {
    "code": "NFF",
    "desc": "NON-FOOD +18%"
  },
  {
    "code": "NFG",
    "desc": "NON-FOOD +20%"
  },
  {
    "code": "NFH",
    "desc": "NON-FOOD -5%"
  },
  {
    "code": "NFI",
    "desc": "NON-FOOD -10%"
  },
  {
    "code": "NFJ",
    "desc": "NON-FOOD -12%"
  },
  {
    "code": "NFK",
    "desc": "NON-FOOD -14%"
  },
  {
    "code": "NFL",
    "desc": "NON-FOOD -16%"
  },
  {
    "code": "NFM",
    "desc": "NON-FOOD -18%"
  },
  {
    "code": "NFN",
    "desc": "NON-FOOD -20%"
  },
  {
    "code": "NFO",
    "desc": "NON-FOOD +15%"
  },
  {
    "code": "NFP",
    "desc": "NON-FOOD -15%"
  },
  {
    "code": "NFQ",
    "desc": "NON FOOD 0%"
  },
  {
    "code": "OCA",
    "desc": "OTHER COLD BEVERAGE +5%"
  },
  {
    "code": "OCB",
    "desc": "OTHER COLD BEVERAGE +10%"
  },
  {
    "code": "OCC",
    "desc": "OTHER COLD BEVERAGE +12%"
  },
  {
    "code": "OCD",
    "desc": "OTHER COLD BEVERAGE +14%"
  },
  {
    "code": "OCE",
    "desc": "OTHER COLD BEVERAGE +16%"
  },
  {
    "code": "OCF",
    "desc": "OTHER COLD BEVERAGE +18%"
  },
  {
    "code": "OCG",
    "desc": "OTHER COLD BEVERAGE +20%"
  },
  {
    "code": "OCH",
    "desc": "OTHER COLD BEVERAGE -5%"
  },
  {
    "code": "OCI",
    "desc": "OTHER COLD BEVERAGE -10%"
  },
  {
    "code": "OCJ",
    "desc": "OTHER COLD BEVERAGE -12%"
  },
  {
    "code": "OCK",
    "desc": "OTHER COLD BEVERAGE -14%"
  },
  {
    "code": "OCL",
    "desc": "OTHER COLD BEVERAGE -16%"
  },
  {
    "code": "OCM",
    "desc": "OTHER COLD BEVERAGE -18%"
  },
  {
    "code": "OCN",
    "desc": "OTHER COLD BEVERAGE -20%"
  },
  {
    "code": "OCO",
    "desc": "OTHER COLD BEVERAGE +15%"
  },
  {
    "code": "OCP",
    "desc": "OTHER COLD BEVERAGE -15%"
  },
  {
    "code": "OCQ",
    "desc": "OTHER COLD BEVERAGE 0%"
  },
  {
    "code": "OHA",
    "desc": "OTHER HOT BEVERAGE +5%"
  },
  {
    "code": "OHB",
    "desc": "OTHER HOT BEVERAGE +10%"
  },
  {
    "code": "OHC",
    "desc": "OTHER HOT BEVERAGE +12%"
  },
  {
    "code": "OHD",
    "desc": "OTHER HOT BEVERAGE +14%"
  },
  {
    "code": "OHE",
    "desc": "OTHER HOT BEVERAGE +16%"
  },
  {
    "code": "OHF",
    "desc": "OTHER HOT BEVERAGE +18%"
  },
  {
    "code": "OHG",
    "desc": "OTHER HOT BEVERAGE +20%"
  },
  {
    "code": "OHH",
    "desc": "OTHER HOT BEVERAGE -5%"
  },
  {
    "code": "OHI",
    "desc": "OTHER HOT BEVERAGE -10%"
  },
  {
    "code": "OHJ",
    "desc": "OTHER HOT BEVERAGE -12%"
  },
  {
    "code": "OHK",
    "desc": "OTHER HOT BEVERAGE -14%"
  },
  {
    "code": "OHL",
    "desc": "OTHER HOT BEVERAGE -16%"
  },
  {
    "code": "OHM",
    "desc": "OTHER HOT BEVERAGE -18%"
  },
  {
    "code": "OHN",
    "desc": "OTHER HOT BEVERAGE -20%"
  },
  {
    "code": "OHO",
    "desc": "OTHER HOT BEVERAGE +15%"
  },
  {
    "code": "OHP",
    "desc": "OTHER HOT BEVERAGE -15%"
  },
  {
    "code": "OHQ",
    "desc": "OTHER HOT BEVERAGE 0%"
  },
  {
    "code": "SPA",
    "desc": "SPICE +5%"
  },
  {
    "code": "SPB",
    "desc": "SPICE +10%"
  },
  {
    "code": "SPC",
    "desc": "SPICE +12%"
  },
  {
    "code": "SPD",
    "desc": "SPICE +14%"
  },
  {
    "code": "SPE",
    "desc": "SPICE +16%"
  },
  {
    "code": "SPF",
    "desc": "SPICE +18%"
  },
  {
    "code": "SPG",
    "desc": "SPICE +20%"
  },
  {
    "code": "SPH",
    "desc": "SPICE -5%"
  },
  {
    "code": "SPI",
    "desc": "SPICE -10%"
  },
  {
    "code": "SPJ",
    "desc": "SPICE -12%"
  },
  {
    "code": "SPK",
    "desc": "SPICE -14%"
  },
  {
    "code": "SPL",
    "desc": "SPICE -16%"
  },
  {
    "code": "SPM",
    "desc": "SPICE -18%"
  },
  {
    "code": "SPN",
    "desc": "SPICE -20%"
  },
  {
    "code": "SPO",
    "desc": "SPICE +15%"
  },
  {
    "code": "SPP",
    "desc": "SPICE -15%"
  },
  {
    "code": "SPQ",
    "desc": "SPICE 0%"
  },
  {
    "code": "A",
    "desc": "List, 0"
  },
  {
    "code": "D",
    "desc": "10% Disc, "
  },
  {
    "code": 1,
    "desc": "100 lb Disc, -0.1"
  },
  {
    "code": 2,
    "desc": "250 lb Disc, -0.25"
  },
  {
    "code": 4,
    "desc": "400 lb Disc, -0.4"
  },
  {
    "code": "P",
    "desc": "PEP, -0.75"
  },
  {
    "code": 5,
    "desc": "PEP 100 lb Disc, -0.85"
  },
  {
    "code": 6,
    "desc": "PEP 250 lb Disc, -1"
  },
  {
    "code": 7,
    "desc": "PEP 400 lb Disc, -1.15"
  },
  {
    "code": "T",
    "desc": "$.50 off PEP, -1.25"
  },
  {
    "code": "U",
    "desc": "$.75 off PEP, -1.5"
  },
  {
    "code": "V",
    "desc": "$1.00 off PEP, -1.75"
  },
  {
    "code": 0,
    "desc": "California PEP, -1.25"
  },
  {
    "code": "F",
    "desc": "California 100 lb Disc, -1.35"
  },
  {
    "code": "G",
    "desc": "California 250 lb Disc, -1.5"
  },
  {
    "code": "H",
    "desc": "California 400 lb Disc, -1.65"
  }
];

export const NARFCatCodeNTLList = [
  { code: "Cat-Code 19 Price Adjustment", desc: "Cat-Code 19 Price Adjustment"},
  { code: "Cat-Code 20 Price Adjustment", desc: "Cat-Code 20 Price Adjustment"},
  { code: "Cat-Code 26 Price Adjustment", desc: "Cat-Code 26 Price Adjustment"},
  { code: "Cat-Code 30 Price Adjustment", desc: "Cat-Code 30 Price Adjustment"},
];

export const NARFCatCodeDSDList = [
  { code: "CC15", desc: "CAPP/COCOA" },
  { code: "CC16", desc: "ICED TEA" },
  { code: "CC17", desc: "CRM SUG SWTNR" },
  { code: "CC18", desc: "CULINARY" },
  { code: "CC19", desc: "BULK SPICE" },
  { code: "CC20", desc: "JUICE" },
  { code: "CC21", desc: "OTHR COLD BEV" },
  { code: "CC22", desc: "OTHR HOT BEV" },
  { code: "CC23", desc: "PANCK WFFL BISC" },
  { code: "CC24", desc: "SPICE" },
  { code: "CC25", desc: "NON FOOD" },
  { code: "CC26", desc: "SYRUPS" },
  { code: "CC27", desc: "LIQ COFFEE" },
  { code: "CC28", desc: "COFFEE" },
  { code: "CC29", desc: "COFF EQUIP PRGM" },
  { code: "CC30", desc: "SOUP BASE" },
];

export const NARFCatValueDSDList = [
  {code:"LLL", desc:"UP 105%"},
  {code:"L00", desc:"UP 0%"},
  {code:"L01", desc:"UP 5%"},
  {code:"L02", desc:"UP 10%"},
  {code:"L03", desc:"UP 15%"},
  {code:"L04", desc:"UP 20%"},
  {code:"L05", desc:"UP 25%"},
  {code:"L06", desc:"UP 30%"},
  {code:"L07", desc:"UP 35%"},
  {code:"L08", desc:"UP 40%"},
  {code:"L09", desc:"UP 45%"},
  {code:"L10", desc:"UP 50%"},
  {code:"L11", desc:"UP 55%"},
  {code:"L12", desc:"UP 60%"},
  {code:"L13", desc:"UP 65%"},
  {code:"L14", desc:"UP 70%"},
  {code:"L15", desc:"UP 75%"},
  {code:"L16", desc:"UP 80%"},
  {code:"L17", desc:"UP 85%"},
  {code:"L18", desc:"UP 90%"},
  {code:"L19", desc:"UP 95%"},
  {code:"L20", desc:"UP 100%"},
  {code:"L21", desc:"UP 105%"},
  {code:"L22", desc:"UP 110%"},
  {code:"L23", desc:"UP 115%"},
  {code:"L24", desc:"UP 120%"},
  {code:"L25", desc:"UP 125%"},
  {code:"L26", desc:"UP 130%"},
  {code:"L27", desc:"UP 135%"},
  {code:"L28", desc:"UP 140%"},
  {code:"L29", desc:"UP 145%"},
  {code:"L30", desc:"UP 150%"},
  {code:"L31", desc:"UP 155%"},
  {code:"L32", desc:"UP 160%"},
  {code:"L33", desc:"UP 165%"},
  {code:"L34", desc:"UP 170%"},
  {code:"L35", desc:"UP 175%"},
  {code:"L36", desc:"UP 180%"},
  {code:"L37", desc:"UP 185%"},
  {code:"L38", desc:"UP 190%"},
  {code:"L39", desc:"UP 195%"},
  {code:"L40", desc:"UP 200%"},
  {code:"L41", desc:"UP 205%"},
  {code:"L42", desc:"UP 210%"},
  {code:"L43", desc:"UP 215%"},
  {code:"L44", desc:"UP 220%"},
  {code:"L45", desc:"UP 225%"},
  {code:"L46", desc:"UP 230%"},
  {code:"L47", desc:"UP 235%"},
  {code:"L48", desc:"UP 240%"},
  {code:"L49", desc:"UP 245%"},
  {code:"L50", desc:"UP 250%"},
  {code:"L51", desc:"UP 255%"},
  {code:"L52", desc:"UP 260%"},
  {code:"L53", desc:"UP 265%"},
  {code:"L54", desc:"UP 270%"},
  {code:"L55", desc:"UP 275%"},
  {code:"L56", desc:"UP 280%"},
  {code:"L57", desc:"UP 285%"},
  {code:"L58", desc:"UP 290%"},
  {code:"L59", desc:"UP 295%"},
  {code:"L60", desc:"UP 300%"},
  ]
//////////////////////////////////

/*
//Also CatCode19PriceAdj
export const NARFCatAlliedAdj1List = [
  {
    "code": "CAA",
    "desc": "CAPPUCCINO +5%"
  },
  {
    "code": "CAB",
    "desc": "CAPPUCCINO +10%"
  },
  {
    "code": "CAC",
    "desc": "CAPPUCCINO +12%"
  },
  {
    "code": "CAD",
    "desc": "CAPPUCCINO +14%"
  },
  {
    "code": "CAE",
    "desc": "CAPPUCCINO +16%"
  },
  {
    "code": "CAF",
    "desc": "CAPPUCCINO +18%"
  },
  {
    "code": "CAG",
    "desc": "CAPPUCCINO +20%"
  },
  {
    "code": "CAH",
    "desc": "CAPPUCCINO -5%"
  },
  {
    "code": "CAI",
    "desc": "CAPPUCCINO -10%"
  },
  {
    "code": "CAJ",
    "desc": "CAPPUCCINO -12%"
  },
  {
    "code": "CAK",
    "desc": "CAPPUCCINO -14%"
  },
  {
    "code": "CAL",
    "desc": "CAPPUCCINO -16%"
  },
  {
    "code": "CAM",
    "desc": "CAPPUCCINO -18%"
  },
  {
    "code": "CAN",
    "desc": "CAPPUCCINO -20%"
  },
  {
    "code": "CAO",
    "desc": "CAPPUCCINO +15%"
  },
  {
    "code": "CAP",
    "desc": "CAPPUCCINO -15%"
  },
  {
    "code": "CAQ",
    "desc": "CAPPUCCINO 0%"
  },
  {
    "code": "COA",
    "desc": "HOT COCOA +5%"
  },
  {
    "code": "COB",
    "desc": "HOT COCOA +10%"
  },
  {
    "code": "COC",
    "desc": "HOT COCOA +12%"
  },
  {
    "code": "COD",
    "desc": "HOT COCOA +14%"
  },
  {
    "code": "COE",
    "desc": "HOT COCOA +16%"
  },
  {
    "code": "COF",
    "desc": "HOT COCOA +18%"
  },
  {
    "code": "COG",
    "desc": "HOT COCOA +20%"
  },
  {
    "code": "COH",
    "desc": "HOT COCOA -5%"
  },
  {
    "code": "COI",
    "desc": "HOT COCOA -10%"
  },
  {
    "code": "COJ",
    "desc": "HOT COCOA -12%"
  },
  {
    "code": "COK",
    "desc": "HOT COCOA -14%"
  },
  {
    "code": "COL",
    "desc": "HOT COCOA -16%"
  },
  {
    "code": "COM",
    "desc": "HOT COCOA -18%"
  },
  {
    "code": "CON",
    "desc": "HOT COCOA -20%"
  },
  {
    "code": "COO",
    "desc": "HOT COCOA +15%"
  },
  {
    "code": "COP",
    "desc": "HOT COCOA -15%"
  },
  {
    "code": "COQ",
    "desc": "HOT COCOA 0%"
  },
  {
    "code": "CUA",
    "desc": "CULINARY +5%"
  },
  {
    "code": "CUB",
    "desc": "CULINARY +10%"
  },
  {
    "code": "CUC",
    "desc": "CULINARY +12%"
  },
  {
    "code": "CUD",
    "desc": "CULINARY +14%"
  },
  {
    "code": "CUE",
    "desc": "CULINARY +16%"
  },
  {
    "code": "CUF",
    "desc": "CULINARY +18%"
  },
  {
    "code": "CUH",
    "desc": "CULINARY -5%"
  },
  {
    "code": "CUI",
    "desc": "CULINARY -10%"
  },
  {
    "code": "CUJ",
    "desc": "CULINARY -12%"
  },
  {
    "code": "CUK",
    "desc": "CULINARY -14%"
  },
  {
    "code": "CUL",
    "desc": "CULINARY -16%"
  },
  {
    "code": "CUM",
    "desc": "CULINARY -18%"
  },
  {
    "code": "CUN",
    "desc": "CULINARY -20%"
  },
  {
    "code": "CUO",
    "desc": "CULINARY +15%"
  },
  {
    "code": "CUP",
    "desc": "CULINARY -15%"
  },
  {
    "code": "CUQ",
    "desc": "CULINARY 0%"
  },
  {
    "code": "ICA",
    "desc": "ICED TEA +5%"
  },
  {
    "code": "ICB",
    "desc": "ICED TEA +10%"
  },
  {
    "code": "ICC",
    "desc": "ICED TEA +12%"
  },
  {
    "code": "ICD",
    "desc": "ICED TEA +14%"
  },
  {
    "code": "ICE",
    "desc": "ICED TEA +16%"
  },
  {
    "code": "ICF",
    "desc": "ICED TEA +18%"
  },
  {
    "code": "ICG",
    "desc": "ICED TEA +20%"
  },
  {
    "code": "ICH",
    "desc": "ICED TEA -5%"
  },
  {
    "code": "ICI",
    "desc": "ICED TEA -10%"
  },
  {
    "code": "ICJ",
    "desc": "ICED TEA -12%"
  },
  {
    "code": "ICK",
    "desc": "ICED TEA -14%"
  },
  {
    "code": "ICL",
    "desc": "ICED TEA -16%"
  },
  {
    "code": "ICM",
    "desc": "ICED TEA -18%"
  },
  {
    "code": "ICN",
    "desc": "ICED TEA -20%"
  },
  {
    "code": "ICO",
    "desc": "ICED TEA +15%"
  },
  {
    "code": "ICP",
    "desc": "ICED TEA -15%"
  },
  {
    "code": "ICQ",
    "desc": "ICED TEA 0%"
  },
  {
    "code": "JUA",
    "desc": "JUICE +5%"
  },
  {
    "code": "JUB",
    "desc": "JUICE +10%"
  },
  {
    "code": "JUC",
    "desc": "JUICE +12%"
  },
  {
    "code": "JUD",
    "desc": "JUICE +14%"
  },
  {
    "code": "JUE",
    "desc": "JUICE +16%"
  },
  {
    "code": "JUF",
    "desc": "JUICE +18%"
  },
  {
    "code": "JUG",
    "desc": "JUICE +20%"
  },
  {
    "code": "JUH",
    "desc": "JUICE -5%"
  },
  {
    "code": "JUI",
    "desc": "JUICE -10%"
  },
  {
    "code": "JUJ",
    "desc": "JUICE -12%"
  },
  {
    "code": "JUK",
    "desc": "JUICE -14%"
  },
  {
    "code": "JUL",
    "desc": "JUICE -16%"
  },
  {
    "code": "JUM",
    "desc": "JUICE -18%"
  },
  {
    "code": "JUN",
    "desc": "JUICE -20%"
  },
  {
    "code": "JUO",
    "desc": "JUICE +15%"
  },
  {
    "code": "JUP",
    "desc": "JUICE -15%"
  },
  {
    "code": "JUQ",
    "desc": "JUICE 0%"
  },
  {
    "code": "NFA",
    "desc": "NON-FOOD +5%"
  },
  {
    "code": "NFB",
    "desc": "NON-FOOD +10%"
  },
  {
    "code": "NFC",
    "desc": "NON-FOOD +12%"
  },
  {
    "code": "NFD",
    "desc": "NON-FOOD +14%"
  },
  {
    "code": "NFE",
    "desc": "NON-FOOD +16%"
  },
  {
    "code": "NFF",
    "desc": "NON-FOOD +18%"
  },
  {
    "code": "NFG",
    "desc": "NON-FOOD +20%"
  },
  {
    "code": "NFH",
    "desc": "NON-FOOD -5%"
  },
  {
    "code": "NFI",
    "desc": "NON-FOOD -10%"
  },
  {
    "code": "NFJ",
    "desc": "NON-FOOD -12%"
  },
  {
    "code": "NFK",
    "desc": "NON-FOOD -14%"
  },
  {
    "code": "NFL",
    "desc": "NON-FOOD -16%"
  },
  {
    "code": "NFM",
    "desc": "NON-FOOD -18%"
  },
  {
    "code": "NFN",
    "desc": "NON-FOOD -20%"
  },
  {
    "code": "NFO",
    "desc": "NON-FOOD +15%"
  },
  {
    "code": "NFP",
    "desc": "NON-FOOD -15%"
  },
  {
    "code": "NFQ",
    "desc": "NON FOOD 0%"
  },
  {
    "code": "OCA",
    "desc": "OTHER COLD BEVERAGE +5%"
  },
  {
    "code": "OCB",
    "desc": "OTHER COLD BEVERAGE +10%"
  },
  {
    "code": "OCC",
    "desc": "OTHER COLD BEVERAGE +12%"
  },
  {
    "code": "OCD",
    "desc": "OTHER COLD BEVERAGE +14%"
  },
  {
    "code": "OCE",
    "desc": "OTHER COLD BEVERAGE +16%"
  },
  {
    "code": "OCF",
    "desc": "OTHER COLD BEVERAGE +18%"
  },
  {
    "code": "OCG",
    "desc": "OTHER COLD BEVERAGE +20%"
  },
  {
    "code": "OCH",
    "desc": "OTHER COLD BEVERAGE -5%"
  },
  {
    "code": "OCI",
    "desc": "OTHER COLD BEVERAGE -10%"
  },
  {
    "code": "OCJ",
    "desc": "OTHER COLD BEVERAGE -12%"
  },
  {
    "code": "OCK",
    "desc": "OTHER COLD BEVERAGE -14%"
  },
  {
    "code": "OCL",
    "desc": "OTHER COLD BEVERAGE -16%"
  },
  {
    "code": "OCM",
    "desc": "OTHER COLD BEVERAGE -18%"
  },
  {
    "code": "OCN",
    "desc": "OTHER COLD BEVERAGE -20%"
  },
  {
    "code": "OCO",
    "desc": "OTHER COLD BEVERAGE +15%"
  },
  {
    "code": "OCP",
    "desc": "OTHER COLD BEVERAGE -15%"
  },
  {
    "code": "OCQ",
    "desc": "OTHER COLD BEVERAGE 0%"
  },
  {
    "code": "OHA",
    "desc": "OTHER HOT BEVERAGE +5%"
  },
  {
    "code": "OHB",
    "desc": "OTHER HOT BEVERAGE +10%"
  },
  {
    "code": "OHC",
    "desc": "OTHER HOT BEVERAGE +12%"
  },
  {
    "code": "OHD",
    "desc": "OTHER HOT BEVERAGE +14%"
  },
  {
    "code": "OHE",
    "desc": "OTHER HOT BEVERAGE +16%"
  },
  {
    "code": "OHF",
    "desc": "OTHER HOT BEVERAGE +18%"
  },
  {
    "code": "OHG",
    "desc": "OTHER HOT BEVERAGE +20%"
  },
  {
    "code": "OHH",
    "desc": "OTHER HOT BEVERAGE -5%"
  },
  {
    "code": "OHI",
    "desc": "OTHER HOT BEVERAGE -10%"
  },
  {
    "code": "OHJ",
    "desc": "OTHER HOT BEVERAGE -12%"
  },
  {
    "code": "OHK",
    "desc": "OTHER HOT BEVERAGE -14%"
  },
  {
    "code": "OHL",
    "desc": "OTHER HOT BEVERAGE -16%"
  },
  {
    "code": "OHM",
    "desc": "OTHER HOT BEVERAGE -18%"
  },
  {
    "code": "OHN",
    "desc": "OTHER HOT BEVERAGE -20%"
  },
  {
    "code": "OHO",
    "desc": "OTHER HOT BEVERAGE +15%"
  },
  {
    "code": "OHP",
    "desc": "OTHER HOT BEVERAGE -15%"
  },
  {
    "code": "OHQ",
    "desc": "OTHER HOT BEVERAGE 0%"
  },
  {
    "code": "SPA",
    "desc": "SPICE +5%"
  },
  {
    "code": "SPB",
    "desc": "SPICE +10%"
  },
  {
    "code": "SPC",
    "desc": "SPICE +12%"
  },
  {
    "code": "SPD",
    "desc": "SPICE +14%"
  },
  {
    "code": "SPE",
    "desc": "SPICE +16%"
  },
  {
    "code": "SPF",
    "desc": "SPICE +18%"
  },
  {
    "code": "SPG",
    "desc": "SPICE +20%"
  },
  {
    "code": "SPH",
    "desc": "SPICE -5%"
  },
  {
    "code": "SPI",
    "desc": "SPICE -10%"
  },
  {
    "code": "SPJ",
    "desc": "SPICE -12%"
  },
  {
    "code": "SPK",
    "desc": "SPICE -14%"
  },
  {
    "code": "SPL",
    "desc": "SPICE -16%"
  },
  {
    "code": "SPM",
    "desc": "SPICE -18%"
  },
  {
    "code": "SPN",
    "desc": "SPICE -20%"
  },
  {
    "code": "SPO",
    "desc": "SPICE +15%"
  },
  {
    "code": "SPP",
    "desc": "SPICE -15%"
  },
  {
    "code": "SPQ",
    "desc": "SPICE 0%"
  },
  {
    "code": "A",
    "desc": "List, 0"
  },
  {
    "code": "D",
    "desc": "10% Disc, "
  },
  {
    "code": 1,
    "desc": "100 lb Disc, -0.1"
  },
  {
    "code": 2,
    "desc": "250 lb Disc, -0.25"
  },
  {
    "code": 4,
    "desc": "400 lb Disc, -0.4"
  },
  {
    "code": "P",
    "desc": "PEP, -0.75"
  },
  {
    "code": 5,
    "desc": "PEP 100 lb Disc, -0.85"
  },
  {
    "code": 6,
    "desc": "PEP 250 lb Disc, -1"
  },
  {
    "code": 7,
    "desc": "PEP 400 lb Disc, -1.15"
  },
  {
    "code": "T",
    "desc": "$.50 off PEP, -1.25"
  },
  {
    "code": "U",
    "desc": "$.75 off PEP, -1.5"
  },
  {
    "code": "V",
    "desc": "$1.00 off PEP, -1.75"
  },
  {
    "code": 0,
    "desc": "California PEP, -1.25"
  },
  {
    "code": "F",
    "desc": "California 100 lb Disc, -1.35"
  },
  {
    "code": "G",
    "desc": "California 250 lb Disc, -1.5"
  },
  {
    "code": "H",
    "desc": "California 400 lb Disc, -1.65"
  }
]; 

//Also CatCode20PriceAdj
export const NARFCatAlliedAdj2List = [
  {
    "code": "CAA",
    "desc": "CAPPUCCINO +5%"
  },
  {
    "code": "CAB",
    "desc": "CAPPUCCINO +10%"
  },
  {
    "code": "CAC",
    "desc": "CAPPUCCINO +12%"
  },
  {
    "code": "CAD",
    "desc": "CAPPUCCINO +14%"
  },
  {
    "code": "CAE",
    "desc": "CAPPUCCINO +16%"
  },
  {
    "code": "CAF",
    "desc": "CAPPUCCINO +18%"
  },
  {
    "code": "CAG",
    "desc": "CAPPUCCINO +20%"
  },
  {
    "code": "CAH",
    "desc": "CAPPUCCINO -5%"
  },
  {
    "code": "CAI",
    "desc": "CAPPUCCINO -10%"
  },
  {
    "code": "CAJ",
    "desc": "CAPPUCCINO -12%"
  },
  {
    "code": "CAK",
    "desc": "CAPPUCCINO -14%"
  },
  {
    "code": "CAL",
    "desc": "CAPPUCCINO -16%"
  },
  {
    "code": "CAM",
    "desc": "CAPPUCCINO -18%"
  },
  {
    "code": "CAN",
    "desc": "CAPPUCCINO -20%"
  },
  {
    "code": "CAO",
    "desc": "CAPPUCCINO +15%"
  },
  {
    "code": "CAP",
    "desc": "CAPPUCCINO -15%"
  },
  {
    "code": "CAQ",
    "desc": "CAPPUCCINO 0%"
  },
  {
    "code": "COA",
    "desc": "HOT COCOA +5%"
  },
  {
    "code": "COB",
    "desc": "HOT COCOA +10%"
  },
  {
    "code": "COC",
    "desc": "HOT COCOA +12%"
  },
  {
    "code": "COD",
    "desc": "HOT COCOA +14%"
  },
  {
    "code": "COE",
    "desc": "HOT COCOA +16%"
  },
  {
    "code": "COF",
    "desc": "HOT COCOA +18%"
  },
  {
    "code": "COG",
    "desc": "HOT COCOA +20%"
  },
  {
    "code": "COH",
    "desc": "HOT COCOA -5%"
  },
  {
    "code": "COI",
    "desc": "HOT COCOA -10%"
  },
  {
    "code": "COJ",
    "desc": "HOT COCOA -12%"
  },
  {
    "code": "COK",
    "desc": "HOT COCOA -14%"
  },
  {
    "code": "COL",
    "desc": "HOT COCOA -16%"
  },
  {
    "code": "COM",
    "desc": "HOT COCOA -18%"
  },
  {
    "code": "CON",
    "desc": "HOT COCOA -20%"
  },
  {
    "code": "COO",
    "desc": "HOT COCOA +15%"
  },
  {
    "code": "COP",
    "desc": "HOT COCOA -15%"
  },
  {
    "code": "COQ",
    "desc": "HOT COCOA 0%"
  },
  {
    "code": "CUA",
    "desc": "CULINARY +5%"
  },
  {
    "code": "CUB",
    "desc": "CULINARY +10%"
  },
  {
    "code": "CUC",
    "desc": "CULINARY +12%"
  },
  {
    "code": "CUD",
    "desc": "CULINARY +14%"
  },
  {
    "code": "CUE",
    "desc": "CULINARY +16%"
  },
  {
    "code": "CUF",
    "desc": "CULINARY +18%"
  },
  {
    "code": "CUH",
    "desc": "CULINARY -5%"
  },
  {
    "code": "CUI",
    "desc": "CULINARY -10%"
  },
  {
    "code": "CUJ",
    "desc": "CULINARY -12%"
  },
  {
    "code": "CUK",
    "desc": "CULINARY -14%"
  },
  {
    "code": "CUL",
    "desc": "CULINARY -16%"
  },
  {
    "code": "CUM",
    "desc": "CULINARY -18%"
  },
  {
    "code": "CUN",
    "desc": "CULINARY -20%"
  },
  {
    "code": "CUO",
    "desc": "CULINARY +15%"
  },
  {
    "code": "CUP",
    "desc": "CULINARY -15%"
  },
  {
    "code": "CUQ",
    "desc": "CULINARY 0%"
  },
  {
    "code": "ICA",
    "desc": "ICED TEA +5%"
  },
  {
    "code": "ICB",
    "desc": "ICED TEA +10%"
  },
  {
    "code": "ICC",
    "desc": "ICED TEA +12%"
  },
  {
    "code": "ICD",
    "desc": "ICED TEA +14%"
  },
  {
    "code": "ICE",
    "desc": "ICED TEA +16%"
  },
  {
    "code": "ICF",
    "desc": "ICED TEA +18%"
  },
  {
    "code": "ICG",
    "desc": "ICED TEA +20%"
  },
  {
    "code": "ICH",
    "desc": "ICED TEA -5%"
  },
  {
    "code": "ICI",
    "desc": "ICED TEA -10%"
  },
  {
    "code": "ICJ",
    "desc": "ICED TEA -12%"
  },
  {
    "code": "ICK",
    "desc": "ICED TEA -14%"
  },
  {
    "code": "ICL",
    "desc": "ICED TEA -16%"
  },
  {
    "code": "ICM",
    "desc": "ICED TEA -18%"
  },
  {
    "code": "ICN",
    "desc": "ICED TEA -20%"
  },
  {
    "code": "ICO",
    "desc": "ICED TEA +15%"
  },
  {
    "code": "ICP",
    "desc": "ICED TEA -15%"
  },
  {
    "code": "ICQ",
    "desc": "ICED TEA 0%"
  },
  {
    "code": "JUA",
    "desc": "JUICE +5%"
  },
  {
    "code": "JUB",
    "desc": "JUICE +10%"
  },
  {
    "code": "JUC",
    "desc": "JUICE +12%"
  },
  {
    "code": "JUD",
    "desc": "JUICE +14%"
  },
  {
    "code": "JUE",
    "desc": "JUICE +16%"
  },
  {
    "code": "JUF",
    "desc": "JUICE +18%"
  },
  {
    "code": "JUG",
    "desc": "JUICE +20%"
  },
  {
    "code": "JUH",
    "desc": "JUICE -5%"
  },
  {
    "code": "JUI",
    "desc": "JUICE -10%"
  },
  {
    "code": "JUJ",
    "desc": "JUICE -12%"
  },
  {
    "code": "JUK",
    "desc": "JUICE -14%"
  },
  {
    "code": "JUL",
    "desc": "JUICE -16%"
  },
  {
    "code": "JUM",
    "desc": "JUICE -18%"
  },
  {
    "code": "JUN",
    "desc": "JUICE -20%"
  },
  {
    "code": "JUO",
    "desc": "JUICE +15%"
  },
  {
    "code": "JUP",
    "desc": "JUICE -15%"
  },
  {
    "code": "JUQ",
    "desc": "JUICE 0%"
  },
  {
    "code": "NFA",
    "desc": "NON-FOOD +5%"
  },
  {
    "code": "NFB",
    "desc": "NON-FOOD +10%"
  },
  {
    "code": "NFC",
    "desc": "NON-FOOD +12%"
  },
  {
    "code": "NFD",
    "desc": "NON-FOOD +14%"
  },
  {
    "code": "NFE",
    "desc": "NON-FOOD +16%"
  },
  {
    "code": "NFF",
    "desc": "NON-FOOD +18%"
  },
  {
    "code": "NFG",
    "desc": "NON-FOOD +20%"
  },
  {
    "code": "NFH",
    "desc": "NON-FOOD -5%"
  },
  {
    "code": "NFI",
    "desc": "NON-FOOD -10%"
  },
  {
    "code": "NFJ",
    "desc": "NON-FOOD -12%"
  },
  {
    "code": "NFK",
    "desc": "NON-FOOD -14%"
  },
  {
    "code": "NFL",
    "desc": "NON-FOOD -16%"
  },
  {
    "code": "NFM",
    "desc": "NON-FOOD -18%"
  },
  {
    "code": "NFN",
    "desc": "NON-FOOD -20%"
  },
  {
    "code": "NFO",
    "desc": "NON-FOOD +15%"
  },
  {
    "code": "NFP",
    "desc": "NON-FOOD -15%"
  },
  {
    "code": "NFQ",
    "desc": "NON FOOD 0%"
  },
  {
    "code": "OCA",
    "desc": "OTHER COLD BEVERAGE +5%"
  },
  {
    "code": "OCB",
    "desc": "OTHER COLD BEVERAGE +10%"
  },
  {
    "code": "OCC",
    "desc": "OTHER COLD BEVERAGE +12%"
  },
  {
    "code": "OCD",
    "desc": "OTHER COLD BEVERAGE +14%"
  },
  {
    "code": "OCE",
    "desc": "OTHER COLD BEVERAGE +16%"
  },
  {
    "code": "OCF",
    "desc": "OTHER COLD BEVERAGE +18%"
  },
  {
    "code": "OCG",
    "desc": "OTHER COLD BEVERAGE +20%"
  },
  {
    "code": "OCH",
    "desc": "OTHER COLD BEVERAGE -5%"
  },
  {
    "code": "OCI",
    "desc": "OTHER COLD BEVERAGE -10%"
  },
  {
    "code": "OCJ",
    "desc": "OTHER COLD BEVERAGE -12%"
  },
  {
    "code": "OCK",
    "desc": "OTHER COLD BEVERAGE -14%"
  },
  {
    "code": "OCL",
    "desc": "OTHER COLD BEVERAGE -16%"
  },
  {
    "code": "OCM",
    "desc": "OTHER COLD BEVERAGE -18%"
  },
  {
    "code": "OCN",
    "desc": "OTHER COLD BEVERAGE -20%"
  },
  {
    "code": "OCO",
    "desc": "OTHER COLD BEVERAGE +15%"
  },
  {
    "code": "OCP",
    "desc": "OTHER COLD BEVERAGE -15%"
  },
  {
    "code": "OCQ",
    "desc": "OTHER COLD BEVERAGE 0%"
  },
  {
    "code": "OHA",
    "desc": "OTHER HOT BEVERAGE +5%"
  },
  {
    "code": "OHB",
    "desc": "OTHER HOT BEVERAGE +10%"
  },
  {
    "code": "OHC",
    "desc": "OTHER HOT BEVERAGE +12%"
  },
  {
    "code": "OHD",
    "desc": "OTHER HOT BEVERAGE +14%"
  },
  {
    "code": "OHE",
    "desc": "OTHER HOT BEVERAGE +16%"
  },
  {
    "code": "OHF",
    "desc": "OTHER HOT BEVERAGE +18%"
  },
  {
    "code": "OHG",
    "desc": "OTHER HOT BEVERAGE +20%"
  },
  {
    "code": "OHH",
    "desc": "OTHER HOT BEVERAGE -5%"
  },
  {
    "code": "OHI",
    "desc": "OTHER HOT BEVERAGE -10%"
  },
  {
    "code": "OHJ",
    "desc": "OTHER HOT BEVERAGE -12%"
  },
  {
    "code": "OHK",
    "desc": "OTHER HOT BEVERAGE -14%"
  },
  {
    "code": "OHL",
    "desc": "OTHER HOT BEVERAGE -16%"
  },
  {
    "code": "OHM",
    "desc": "OTHER HOT BEVERAGE -18%"
  },
  {
    "code": "OHN",
    "desc": "OTHER HOT BEVERAGE -20%"
  },
  {
    "code": "OHO",
    "desc": "OTHER HOT BEVERAGE +15%"
  },
  {
    "code": "OHP",
    "desc": "OTHER HOT BEVERAGE -15%"
  },
  {
    "code": "OHQ",
    "desc": "OTHER HOT BEVERAGE 0%"
  },
  {
    "code": "SPA",
    "desc": "SPICE +5%"
  },
  {
    "code": "SPB",
    "desc": "SPICE +10%"
  },
  {
    "code": "SPC",
    "desc": "SPICE +12%"
  },
  {
    "code": "SPD",
    "desc": "SPICE +14%"
  },
  {
    "code": "SPE",
    "desc": "SPICE +16%"
  },
  {
    "code": "SPF",
    "desc": "SPICE +18%"
  },
  {
    "code": "SPG",
    "desc": "SPICE +20%"
  },
  {
    "code": "SPH",
    "desc": "SPICE -5%"
  },
  {
    "code": "SPI",
    "desc": "SPICE -10%"
  },
  {
    "code": "SPJ",
    "desc": "SPICE -12%"
  },
  {
    "code": "SPK",
    "desc": "SPICE -14%"
  },
  {
    "code": "SPL",
    "desc": "SPICE -16%"
  },
  {
    "code": "SPM",
    "desc": "SPICE -18%"
  },
  {
    "code": "SPN",
    "desc": "SPICE -20%"
  },
  {
    "code": "SPO",
    "desc": "SPICE +15%"
  },
  {
    "code": "SPP",
    "desc": "SPICE -15%"
  },
  {
    "code": "SPQ",
    "desc": "SPICE 0%"
  },
  {
    "code": "E",
    "desc": "29, Cocoa 10%"
  },
  {
    "code": "G",
    "desc": "26, Xanadu 15%"
  },
  {
    "code": "H",
    "desc": "31, XAN 10% BULK"
  }
];

//Also CatCode26PriceAdj
export const NARFCatAlliedAdj3List = [
  {
    "code": "CAA",
    "desc": "CAPPUCCINO +5%"
  },
  {
    "code": "CAB",
    "desc": "CAPPUCCINO +10%"
  },
  {
    "code": "CAC",
    "desc": "CAPPUCCINO +12%"
  },
  {
    "code": "CAD",
    "desc": "CAPPUCCINO +14%"
  },
  {
    "code": "CAE",
    "desc": "CAPPUCCINO +16%"
  },
  {
    "code": "CAF",
    "desc": "CAPPUCCINO +18%"
  },
  {
    "code": "CAG",
    "desc": "CAPPUCCINO +20%"
  },
  {
    "code": "CAH",
    "desc": "CAPPUCCINO -5%"
  },
  {
    "code": "CAI",
    "desc": "CAPPUCCINO -10%"
  },
  {
    "code": "CAJ",
    "desc": "CAPPUCCINO -12%"
  },
  {
    "code": "CAK",
    "desc": "CAPPUCCINO -14%"
  },
  {
    "code": "CAL",
    "desc": "CAPPUCCINO -16%"
  },
  {
    "code": "CAM",
    "desc": "CAPPUCCINO -18%"
  },
  {
    "code": "CAN",
    "desc": "CAPPUCCINO -20%"
  },
  {
    "code": "CAO",
    "desc": "CAPPUCCINO +15%"
  },
  {
    "code": "CAP",
    "desc": "CAPPUCCINO -15%"
  },
  {
    "code": "CAQ",
    "desc": "CAPPUCCINO 0%"
  },
  {
    "code": "COA",
    "desc": "HOT COCOA +5%"
  },
  {
    "code": "COB",
    "desc": "HOT COCOA +10%"
  },
  {
    "code": "COC",
    "desc": "HOT COCOA +12%"
  },
  {
    "code": "COD",
    "desc": "HOT COCOA +14%"
  },
  {
    "code": "COE",
    "desc": "HOT COCOA +16%"
  },
  {
    "code": "COF",
    "desc": "HOT COCOA +18%"
  },
  {
    "code": "COG",
    "desc": "HOT COCOA +20%"
  },
  {
    "code": "COH",
    "desc": "HOT COCOA -5%"
  },
  {
    "code": "COI",
    "desc": "HOT COCOA -10%"
  },
  {
    "code": "COJ",
    "desc": "HOT COCOA -12%"
  },
  {
    "code": "COK",
    "desc": "HOT COCOA -14%"
  },
  {
    "code": "COL",
    "desc": "HOT COCOA -16%"
  },
  {
    "code": "COM",
    "desc": "HOT COCOA -18%"
  },
  {
    "code": "CON",
    "desc": "HOT COCOA -20%"
  },
  {
    "code": "COO",
    "desc": "HOT COCOA +15%"
  },
  {
    "code": "COP",
    "desc": "HOT COCOA -15%"
  },
  {
    "code": "COQ",
    "desc": "HOT COCOA 0%"
  },
  {
    "code": "CUA",
    "desc": "CULINARY +5%"
  },
  {
    "code": "CUB",
    "desc": "CULINARY +10%"
  },
  {
    "code": "CUC",
    "desc": "CULINARY +12%"
  },
  {
    "code": "CUD",
    "desc": "CULINARY +14%"
  },
  {
    "code": "CUE",
    "desc": "CULINARY +16%"
  },
  {
    "code": "CUF",
    "desc": "CULINARY +18%"
  },
  {
    "code": "CUH",
    "desc": "CULINARY -5%"
  },
  {
    "code": "CUI",
    "desc": "CULINARY -10%"
  },
  {
    "code": "CUJ",
    "desc": "CULINARY -12%"
  },
  {
    "code": "CUK",
    "desc": "CULINARY -14%"
  },
  {
    "code": "CUL",
    "desc": "CULINARY -16%"
  },
  {
    "code": "CUM",
    "desc": "CULINARY -18%"
  },
  {
    "code": "CUN",
    "desc": "CULINARY -20%"
  },
  {
    "code": "CUO",
    "desc": "CULINARY +15%"
  },
  {
    "code": "CUP",
    "desc": "CULINARY -15%"
  },
  {
    "code": "CUQ",
    "desc": "CULINARY 0%"
  },
  {
    "code": "ICA",
    "desc": "ICED TEA +5%"
  },
  {
    "code": "ICB",
    "desc": "ICED TEA +10%"
  },
  {
    "code": "ICC",
    "desc": "ICED TEA +12%"
  },
  {
    "code": "ICD",
    "desc": "ICED TEA +14%"
  },
  {
    "code": "ICE",
    "desc": "ICED TEA +16%"
  },
  {
    "code": "ICF",
    "desc": "ICED TEA +18%"
  },
  {
    "code": "ICG",
    "desc": "ICED TEA +20%"
  },
  {
    "code": "ICH",
    "desc": "ICED TEA -5%"
  },
  {
    "code": "ICI",
    "desc": "ICED TEA -10%"
  },
  {
    "code": "ICJ",
    "desc": "ICED TEA -12%"
  },
  {
    "code": "ICK",
    "desc": "ICED TEA -14%"
  },
  {
    "code": "ICL",
    "desc": "ICED TEA -16%"
  },
  {
    "code": "ICM",
    "desc": "ICED TEA -18%"
  },
  {
    "code": "ICN",
    "desc": "ICED TEA -20%"
  },
  {
    "code": "ICO",
    "desc": "ICED TEA +15%"
  },
  {
    "code": "ICP",
    "desc": "ICED TEA -15%"
  },
  {
    "code": "ICQ",
    "desc": "ICED TEA 0%"
  },
  {
    "code": "JUA",
    "desc": "JUICE +5%"
  },
  {
    "code": "JUB",
    "desc": "JUICE +10%"
  },
  {
    "code": "JUC",
    "desc": "JUICE +12%"
  },
  {
    "code": "JUD",
    "desc": "JUICE +14%"
  },
  {
    "code": "JUE",
    "desc": "JUICE +16%"
  },
  {
    "code": "JUF",
    "desc": "JUICE +18%"
  },
  {
    "code": "JUG",
    "desc": "JUICE +20%"
  },
  {
    "code": "JUH",
    "desc": "JUICE -5%"
  },
  {
    "code": "JUI",
    "desc": "JUICE -10%"
  },
  {
    "code": "JUJ",
    "desc": "JUICE -12%"
  },
  {
    "code": "JUK",
    "desc": "JUICE -14%"
  },
  {
    "code": "JUL",
    "desc": "JUICE -16%"
  },
  {
    "code": "JUM",
    "desc": "JUICE -18%"
  },
  {
    "code": "JUN",
    "desc": "JUICE -20%"
  },
  {
    "code": "JUO",
    "desc": "JUICE +15%"
  },
  {
    "code": "JUP",
    "desc": "JUICE -15%"
  },
  {
    "code": "JUQ",
    "desc": "JUICE 0%"
  },
  {
    "code": "NFA",
    "desc": "NON-FOOD +5%"
  },
  {
    "code": "NFB",
    "desc": "NON-FOOD +10%"
  },
  {
    "code": "NFC",
    "desc": "NON-FOOD +12%"
  },
  {
    "code": "NFD",
    "desc": "NON-FOOD +14%"
  },
  {
    "code": "NFE",
    "desc": "NON-FOOD +16%"
  },
  {
    "code": "NFF",
    "desc": "NON-FOOD +18%"
  },
  {
    "code": "NFG",
    "desc": "NON-FOOD +20%"
  },
  {
    "code": "NFH",
    "desc": "NON-FOOD -5%"
  },
  {
    "code": "NFI",
    "desc": "NON-FOOD -10%"
  },
  {
    "code": "NFJ",
    "desc": "NON-FOOD -12%"
  },
  {
    "code": "NFK",
    "desc": "NON-FOOD -14%"
  },
  {
    "code": "NFL",
    "desc": "NON-FOOD -16%"
  },
  {
    "code": "NFM",
    "desc": "NON-FOOD -18%"
  },
  {
    "code": "NFN",
    "desc": "NON-FOOD -20%"
  },
  {
    "code": "NFO",
    "desc": "NON-FOOD +15%"
  },
  {
    "code": "NFP",
    "desc": "NON-FOOD -15%"
  },
  {
    "code": "NFQ",
    "desc": "NON FOOD 0%"
  },
  {
    "code": "OCA",
    "desc": "OTHER COLD BEVERAGE +5%"
  },
  {
    "code": "OCB",
    "desc": "OTHER COLD BEVERAGE +10%"
  },
  {
    "code": "OCC",
    "desc": "OTHER COLD BEVERAGE +12%"
  },
  {
    "code": "OCD",
    "desc": "OTHER COLD BEVERAGE +14%"
  },
  {
    "code": "OCE",
    "desc": "OTHER COLD BEVERAGE +16%"
  },
  {
    "code": "OCF",
    "desc": "OTHER COLD BEVERAGE +18%"
  },
  {
    "code": "OCG",
    "desc": "OTHER COLD BEVERAGE +20%"
  },
  {
    "code": "OCH",
    "desc": "OTHER COLD BEVERAGE -5%"
  },
  {
    "code": "OCI",
    "desc": "OTHER COLD BEVERAGE -10%"
  },
  {
    "code": "OCJ",
    "desc": "OTHER COLD BEVERAGE -12%"
  },
  {
    "code": "OCK",
    "desc": "OTHER COLD BEVERAGE -14%"
  },
  {
    "code": "OCL",
    "desc": "OTHER COLD BEVERAGE -16%"
  },
  {
    "code": "OCM",
    "desc": "OTHER COLD BEVERAGE -18%"
  },
  {
    "code": "OCN",
    "desc": "OTHER COLD BEVERAGE -20%"
  },
  {
    "code": "OCO",
    "desc": "OTHER COLD BEVERAGE +15%"
  },
  {
    "code": "OCP",
    "desc": "OTHER COLD BEVERAGE -15%"
  },
  {
    "code": "OCQ",
    "desc": "OTHER COLD BEVERAGE 0%"
  },
  {
    "code": "OHA",
    "desc": "OTHER HOT BEVERAGE +5%"
  },
  {
    "code": "OHB",
    "desc": "OTHER HOT BEVERAGE +10%"
  },
  {
    "code": "OHC",
    "desc": "OTHER HOT BEVERAGE +12%"
  },
  {
    "code": "OHD",
    "desc": "OTHER HOT BEVERAGE +14%"
  },
  {
    "code": "OHE",
    "desc": "OTHER HOT BEVERAGE +16%"
  },
  {
    "code": "OHF",
    "desc": "OTHER HOT BEVERAGE +18%"
  },
  {
    "code": "OHG",
    "desc": "OTHER HOT BEVERAGE +20%"
  },
  {
    "code": "OHH",
    "desc": "OTHER HOT BEVERAGE -5%"
  },
  {
    "code": "OHI",
    "desc": "OTHER HOT BEVERAGE -10%"
  },
  {
    "code": "OHJ",
    "desc": "OTHER HOT BEVERAGE -12%"
  },
  {
    "code": "OHK",
    "desc": "OTHER HOT BEVERAGE -14%"
  },
  {
    "code": "OHL",
    "desc": "OTHER HOT BEVERAGE -16%"
  },
  {
    "code": "OHM",
    "desc": "OTHER HOT BEVERAGE -18%"
  },
  {
    "code": "OHN",
    "desc": "OTHER HOT BEVERAGE -20%"
  },
  {
    "code": "OHO",
    "desc": "OTHER HOT BEVERAGE +15%"
  },
  {
    "code": "OHP",
    "desc": "OTHER HOT BEVERAGE -15%"
  },
  {
    "code": "OHQ",
    "desc": "OTHER HOT BEVERAGE 0%"
  },
  {
    "code": "SPA",
    "desc": "SPICE +5%"
  },
  {
    "code": "SPB",
    "desc": "SPICE +10%"
  },
  {
    "code": "SPC",
    "desc": "SPICE +12%"
  },
  {
    "code": "SPD",
    "desc": "SPICE +14%"
  },
  {
    "code": "SPE",
    "desc": "SPICE +16%"
  },
  {
    "code": "SPF",
    "desc": "SPICE +18%"
  },
  {
    "code": "SPG",
    "desc": "SPICE +20%"
  },
  {
    "code": "SPH",
    "desc": "SPICE -5%"
  },
  {
    "code": "SPI",
    "desc": "SPICE -10%"
  },
  {
    "code": "SPJ",
    "desc": "SPICE -12%"
  },
  {
    "code": "SPK",
    "desc": "SPICE -14%"
  },
  {
    "code": "SPL",
    "desc": "SPICE -16%"
  },
  {
    "code": "SPM",
    "desc": "SPICE -18%"
  },
  {
    "code": "SPN",
    "desc": "SPICE -20%"
  },
  {
    "code": "SPO",
    "desc": "SPICE +15%"
  },
  {
    "code": "SPP",
    "desc": "SPICE -15%"
  },
  {
    "code": "SPQ",
    "desc": "SPICE 0%"
  },
  {
    "code": "A",
    "desc": "10, PEP Discounts"
  }
];

//Also CatCode30PriceAdj
export const NARFCatAlliedAdj4List = [
  {
    "code": "CAA",
    "desc": "CAPPUCCINO +5%"
  },
  {
    "code": "CAB",
    "desc": "CAPPUCCINO +10%"
  },
  {
    "code": "CAC",
    "desc": "CAPPUCCINO +12%"
  },
  {
    "code": "CAD",
    "desc": "CAPPUCCINO +14%"
  },
  {
    "code": "CAE",
    "desc": "CAPPUCCINO +16%"
  },
  {
    "code": "CAF",
    "desc": "CAPPUCCINO +18%"
  },
  {
    "code": "CAG",
    "desc": "CAPPUCCINO +20%"
  },
  {
    "code": "CAH",
    "desc": "CAPPUCCINO -5%"
  },
  {
    "code": "CAI",
    "desc": "CAPPUCCINO -10%"
  },
  {
    "code": "CAJ",
    "desc": "CAPPUCCINO -12%"
  },
  {
    "code": "CAK",
    "desc": "CAPPUCCINO -14%"
  },
  {
    "code": "CAL",
    "desc": "CAPPUCCINO -16%"
  },
  {
    "code": "CAM",
    "desc": "CAPPUCCINO -18%"
  },
  {
    "code": "CAN",
    "desc": "CAPPUCCINO -20%"
  },
  {
    "code": "CAO",
    "desc": "CAPPUCCINO +15%"
  },
  {
    "code": "CAP",
    "desc": "CAPPUCCINO -15%"
  },
  {
    "code": "CAQ",
    "desc": "CAPPUCCINO 0%"
  },
  {
    "code": "COA",
    "desc": "HOT COCOA +5%"
  },
  {
    "code": "COB",
    "desc": "HOT COCOA +10%"
  },
  {
    "code": "COC",
    "desc": "HOT COCOA +12%"
  },
  {
    "code": "COD",
    "desc": "HOT COCOA +14%"
  },
  {
    "code": "COE",
    "desc": "HOT COCOA +16%"
  },
  {
    "code": "COF",
    "desc": "HOT COCOA +18%"
  },
  {
    "code": "COG",
    "desc": "HOT COCOA +20%"
  },
  {
    "code": "COH",
    "desc": "HOT COCOA -5%"
  },
  {
    "code": "COI",
    "desc": "HOT COCOA -10%"
  },
  {
    "code": "COJ",
    "desc": "HOT COCOA -12%"
  },
  {
    "code": "COK",
    "desc": "HOT COCOA -14%"
  },
  {
    "code": "COL",
    "desc": "HOT COCOA -16%"
  },
  {
    "code": "COM",
    "desc": "HOT COCOA -18%"
  },
  {
    "code": "CON",
    "desc": "HOT COCOA -20%"
  },
  {
    "code": "COO",
    "desc": "HOT COCOA +15%"
  },
  {
    "code": "COP",
    "desc": "HOT COCOA -15%"
  },
  {
    "code": "COQ",
    "desc": "HOT COCOA 0%"
  },
  {
    "code": "CUA",
    "desc": "CULINARY +5%"
  },
  {
    "code": "CUB",
    "desc": "CULINARY +10%"
  },
  {
    "code": "CUC",
    "desc": "CULINARY +12%"
  },
  {
    "code": "CUD",
    "desc": "CULINARY +14%"
  },
  {
    "code": "CUE",
    "desc": "CULINARY +16%"
  },
  {
    "code": "CUF",
    "desc": "CULINARY +18%"
  },
  {
    "code": "CUH",
    "desc": "CULINARY -5%"
  },
  {
    "code": "CUI",
    "desc": "CULINARY -10%"
  },
  {
    "code": "CUJ",
    "desc": "CULINARY -12%"
  },
  {
    "code": "CUK",
    "desc": "CULINARY -14%"
  },
  {
    "code": "CUL",
    "desc": "CULINARY -16%"
  },
  {
    "code": "CUM",
    "desc": "CULINARY -18%"
  },
  {
    "code": "CUN",
    "desc": "CULINARY -20%"
  },
  {
    "code": "CUO",
    "desc": "CULINARY +15%"
  },
  {
    "code": "CUP",
    "desc": "CULINARY -15%"
  },
  {
    "code": "CUQ",
    "desc": "CULINARY 0%"
  },
  {
    "code": "ICA",
    "desc": "ICED TEA +5%"
  },
  {
    "code": "ICB",
    "desc": "ICED TEA +10%"
  },
  {
    "code": "ICC",
    "desc": "ICED TEA +12%"
  },
  {
    "code": "ICD",
    "desc": "ICED TEA +14%"
  },
  {
    "code": "ICE",
    "desc": "ICED TEA +16%"
  },
  {
    "code": "ICF",
    "desc": "ICED TEA +18%"
  },
  {
    "code": "ICG",
    "desc": "ICED TEA +20%"
  },
  {
    "code": "ICH",
    "desc": "ICED TEA -5%"
  },
  {
    "code": "ICI",
    "desc": "ICED TEA -10%"
  },
  {
    "code": "ICJ",
    "desc": "ICED TEA -12%"
  },
  {
    "code": "ICK",
    "desc": "ICED TEA -14%"
  },
  {
    "code": "ICL",
    "desc": "ICED TEA -16%"
  },
  {
    "code": "ICM",
    "desc": "ICED TEA -18%"
  },
  {
    "code": "ICN",
    "desc": "ICED TEA -20%"
  },
  {
    "code": "ICO",
    "desc": "ICED TEA +15%"
  },
  {
    "code": "ICP",
    "desc": "ICED TEA -15%"
  },
  {
    "code": "ICQ",
    "desc": "ICED TEA 0%"
  },
  {
    "code": "JUA",
    "desc": "JUICE +5%"
  },
  {
    "code": "JUB",
    "desc": "JUICE +10%"
  },
  {
    "code": "JUC",
    "desc": "JUICE +12%"
  },
  {
    "code": "JUD",
    "desc": "JUICE +14%"
  },
  {
    "code": "JUE",
    "desc": "JUICE +16%"
  },
  {
    "code": "JUF",
    "desc": "JUICE +18%"
  },
  {
    "code": "JUG",
    "desc": "JUICE +20%"
  },
  {
    "code": "JUH",
    "desc": "JUICE -5%"
  },
  {
    "code": "JUI",
    "desc": "JUICE -10%"
  },
  {
    "code": "JUJ",
    "desc": "JUICE -12%"
  },
  {
    "code": "JUK",
    "desc": "JUICE -14%"
  },
  {
    "code": "JUL",
    "desc": "JUICE -16%"
  },
  {
    "code": "JUM",
    "desc": "JUICE -18%"
  },
  {
    "code": "JUN",
    "desc": "JUICE -20%"
  },
  {
    "code": "JUO",
    "desc": "JUICE +15%"
  },
  {
    "code": "JUP",
    "desc": "JUICE -15%"
  },
  {
    "code": "JUQ",
    "desc": "JUICE 0%"
  },
  {
    "code": "NFA",
    "desc": "NON-FOOD +5%"
  },
  {
    "code": "NFB",
    "desc": "NON-FOOD +10%"
  },
  {
    "code": "NFC",
    "desc": "NON-FOOD +12%"
  },
  {
    "code": "NFD",
    "desc": "NON-FOOD +14%"
  },
  {
    "code": "NFE",
    "desc": "NON-FOOD +16%"
  },
  {
    "code": "NFF",
    "desc": "NON-FOOD +18%"
  },
  {
    "code": "NFG",
    "desc": "NON-FOOD +20%"
  },
  {
    "code": "NFH",
    "desc": "NON-FOOD -5%"
  },
  {
    "code": "NFI",
    "desc": "NON-FOOD -10%"
  },
  {
    "code": "NFJ",
    "desc": "NON-FOOD -12%"
  },
  {
    "code": "NFK",
    "desc": "NON-FOOD -14%"
  },
  {
    "code": "NFL",
    "desc": "NON-FOOD -16%"
  },
  {
    "code": "NFM",
    "desc": "NON-FOOD -18%"
  },
  {
    "code": "NFN",
    "desc": "NON-FOOD -20%"
  },
  {
    "code": "NFO",
    "desc": "NON-FOOD +15%"
  },
  {
    "code": "NFP",
    "desc": "NON-FOOD -15%"
  },
  {
    "code": "NFQ",
    "desc": "NON FOOD 0%"
  },
  {
    "code": "OCA",
    "desc": "OTHER COLD BEVERAGE +5%"
  },
  {
    "code": "OCB",
    "desc": "OTHER COLD BEVERAGE +10%"
  },
  {
    "code": "OCC",
    "desc": "OTHER COLD BEVERAGE +12%"
  },
  {
    "code": "OCD",
    "desc": "OTHER COLD BEVERAGE +14%"
  },
  {
    "code": "OCE",
    "desc": "OTHER COLD BEVERAGE +16%"
  },
  {
    "code": "OCF",
    "desc": "OTHER COLD BEVERAGE +18%"
  },
  {
    "code": "OCG",
    "desc": "OTHER COLD BEVERAGE +20%"
  },
  {
    "code": "OCH",
    "desc": "OTHER COLD BEVERAGE -5%"
  },
  {
    "code": "OCI",
    "desc": "OTHER COLD BEVERAGE -10%"
  },
  {
    "code": "OCJ",
    "desc": "OTHER COLD BEVERAGE -12%"
  },
  {
    "code": "OCK",
    "desc": "OTHER COLD BEVERAGE -14%"
  },
  {
    "code": "OCL",
    "desc": "OTHER COLD BEVERAGE -16%"
  },
  {
    "code": "OCM",
    "desc": "OTHER COLD BEVERAGE -18%"
  },
  {
    "code": "OCN",
    "desc": "OTHER COLD BEVERAGE -20%"
  },
  {
    "code": "OCO",
    "desc": "OTHER COLD BEVERAGE +15%"
  },
  {
    "code": "OCP",
    "desc": "OTHER COLD BEVERAGE -15%"
  },
  {
    "code": "OCQ",
    "desc": "OTHER COLD BEVERAGE 0%"
  },
  {
    "code": "OHA",
    "desc": "OTHER HOT BEVERAGE +5%"
  },
  {
    "code": "OHB",
    "desc": "OTHER HOT BEVERAGE +10%"
  },
  {
    "code": "OHC",
    "desc": "OTHER HOT BEVERAGE +12%"
  },
  {
    "code": "OHD",
    "desc": "OTHER HOT BEVERAGE +14%"
  },
  {
    "code": "OHE",
    "desc": "OTHER HOT BEVERAGE +16%"
  },
  {
    "code": "OHF",
    "desc": "OTHER HOT BEVERAGE +18%"
  },
  {
    "code": "OHG",
    "desc": "OTHER HOT BEVERAGE +20%"
  },
  {
    "code": "OHH",
    "desc": "OTHER HOT BEVERAGE -5%"
  },
  {
    "code": "OHI",
    "desc": "OTHER HOT BEVERAGE -10%"
  },
  {
    "code": "OHJ",
    "desc": "OTHER HOT BEVERAGE -12%"
  },
  {
    "code": "OHK",
    "desc": "OTHER HOT BEVERAGE -14%"
  },
  {
    "code": "OHL",
    "desc": "OTHER HOT BEVERAGE -16%"
  },
  {
    "code": "OHM",
    "desc": "OTHER HOT BEVERAGE -18%"
  },
  {
    "code": "OHN",
    "desc": "OTHER HOT BEVERAGE -20%"
  },
  {
    "code": "OHO",
    "desc": "OTHER HOT BEVERAGE +15%"
  },
  {
    "code": "OHP",
    "desc": "OTHER HOT BEVERAGE -15%"
  },
  {
    "code": "OHQ",
    "desc": "OTHER HOT BEVERAGE 0%"
  },
  {
    "code": "SPA",
    "desc": "SPICE +5%"
  },
  {
    "code": "SPB",
    "desc": "SPICE +10%"
  },
  {
    "code": "SPC",
    "desc": "SPICE +12%"
  },
  {
    "code": "SPD",
    "desc": "SPICE +14%"
  },
  {
    "code": "SPE",
    "desc": "SPICE +16%"
  },
  {
    "code": "SPF",
    "desc": "SPICE +18%"
  },
  {
    "code": "SPG",
    "desc": "SPICE +20%"
  },
  {
    "code": "SPH",
    "desc": "SPICE -5%"
  },
  {
    "code": "SPI",
    "desc": "SPICE -10%"
  },
  {
    "code": "SPJ",
    "desc": "SPICE -12%"
  },
  {
    "code": "SPK",
    "desc": "SPICE -14%"
  },
  {
    "code": "SPL",
    "desc": "SPICE -16%"
  },
  {
    "code": "SPM",
    "desc": "SPICE -18%"
  },
  {
    "code": "SPN",
    "desc": "SPICE -20%"
  },
  {
    "code": "SPO",
    "desc": "SPICE +15%"
  },
  {
    "code": "SPP",
    "desc": "SPICE -15%"
  },
  {
    "code": "SPQ",
    "desc": "SPICE 0%"
  }
];
*/

export const usStates = [
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

export function validateObject(elementName, elementValue, records) {

  /*
  returns true if record found else false
  */
  
  if (!elementName || elementName.length === 0 || !elementValue || elementValue.length === 0 || !records || records.length === 0) {
    return (false);
  }

  let index = records.findIndex(element => element[elementName] === elementValue)
  if (index === -1) {
    return (false);
  }
  else {
    return (true);
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
