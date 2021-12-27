


let div1h1 = document.createElement("h1");
div1h1.setAttribute("id" , "title");
// div1h1.setAttribute("style","text-align:right")
div1h1.innerText="DOM MANIPULATION WITH FORMS";

document.body.append(div1h1);

let pt1 = document.createElement("P");
pt1.setAttribute("id" , "description")
pt1.innerText="DOM FORMS";
document.body.append(pt1);

var formid = document.createElement("form");
formid.setAttribute("id" ,"form" );
formid.setAttribute("class" ,"form" );
document.body.append(formid);


var divcl1 = document.createElement("div");
divcl1.setAttribute("class" ,"form-group" );
formid.appendChild(divcl1);


var fn = document.createElement("div");
fn.innerText = "First Name";
divcl1.appendChild(fn);


var divFirstnameip = document.createElement("input");
divFirstnameip.setAttribute("type","text");
divFirstnameip.setAttribute("id", "first-name")
divFirstnameip.setAttribute("required","");
divFirstnameip.setAttribute("placeholder","First-Name");
divcl1.appendChild(divFirstnameip);


var sn = document.createElement("div");
sn.innerText = "Second Name";
divcl1.appendChild(sn);


var divSecondnameip = document.createElement("input");
divSecondnameip.setAttribute("type", "text");
divSecondnameip.setAttribute("id", "last-name")
divSecondnameip.setAttribute("required","");
divSecondnameip.setAttribute("placeholder","Second-Name");
divcl1.appendChild(divSecondnameip);



var pincode = document.createElement("div");
pincode.innerText = "pincode";
divcl1.appendChild(pincode);


var pincodeip = document.createElement("input");
pincodeip.setAttribute("type", "text");
pincodeip.setAttribute("id", "pincode");
pincodeip.setAttribute("required","");
pincodeip.setAttribute("placeholder","pincode");
divcl1.appendChild(pincodeip);


var Address = document.createElement("div");
Address.innerText = "Address";
divcl1.appendChild(Address);


var Addressip = document.createElement("textarea");
Addressip.setAttribute("id", "address");
Addressip.setAttribute("required"," ");
Addressip.setAttribute("placeholder","Address");
divcl1.appendChild(Addressip);


var Gendder = document.createElement("div");
Gendder.setAttribute("class","Gendder");
Gendder.innerText = "Gender:";
divcl1.appendChild(Gendder);

var br1 = document.createElement("br");

Gendder.appendChild(br1);

var male = document.createElement("span");
male.innerText = "Male";
Gendder.appendChild(male);


var Gender = document.createElement("input");
Gender.setAttribute("type","radio");
Gender.setAttribute("value","male");
Gender.setAttribute("required","");
Gender.innerText = "MALE";
Gender.setAttribute("name", "gender");
Gendder.appendChild(Gender);

var female = document.createElement("span");
female.innerText = "female";
Gendder.appendChild(female);

var Gender1 = document.createElement("input");
Gender1.setAttribute("type","radio");
Gender1.setAttribute("value","Female");
Gender1.setAttribute("required","");
Gender1.innerText = "female";
Gender1.setAttribute("name", "gender");
Gendder.appendChild(Gender1);

var country =document.createElement("input");
country.setAttribute("type","text");
country.innerText="Country";
country.setAttribute("placeholder","country")
divcl1.appendChild(country)

var state =document.createElement("input");
state.setAttribute("type","text");
state.innerText="State";
state.setAttribute("placeholder","state")
divcl1.appendChild(state)


let table1 = document.createElement("table");
table1.setAttribute("class" , "table")
document.body.append(table1);

let thead = document.createElement("thead");
thead.setAttribute("id" , "thead")
table1.appendChild(thead);

let tr1 = document.createElement("tr");
tr1.setAttribute("id" , "tr1")
thead.appendChild(tr1 );


let th1 = document.createElement("th");
th1.setAttribute("id" , "th1")
th1.innerText="First-Name";
tr1.appendChild(th1 );


let th2 = document.createElement("th");
th2.setAttribute("id" , "th2")
th2.innerText="Last-Name";
tr1.appendChild(th2);

let th3 = document.createElement("th");
th3.setAttribute("id" , "th3")
th3.innerText="Pincode";
tr1.appendChild(th3);


let th4 = document.createElement("th");
th4.setAttribute("id" , "th4")
th4.innerText="Address";
tr1.appendChild(th4);


let th5 = document.createElement("th");
th5.setAttribute("id" , "th5")
th5.innerText="Gender";
tr1.appendChild(th5);



let tbody = document.createElement("tbody");
tbody.setAttribute("id" , "tbody")
table1.appendChild(tbody);


let tr2 = document.createElement("tr");
tr2.setAttribute("id" , "tr2")
tbody.appendChild(tr2 );


let td1 = document.createElement("td");
td1.setAttribute("id" , "td1")
tr2.appendChild(td1 );


let td2 = document.createElement("td");
td2.setAttribute("id" , "td2")
tr2.appendChild(td2 );

let td3 = document.createElement("td");
td3.setAttribute("id" , "td3")
tr2.appendChild(td3);


let td4 = document.createElement("td");
td4.setAttribute("id" , "td4")
tr2.appendChild(td4);


let td5 = document.createElement("td");
td5.setAttribute("id" , "td5")
tr2.appendChild(td5);


















//Genderip

/*var choiceoffood = document.createElement("div");
choiceoffood.innerText = "Choice of food:";
document.body.append(choiceoffood);
//choiceoffood
var rice = document.createElement("div");
rice.innerText="rice";
choiceoffood.appendChild(rice);

var  ricec = document.createElement("input");
ricec.setAttribute("type", "checkbox");
choiceoffood.appendChild(rice).appendChild(ricec);

var curd = document.createElement("div");
curd.innerText="curd";
choiceoffood.appendChild(curd);

var  curdc = document.createElement("input");
curdc.setAttribute("type", "checkbox");
choiceoffood.appendChild(curd).appendChild(curdc);

var sambar = document.createElement("div");
sambar .innerText="sambar ";
choiceoffood.appendChild(sambar );

var  sambarc = document.createElement("input");
sambarc.setAttribute("type", "checkbox");
choiceoffood.appendChild(sambar ).appendChild(sambarc);

var parotta = document.createElement("div");
parotta.innerText="parotta";
choiceoffood.appendChild(parotta);

var  parottac = document.createElement("input");
parottac.setAttribute("type", "checkbox");
choiceoffood.appendChild(parotta).appendChild(parottac);

var ghee = document.createElement("div");
ghee.innerText="ghee";
choiceoffood.appendChild(ghee);

var  gheec = document.createElement("input");
gheec.setAttribute("type", "checkbox");
choiceoffood.appendChild(ghee).appendChild(gheec);


var state = document.createElement("div");
state.innerText = "state";
document.body.append(state);
//state

var stateip = document.createElement("input");
stateip.setAttribute("type", "text");
document.body.append(stateip);
//stateip


var country = document.createElement("div");
country.innerText = "country";
document.body.append(country);
//country

var countryip = document.createElement("input");
countryip.setAttribute("type", "text");
document.body.append(countryip);
//country
let div12 = document.createElement("div");
document.body.append(div12);
let br1= document.createElement("br");
document.body.append(br1);*/

var submitip = document.createElement("button");
submitip.innerText = "submit";
submitip.setAttribute("type", "submit");
submitip.setAttribute("value", "submit");
submitip.setAttribute("id", "submit");
submitip.setAttribute("class", "btn btn-primary");
formid.appendChild(submitip);
document.getElementById("submit").addEventListener("click",output);

function output()
{
    var firstname =  document.getElementById("first-name").value;
    document.getElementById("td1").innerText=firstname;

    var lastname =  document.getElementById("last-name").value;
    document.getElementById("td2").innerText=lastname;

    var pincode =  document.getElementById("pincode").value;
    document.getElementById("td3").innerText=pincode;

    var x =  document.getElementById("address").value;
    document.getElementById("td4").innerHTML=x;

    var gender =  document.querySelector('input[name=gender]:checked'  ).value;

    document.getElementById("td5").innerText=gender;
    
    
}