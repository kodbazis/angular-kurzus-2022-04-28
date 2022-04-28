// A. Komponens

kivalasztottSzin = "blue";

function renderA() {
  document.getElementById("szinvalaszto").innerHTML = `
  <form onsubmit="formSubmitTortent(window.event)">
          <select name="szin">
            <option value="blue">Kék</option>
            <option value="red">Piros</option>
            <option value="green">Zöld</option>
          </select>
          <button type="submit">Küldés</button>
    </form>

    <div style="width: 100px; height: 100px; background-color: ${kivalasztottSzin}"></div>
  `
}

function formSubmitTortent(e) {
  e.preventDefault();
  kivalasztottSzin = e.target.elements.szin.value;
  renderA();
}

window.addEventListener('load', renderA)




// B. Komponens -------------------------------------------------------

// Kontroller
  // Állapot
  let state = {
    xPozicio: 90, 
    yPozicio: 200,
    mozgatvaVan: false
  }

  // action
  function mouseDownEsemenyTortent() {

    // state change
    state.mozgatvaVan = true;
    console.log(state);

    // render
    render();
  }

  function mouseUpEsemenyTortent() {
    state.mozgatvaVan = false;
    console.log(state);
    render();
  }

  function mouseMoveTortent(event) {
    if(state.mozgatvaVan) {
      state.xPozicio = event.clientX - 150;
      state.yPozicio = event.clientY - 75;
    }
    render();
  }

// initial render
window.addEventListener('load', render)



// Sablon - template ------------------------
  function render() { 
      document.getElementById("drag-and-drop-app").innerHTML = `
        <div 
          class="box ${state.mozgatvaVan ? "grabbed" : "not-grabbed"}" 
          style="width: 300px; position: absolute; top: ${state.yPozicio}px; left: ${state.xPozicio}px; background: ${kivalasztottSzin}"
          onmousedown="mouseDownEsemenyTortent()"
          onmouseup="mouseUpEsemenyTortent()"
          onmousemove="mouseMoveTortent(window.event)"
          >
          <div class="card-body">
            <h5 class="card-title display-6"># Mozgatható doboz</h5>
          </div>
        </div>
      `;
  }


