function doGet() {
  var data = getList();
 //console.log(data);
  return ContentService.createTextOutput(JSON.stringify(data))
  .setMimeType(ContentService.MimeType.JSON);
}

function getList() {
  var sheet = SpreadsheetApp.openById("***SheetId***").getActiveSheet();
  var ahaha=sheet.getLastRow();
  var key = sheet.getRange(2, 1, ahaha - 1);
  var face_list=[];
  for(var i = 0;i<ahaha-1;i++){
face_list.push(sheet.getRange("B"+String(i+2)).getValue());
  }
  //console.log(face_list);
  return face_list
}
