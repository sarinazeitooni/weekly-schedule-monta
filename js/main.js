debugger

let hours = "8:30 - 7:00";
let container = document.getElementById("mainContainer");
let dataContainer="";
let items = document.getElementsByClassName("items");
let data = [
    shanbe =[ {
        day:"شنبه",
     name: "ادبیات فارسی" ,
    teacher: "محمدرضا خوش برخورد" ,
    hours: hours ,
    online :true,
    exam:false
    }, {name: "زنگ تفریح" ,
    teacher: "" ,
    hours: hours ,
    online :false,
    exam:false
    },{name: "جبر و احتمال 3" ,
    teacher: "رضا علوی" ,
    hours: hours ,
    online :false,
    exam:false
    }, {name: "زنگ تفریح" ,
    teacher: "" ,
    hours: hours ,
    online :false,
    exam:false
    },{ name: "جبر و احتمال 3" ,
    teacher: "رضا علوی" ,
    hours: hours ,
    online :true,
    exam:false
    }, {name: "نهار و نماز" ,
    teacher: "" ,
    hours: hours ,
    online :false,
    exam:false
    }],

    yekshanbe=[{
        day:"یکشنبه",
        name: "جبر و احتمال 3" ,
    teacher: "رضا علوی" ,
    hours: hours ,
    online :false,
    exam:false
    },{name: "زنگ تفریح" ,
    teacher: "" ,
    hours: hours ,
    online :false,
    exam:false
    },{name: "آزمون ریاضی" ,
        teacher: "محمدرضا خوش برخورد" ,
        hours: hours ,
        online :false,
        exam: true
    }],

    doshanbe=[
        {day:"دوشنبه",
            name: "آزمون ریاضی" ,
        teacher: "محمدرضا خوش برخورد" ,
        hours: hours ,
        online :false,
        exam: true
    },
    {name: "زنگ تفریح" ,
    teacher: "" ,
    hours: hours ,
    online :false,
    exam:false
    },{name: "جبر و احتمال 3" ,
    teacher: "رضا علوی" ,
    hours: hours ,
    online :false,
    exam:false
    },{name: "جبر و احتمال 3" ,
    teacher: "رضا علوی" ,
    hours: hours ,
    online :false,
    exam:false
    },{name: "جبر و احتمال 3" ,
    teacher: "رضا علوی" ,
    hours: hours ,
    online :false,
    exam:false
    },{name: "جبر و احتمال 3" ,
    teacher: "رضا علوی" ,
    hours: hours ,
    online :false,
    exam:false
    },{name: "جبر و احتمال 3" ,
    teacher: "رضا علوی" ,
    hours: hours ,
    online :false,
    exam:false
    },{name: "جبر و احتمال 3" ,
    teacher: "رضا علوی" ,
    hours: hours ,
    online :false,
    exam:false
    }

    ],

    seshanbe=[{
        day:"سه شنبه",
        name: "جبر و احتمال 3" ,
    teacher: "رضا علوی" ,
    hours: hours ,
    online :false,
    exam:false
    },{name: "زنگ تفریح" ,
    teacher: "" ,
    hours: hours ,
    online :false,
    exam:false
    },{name: "آزمون ریاضی" ,
        teacher: "محمدرضا خوش برخورد" ,
        hours: hours ,
        online :false,
        exam: true
    }],
    cheharshanbe=[{
        day:"چهارشنبه",
        name: "جبر و احتمال 3" ,
    teacher: "رضا علوی" ,
    hours: hours ,
    online :false,
    exam:false
    },{name: "زنگ تفریح" ,
    teacher: "" ,
    hours: hours ,
    online :false,
    exam:false
    },{name: "آزمون ریاضی" ,
        teacher: "محمدرضا خوش برخورد" ,
        hours: hours ,
        online :false,
        exam: true
    }],

    panjshanbe=[{
        day:"پنج شنبه",
        name: "زبان" ,
       teacher: "محمدرضا خوش برخورد" ,
       hours: hours ,
       online :false
       },{
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
        // items.classList.add("flexChildren");
        container.innerHTML = dataContainer;
    };
    data.map(daysConstructer);
    function daysConstructer(item){
    dataContainer += `<div class=" items flexChildren">${item[0].day}<hr>
    ${item.map(classConstructer)} </div>`;
    };
    function classConstructer(element){
        return `<div class="flexChildren">${element.name}<br>${element.teacher}<br>${element.hours}</div>`;
    };

    
    function listView(){
        container.classList.remove("flexContainer");
        items.classList.remove("flexChildren");
        };
    
