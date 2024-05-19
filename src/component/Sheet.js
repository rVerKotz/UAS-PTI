import { gapi } from 'gapi-script';

const CLIENT_ID = '74385400849-2cfnu6o09tdcp52fupbvsk1gqmomao3h.apps.googleusercontent.com';
const API_KEY = 'AIzaSyAmy80RJm7PjWuMixMl774lGI8Oa7AGbAI';
const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
const SCOPES = "https://www.googleapis.com/auth/spreadsheets";

export const initClient = () => {
  return new Promise((resolve, reject) => {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      }).then(() => {
        resolve(gapi);
      }).catch((error) => {
        reject(error);
      });
    });
  });
};

export const signIn = () => {
  return gapi.auth2.getAuthInstance().signIn();
};

export const signOut = () => {
  return gapi.auth2.getAuthInstance().signOut();
};

export const isSignedIn = () => {
  return gapi.auth2.getAuthInstance().isSignedIn.get();
};

export const getSheetData = (spreadsheetId, range) => {
  return gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });
};

export const appendSheetData = (spreadsheetId, range, values) => {
  return gapi.client.sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: 'RAW',
    resource: {
      values,
    },
  });
};