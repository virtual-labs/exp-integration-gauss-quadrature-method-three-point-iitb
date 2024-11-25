function activity2_p2() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <div class="fs-16px">
            <h5>Three point calculation</h5>
            <p>Learning Objective: Calculate the integral value using three points</p>
        </div>
        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2_p2();' id='temp-btn-4' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act2_p2() {
    let temp_btn = document.getElementById('temp-btn-4');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calcualate Integral Value", "tb4-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb4-box'>

        <div style='text-align: center;'>
            <p style='text-align: center;'><span style='font-style: 25px;'>
                $$ \\ a\\int_{-1}^{1} f(u)du \\ = \\ a\\left( \\frac{5}{9}f\\left(\\sqrt{\\frac{3}{5}}\\right) \\ + \\ \\frac{8}{9}f(0) \\ + \\ \\frac{5}{9}f\\left(- \\sqrt{\\frac{3}{5}}\\right) \\right) $$
            </span></p>

            <p style='text-align: center;'><span style='font-style: 25px;'>
            $$ x \\ = \\ au \\ + \\ b  $$</p>

            <p style='text-align: center;'><span style='font-style: 25px; display: inline-block;'>
                $$I \\ = \\ a\\left(\\frac{5}{9}f\\left(a*\\sqrt{\\frac{3}{5}} + b \\right) \\ + \\ \\frac{8}{9}f(a*0 \\ + \\ b) \\ + \\ \\frac{5}{9}f\\left(-a*\\sqrt{\\frac{3}{5}} + b \\right) \\right) \\  =   $$
                </span> <input type='number' class='form-control' style='display: inline-block !important; width: 130px;' id='in2-inp' > <span id='in2-val-sp'> </span>
            </p>

            
        </div>
        <br> <br>

       <div style='text-align: center;' ><button class='btn btn-info' id='ver-in2-btn' onclick='verify_in2();' >Verify</button></div>

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb4-box');
    calculate_in2();
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function calculate_in2() {
    let x1 = a2 * Math.sqrt(3 / 5) + b2;
    let x2 = b2;
    let x3 = -a2 * Math.sqrt(3 / 5) + b2;
    in2_val = a2 * (f2(x1) * (5 / 9) + f2(x2) * (8 / 9) + f2(x3) * (5 / 9));
}
function verify_in2() {
    let btn = document.getElementById('ver-in2-btn');
    console.log(`integral 2 value => `, in2_val);
    let inp = document.getElementById('in2-inp');
    let sp = document.getElementById('in2-val-sp');
    if (!verify_values(parseFloat(inp.value), in2_val)) {
        alert('calculated value is incorrect, check again.');
        return;
    }
    alert('Your answer is correct');
    btn.remove();
    inp.remove();
    sp.innerText = `${in2_val.toFixed(3)}`;
    a2_x1 = x;
    a2_x2 = x2;
    activity3();
}
//activity2();
//# sourceMappingURL=activity2_p2.js.map