// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]
// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]
// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]
// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]
// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]
// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]

// @ [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]
// @ [][]<><><><><>[][]<><><><><>[][]<><><>[][]   RELEASED DATE - 14-Dec-2023  [][]<><><>[][]<><><><><>[][]<><><><><>[][]
// @ [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]

// # Defining div into variabls, usinf divv()
// # Defining Main Five Main Pages.
var page1=divv(".page1"),page2=divv(".page2"),page3=divv(".page3"),page4=divv(".page4"),page5=divv(".page5");
// #
var landingInput = divv(".landingInput");

// # Defining order list where repeating sentence will be added and edited
var sentenceList=divv(".sentenceList");
// # sentenceBeginnerBtnCrate for when user is using app for first time, other button is hidden
var sentenceBeginnerBtnCrate = divv(".sentenceBeginnerBtnCrate");
// # sentenceVeteranBtnCrate appears when user wants to edit sentences
var sentenceVeteranBtnCrate = divv(".sentenceVeteranBtnCrate");

// # Defining divs of record page(page3) of navigation part
var recordsDate=divv(".recordsDate");
var recordsDay=divv(".recordsDay");
var recordsCountDay = divv(".recordsCountDay");
var recordsStreak = divv(".recordsStreak");
var recordsRepeatCount = divv(".recordsRepeatCount");
var recordsRepeat = divv(".recordsRepeat");
var recordsHeartMeter = divv(".recordsHeartMeter");
var recordButton = divv(".recordButton");
// # Defining <orderlist>. Sentences from itemArr/repeatObj.items will be displayed within this recordsMainList<ol>
var recordsMainList = divv(".recordsMainList");
// # Defining div, it is a hidden button for advance option of setting page(page4)
var settingHiddenSave = divv(".settingHiddenSave");
// # Definign divs of setting page(page4). It shows numeric values.
var settingNumTotalDay = divv(".settingNumTotalDay");
var settingNumStreak = divv(".settingNumStreak");
var settingNumTotalRepeat = divv(".settingNumTotalRepeat");
var settingNumTodaysRepeat = divv(".settingNumTodaysRepeat");
var settingNumMaxRepat = divv(".settingNumMaxRepat");
// # Definign inputs of setting page(page4). It will be hidden.
var settingInpTotalDay = divv(".settingInpTotalDay");
var settingInpStreak = divv(".settingInpStreak");
var settingInpTotalRepeat = divv(".settingInpTotalRepeat");
var settingInpTodaysRepeat = divv(".settingInpTodaysRepeat");
var settingInpMaxRepat = divv(".settingInpMaxRepat");

// # whwn btnCoolDown is false user can click I've Read button in record page(page 3)
var btnCooldown = false;

// # an array consisting of 6 random colors, used for applying random background color
const bgColorArr = ["#fdf8e2", "#ffddd3", "#f3bfb3", "#5ea9be", "#9acde0", "#cbe1ef"]

// # showHiddenSetting value is false
// ^ when the value is true, hidden setting will show and when value is false the hidden setting is hidden
var showHiddenSetting = false;
// # beginner being true mean, the user is using app for first time 
var beginner = true;

// # defining variables for adding sentences, itemCount for counting sentences, and itemArr for storing sentences
// ^ It is used for adding new sentences in sentence page(page2) for adding new sentence
var itemCount = 1,itemArr=[];

// # Defining ctx for applying random background.
// ^ Future plan to add random pattern background
const ctx = divv(".bgCanvas").getContext("2d");

// # defing variables for controlling date and day
var date="",day="";

// # an array consisting of 12 months
const monthArr = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
// # an array consisting of 7 days of a week
const dayArr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

// # an object to store and use data to manage this app
var repeatObj = {
  // @ username, day, all date
  // @ totalDay, repeatingStreak, totalRepeat, todayRepeat, toMaxRead, heartMeter
  username:"user",
  day:"Day",
  date:"0, Month 9999",
  firstDate:getFullDeviceDate(),
  savedDate:getFullDeviceDate(),
  deviceDate:getFullDeviceDate(), // this doesen't seem to be usefull
  totalDay:100,
  repeatingStreak:99,
  totalRepeat:600,
  todayRepeat:3,
  toMaxRead:9,
  items:[]
}

const repeatObjReset = {
  // @ username, day, all date
  // @ totalDay, repeatingStreak, totalRepeat, todayRepeat, toMaxRead, heartMeter
  username:"",
  day:"day",
  date:"0, Month 9999",
  firstDate:getFullDeviceDate(),
  savedDate:getFullDeviceDate(),
  deviceDate:getFullDeviceDate(), // this doesen't seem to be usefull
  totalDay:0,
  repeatingStreak:0,
  totalRepeat:0,
  todayRepeat:0,
  toMaxRead:9,
  items:[]
}


// # settingObj is a global object, it contains 6 keys with default value 0. it is used to trigger hidden setting options.
var settingObj = {
  totalDay:0,
  repeatingStreak:0,
  totalRepeat:0,
  todayRepeat:0,
  toMaxRead:0,
}
// # settingInputs is a globl object, it contains 6 keys and its 6 values are 6 <input>. 
// ^ It is used to get value from hidden setiings and put it in repeatObj.
var settingInputs = {
  totalDay:settingInpTotalDay,
  repeatingStreak:settingInpStreak,
  totalRepeat:settingInpTotalRepeat,
  todayRepeat:settingInpTodaysRepeat,
  toMaxRead:settingInpMaxRepat,
}


// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]
// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]
// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]

// # firstFunction() will run before any other function. It includes all function that needs to be called to run the app.
firstFunction();

// # [Page 0] [?-?-?]
// # firstFunction() will run before any other function. It includes all function that needs to be called to run the app.
function firstFunction(){
  newOrOldUser()
  setRandomBGcolor()
  addItem()
  addItem()
  addItem()
  setFullDate()
  setScreen()
  manageSentencePgButtons()
}


// # [Page 0] Background functions [?-?-?]
// # [Page 0] setRandomBGcolor() is use for applying random background color from an array
function setRandomBGcolor(){
  // % random will random value from 0~5. Total 6 values.
  var random = Math.floor(Math.random()*(6));
  ctx.fillStyle = bgColorArr[random];
  ctx.fillRect(0,0,2000,1000);
}

// # [Page 0] Support functions [?-?-?]
// # [Page 0] gotoPage(page) hides all pages and only display that partical page of page value
function gotoPage(page){
  // % hiding all pages from page 1 to page 5
  hide(page1);hide(page2);hide(page3);hide(page4);hide(page5);
  // % depending on the value passed in page (1~5), it will display that function.
  switch(page){
    case 1:page1.style.display="flex";break;
    case 2:page2.style.display="flex";break;
    case 3:page3.style.display="flex";break;
    case 4:page4.style.display="flex";break;
    case 5:page5.style.display="flex";break;
  }
  // % resets settings data
  resetSettingData();
}

// # [Page 0] Support functions [?-?-?]
// # [Page 0] Support function to assign <div> using its class name to variable
function divv(divv){return document.querySelector(divv);}
// # [Page 0] Support function hide the <div>. Which ever <div> is passed throught(in varibale form) will be hidden
function hide(divv){divv.style.display = "none";}
// # [Page 0] Support function display/unhide the <div>. Which ever <div> is passed throught(in varibale form) will be exposed/unhide
function expose(divv){divv.style.display = "flex";}
// # [Page 0] Support function create new element. What ever element tag name is passed, it will create that element. Ex: ['div','li']
function createNewElement(elementName){return document.createElement(elementName);}

// # goToSentencePage() will take user form landing page(page 1) to sentence page(page 2) when condition are met.
function goToSentencePage(){
  // % checkUsername() will check if user has entered username or not
  if(checkUsername()){
    // % repeatObjReset has reset value of 0 and resetting repeatObj before starting
    repeatObj = {...repeatObjReset};
    // % as user has entered valid username, now storing the username in repeatObj. later this obj will be stored in local storage
    repeatObj.username = landingInput.value;
    // % strong the statred day of the week in global object repeatObj. later this obj will be stored in local storage
    repeatObj.day = dayArr[new Date().getDay()];
    // % strong the statred date in global object repeatObj. later this obj will be stored in local storage
    repeatObj.date = new Date().getDate();
    gotoPage(2);
  }
}

// # a support function, that checks if user has entered username in landing page(Page1) or not
function checkUsername(){
  // % depending on empty or valid username, it will store true or false
  const usernameNotEmpty = landingInput.value != "" ? true : false;
  return usernameNotEmpty;
}


// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]
// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]
// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]

// # [Page 2] [?][?]
// # [Page 2] addItem() is used for adding new input box in sentence page(page). used for adding new repeating sentence.
function addItem(){
  // % id is used for const value for item count
  const id = itemCount;
  // % crateCss an array of css class for crate element
  const crateCss = ['flex','jcsb','gap-16px','mb10','bor'];
  // % inputCss an array of css class for crate element
  const inputCss = ['transparentBg','sentenceInput'];
  // % removeCss an array of css class for crate element
  const removeCss = ['sentenceTimes','flexmid','cup','bor'];
  // & <>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>
  // % new <li> element for addding inside order list
  var li = createNewElement('li')
  // % new <div> element for acting as cover for <input> and <div> elements
  var crate = createNewElement('div')
  // % new <input> element for addding inside order list
  var inputItem = createNewElement('input')
  // ! REMOVE IT
  // ! REMOVED inputItem.value = "go dance";
  // % new <div> element for addding inside order list
  var removeItem = createNewElement('div')
  // & <>~~~~~<>~~~~~<>~~~~~<>~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>
  // % adding array css to elements
  crate.classList.add(...crateCss);
  inputItem.classList.add(...inputCss);
  removeItem.classList.add(...removeCss);
  // & <>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>
  // % adding place holder to input element
  inputItem.setAttribute('placeholder','add repeating sentence...')
  // % adding x as inner text inside removeItem as for meaning to remove
  removeItem.innerText = "x";
  // % adding button to removeItem which upon click will remove itself
  removeItem.setAttribute('onclick', `removeItem(${id})`);

  // % element structure. ol => li => crate => [inputItem, removeItem]
  li.appendChild(crate)
  crate.appendChild(inputItem);
  crate.appendChild(removeItem);
  // % id, li, inputItem in item object
  const item = {id:id, li:li, input:inputItem}
  // % adding item object insode global varibale itemArr
  itemArr.push(item);
  // % items(li) added to itemArr being added to itemArr(ol)
  itemArr.forEach((item)=>{sentenceList.appendChild(item.li);})
  // % incrementing value of global varibale itemCount by 1 on each iteration. Every time new item is added it will increase by 1
  itemCount++;
}

// # [Page 2] [?][?]
// # [Page 2], removeItem(id) is used for removing item from array itemArr. And applying array effect in HTML page]
function removeItem(id){
  // % id, is the id of item(li) of itemArr(ol) of HTML page. Used for removing item of that id.
  // % this filtering process remove item(li) from itemArr(ol) of that id
  itemArr = itemArr.filter(item => item.id !== id);
  // % printing new item array after filtering process
  // $ console.log(itemArr);
  // % emptying sentenceList<ol> of HTML page to add new filtered item(li)
  sentenceList.innerHTML=null;
  // % adding new filtered item(li) of itemArr(ol) inside sentenceList<ol> of HTML page
  itemArr.forEach((item)=>{sentenceList.appendChild(item.li);})
}

// # [Page 2] [?][?]
// # [Page 2], hasSentenceList() check if input box in sentece page(page 2) is filled up and there is atleast one item. It reutrn true or fasle.
function hasSentenceList(){
  // % initial value of porceedToNextPage is false
  var porceedToNextPage = false;
  // % totalItemLenght has the value of total item(li).length inside itemArray(ol) used for sentenceList<ol>
  var totalItemLenght = itemArr.length;
  // % filteredItemLenght filters if input box of item(li) is filled or empty string. Gives total length of input with data of iten(li)
  var filteredItemLenght = itemArr.filter(item => item.input.value !== "").length;
  // % inputBoxFilled has value true if all input of item(li) is filled or has no empty string. Or else it will have false value
  var inputBoxFilled = totalItemLenght == filteredItemLenght ? true : false;
  // % prints totalItemLenght, filteredItemLenght, inputBoxFilled in console
  // $ console.log("totalItemLenght =",totalItemLenght,"filteredItemLenght =",filteredItemLenght,"inputBoxFilled =",inputBoxFilled)
  // % porceedToNextPage will have true value if itemArr(ol) has 1 or more value and inputBoxFilled value is true. Or else it will have false value
  porceedToNextPage = (itemArr.length > 0 && inputBoxFilled)? true : false;
  // % return value of porceedToNextPage. which is either true or false
  return porceedToNextPage;
}

// # [Page 2] [?][?]
// # clickSentenceNextBtn() will take user from page 2 to page 3 depenging on the condition of hasSentenceList()
function clickSentenceNextBtn(){
  // % hasSentenceList() reurn true or false based on the itemArr(ol).
  // ^ It checks itemArr if find if array has 1 or more item and these item value is not empty
  if(hasSentenceList()){
    // % as user has created account and now setting behinner to false
    beginner=false;
    // % manageSentencePgButtons() will control what button to show on page 2 depeinging on if the user is new or old
    manageSentencePgButtons();
    // % since the user has enetered valid sentences, validated by hasSentenceList(). 
    // % Now taking the array of sentences from getItemArrSentence() and storing in repeatObj.items. repeatObj will be saved in local storage
    repeatObj.items = [...getItemArrSentence()];
    // resetLocalStorage()
    // % saving what evere the current value of repeatObj is, in local storage using setLocalStorageData()
    setLocalStorageData();
    // % setScreen() will take data from local storage and store in golbal obj repeatObj and set those value in screen
    // ^ record page(page 3) list, setting page(page 4) list, and  setting page(page 4) hidden input is affected.
    setScreen()
    // % taking user to records page(page 3)
    gotoPage(3)
  }
}

// # support function for page 2, getItemArrSentence() takes user input and filters to get sentecnes list and stores in itemArrSenteces
function getItemArrSentence(){
  // % takes user input and filters to get sentecnes list and stores in itemArrSenteces
  const itemArrSenteces = itemArr.map(item => {return item.input.value});
  return itemArrSenteces;
}


// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]
// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]
// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]

// # [Page 3] [?][?][?]
// # [Page 3], setFullDate() sets the current date in recordsDate<div> variable of record page(page 3)
function setFullDate(){
  // % get date d from Date()
  const d = new Date();
  // % use d for gettting current date, month and year. Storing in specific format [08-12-2023] => [8, Dec 2023]
  const date = d.getDate()+", "+monthArr[d.getMonth()]+" "+d.getFullYear();
  // % use d for getting current day. Storing is specific format [5] => [Fri]
  const day = dayArr[d.getDay()];
  // % adding value of date and day in recordsDate<div> and recordsDay<div>
  recordsDate.innerText = date;
  recordsDay.innerText = day;
}

// # [Page 3] [?][?][?]
// # [Page 3], setHeartMeter() sets heart meter in record page(page 3) of HTML page
function setHeartMeter(){
  // % take out toMaxRead and todayRepeat value from global object repeatObj
  const {toMaxRead, todayRepeat} = repeatObj;
  // % oneRead value depends on toMaxRead. It defines, how much a sigle read mean in percentage.
  var oneRead = 100/toMaxRead;
  // % currentReadMeter has value of how much user has read for that day in percentage. It's lowest value is 0 and max value is 100.
  var currentReadMeter = todayRepeat >= toMaxRead ? 100 : oneRead * todayRepeat;
  // % applies currentReadMeter value to recordsHeartMeter<div>
  recordsHeartMeter.style.width = currentReadMeter + "%";
}

// # [Page 3] [?][?][?]
// # [Page 3], setStreak() sets value for streak, used for recording if user is repeating every day or not in record page(page 3) of HTML page
function setStreak(){
  // % taking out {repeatingStreak} from gobal object repeatObj
  const {repeatingStreak} = repeatObj;
  // % displaying value of repeatingStreak in recordsStreak<div> of sentence page(page3) of HTML page
  recordsStreak.innerText = repeatingStreak;
  return repeatingStreak;
}

// # [Page 3] [?][?][?]
// # [Page 3], setCountDay() sets count day since using this app in record page(page 3) of HTML page
function setCountDay(){
  // % taking out {totalDay} from gobal object repeatObj
  const {totalDay} = repeatObj;
  // % displaying value of totalDay in recordsCountDay<div> of sentence page(page3) of HTML page
  recordsCountDay.innerHTML = totalDay;
  return totalDay;
}

// # [Page 3] [?][?][?]
// # [Page 3], setRepeatCount() sets repetition from day 0 to this day in record page(page 3) of HTML page
function setRepeatCount(){
  // % taking out {totalRepeat} from gobal object repeatObj
  const {totalRepeat} = repeatObj;
  // % displaying value of totalRepeat in recordsRepeat<div> of sentence page(page3) of HTML page
  recordsRepeatCount.innerText = totalRepeat;
  return totalRepeat;
}

// # [Page 3] [?][?][?]
// # [Page 3], setRecordsRepeat() sets repetition in that day in record page(page 3) of HTML page
function setRecordsRepeat(){
  // % taking out {todayRepeat} from gobal object repeatObj
  const {todayRepeat} = repeatObj;
  // % displaying value of todayRepeat in recordsRepeat<div> of sentence page(page3) of HTML page
  recordsRepeat.innerText = todayRepeat;
  return todayRepeat;
}

// # [Page 3] [?][?][?]
// # setSentences() set sentences from global object repeatObj to recordsMainList<ol> in record page(page 3) in screen
function setSentences(){
  const listArr = [...repeatObj.items];
  // $ console.log("setSentences",listArr);
  recordsMainList.innerText = "";
  listArr.map((data)=>{
    const li = createNewElement('li');
    li.innerText = data;
    recordsMainList.appendChild(li);
  })

}

// # [Page 3] [?][?][?]
// # [Page 3], setNavigation() include all necesary function to handel record page(page 3) of HTML page
// ^ It handels => date & day, heart meter, streak, day counting, sentence repetation for the day,sentence repetation till now
function setNavigation(){
  setFullDate()
  setHeartMeter()
  setStreak()
  setCountDay()
  setRepeatCount()
  setRecordsRepeat()
  setSentences()
}


// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]
// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]
// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]

// # settingHiddenButton(name) is hidden button. when used trigger hidden settings.
function settingHiddenButton(name){
  switch(name){
    case "totalDay":settingObj.totalDay++;break;
    case "streak":settingObj.repeatingStreak++;break;
    case "totalRepeat":settingObj.totalRepeat++;break;
    case "todaysRepeat":settingObj.todayRepeat++;break;
    case "maxRepeat":settingObj.toMaxRead++;break;
  }
  displayHiddenSettings()
} 

// # resetSettingData resets value of hidden setting global object settingObj. and put setHiddenSetting() to false.
function resetSettingData(){
  settingObj.totalDay = 0;
  settingObj.repeatingStreak = 0;
  settingObj.totalRepeat = 0;
  settingObj.todayRepeat = 0;
  settingObj.toMaxRead = 0;
  setHiddenSetting(false);
}

// # upon clicking appropraite hidden button, it will activate the hidden settings
function displayHiddenSettings(){
  const {totalDay, repeatingStreak, totalRepeat, todayRepeat, toMaxRead} = settingObj;
  if(totalDay>=10 && repeatingStreak==0 && totalRepeat==0 && todayRepeat==0 && toMaxRead>=10){
  // if(totalDay>=1 && repeatingStreak==0 && totalRepeat==0 && todayRepeat==0 && toMaxRead>=0){    
    setHiddenSetting(true);
  }
}

// # setHiddenSetting(value) will hide and display appropriate elements.
function setHiddenSetting(value){
  showHiddenSetting = value;
  if(value || !value){
    settingHiddenSave.style.display = value?"block":"none";
    // % numeric value editing inputs of setting page(page4)
    settingInpTotalDay.style.display = value?"block":"none";
    settingInpStreak.style.display = value?"block":"none";
    settingInpTotalRepeat.style.display = value?"block":"none";
    settingInpTodaysRepeat.style.display = value?"block":"none";
    settingInpMaxRepat.style.display = value?"block":"none";
    // % numeric value displaying divs of setting page(page4)
    settingNumTotalDay.style.display = value?"none":"block";
    settingNumStreak.style.display = value?"none":"block";
    settingNumTotalRepeat.style.display = value?"none":"block";
    settingNumTodaysRepeat.style.display = value?"none":"block";
    settingNumMaxRepat.style.display = value?"none":"block";
  }
}

// # setSettingListValues() sets global object repeatObj to appropraite container that will be shown in screen.
function setSettingListValues(){
  // % taking out five keys from gobal object repeatObj
  // % it contains info on, how much user has repeated in total, in single day, heart meter, streak and count of days since using this app
  const {totalDay, repeatingStreak, totalRepeat, todayRepeat, toMaxRead} = repeatObj;
  // % setting the five values in setting list  
  settingNumTotalDay.innerText = totalDay;
  settingNumStreak.innerText = repeatingStreak;
  settingNumTotalRepeat.innerText = totalRepeat;
  settingNumTodaysRepeat.innerText = todayRepeat;
  settingNumMaxRepat.innerText = toMaxRead;
  // % setting the five values in setting input, it is normally hidden
  settingInpTotalDay.value = totalDay;
  settingInpStreak.value = repeatingStreak;
  settingInpTotalRepeat.value = totalRepeat;
  settingInpTodaysRepeat.value = todayRepeat;
  settingInpMaxRepat.value = toMaxRead;
  setHiddenSetting(false)
}

// # setNewRepeatValues() will set new dynamic value of setting inputs, as user has entered in global object repeatObj and apply in screen
function setNewRepeatValues(){
  const {totalDay, repeatingStreak, totalRepeat, todayRepeat, toMaxRead} = settingInputs;
  repeatObj.totalDay = checkInputInt(totalDay.value);
  repeatObj.repeatingStreak = checkInputInt(repeatingStreak.value);
  repeatObj.totalRepeat = checkInputInt(totalRepeat.value);
  repeatObj.todayRepeat = checkInputInt(todayRepeat.value);
  repeatObj.toMaxRead = checkInputInt(toMaxRead.value);
  // % saving data of global object repeatObj in local storage
  setLocalStorageData()
  // % setting the new data in screen
  setScreen()
}

// # setScreen() takes value from localstorage and stores in global storage repeatObj
// ^ then the value repeatObj is displayed in 3 part of screen
function setScreen(){
  // % getting data from local storage and storing in global object repeatObj
  localStorageDataToRepatObj()
  // % setNavigation() will display repeatObj data to record page(page 3)
  // ^ it includes all bits of navigation and list of sentecnes
  setNavigation()
  // % setSettingListValues() will display repeatObj data to setting page(page 3)
  // ^ it affects two parts of setting, 1) setting list 2) setting hidden input list
  setSettingListValues()
}

// # checkInputInt() is support function. It is used in setting hidden input list 
// ^ it accepts any value that comes from <input> and perform analysis 
// ^ returns numeric value if input is positive whole number else return 0
function checkInputInt(value){
  // % its value is input from hidden settings, it convert num into int and other value into 0
  var intValue = parseInt(value) ? parseInt(value) : 0;
  // % it wil make sure the value is positive whole number
  intValue = intValue>=0 && intValue<=10000000 ? intValue : 0;
  return intValue;
}

// # manageSentencePgButtons() show and hide button crate in sentence page(page 2) depending of if the user is using app for first time or not.
function manageSentencePgButtons(){
  // % if beginner == true, showing beginner button crate and hiding other button crate
  sentenceBeginnerBtnCrate.style.display = beginner?"flex":"none";
  // % if beginner == false, showing veterian button crate and hiding other button crate
  sentenceVeteranBtnCrate.style.display = beginner?"none":"flex";
}


// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]
// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]
// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]

// # nowDate object has current date(year, month, day and fullDate)
const nowDate = {
  date:{
    year: function(){return new Date().getFullYear()},
    month: function(){return new Date().getMonth()},
    day: function(){return new Date().getDate()},
    fullDate: function(){
      // % fullDate format =>  month-day-year
      return this.month()+"-"+this.day()+"-"+this.year();
    }
  }
}

// # getFullDeviceDate() reutrns fulldate from device date and time. 
// ^ fullDate format =>  month-day-year
// ! <+>=<+>=<+>=<+>=<+>=<+>=<+>=<+>=<+>=<+>=<+>=<+>=<+>=<+>=<+>=<+>=<+>=<+>=<+>=<+>=<+>=<+>
function getFullDeviceDate(){
  var deviceDate = "11-14-2023";
  const dateData = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate(),
  }
  deviceDate = dateData.month+"-"+dateData.day+"-"+dateData.year;
  // deviceDate = "11-29-2023";
  return deviceDate;
}

// # calcDateDiffrence take starting day, and usage nowDate.date.fullDate() to find the diffrence between two date
function calcDateDiffrence(startDate){
  var currentDate = nowDate.date.fullDate();
  // % input date formate month-day-year
  let date1 = new Date(startDate);
  let date2 = new Date(currentDate);
  // % To calculate the time difference of two dates
  let Difference_In_Time = date2.getTime() - date1.getTime();
  // % To calculate the no. of days between two dates
  let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
  return Difference_In_Days;
}

// # diff takes two date as parameteres and return diffrence between two dates in days
// ! ?????? NEED for testing.
function diff(date1, date2){
  // % converting date1 & date2 in new Date format
  const datex1 = new Date(date1);
  const datex2 = new Date(date2);
  // % To calculate the time difference of two dates
  const diff_in_time = datex2.getTime() - datex1.getTime();
  // % To calculate the no. of days between two dates
  const diff_in_days = Math.round(diff_in_time / (1000 * 3600 * 24));
  // % returning diff_in_days
  return diff_in_days;
}


// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]
// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]
// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]

// # newOrOldUser() runs at the begenning before any other funtion and figure out if the user is using first time or old user.
// ^ depending on local storage data, it will send user to landingp page(page1){new user} or record page(page3){old user}
function newOrOldUser(){
  // % taking data from local storage with name repeatObj
  const data = localStorage.getItem("repeatObj");
  // $ console.log("data",data)
  if(data == null){
    // $ console.log("New User, repeatObj: ",data)
    // % since the data is null sending user to page 1
    gotoPage(1);
  }
  else{
    // $ console.log("Old User, repeatObj: ",JSON.parse(data))
    // % since the data is not null sending user to page 3
    gotoPage(3);
  } 
}

// # getLocalStorageData() gets data from local storage
// ^ if the local data is null, it return repeatObj(global object) value
function getLocalStorageData(){
  // % taking data from local storage with name repeatObj
  const repeatObjData = localStorage.getItem("repeatObj");
  if(repeatObjData == null){
    // % returning repeatObj value 
    return repeatObjReset;
  }
  else{
    // % as local data wasn't null, returning parsed value of repeatObjData
    return JSON.parse(repeatObjData);
  }
}

// # setting gobal object repeatObj value to local storage with same name 'repeatObj'
function setLocalStorageData(){
  localStorage.setItem("repeatObj", JSON.stringify(repeatObj));
}

// # clearing local storgae value with name 'repeatObj'
function clearLocalStorage(){
  localStorage.removeItem("repeatObj");
  location.reload()
}

// # resetLocalStorage() restores 0 vlaue to global object repeatObj and stores in local storage
function resetLocalStorage(){
  // % restoring 0 value to repeatObject
  repeatObj = {...repeatObjReset}
  // % saving reset global obj repeatObj to local storage
   setLocalStorageData();
}

// # it combines two function. get data from local storage and stores in global object repatObj
function localStorageDataToRepatObj(){
  repeatObj = {...getLocalStorageData()}
}


// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]
// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]
// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]

/*
# Three Main Days
^ first day  : fd
^ normal day : nd
^ missed day : md

# two time
^ firstTime       : ft
^ secondTimePlus : st

# date variations
^ first date  : fd
^ saved date  : sd
^ device date : dd
% iniinal values ==> fd=dd, sd=dd

# record variations
^ day repeat    : d
^ streak repeat : s
^ all repeat    : a
^ today repeat  : t
% iniinal values ==> d=0, s=0, a=0, t=0

@ Day : First Day Formula
$ if (diff(fd,sd) == 0 && diff(sd,dd) == 0 && a == 0) then f=1,d=0,s=0,a=1,t=1
$ if (diff(fd,sd) == 0 && diff(sd,dd) == 0 && a == 1) then f=2,d=0,s=0,a++,t++

@ Day : Normal Day Formula
$ if diff(sd,dd) == 1 && diff(fd,dd) == d+1 then f=1, sd=dd, d++, s++, a++, f=1
$ if diff(sd,dd) == 0 && diff(fd,dd) == d then f++, a++, t++

@ Day : Missed Day Formula
$ if(diff(sd,dd)) > 1  && diff(fd,dd) > d+1 then f=1,sd=dd,d++,s=0, a++, t=1
$ copy second line from normal day

*/
// # IHaveReadCooldown() makes sure that user won't spam I've read button. Cooldown is 3 seconds.
function IHaveReadCooldown(){
  if(!btnCooldown){
    IHaveRead();
    recordButton.classList.add("landingButtonActive");
    btnCooldown = true;
    setTimeout(()=>{
      btnCooldown = false;
      recordButton.classList.remove("landingButtonActive");
    },3000)
  }
}

// # IHaveRead() is active when user click I've read button in recording page(page 3)
function IHaveRead(){
  // % getFullDeviceDate() gets fresh device date
  const freshDeviceDate = getFullDeviceDate();
  // % taking out data varibales from localStorage, if the storge is null it will return repeatObjReset
  const { firstDate, savedDate, deviceDate/*not usefull*/, totalDay, repeatingStreak, totalRepeat, todayRepeat } = getLocalStorageData();
  console.log("=================================================================")
  // % converting localStorage data variable into shorter varibale for convinent use 
  var short = {
    fd: firstDate,
    sd: savedDate,
    dd: freshDeviceDate, /* device date*/
    d: totalDay, /* day */
    s: repeatingStreak, /* streak */
    a: totalRepeat, /* all repeat */
    t: todayRepeat, /* total repeat */
  }
  
  const { fd, sd, dd, d, s, a, t } = short;
  // & <>~~~~~<>~~~~~<>~~~~~<>~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>
  if (diff(fd,sd) == 0 && diff(sd,dd) == 0 && a == 0){
    console.log("First Day : First Time")
    short.d = 0;
    short.s = 0;
    short.a = 1;
    short.t = 1;
    
    setShortDataToRepeatObj(short.sd,short.d,short.s,short.a,short.t);
    setLocalStorageData();
  }
  else if (diff(fd,sd) == 0 && diff(sd,dd) == 0 && a >= 1){
    console.log("First Day : Second Plus Times")
    short.a++;
    short.t++;
    setShortDataToRepeatObj(short.sd,short.d,short.s,short.a,short.t);
    setLocalStorageData();
  }
  // & <>~~~~~<>~~~~~<>~~~~~<>~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>
  else if (diff(sd,dd) == 1 && diff(fd,dd) == d+1){
    console.log("Normal Day : First Time")
    short.sd=dd;
    short.d++;
    short.s++;
    short.a++;
    short.t=1;
    setShortDataToRepeatObj(short.sd,short.d,short.s,short.a,short.t);
    setLocalStorageData();
  }
  else if (diff(sd,dd) == 0 && diff(fd,dd) == d){
    console.log("Normal Day : Second Plus Times")
    short.a++;
    short.t++;
    setShortDataToRepeatObj(short.sd,short.d,short.s,short.a,short.t);
    setLocalStorageData();
  }
  // & <>~~~~~<>~~~~~<>~~~~~<>~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>
  else if(diff(sd,dd) > 1  && diff(fd,dd) > d+1){
    console.log("Missed Day : First Time")
    short.sd=dd;
    short.d += diff(fd,dd) - d;
    short.s=0;
    short.a++;
    short.t=1;
    setShortDataToRepeatObj(short.sd,short.d,short.s,short.a,short.t);
    setLocalStorageData();
  }
  // & <>~~~~~<>~~~~~<>~~~~~<>~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>
  else{
    console.log("Bugged Day : ERROR - It's Bug.")
  }
  // & <>~~~~~<>~~~~~<>~~~~~<>~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>~~~~~<>
  setScreen()
}

// # setShortDataToRepeatObj(sd,d,s,a,t) is a support function used in IHaveRead()
// ^ it takes data form parameter and stores in repeatObj
function setShortDataToRepeatObj(sd,d,s,a,t){
  repeatObj.savedDate = sd;
  repeatObj.totalDay = d;
  repeatObj.repeatingStreak = s;
  repeatObj.totalRepeat = a;
  repeatObj.todayRepeat = t;
}


// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]
// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]
// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]

// % Mightbe UseFul [?][?][?]
function DateIdToDateInt(item){
  var len = item.length,year = [], c=0;
  for(var a=len-1,c=0;a>=len-4;a--,c++){
    year[c] = item[a];
  }
  var yearData = year[0]+year[1]+year[2]+year[3];
  yearData = parseInt(reverseString(yearData));
  return yearData;
}
// % Mightbe UseFul [?][?][?]
function reverseString(str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}
// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]
// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]
// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]

// # gotoAboutPage() will take user to about page(page 5)
function gotoAboutPage(){
  gotoPage(5);
}

// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]
// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]
// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]
// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]
// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]
// ! [][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]<><><><><>[][]
// ! [][]-01000100-[][]-01100101-[][]-01110110-[][]-01100101-[][]-01101100-[][]-01101111-[][]-01110000-[][]-01100101-[][]
// ! [][]-01100100-[][]-00100000-[][]-01000010-[][]-01111001-[][]-00100000-[][]-01001011-[][]-01110010-[][]-01101001-[][]
// ! [][]-01110100-[][]-01100101-[][]-01110011-[][]-01101000-[][]-00100000-[][]-01010100-[][]-01101000-[][]-01100001-[][]
// ! [][]-01110000-[][]-01100001-[][]-<><><><>-[][]-<><><><>-[][]-<><><><>-[][]-<><><><>-[][]-<><><><>-[][]-<><><><>-[][]