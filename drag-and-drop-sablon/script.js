
// Állapot
let state = {
  xPozicio: 90, 
  yPozicio: 200,
  mozgatvaVan: false
}

// initial render
window.onload = render;

function render() { 
    document.getElementById("drag-and-drop-app").innerHTML = `
      <div 
        class="box ${state.mozgatvaVan ? "grabbed" : "not-grabbed"}" 
        style="width: 300px; position: absolute; top: ${state.yPozicio}px; left: ${state.xPozicio}px"
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