let container = document.getElementById("maincontainer");
    let deleterButton = document.getElementById("deleter");
    let dataContainerCalender = "";
    let dataContainerList = "";
    let bgColoritem;
    function initialData() {
    listView();
    };
    function calenderView() {
document.getElementById("calenderView").style.color = "black";
document.getElementById("listView").style.color = "rgba(131, 130, 130, 0.315)";
container.style.border = "1.5px solid  rgba(131, 130, 130, 0.315)";
deleterButton.style.visibility = "visible";
container.classList.add("flexcontainer");
container.innerHTML = dataContainerCalender;
};

function listView() {
document.getElementById("calenderView").style.color = "rgba(131, 130, 130, 0.315)";
document.getElementById("listView").style.color = "black";
deleterButton.style.visibility = "hidden";
container.classList.remove("flexcontainer");
container.style.border = "none";
container.innerHTML = dataContainerList;
};
    function colorPicker(element) {
    switch (element.type) {
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
        default:
            "normal"
    }
    return bgColoritem;
};
function onlineCheckList(element) {
    if (element.online) {
        return `<span class=" mi-Info " style=" text-align: right; display:block; padding: 3px; margin: 10px;"><span class="is-hidden-mobile">آنلاین</span></span>`;
    } else {
        return "";
    }
};
function onlineCheckCalendar(element) {
    if (element.online) {
        return `<span class=" mi-Info " style=" text-align: right; display:block; padding: 3px; margin:0 10px;"></span>`;
    } else {
        return "";
    }
};
weeklyschedule.map(daysConstructer);
function daysConstructer(item) {
    dataContainerCalender += `<div class=" flexchildrenmain"><div class="space-top dayItemsmobile">
        <span class="is-hidden-widescreen tableicon mi-Info"></span>${item.day}</div>
        <hr>
        <div style="margin:3px auto;">
    ${item.classDetail.map(classConstructerCalender)} </div></div>`;
    dataContainerList += `<div style="" class="has-text-right dayItems dayItemsmobile">
        <span class=" tableicon mi-Calendar1"></span>
        ${item.day}</div><div>${item.classDetail.map(classConstructerList)}</div>`;

};
function classConstructerCalender(element) {
    return `<div style="background-color :${colorPicker(element)};position:relative;
        margin:3px 15px; padding:15px 5px;" class=" is-rounded mobiletest text-size-10-n">
        <span class=" deleteicon icons mi-Delete-X-icon---16px"></span>
       <span class="has-text-weight-bolder column" style="padding:1px"> ${element.name}</span>
       <span class='text-grey-n' style='display:block; padding: 3px;' >${element.teacher}</span>
       <span class='text-grey-n' style='display:block;'>${element.hours}</span>
       <span style="position:absolute; right:-5px; top:75%;" class="is-pulled-right">${onlineCheckCalendar(element)}</span></div>`;
};
 function teacherCheck(element){
    if(element!== ""){
        return `<span class="column width50-mobile" style="text-align: right; margin: 10px;">` + element + `</span>`;
    }else
    {
        return `<span class=" column is-hidden-mobile">  </span>`;
    }
 };
function classConstructerList(element) {

  return  `<div style="flex-wrap:wrap; background-color :${colorPicker(element)};" class="columns fullwidth is-rounded margin-mobile is-flex-mobile text-size-10-mobile-n text-size-12-n">
        <span class="column width50-mobile has-text-weight-bolder" style=" text-align: right; margin: 10px;" > <span class="mi-No-answer is-hidden-mobile"></span> ${element.name} </span>
        ${teacherCheck(element.teacher)}
          <span class="column width50-mobile text-grey-n" style='line-height: inherit; text-align: right; padding: 3px; margin: 10px;'><span>${element.hours}</span><span class="mi-Clock-icon"></span></span>
        ${onlineCheckList(element)}
        <div class=" column is-hidden-mobile">
        <span style="background-color: white; border-radius: 20px; padding: 1px; margin:1px;" class="is-pulled-left icons mi-ic-edit">
            <span class='path1'></span><span class='path2'></span>
                 </span>
        <span style="background-color: white; border-radius: 20px; padding: 1px; margin:1px;" class="is-pulled-left icons mi-ic-trash"">
            <span class="path1"></span><span class="path2"></span>
                 </span>
        </div>
        </div>`;
};
