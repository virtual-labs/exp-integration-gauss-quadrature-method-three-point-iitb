function activity2() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Learn to generate the data</p>
        <p>Activity 2</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1_2();' id='temp-btn-a2' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    re_initialize_x();
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1_2() {
    let temp_btn = document.getElementById('temp-btn-a2');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate a and b", "tb3-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb3-box'>

        <div style='text-align: center;'>
            <p style='text-align: center;'><span style='font-style: 25px;'>
                $$ \\int_{${x}}^{${x + 3}}(2x^2 \\ + \\ 1) dx \\ = \\ a\\int_{-1}^{1} f(u)du $$
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
                a = <input type='number' class='form-control' style='display: inline-block !important; width: 130px;' id='a2-inp' > <span id='a2-val-sp'></span>
            </div>

            <div class='col-md-6'>
                b = <input type='number' class='form-control' style='display: inline-block !important; width: 130px;' id='b2-inp' > <span id='b2-val-sp'></span>
            </div>
        </div>
        <br><br>

       <div style='text-align: center;' ><button class='btn btn-info' id='ver-a2-b2-btn' onclick='verify_a2_b2();' >Verify</button></div>

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb3-box');
    calculate_a2_b2();
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function calculate_a2_b2() {
    a2 = 3 / 2;
    b2 = (2 * x + 3) / 2;
}
function verify_a2_b2() {
    let btn = document.getElementById('ver-a2-b2-btn');
    console.log(`a2 => `, a2);
    console.log(`b2 => `, b2);
    let inp_a = document.getElementById('a2-inp');
    let sp_a = document.getElementById('a2-val-sp');
    let inp_b = document.getElementById('b2-inp');
    let sp_b = document.getElementById('b2-val-sp');
    if (!verify_values(parseFloat(inp_a.value), a2)) {
        alert('a value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp_b.value), b2)) {
        alert('b value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp_a.remove();
    sp_a.innerText = `${a2}`;
    inp_b.remove();
    sp_b.innerText = `${b2}`;
    activity2_p2();
}
activity1();
//# sourceMappingURL=activity2.js.map