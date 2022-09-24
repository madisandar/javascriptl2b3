// console.log("heyyyu");

var getinput = document.getElementById('search');
var getul =  document.getElementById('members');
var getli = getul.getElementsByTagName('li');
// console.log(getli);  //HTML Collection

var getsortazm1btn = document.getElementById('sortazm1');
var getsortzam1btn = document.getElementById('sortzam1');
var getsortazm2btn = document.getElementById('sortazm2');
var getsortzam2btn = document.getElementById('sortzam2');


getinput.addEventListener('keyup',filter);


function filter(){
    // console.log(this.value);

    var inputfilter = this.value.toLowerCase();
    // console.log(inputfilter);

    for(var x=0;x<getli.length;x++){
        // console.log(getli[x]);
        // console.log(getli[x].querySelector('a').innerText.toLowerCase());
        // console.log(getli[x].getElementsByTagName('a')[0].textContent.toLowerCase());

        var getavalue = getli[x].querySelector('a').innerText.toLowerCase();

        if(getavalue.indexOf(inputfilter) > -1){
            getli[x].style.display = '';
        }else{
            getli[x].style.display = "none";
        }

        // console.log(getavalue.indexOf(inputfilter));
    }
}



getsortazm1btn.addEventListener('click',sortingazm1);
getsortzam1btn.addEventListener('click',sortingzam1);
getsortazm2btn.addEventListener('click',sortingazm2);
getsortzam2btn.addEventListener('click',sortingzam2);

//METHOD-1
//Sorting A to Z(method-One)
function sortingazm1(){
    // console.log('hey i am working');

    var lis = [];

    for(var i=0;i<getli.length ; i++){
        // console.log(getli[i]);
        // console.log(getli[i].textContent);

        lis.push(getli[i].textContent);
    }
    // console.log(lis);
    // console.log(lis.sort());
    // console.log(lis.sort().reverse();

    var azlis = lis.sort();

    getul.innerHTML = '';

    azlis.forEach(function(azli){
        // console.log(azli);

        const newli = document.createElement('li');
        const newlink = document.createElement('a');
        newlink.href = `javascript:void(0);`;
        newlink.appendChild(document.createTextNode(azli));
        newli.appendChild(newlink);
        // console.log(newli);
        getul.appendChild(newli);
    });
    filter();
}


//Sorting Z to A(method-One)
function sortingzam1(){
    // console.log('heyyy i am working');

    var lis = [];

    for(var i=0;i<getli.length ; i++){

        lis.push(getli[i].textContent);
    }

    

    var zalis = lis.sort().reverse();

    getul.innerHTML = '';

    zalis.forEach(function(zali){

        const newli = document.createElement('li');
        const newlink = document.createElement('a');
        newlink.href = `javascript:void(0);`;
        newlink.appendChild(document.createTextNode(zali));
        newli.appendChild(newlink);
        getul.appendChild(newli);
    });
}



//METHOD-2
//Sorting A to Z(method-two)
function sortingazm2(){
    var shouldswitch = true;
    var switching = true;

    do{
        switching = false;

        var i = 0;
        for(i;i < getli.length-1;i++){
            shouldswitch = false;
            if(getli[i].textContent.toLowerCase() > getli[i+1].textContent.toLowerCase()){
                shouldswitch = true;
                break;
            }
        }
        if(shouldswitch){
            //element.insertBefore(new,existing) or node.insertBefore(new,existing)
            getli[i].parentElement.insertBefore(getli[i+1],getli[i]);
            switching = true;
        }
    }while(switching);
}

// console.log(getli[0].textContent.toLowerCase());
// console.log(getli[1].textContent.toLowerCase());

// if(getli[0].textContent.toLowerCase() > getli[1].textContent.toLowerCase()){
//     console.log(true);
// }else if(getli[0].textContent.toLowerCase() === getli[1].textContent.toLowerCase()){
//     console.log('equal');
// }else{
//     console.log(false);
// }

//Sorting Z to A(method-two)
function sortingzam2(){
    var shouldswitch = true;
    var switching = true;

    do{
        switching = false;

        var i = 0;
        for(i;i < getli.length-1;i++){
            shouldswitch = false;
            if(getli[i].textContent.toLowerCase() < getli[i+1].textContent.toLowerCase()){
                shouldswitch = true;
                break;
            }
        }
        if(shouldswitch){
            //element.insertBefore(new,existing) or node.insertBefore(new,existing)
            getli[i].parentElement.insertBefore(getli[i+1],getli[i]);
            switching = true;
        }
    }while(switching);
}