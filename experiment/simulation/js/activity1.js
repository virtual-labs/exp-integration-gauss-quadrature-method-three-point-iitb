let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Gauss Quadrarture Methods 3 Points</h5>
        <p>Learning Objective: Learn to generate the data</p>
        <p>Activity 1</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate a and b", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <div style='text-align: center;'>
            <p style='text-align: center;'><span style='font-style: 25px;'>
                $$ \\int_{${x}}^{${x + 3}}(x^3 - \\ 5x \\ + \\ 3) dx \\ = \\ a\\int_{-1}^{1} f(u)du $$
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
                a = <input type='number' class='form-control' style='display: inline-block !important; width: 130px;' id='a-inp' > <span id='a-val-sp'></span>
            </div>

            <div class='col-md-6'>
                b = <input type='number' class='form-control' style='display: inline-block !important; width: 130px;' id='b-inp' > <span id='b-val-sp'></span>
            </div>
        </div>
        <br><br>

       <div style='text-align: center;' ><button class='btn btn-info' id='ver-a-b-btn' onclick='verify_a_b();' >Verify</button></div>

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb1-box');
    calculate_a_b();
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function calculate_a_b() {
    a = 3 / 2;
    b = (2 * x + 3) / 2;
}
function verify_a_b() {
    let btn = document.getElementById('ver-a-b-btn');
    console.log(`a => `, a);
    console.log(`b => `, b);
    let inp_a = document.getElementById('a-inp');
    let sp_a = document.getElementById('a-val-sp');
    let inp_b = document.getElementById('b-inp');
    let sp_b = document.getElementById('b-val-sp');
    if (!verify_values(parseFloat(inp_a.value), a)) {
        alert('a value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp_b.value), b)) {
        alert('b value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp_a.remove();
    sp_a.innerText = `${a}`;
    inp_b.remove();
    sp_b.innerText = `${b}`;
    activity1_p2();
}
activity1();
//# sourceMappingURL=activity1.js.map