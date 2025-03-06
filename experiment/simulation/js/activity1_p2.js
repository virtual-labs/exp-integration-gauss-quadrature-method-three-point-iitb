function activity1_p2() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <div class="fs-16px">
            <h5>Three point calculation</h5>
            <p>Learning Objective: Calculate the integral value using three points</p>
        </div>
        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-2' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act2() {
    let temp_btn = document.getElementById('temp-btn-2');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calcualate Integral Value", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>

        <div style='text-align: center;'>
            <p style='text-align: center;'><span style='font-style: 25px;'>
                $$ \\ a\\int_{-1}^{1} f(u)du \\ = \\ a\\left( \\frac{5}{9}f\\left(\\sqrt{\\frac{3}{5}}\\right) \\ + \\ \\frac{8}{9}f(0) \\ + \\ \\frac{5}{9}f\\left(- \\sqrt{\\frac{3}{5}}\\right) \\right) $$
            </span></p>

            <p style='text-align: center;'><span style='font-style: 25px;'>
            $$ x \\ = \\ au \\ + \\ b  $$</p>

            <p style='text-align: center;'><span style='font-style: 25px; display: inline-block;'>
                $$I \\ = \\ a\\left(\\frac{5}{9}f\\left(a*\\sqrt{\\frac{3}{5}} + b \\right) \\ + \\ \\frac{8}{9}f(a*0 \\ + \\ b) \\ + \\ \\frac{5}{9}f\\left(-a*\\sqrt{\\frac{3}{5}} + b \\right) \\right) \\  =   $$
                </span> <input type='number' class='form-control' style='display: inline-block !important; width: 130px;' id='in-inp' > <span id='in-val-sp'> </span>
            </p>

            
        </div>
        <br> <br>

       <div style='text-align: center;' ><button class='btn btn-info' id='ver-in-btn' onclick='verify_in();' >Verify</button></div>

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb2-box');
    calculate_in();
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function calculate_in() {
    let x1 = a * Math.sqrt(3 / 5) + b;
    let x2 = b;
    let x3 = -a * Math.sqrt(3 / 5) + b;
    in_val = a * (f1(x1) * (5 / 9) + f1(x2) * (8 / 9) + f1(x3) * (5 / 9));
}
function verify_in() {
    let btn = document.getElementById('ver-in-btn');
    console.log(`integral 1 value => `, in_val);
    let inp = document.getElementById('in-inp');
    let sp = document.getElementById('in-val-sp');
    if (!verify_values(parseFloat(inp.value), in_val)) {
        alert('calculated value is incorrect, check again.');
        return;
    }
    alert('Your answer is correct');
    btn.remove();
    inp.remove();
    sp.innerText = `${in_val.toFixed(3)}`;
    a1_x1 = x;
    a1_x2 = x2;
    activity2();
}
//activity2();
//# sourceMappingURL=activity1_p2.js.map