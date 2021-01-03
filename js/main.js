let hours = "8:30 - 7:00";
let container = document.getElementById("mainContainer");
let dataContainer="";
let items,bgColoritem;
let data = [
    shanbe =[ {
        type:"normal",
        day:"شنبه",
     name: "ادبیات فارسی" ,
    teacher: "محمدرضا خوش برخورد" ,
    hours: hours ,
    online :true,
    exam:false
    }, {
        type:"break",
        name: "زنگ تفریح" ,
    teacher: "" ,
    hours: hours ,
    online :false,
    exam:false
    },{
        type:"normal",
        name: "جبر و احتمال 3" ,
    teacher: "رضا علوی" ,
    hours: hours ,
    online :false,
    exam:false
    }, {
        type:"break",
        name: "زنگ تفریح" ,
    teacher: "" ,
    hours: hours ,
    online :false,
    exam:false
    },{
        type:"normal",
        name: "جبر و احتمال 3" ,
    teacher: "رضا علوی" ,
    hours: hours ,
    online :true,
    exam:false
    }, {
        type:"lunch",
        name: "نهار و نماز" ,
    teacher: "" ,
    hours: hours ,
    online :false,
    exam:false
    }],

    yekshanbe=[{
        type:"normal",
        day:"یکشنبه",
        name: "جبر و احتمال 3" ,
    teacher: "رضا علوی" ,
    hours: hours ,
    online :false,
    exam:false
    },{
        type:"break",
        name: "زنگ تفریح" ,
    teacher: "" ,
    hours: hours ,
    online :false,
    exam:false
    },{
        type:"exam",
        name: "آزمون ریاضی" ,
        teacher: "محمدرضا خوش برخورد" ,
        hours: hours ,
        online :false,
        exam: true
    }],

    doshanbe=[
        {day:"دوشنبه",
        type:"exam",
         name: "آزمون ریاضی" ,
        teacher: "محمدرضا خوش برخورد" ,
        hours: hours ,
        online :false,
        exam: true
    },
    {
        type:"break",
        name: "زنگ تفریح" ,
    teacher: "" ,
    hours: hours ,
    online :false,
    exam:false
    },{
        type:"normal",
        name: "جبر و احتمال 3" ,
    teacher: "رضا علوی" ,
    hours: hours ,
    online :false,
    exam:false
    },{
        type:"normal",
        name: "جبر و احتمال 3" ,
    teacher: "رضا علوی" ,
    hours: hours ,
    online :false,
    exam:false
    },{
        type:"normal",
        name: "جبر و احتمال 3" ,
    teacher: "رضا علوی" ,
    hours: hours ,
    online :false,
    exam:false
    },{
        type:"normal",
        name: "جبر و احتمال 3" ,
    teacher: "رضا علوی" ,
    hours: hours ,
    online :false,
    exam:false
    },{
        type:"normal",
        name: "جبر و احتمال 3" ,
    teacher: "رضا علوی" ,
    hours: hours ,
    online :false,
    exam:false
    },{
        type:"normal",
        name: "جبر و احتمال 3" ,
    teacher: "رضا علوی" ,
    hours: hours ,
    online :false,
    exam:false
    }

    ],

    seshanbe=[{
        type:"normal",
        day:"سه شنبه",
        name: "جبر و احتمال 3" ,
    teacher: "رضا علوی" ,
    hours: hours ,
    online :false,
    exam:false
    },{
        type:"break",
        name: "زنگ تفریح" ,
    teacher: "" ,
    hours: hours ,
    online :false,
    exam:false
    },{
        type:"exam",
        name: "آزمون ریاضی" ,
        teacher: "محمدرضا خوش برخورد" ,
        hours: hours ,
        online :false,
        exam: true
    }],
    cheharshanbe=[{
        type:"normal",
        day:"چهارشنبه",
        name: "جبر و احتمال 3" ,
    teacher: "رضا علوی" ,
    hours: hours ,
    online :false,
    exam:false
    },{
        type:"break",
        name: "زنگ تفریح" ,
    teacher: "" ,
    hours: hours ,
    online :false,
    exam:false
    },{
        type:"exam",
        name: "آزمون ریاضی" ,
        teacher: "محمدرضا خوش برخورد" ,
        hours: hours ,
        online :false,
        exam: true
    }],

    panjshanbe=[{
        type:"normal",
        day:"پنج شنبه",
        name: "زبان" ,
       teacher: "محمدرضا خوش برخورد" ,
       hours: hours ,
       online :false
       },{
        type:"normal",
        name: "عربی" ,
       teacher: "محمدرضا خوش برخورد" ,
       hours: hours ,
       online :false
       }]
];
    function initialData(){
        calenderView();
    };
    function calenderView(){
        // container.classList.add("flexContainer");
        // items = document.getElementsByClassName("items");
        // items.classList.add("flexChildren");
        container.innerHTML = dataContainer;
    };
    data.map(daysConstructer);
    function daysConstructer(item){
    dataContainer += `<div class="items flexChildrenMain flexChildren" >${item[0].day}<hr>
    ${item.map(classConstructer)} </div>`;
    };
    function classConstructer(element){
        return `<div class="flexChildren"><div style="background-color :${colorPicker(element)}; margin:0 auto; width:78%" class=" is-rounded text-size-12-n">${element.name}<br>${element.teacher}<br>${element.hours}</div></div>`;
    };
function colorPicker(element){
   if(element.type=="normal"){
       bgColoritem = "#1faa0041";
   }else if(element.type=="exam"){
    bgColoritem = "#ffb30041";
   }else if(element.type=="break"){
    bgColoritem = "#00b0ff41"; 
   }else if(element.type=="lunch"){
    bgColoritem = "#5a779441"
   }
   return bgColoritem ;
};
    
    // function listView(){
    //     items = document.getElementsByClassName("items");
    //     container.classList.remove("flexContainer");
    //     items.classList.remove("flexChildren");
    //     };
    
