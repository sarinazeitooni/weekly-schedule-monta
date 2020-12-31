let hours = "8:30 - 7:00";
let data = [
    shanbe =[ {
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

    yekshanbe=[{name: "جبر و احتمال 3" ,
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
        {name: "آزمون ریاضی" ,
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

    seshanbe=[{name: "جبر و احتمال 3" ,
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
    cheharshanbe=[{name: "جبر و احتمال 3" ,
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
data = JSON.stringify(data);

console.log(data);