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
    container.style.border = "1.5px solid  rgba(131, 130, 130, 0.315)";
    deleterButton.style.visibility = "visible";
    container.classList.add("flexContainer");
    container.innerHTML = dataContainerCalender;
};
function listView(){
    deleterButton.style.visibility = "hidden";
    container.classList.remove("flexContainer");
    container.style.border = "none";
    container.innerHTML = dataContainerList;
};
function daysConstructer(item) {
    dataContainerCalender += `<div class="flexChildrenMain"><div>${item[0].day}</div><hr><div class="">
    ${item.map(classConstructerCalender)} </div></div>`;
      dataContainerList +=`<div class="has-text-right dayItems" >${item[0].day}</div><div class="Items">${item.map(classConstructerList)}</div>`;    
};
function classConstructerCalender(element) {
    return `<div class=""><div style="background-color :${colorPicker(element)};
        margin:0 auto; width:78%" class=" is-rounded text-size-12-n">
        ${element.name}<br>${element.teacher}<br>${element.hours}<br><span class="${onlineCheck(element)}"></span></div></div>`;
};
function classConstructerList(element) {
        return `<div style="background-color :${colorPicker(element)};
         width:100%" class="Items is-rounded text-size-10-mobile-n text-size-12-n">
        <span class="space-64-left-n space-12-mobile-n"> ${element.name} </span>
        <span class=" space-64-right-n space-12-mobile-n space-64-left-n"> ${element.teacher} </span>
        <span class="space-64-right-n space-64-left-n space-12-mobile-n"> ${element.hours} </span>
        <span class=" ${onlineCheck(element)} "></span>
        <span class="is-pulled-left  mi-Info"></span><span class="is-pulled-left mi-Info"></span>
        </div>`;
};
