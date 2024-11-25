function activity3() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Learn to generate the data</p>
        <p>Activity 3</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1_3();' id='temp-btn-a3' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    re_initialize_x();
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1_3() {
    let temp_btn = document.getElementById('temp-btn-a3');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate a and b", "tb5-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb5-box'>

        <div style='text-align: center;'>
            <p style='text-align: center;'><span style='font-style: 25px;'>
                $$ \\int_{${x}}^{${x + 3}} \\frac{1}{1 \\ + \\ x^2} dx \\ = \\ a\\int_{-1}^{1} f(u)du $$
            </span></p>

            <p style='text-align: center;'><span style='font-style: 25px;'>
            $$ x1 = ${x} \\ \\ \\ x2 = ${x + 3} $$
            </span></p>

            <p style='text-align: center;'><span style='font-style: 25px;'>
            $$ a \\ = \\ \\frac{x_2 - x_1}{2} \\ \\ \\ \\ \\ b \\ = \\ \\frac{x_2 + x_1}{2} $$
            </span></p>
        </div>
        <br> <br>

        <div id='verify-a-b' style='text-align: center;' class='row'>
            <div class='col-md-6'>
                a = <input type='number' class='form-control' style='display: inline-block !important; width: 130px;' id='a3-inp' > <span id='a3-val-sp'></span>
            </div>

            <div class='col-md-6'>
                b = <input type='number' class='form-control' style='display: inline-block !important; width: 130px;' id='b3-inp' > <span id='b3-val-sp'></span>
            </div>
        </div>
        <br><br>

       <div style='text-align: center;' ><button class='btn btn-info' id='ver-a3-b3-btn' onclick='verify_a3_b3();' >Verify</button></div>

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb5-box');
    calculate_a3_b3();
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function calculate_a3_b3() {
    a3 = 3 / 2;
    b3 = (2 * x + 3) / 2;
}
function verify_a3_b3() {
    let btn = document.getElementById('ver-a3-b3-btn');
    console.log(`a3 => `, a3);
    console.log(`b3 => `, b3);
    let inp_a = document.getElementById('a3-inp');
    let sp_a = document.getElementById('a3-val-sp');
    let inp_b = document.getElementById('b3-inp');
    let sp_b = document.getElementById('b3-val-sp');
    if (!verify_values(parseFloat(inp_a.value), a3)) {
        alert('a value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp_b.value), b3)) {
        alert('b value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp_a.remove();
    sp_a.innerText = `${a3}`;
    inp_b.remove();
    sp_b.innerText = `${b3}`;
    activity3_p2();
}
activity1();
//# sourceMappingURL=activity3.js.map