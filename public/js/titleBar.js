
let dockBtn = document.querySelector('.dockbtn')
let mmBtn = document.querySelector('.mmbtn')
let TERMINATE_BTN = document.querySelector('.terminate')

dockBtn.addEventListener('click',()=>window.bridge.toggleDock())

function toggleIcon(isMax){
    if(isMax){
        mmBtn.querySelector('.mini').classList.add('display-none')
        mmBtn.querySelector('.max').classList.remove('display-none')

    }else{
        mmBtn.querySelector('.max').classList.add('display-none')
        mmBtn.querySelector('.mini').classList.remove('display-none')

    }
}
mmBtn.addEventListener('click',()=>{
    window.bridge.toggleWinSize()
})
TERMINATE_BTN.addEventListener('click',()=>window.bridge.terminate())
window.bridge.checkIfMax().then(isMax=>toggleIcon(isMax))//important
