// WEATHER FOR TODAY

//    MKE CALL
    var weather = new XMLHttpRequest();
    weather.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=53202,us&units=imperial&APPID=c6cd1c7bf856d6217af0b3e29aebb66e", false);
    weather.send();
    
    var m = JSON.parse(weather.response);
    var mketemp = Math.ceil(m.main.temp) + '°';
    document.getElementById("mketemp").innerHTML = mketemp;
    var mkeDesc = m.weather[0].description.toUpperCase();
    document.getElementById("mkeDesc").innerHTML = mkeDesc;
       
//    CHI CALL
    var weatherchi = new XMLHttpRequest();
    weatherchi.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=60601,us&units=imperial&APPID=c6cd1c7bf856d6217af0b3e29aebb66e", false);
    weatherchi.send();
    
    var c = JSON.parse(weatherchi.response);
    var chitemp = '&nbsp;' + Math.ceil(c.main.temp) + '°';
    document.getElementById("chitemp").innerHTML = chitemp;
    var chiDesc = c.weather[0].description.toUpperCase();
    document.getElementById("chiDesc").innerHTML = chiDesc;
        
//    DAL CALL
    var weatherdal = new XMLHttpRequest();
    weatherdal.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=75201,us&units=imperial&APPID=c6cd1c7bf856d6217af0b3e29aebb66e", false);
    weatherdal.send();
    
    var d = JSON.parse(weatherdal.response);
    var daltemp = '&nbsp;' + Math.ceil(d.main.temp) + '°';
    document.getElementById("daltemp").innerHTML = daltemp;
    var dalDesc = d.weather[0].description.toUpperCase();
    document.getElementById("dalDesc").innerHTML = dalDesc;
        
//  MPLS CALL
    var weathermpls = new XMLHttpRequest();
    weathermpls.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=55402,us&units=imperial&APPID=c6cd1c7bf856d6217af0b3e29aebb66e", false);
    weathermpls.send();
    
    var mp = JSON.parse(weathermpls.response);
    var mplstemp = '&nbsp;' + Math.ceil(mp.main.temp) + '°';
    document.getElementById("mplstemp").innerHTML = mplstemp;
    var mplsDesc = mp.weather[0].description.toUpperCase();
    document.getElementById("mplsDesc").innerHTML = mplsDesc;








// get day function for day headers//



function getDayOfWeek(date) {
  var dayOfWeek = new Date(date).getDay();    
  return isNaN(dayOfWeek) ? null : ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'][dayOfWeek];
}


//Morning = 


// 5 DAY WEATHER FORECAST


//    MKE CALL_________________________________________________________________
    var mkeForecast = new XMLHttpRequest();
    mkeForecast.open("GET", "https://api.openweathermap.org/data/2.5/forecast?q=53202,us&units=imperial&APPID=c6cd1c7bf856d6217af0b3e29aebb66e", false);
    mkeForecast.send();
    
// Day 1****************


    //description
    var m_desc1 = JSON.parse(mkeForecast.response);
    var mkeD1 = m_desc1.list[6].weather[0].description.toUpperCase();
    document.getElementById("mkeD1").innerHTML = mkeD1;

    //temp 
    var m_max1 = JSON.parse(mkeForecast.response);
    var mkeMax1 = Math.ceil(m_max1.list[6].main.temp_max) + '°';
    document.getElementById("mkeMax1").innerHTML = mkeMax1;


//Day 2*****************************
    var mDayTwo = JSON.parse(mkeForecast.response);
    var mkeDay2 = (mDayTwo.list[14].dt_txt);
    mkeDay2= getDayOfWeek(mkeDay2) + "     " + (mkeDay2.substring(5,10));
    document.getElementById("mkeDay2").innerHTML = mkeDay2;

    //description
    var m_desc2 = JSON.parse(mkeForecast.response);
    var mkeD2 = m_desc2.list[14].weather[0].description.toUpperCase();
    document.getElementById("mkeD2").innerHTML = mkeD2;


    //temp 
    var m_max2 = JSON.parse(mkeForecast.response);
    var mkeMax2 = Math.ceil(m_max2.list[14].main.temp_max) + '°';
    document.getElementById("mkeMax2").innerHTML = mkeMax2;


//Day 3*****************************
    var mDayThree = JSON.parse(mkeForecast.response);
    var mkeDay3 = (mDayThree.list[22].dt_txt);
    mkeDay3 = getDayOfWeek(mkeDay3) + "     " +  (mkeDay3.substring(5,10));
    document.getElementById("mkeDay3").innerHTML = mkeDay3;

    //description
    var m_desc3 = JSON.parse(mkeForecast.response);
    var mkeD3 = m_desc3.list[22].weather[0].description.toUpperCase();
    document.getElementById("mkeD3").innerHTML = mkeD3;

    //temp 
    var m_max3 = JSON.parse(mkeForecast.response);
    var mkeMax3 = Math.ceil(m_max3.list[22].main.temp_max) + '°';
    document.getElementById("mkeMax3").innerHTML = mkeMax3;

//Day 4*****************************
    var mDayFour = JSON.parse(mkeForecast.response);
    var mkeDay4 = (mDayFour.list[30].dt_txt);
    mkeDay4 = getDayOfWeek(mkeDay4) + "     " +  (mkeDay4.substring(5,10));
    document.getElementById("mkeDay4").innerHTML = mkeDay4;

    //description
    var m_desc4 = JSON.parse(mkeForecast.response);
    var mkeD4 = m_desc4.list[30].weather[0].description.toUpperCase();
    document.getElementById("mkeD4").innerHTML = mkeD4;


    //temp 
    var m_max4 = JSON.parse(mkeForecast.response);
    var mkeMax4 = Math.ceil(m_max4.list[30].main.temp_max) + '°';
    document.getElementById("mkeMax4").innerHTML = mkeMax4;

//Day 5*****************************
    var mDayFive = JSON.parse(mkeForecast.response);
    var mkeDay5 =(mDayFive.list[38].dt_txt);
    mkeDay5 = getDayOfWeek(mkeDay5) + "     " +  (mkeDay5.substring(5,10));
    document.getElementById("mkeDay5").innerHTML = mkeDay5;

    //description
    var m_desc5 = JSON.parse(mkeForecast.response);
    var mkeD5 = m_desc4.list[38].weather[0].description.toUpperCase();
    document.getElementById("mkeD5").innerHTML = mkeD5;


    //temp 
    var m_max5 = JSON.parse(mkeForecast.response);
    var mkeMax5 = Math.ceil(m_max5.list[38].main.temp_max) + '°';
    document.getElementById("mkeMax5").innerHTML = mkeMax5;



//    CHI CALL_________________________________________________________________
    var chiForecast = new XMLHttpRequest();
    chiForecast.open("GET", "https://api.openweathermap.org/data/2.5/forecast?q=60601,us&units=imperial&APPID=c6cd1c7bf856d6217af0b3e29aebb66e", false);
    chiForecast.send();
    
// Day 1****************

    //description
    var c_desc1 = JSON.parse(chiForecast.response);
    var chiD1 = c_desc1.list[6].weather[0].description.toUpperCase();
    document.getElementById("chiD1").innerHTML = chiD1;

    //temp 
    var c_max1 = JSON.parse(chiForecast.response);
    var chiMax1 = Math.ceil(c_max1.list[6].main.temp_max) + '°';
    document.getElementById("chiMax1").innerHTML = chiMax1;


//Day 2*****************************
    var cDayTwo = JSON.parse(chiForecast.response);
    var chiDay2 = (cDayTwo.list[14].dt_txt);
    chiDay2= getDayOfWeek(chiDay2) + "     " + (chiDay2.substring(5,10));
    document.getElementById("chiDay2").innerHTML = chiDay2;

    //description
    var c_desc2 = JSON.parse(chiForecast.response);
    var chiD2 = c_desc2.list[14].weather[0].description.toUpperCase();
    document.getElementById("chiD2").innerHTML = chiD2;


    //temp 
    var c_max2 = JSON.parse(chiForecast.response);
    var chiMax2 = Math.ceil(c_max2.list[14].main.temp_max) + '°';
    document.getElementById("chiMax2").innerHTML = chiMax2;


//Day 3*****************************
    var cDayThree = JSON.parse(chiForecast.response);
    var chiDay3 = (cDayThree.list[22].dt_txt);
    chiDay3 = getDayOfWeek(chiDay3) + "     " +  (chiDay3.substring(5,10));
    document.getElementById("chiDay3").innerHTML = chiDay3;

    //description
    var c_desc3 = JSON.parse(chiForecast.response);
    var chiD3 = c_desc3.list[22].weather[0].description.toUpperCase();
    document.getElementById("chiD3").innerHTML = chiD3;

    //temp 
    var c_max3 = JSON.parse(chiForecast.response);
    var chiMax3 = Math.ceil(c_max3.list[22].main.temp_max) + '°';
    document.getElementById("chiMax3").innerHTML = chiMax3;

//Day 4*****************************
    var cDayFour = JSON.parse(chiForecast.response);
    var chiDay4 = (cDayFour.list[30].dt_txt);
    chiDay4 = getDayOfWeek(chiDay4) + "     " +  (chiDay4.substring(5,10));
    document.getElementById("chiDay4").innerHTML = chiDay4;

    //description
    var c_desc4 = JSON.parse(chiForecast.response);
    var chiD4 = c_desc4.list[30].weather[0].description.toUpperCase();
    document.getElementById("chiD4").innerHTML = chiD4;

    //temp 
    var c_max4 = JSON.parse(chiForecast.response);
    var chiMax4 = Math.ceil(c_max4.list[30].main.temp_max) + '°';
    document.getElementById("chiMax4").innerHTML = chiMax4;

//Day 5*****************************
    var cDayFive = JSON.parse(chiForecast.response);
    var chiDay5 = (cDayFive.list[38].dt_txt);
    chiDay5 = getDayOfWeek(chiDay5) + "     " +  (chiDay5.substring(5,10));
    document.getElementById("chiDay5").innerHTML = chiDay5;

    //description
    var c_desc5 = JSON.parse(chiForecast.response);
    var chiD5 = c_desc5.list[38].weather[0].description.toUpperCase();
    document.getElementById("chiD5").innerHTML = chiD5;

    //temp
    var c_max5 = JSON.parse(chiForecast.response);
    var chiMax5 = Math.ceil(c_max5.list[38].main.temp_max) + '°';
    document.getElementById("chiMax5").innerHTML = chiMax5;


//    DAL CALL_________________________________________________________________
    var dalForecast = new XMLHttpRequest();
    dalForecast.open("GET", "https://api.openweathermap.org/data/2.5/forecast?q=75201,us&units=imperial&APPID=c6cd1c7bf856d6217af0b3e29aebb66e", false);
    dalForecast.send();
    
// Day 1****************

    //description
    var d_desc1 = JSON.parse(dalForecast.response);
    var dalD1 = d_desc1.list[6].weather[0].description.toUpperCase();
    document.getElementById("dalD1").innerHTML = dalD1;

    //temp
    var d_max1 = JSON.parse(dalForecast.response);
    var dalMax1 = Math.ceil(d_max1.list[6].main.temp_max) + '°';
    document.getElementById("dalMax1").innerHTML = dalMax1;


//Day 2*****************************
    var dDayTwo = JSON.parse(dalForecast.response);
    var dalDay2 = (dDayTwo.list[14].dt_txt);
    dalDay2 = getDayOfWeek(dalDay2) + "     " + (dalDay2.substring(5,10));
    document.getElementById("dalDay2").innerHTML = dalDay2;

    //description
    var d_desc2 = JSON.parse(chiForecast.response);
    var dalD2 = d_desc2.list[14].weather[0].description.toUpperCase();
    document.getElementById("dalD2").innerHTML = dalD2;

    //temp 
    var d_max2 = JSON.parse(dalForecast.response);
    var dalMax2 = Math.ceil(d_max2.list[14].main.temp_max) + '°';
    document.getElementById("dalMax2").innerHTML = dalMax2;


//Day 3*****************************
    var dDayThree = JSON.parse(dalForecast.response);
    var dalDay3 = (dDayThree.list[22].dt_txt);
    dalDay3 = getDayOfWeek(dalDay3) + "     " + (dalDay3.substring(5,10));
    document.getElementById("dalDay3").innerHTML = dalDay3;

    //description
    var d_desc3 = JSON.parse(chiForecast.response);
    var dalD3 = d_desc3.list[22].weather[0].description.toUpperCase();
    document.getElementById("dalD3").innerHTML = dalD3;

    //temp 
    var d_max3 = JSON.parse(dalForecast.response);
    var dalMax3 = Math.ceil(d_max3.list[22].main.temp_max) + '°';
    document.getElementById("dalMax3").innerHTML = dalMax3;

//Day 4*****************************
    var dDayFour = JSON.parse(dalForecast.response);
    var dalDay4 = (dDayFour.list[30].dt_txt);
    dalDay4 = getDayOfWeek(dalDay4) + "     " + (dalDay4.substring(5,10));
    document.getElementById("dalDay4").innerHTML = dalDay4;

    //description
    var d_desc4 = JSON.parse(chiForecast.response);
    var dalD4 = d_desc4.list[30].weather[0].description.toUpperCase();
    document.getElementById("dalD4").innerHTML = dalD4;

    //temp 
    var d_max4 = JSON.parse(dalForecast.response);
    var dalMax4 = Math.ceil(d_max4.list[30].main.temp_max) + '°';
    document.getElementById("dalMax4").innerHTML = dalMax4;

//Day 5*****************************
    var dDayFive = JSON.parse(dalForecast.response);
    var dalDay5 = (dDayFive.list[38].dt_txt);
    dalDay5 = getDayOfWeek(dalDay5) + "     " + (dalDay5.substring(5,10));
    document.getElementById("dalDay5").innerHTML = dalDay5;

    //description
    var d_desc5 = JSON.parse(chiForecast.response);
    var dalD5 = d_desc5.list[38].weather[0].description.toUpperCase();
    document.getElementById("dalD5").innerHTML = dalD5;

    //temp 
    var d_max5 = JSON.parse(dalForecast.response);
    var dalMax5 = Math.ceil(d_max5.list[38].main.temp_max) + '°';
    document.getElementById("dalMax5").innerHTML = dalMax5;


//    MPLS CALL_________________________________________________________________
    var mplsForecast = new XMLHttpRequest();
    mplsForecast.open("GET", "https://api.openweathermap.org/data/2.5/forecast?q=55402,us&units=imperial&APPID=c6cd1c7bf856d6217af0b3e29aebb66e", false);
    mplsForecast.send();
    
// Day 1****************

    //description
    var mn_desc1 = JSON.parse(mplsForecast.response);
    var mplsD1 = mn_desc1.list[6].weather[0].description.toUpperCase();
    document.getElementById("mplsD1").innerHTML = mplsD1;

    //temp
    var mn_max1 = JSON.parse(mplsForecast.response);
    var mplsMax1 = Math.ceil(mn_max1.list[6].main.temp_max) + '°';
    document.getElementById("mplsMax1").innerHTML = mplsMax1;

//Day 2*****************************
    var mnDayTwo = JSON.parse(mplsForecast.response);
    var mplsDay2 = (mnDayTwo.list[14].dt_txt);
    mplsDay2 = getDayOfWeek(mplsDay2) + "     " + (mplsDay2.substring(5,10));
    document.getElementById("mplsDay2").innerHTML = mplsDay2;

    //description
    var mn_desc2 = JSON.parse(mplsForecast.response);
    var mplsD2 = mn_desc2.list[14].weather[0].description.toUpperCase();
    document.getElementById("mplsD2").innerHTML = mplsD2;

    //temp 
    var mn_max2 = JSON.parse(mplsForecast.response);
    var mplsMax2 = Math.ceil(mn_max2.list[14].main.temp_max) + '°';
    document.getElementById("mplsMax2").innerHTML = mplsMax2;

//Day 3*****************************
    var mnDayThree = JSON.parse(mplsForecast.response);
    var mplsDay3 = (mnDayThree.list[22].dt_txt);
    mplsDay3 = getDayOfWeek(mplsDay3) + "     " + (mplsDay3.substring(5,10));
    document.getElementById("mplsDay3").innerHTML = mplsDay3;

    //description
    var mn_desc3 = JSON.parse(mplsForecast.response);
    var mplsD3 = mn_desc3.list[22].weather[0].description.toUpperCase();
    document.getElementById("mplsD3").innerHTML = mplsD3;

    //temp 
    var mn_max3 = JSON.parse(mplsForecast.response);
    var mplsMax3 = Math.ceil(mn_max3.list[22].main.temp_max) + '°';
    document.getElementById("mplsMax3").innerHTML = mplsMax3;

//Day 4*****************************
    var mnDayFour = JSON.parse(mplsForecast.response);
    var mplsDay4 = (mnDayFour.list[30].dt_txt);
    mplsDay4 = getDayOfWeek(mplsDay4) + "     " + (mplsDay4.substring(5,10));
    document.getElementById("mplsDay4").innerHTML = mplsDay4;

    //description
    var mn_desc4 = JSON.parse(mplsForecast.response);
    var mplsD4 = mn_desc4.list[30].weather[0].description.toUpperCase();
    document.getElementById("mplsD4").innerHTML = mplsD4;

    //temp 
    var mn_max4 = JSON.parse(mplsForecast.response);
    var mplsMax4 = Math.ceil(mn_max4.list[30].main.temp_max) + '°';
    document.getElementById("mplsMax4").innerHTML = mplsMax4;

//Day 5*****************************
    var mnDayFive = JSON.parse(mplsForecast.response);
    var mplsDay5 = (mnDayFive.list[38].dt_txt);
    mplsDay5 = getDayOfWeek(mplsDay5) + "     " + (mplsDay5.substring(5,10));
    document.getElementById("mplsDay5").innerHTML = mplsDay5;

    //description
    var mn_desc5 = JSON.parse(mplsForecast.response);
    var mplsD5 = mn_desc5.list[38].weather[0].description.toUpperCase();
    document.getElementById("mplsD5").innerHTML = mplsD5;

    //temp 
    var mn_max5 = JSON.parse(mplsForecast.response);
    var mplsMax5 = Math.ceil(mn_max5.list[38].main.temp_max) + '°';
    document.getElementById("mplsMax5").innerHTML = mplsMax5;



















