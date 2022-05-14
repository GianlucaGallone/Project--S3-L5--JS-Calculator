//#region --------- Get Number Functions --------------

function get_zero() {
    let num_0 = document.getElementById('num_0').value;
    print(num_0);
}
function get_one() {
    let num_1 = document.getElementById('num_1').value;
    print(num_1);
}
function get_two() {
    let num_2 = document.getElementById('num_2').value;
    print(num_2);
}
function get_three() {
    let num_3 = document.getElementById('num_3').value;
    print(num_3);
}
function get_four() {
    let num_4 = document.getElementById('num_4').value;
    print(num_4);
}
function get_five() {
    let num_5 = document.getElementById('num_5').value;
    print(num_5);
}
function get_six() {
    let num_6 = document.getElementById('num_6').value;
    print(num_6);
}
function get_seven() {
    let num_7 = document.getElementById('num_7').value;
    print(num_7);
}
function get_eight() {
    let num_8 = document.getElementById('num_8').value;
    print(num_8);
}
function get_nine() {
    let num_9 = document.getElementById('num_9').value;
    print(num_9);
}
//#endregion *************************************************

//#region ----------- Operator Functions ----------------

function plus() {
    counter_plus();
    let plus = document.getElementById('plus').value;
    print(plus);
    counter_plus();
    double_sign();
}
function minus() {
    counter_plus();
    let minus = document.getElementById('minus').value;
    print(minus);
    counter_plus();
    double_sign();
}
function times() {
    counter_plus();
    let times = document.getElementById('times').value;
    print(times);
    counter_plus();
    double_sign();
}
function divide() {
    counter_plus();
    let divide = document.getElementById('divide').value;
    print(divide);
    counter_plus();
    double_sign();
}
function point() {
    let point = document.getElementById('point').value;
    print(point);
    double_sign();
}
function equal() {

    let field_1 = +document.getElementById('field_1').innerHTML; // numero
    let field_2 = document.getElementById('field_2').innerHTML; // operatore
    let field_3 = +document.getElementById('field_3').innerHTML; // numero
    let field_4 = document.getElementById('field_4').innerHTML; // operatore
    let field_5 = +document.getElementById('field_5').innerHTML; // numero
    let result; 
    /* -------------operatore con due dati ------------------*/

    if (field_2 == '+') {
        result = field_1 + field_3;// se in field_2 simb. + = field_1 + field_3
    }
    if (field_2 == '-') {
        result = field_1 - field_3;// se in field_2 simb. - = field_1 - field_3
    }
    if (field_2 == '/') {
        result = field_1 / field_3;// se in field_2 simb. / = field_1 / field_3
    }
    if (field_2 == 'X') {
        result = field_1 * field_3;// se in field_2 simb. * = field_1 * field_3
    }
    /* -------------operatore con tre dati ------------------*/

    if (field_2 == '+' && field_4 == '+') { // due addizioni
        result = field_1 + field_3 + field_5; 
    }
    if (field_2 == '-' && field_4 == '-') { // due sottrazioni
        result = field_1 - field_3 - field_5;
    }
    if (field_2 == '/' && field_4 == '/') { // due divisioni
        result = field_1 / field_3 / field_5;
    }
    if (field_2 == 'X' && field_4 == 'X') { // due moltiplicazioni
        result = field_1 * field_3 * field_5;
    }
    /* --------------------------------------------------------- */

    if (field_2 == '+' && field_4 == '-') { // un'addizione e una sottrazione
        result = field_1 + field_3 - field_5; 
    }
    if (field_2 == '+' && field_4 == '/') { // un'addizione e una divisione
        result = field_1 + field_3 / field_5;
    }
    if (field_2 == '+' && field_4 == 'X') { // un'addizione e una moltiplicazione
        result = field_1 + field_3 * field_5;
    }

    if (field_2 == '-' && field_4 == '+') { // un sottrazione e un'addizione
        result = field_1 - field_3 + field_5; 
    }
    if (field_2 == '-' && field_4 == '/') { // un sottrazione e una divisione
        result = field_1 - field_3 / field_5;
    }
    if (field_2 == '-' && field_4 == 'X') { // un sottrazione e una moltiplicazione
        result = field_1 - field_3 * field_5;
    }

    if (field_2 == '/' && field_4 == '+') { // una divisione e un'addizione
        result = field_1 / field_3 + field_5; 
    }
    if (field_2 == '/' && field_4 == '-') { // una divisione e una sottrazione
        result = field_1 / field_3 - field_5;
    }
    if (field_2 == '/' && field_4 == 'X') { // una divisione e una moltiplicazione
        result = field_1 / field_3 * field_5;
    }

    if (field_2 == 'X' && field_4 == '+') { // una moltiplicazione e un'addizione
        result = field_1 * field_3 + field_5; 
    }
    if (field_2 == 'X' && field_4 == '-') { // una moltiplicazione e una sottrazione
        result = field_1 * field_3 - field_5;
    }
    if (field_2 == 'X' && field_4 == '/') { // una moltiplicazione e una divisione
        result = field_1 * field_3 / field_5;
    }

    clear_all();
    print(result);
    counter_plus();
}

function clear_all() {
    document.getElementById('field_1').innerHTML = '';
    document.getElementById('field_2').innerHTML = '';
    document.getElementById('field_3').innerHTML = '';
    document.getElementById('field_4').innerHTML = '';
    document.getElementById('field_5').innerHTML = '';
    counter = 0;
}

function double_sign() { // per nagare il doppio segno

    let field_1_empty = document.getElementById('field_1').innerHTML == '';
    let field_3_empty = document.getElementById('field_3').innerHTML == '';
    /* ------------------------------------------------------------------ */
    let field_2_divide = document.getElementById('field_2').innerHTML == '/';
    let field_4_divide = document.getElementById('field_4').innerHTML == '/';
    /* ------------------------------------------------------------------ */
    let field_2_times = document.getElementById('field_2').innerHTML == 'X';
    let field_4_times = document.getElementById('field_4').innerHTML == 'X';
    /* ------------------------------------------------------------------ */
    let field_2_minus = document.getElementById('field_2').innerHTML == '-';
    let field_4_minus = document.getElementById('field_4').innerHTML == '-';
    /* ------------------------------------------------------------------ */
    let field_2_plus = document.getElementById('field_2').innerHTML == '+';
    let field_4_plus = document.getElementById('field_4').innerHTML == '+';
    /* ------------------------------------------------------------------ */
    let field_1_point = document.getElementById('field_1').innerHTML == '.';
    let field_1_points = document.getElementById('field_1').innerHTML == '..'; // se ci sono due punti

    /* ------------- Tutte le combinazioni dei segni -------------------- */

    if (field_1_empty && field_2_divide && field_3_empty && field_4_divide) { 
        clear_all();
    } else if (field_1_empty && field_2_divide && field_3_empty && field_4_times) {
        clear_all();
    } else if (field_1_empty && field_2_divide && field_3_empty && field_4_minus) {
        clear_all();
    } else if (field_1_empty && field_2_divide && field_3_empty && field_4_plus) {
        clear_all();
    }
    /* ------------------------------------------------------------------ */

    if (field_1_empty && field_2_times && field_3_empty && field_4_times) {
        clear_all();
    } else if (field_1_empty && field_2_times && field_3_empty && field_4_divide) {
        clear_all();
    } else if (field_1_empty && field_2_times && field_3_empty && field_4_minus) {
        clear_all();
    } else if (field_1_empty && field_2_times && field_3_empty && field_4_plus) {
        clear_all();
    }
    /* ------------------------------------------------------------------ */

    if (field_1_empty && field_2_minus && field_3_empty && field_4_minus) {
        clear_all();
    } else if (field_1_empty && field_2_minus && field_3_empty && field_4_divide) {
        clear_all();
    } else if (field_1_empty && field_2_minus && field_3_empty && field_4_times) {
        clear_all();
    } else if (field_1_empty && field_2_minus && field_3_empty && field_4_plus) {
        clear_all();
    }
    /* ------------------------------------------------------------------ */

    if (field_1_empty && field_2_plus && field_3_empty && field_4_plus) {
        clear_all();
    } else if (field_1_empty && field_2_plus && field_3_empty && field_4_divide) {
        clear_all();
    } else if (field_1_empty && field_2_plus && field_3_empty && field_4_times) {
        clear_all();
    } else if (field_1_empty && field_2_plus && field_3_empty && field_4_minus) {
        clear_all();
    }
    /* ------------------------------------------------------------------ */
    if (field_1_point && field_2_plus) {
        clear_all();
    } else if (field_1_point && field_2_minus) {
        clear_all();
    } else if (field_1_point && field_2_divide) {
        clear_all();
    } else if (field_1_point && field_2_times) {
        clear_all();
    }

    if (field_1_points) { // se c'e' piu' di un punto clear
        clear_all();
    }
}

//#endregion *************************************************

//#region --------- Counter / Print Functions ------------
var counter = 0;

function print(value) {

    let field;
    if(counter == 0) { // se counter e' 0 sei nella prima casella
        field = 'field_1';
    } else if (counter == 1) { // se il counter e' 1 sei nella seconda
        field = 'field_2';
    } else if (counter == 2) {
        field = 'field_3';
    } else if (counter == 3) {
        field = 'field_4';
    } else if (counter == 4) {
        field = 'field_5';
    }

    document.getElementById(field).innerHTML += value; // concateni i valori
}

function counter_plus() {
    if(counter > 4){ // incrementa il contatore, se e' superiore a 4, ritorna a 0, altrimenti si incrementa
        counter = 0;
    } else counter++;    
}
//#endregion ************************************************* 