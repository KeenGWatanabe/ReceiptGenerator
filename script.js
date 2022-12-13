let seq = 1000;

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const locations = [
  { //loc 0
    name: "town square", 
    "button text" : ["Receipt No.","Save"],
    "button functions" : [printReceipt,saveReceipt],
    text: "You are in receipt printing mode."
  }  
]
// initialize buttons
button1.onclick = printReceipt;
button2.onclick = saveReceipt;

function update(location) {
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  
  text.innerText = location.text;
}
function printReceipt() {
  seq=seq+1;
      document.getElementById("invoice").value = seq;
      text.innerText = "Receipt generated: " + staff.value + "-" + invoice.value;
  }
// create id for staff.value + invoice.value and save to local storage
let receipt_profile = [];
const addReceipt_profile = (ev)=>{
  ev.preventDefault();
  let receipt_profile = {
    id: Date.now(),
    outlet: document.getElementByID('staff').value,
    receipt: document.getElementById('invoice').value
  }
  receipt_profiles.push(receipt_profile);
  //document.forms[0].reset();
  console.warn('added', {receipt_profiles});
  let pre = document.querySelector('#msg pre');
  pre.textContent = '\n' + JSON.stringify(receipt_profiles,'\t',2);

  localStorage.setItem('ReceiptClicked',JSON.stringify(receipt_profiles));
}

function saveReceipt() {
  document.addEventListerner('DOMContentLoaded', ()=>{
    document.getElementById('button2').addEventListener('click', addReceipt_profile);
  });
 }

