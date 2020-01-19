var vnutren_plan = Number(document.getElementById('vnutren_plan').value);
var vnutren_otdel = Number(document.getElementById('vnutren_otdel').value);
var narugn_otdel = Number(document.getElementById('narugn_otdel').value);
var uteplenie = Number(document.getElementById('uteplenie').value);
var pol = Number(document.getElementById('pol').value);
var window1 = Number(document.getElementById('window').value);
var checkBoxes = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function changeSum() {
    var sum = vnutren_plan + vnutren_otdel + narugn_otdel + uteplenie + pol + window1;
    for (let i = 0; i < checkBoxes.length; i++) {
        sum += checkBoxes[i];
        
    }
    alert(sum);
    document.getElementById('sum').textContent = sum;
}

function vnutren_plan_func(){
    vnutren_plan = Number(document.getElementById('vnutren_plan').value);
    changeSum();
}

function vnutren_otdel_func(){
    vnutren_otdel = Number(document.getElementById('vnutren_otdel').value);
    changeSum();
}

function narugn_otdel_func(){
    narugn_otdel = Number(document.getElementById('narugn_otdel').value);
    changeSum();
}

function uteplenie_func(){
    uteplenie = Number(document.getElementById('uteplenie').value);
    changeSum();
}

function pol_func(){
    pol = Number(document.getElementById('pol').value);
    changeSum();
}

function window_func(){
    window1 = Number(document.getElementById('window').value);
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