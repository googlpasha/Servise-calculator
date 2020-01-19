var checkBoxes = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var selArr = [];
var selobjets = document.getElementsByClassName('selectMenu');
for (let i = 0; i < selobjets.length; i++) {
    selArr[i] = Number(selobjets[i].value);

}

function changeSum() {
    var sum = 0;

    if(document.getElementById('1').value == "0"){
        selArr[2] = Number(document.getElementById('2').value.slice(0,-12));
    }
    if(document.getElementById('1').value == "1"){
        selArr[2] = Number(document.getElementById('2').value.slice(6,-6))-1;
    }
    if(document.getElementById('1').value == "2"){
        selArr[2] = Number(document.getElementById('2').value.slice(12))-2;
    }

    for (let index = 1; index < selArr.length; index++) {
        sum += selArr[index];
        
    }
    for (let i = 0; i < checkBoxes.length; i++) {
        sum += checkBoxes[i];
        
    }
    alert(sum);
    document.getElementById('sum').textContent = sum;
}

function sel(selobj){
    selArr[selobj.id] = Number(selobj.value);
    changeSum();
}

function chb(obj){
    var chbId = Number(obj.id.substr(3));
        if (checkBoxes[chbId] == 0) {
            checkBoxes[chbId] = obj.value * document.getElementById(obj.id + 'count').value
            changeSum();
        }
        else if(document.getElementById(obj.id).checked == false){
            checkBoxes[chbId] = 0;
            changeSum();
        }
        else{
            checkBoxes[chbId] = obj.value * document.getElementById(obj.id + 'count').value
            changeSum();
        }

}


changeSum()