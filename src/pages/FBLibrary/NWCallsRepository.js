//import axios from 'axios';
import { baseUrl } from "./fbglobals"


//const getNARFLookupUrl = `${baseUrl}/api/narf/getNarfLookup`;
const getNARFLookupUrl = `${baseUrl}/api/narf/searchNARF`;
const addRecordNARFurl = `${baseUrl}/api/narf/addNARF`;
const getNARFurl = `${baseUrl}/api/narf/getNARF`;
const getFB1url = `${baseUrl}/api/narf/getFB1`;
const uploadDocsNARFurl = `${baseUrl}/api/narf/uploadDocsNARF`;
const getNewAccountPTMasterDataUrl = `${baseUrl}/api/newaccountpt/getNewAccountPTMaster`;

export class NWCallsRepository {

  async getNewAccountPTMasterData(data) {
    
    const nwResponse = await fetch(getNewAccountPTMasterDataUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then((data) => {    
      var jr=data;                    
      return jr;
    },(error => {
      console.log("getNewAccountPTMasterData: " + error);
      return error;
    }) 
    )          
    return nwResponse;
  }
}

export async function getNARFLookup(data) {
  
  const nwResponse = await fetch(getNARFLookupUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then((data) => {    
      var jr=data;                    
      return jr;
  },(error => {
      console.log("getNARFLookup: " + error);
      return error;
    }) 
  )          
  return nwResponse;
}

export async function addRecordNARF(data) {
  
  const nwResponse = await fetch(addRecordNARFurl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then((data) => {    
      var jr=data;                    
      return jr;
  },(error => {
      console.log("addRecordNARF: " + error);
      return error;
    }) 
  )          
  return nwResponse;
}

export async function uploadDocsNARF(data) {
  
  const nwResponse = await fetch(uploadDocsNARFurl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        //'Content-Type': 'application/json',//causes error on server side
      },
      body: data
    })
    .then(response => response.json())
    .then((data) => {    
      var jr=data;                    
      return jr;
  },(error => {
      console.log("uploadDocsNARF: " + error);
      return error;
    }) 
  )          
  return nwResponse;
}

export async function getNARF(data) {
  
  const nwResponse = await fetch(getNARFurl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then((data) => {    
      var jr=data;                    
      return jr;
  },(error => {
      console.log("getNARF: " + error);
      return error;
    }) 
  )          
  return nwResponse;
}

export async function getFB1(data) {
  
  const nwResponse = await fetch(getFB1url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then((data) => {    
      var jr=data;                    
      return jr;
  },(error => {
      console.log("getFB1: " + error);
      return error;
    }) 
  )          
  return nwResponse;
}

