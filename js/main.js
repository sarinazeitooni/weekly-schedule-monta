let hours = "8:30 - 7:00";
let container = document.getElementById("mainContainer");
let deleterButton = document.getElementById("deleter");
let dataContainerCalender,dataContainerList,bgColoritem;
let data = [shanbe = [{ type: "normal", day: "شنبه",name: "ادبیات فارسی", teacher: "محمدرضا خوش برخورد", hours: hours, online: true },
{ type: "break", name: "زنگ تفریح",teacher: "",hours: hours,online: false },
{type: "normal",name: "جبر و احتمال 3",teacher: "رضا علوی",
hours: hours,online: false }, {type: "break",name: "زنگ تفریح",teacher: "",hours: hours,online: false },
{type: "normal",name: "جبر و احتمال 3",teacher: "رضا علوی",hours: hours, online: true },
{  type: "lunch", name: "نهار و نماز", teacher: "", hours: hours,online: false}],
yekshanbe = [{ type: "normal",day: "یکشنبه",name: "جبر و احتمال 3",teacher: "رضا علوی",hours: hours,online: false},
{type: "break", name: "زنگ تفریح",teacher: "",hours: hours,online: false},
{type: "exam",name: "آزمون ریاضی",teacher: "محمدرضا خوش برخورد",hours: hours,online: false}],
 doshanbe = [{day: "دوشنبه",type: "exam",name: "آزمون ریاضی",teacher: "محمدرضا خوش برخورد",hours: hours,online: false },
{type: "break", name: "زنگ تفریح",teacher: "",hours: hours,online: false}, {type: "normal",name: "جبر و احتمال 3",teacher: "رضا علوی",hours: hours,online: false},
{type: "normal", name: "جبر و احتمال 3",teacher: "رضا علوی",hours: hours,online: false},{type: "normal", name: "جبر و احتمال 3",teacher: "رضا علوی",hours: hours,online: false },
{type: "normal",name: "جبر و احتمال 3",teacher: "رضا علوی",hours: hours, online: false,exam: false
}, {type: "normal",name: "جبر و احتمال 3",teacher: "رضا علوی",hours: hours,online: false
}, {type: "normal",name: "جبر و احتمال 3",teacher: "رضا علوی",hours: hours,online: false}],
seshanbe = [{type: "normal", day: "سه شنبه", name: "جبر و احتمال 3",teacher: "رضا علوی",hours: hours,online: false
}, {type: "break",name: "زنگ تفریح",teacher: "",hours: hours,online: false
 }, {type: "exam",name: "آزمون ریاضی",teacher: "محمدرضا خوش برخورد",hours: hours,online: false}],
cheharshanbe = [{type: "normal",day: "چهارشنبه",name: "جبر و احتمال 3",teacher: "رضا علوی",hours: hours,online: false},
 {type: "break",name: "زنگ تفریح",teacher: "",hours: hours,online: false},
{type: "exam",name: "آزمون ریاضی",teacher: "محمدرضا خوش برخورد",hours: hours,online: false}],
panjshanbe = [{type: "normal",day: "پنج شنبه",name: "زبان",teacher: "محمدرضا خوش برخورد",hours: hours,online: false},
{type: "normal",name: "عربی",teacher: "محمدرضا خوش برخورد",hours: hours,online: false }]];
function initialData() {
    calenderView();
};
function colorPicker(element) {
    switch(element.type) {
        case "normal":
            bgColoritem = "rgba(31, 170, 0, 0.1)";
          break;
        case "exam":
            bgColoritem = "rgba(255, 179, 0, 0.1)";
          break;
          case "break":
            bgColoritem = "rgba(0, 176, 255, 0.1)";
          break;
          case "lunch":
            bgColoritem = "rgba(170, 0, 255, 0.1)";
          break;
          default: "normal"
      }
    return bgColoritem;
};
function onlineCheck(element) {
    if (element.online) {
        return "mi-Info";
    } else {
        return "";
    }
};
data.map(daysConstructer);
//calenderView
function calenderView(){
    document.getElementById("calenderView").style.color = "black";
    document.getElementById("listView").style.color = "rgba(131, 130, 130, 0.315)";
    container.style.border = "1.5px solid  rgba(131, 130, 130, 0.315)";
    deleterButton.style.visibility = "visible";
    container.classList.add("flexContainer");
    container.innerHTML = dataContainerCalender;
};
function listView(){
    document.getElementById("calenderView").style.color = "rgba(131, 130, 130, 0.315)";
    document.getElementById("listView").style.color = "black";
    deleterButton.style.visibility = "hidden";
    container.classList.remove("flexContainer");
    container.style.border = "none";
    container.innerHTML = dataContainerList;
};
function daysConstructer(item) {
    dataContainerCalender += `<div class="flexChildrenMain"><div class=" space-top dayItemsmobile"><span class="is-hidden-widescreen tableIcon mi-Info"></span>${item[0].day}</div><hr><div class="">
    ${item.map(classConstructerCalender)} </div></div>`;
      dataContainerList +=`<div style="" class="has-text-right dayItems dayItemsmobile" ><span class=" tableIcon mi-Info"></span>${item[0].day}</div><div>${item.map(classConstructerList)}</div>`;    
};
function classConstructerCalender(element) {
    return `<div style="background-color :${colorPicker(element)};position:relative;
        margin:5px auto; width:80%; padding:10px;" class=" is-rounded text-size-10-n"><span class="deleteIcon icons mi-Info"></span>
        ${element.name}<br>${element.teacher}<br>${element.hours}<br><span class="${onlineCheck(element)}"></span></div>`;
};
function classConstructerList(element) {
        return `<div style=" background-color :${colorPicker(element)};
         width:100%" class=" columns is-rounded text-size-10-mobile-n text-size-12-n">
        <span class="column is-6-mobile is- space-64-left-n space-12-mobile-n"> ${element.name} </span>
        <span class="column is-6-mobile space-32-right-n space-12-mobile-n space-32-left-n"> ${element.teacher} </span>
        <span class="column is-6-mobile space-32-right-n space-32-left-n space-12-mobile-n"> ${element.hours} </span>
        <span class="column is-6-mobile ${onlineCheck(element)} "></span>
        <div class="column is-12-mobile">
        <span class="is-pulled-left is-hidden-mobile icons mi-Info"></span><span class="is-pulled-left is-hidden-mobile icons mi-Info"></span>
        </div>
        </div>`;
};
