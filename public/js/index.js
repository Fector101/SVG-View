"use strict;"
// const TERMINATE_BTN =document.querySelector('.terminate')
const addFolderBtn1=document.querySelector('.columnLast #addFolder')
const addFileBtn=document.querySelector('.columnLast .addFile')
const addFolder=document.querySelector('.box #addFolder')
const notifBox = document.querySelector('.noti-box')
const closeNotifBtn = document.querySelector('.notiy-closejs')
const mainSvgBox=document.querySelector('.mainSvgBox')
const settingsBtn=document.querySelector('.settings-btn')
const settingsBox=document.querySelector('.case')
// const mmBtn =document.querySelector('.mmbtn')
// const dockbtn =document.querySelector('.dockbtn')
const searchinput =document.querySelector('.searchinput')
try{

    window.bridge?.checkIfOpenedFromAFolder()?.then(res=>{
        console.log(res)
    })
}catch(err){
    console.log(err)
    
}
// console.log(window.bridge.test())




// dockbtn.addEventListener('click',()=>window.bridge.toggleDock())
// mmBtn.addEventListener('click',()=>{
//     window.bridge.toggleWinSize()
//     .then(isMax=>{
//         if(isMax){
//             mmBtn.innerHTML=`<img style="margin: auto;" src="icons/Untitled-2.png" alt="">`

//         }else{
//             mmBtn.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.<path d="M464 48V464H48V48H464zM48 0H0V48 464v48H48 464h48V464 48 0H464 48z"/></svg>`

//         }
            

//     }
//     )

// })
// TERMINATE_BTN.addEventListener('click',()=>window.bridge.terminate())



window.bridge.greet('heloo e')
// window.bridge.checkIfMax().then(res=>{
//     if(res)document.querySelector('.mmbtn').innerHTML='<img style="margin: auto;" src="icons/Untitled-2.png" alt="">'
//     else{document.querySelector('.mmbtn').innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.<path d="M464 48V464H48V48H464zM48 0H0V48 464v48H48 464h48V464 48 0H464 48z"/></svg>`}
// })

settingsBtn.addEventListener('click',()=>settingsBox.classList.toggle('display-none'))
document.querySelector('.box').addEventListener('click',function(e){
    if(e.target.classList.contains('pathhead'))window.bridge.openPath(e.target.innerText)
    if(settingsBox.classList.contains('display-none')){}
    else{settingsBox.classList.add('display-none')}
})
document.querySelector('.box').addEventListener('dblclick',function(e){
    let buildPath=e.target.closest('.build')
    if(buildPath)window.bridge.openPath(buildPath.dataset.src)
})
searchinput.addEventListener('input',async function(){
    let allBuild=document.querySelectorAll('.build')
    for(let i=0;i<allBuild.length;i++){
        if(allBuild[i].innerText.includes(this.value)){
            allBuild[i].style.display='block'
        }else{
            allBuild[i].style.display='none'

        }
    }
})

let index=0
function addSvgs(){
    if(this===addFolder){
        this.querySelector('svg').style.width='80px'
        this.style.boxShadow="3px 2px 5px 0px rgb(95 93 93)"
        this.style.borderStyle='outset'
    }
    Spinner()

    window.bridge.getFolder()
    .then(res=>{
        if(!res)return
        if(res==='Already Saved'){
            notificationControl("Path Already Saved Pls Refresh !!!", 5,'refresh')
            return
        }
        if(addFolder.style.display!=='none'){
            addFolder.style.display='none'
            document.querySelector('#addFolderText').style.display='none'
            }
        document.querySelector('.controls').insertAdjacentHTML('afterbegin',
            `
                <div class="row">
                        <div class="column1">
                            <input type="checkbox" checked="true" name="" id="path${index}">
                        </div>
                        <div class="column2">
                            <label for="path${index}">${res[0]}</label>    
                        </div>
                        <div class="column3">
                            <button class="clipBtn"><svg viewBox='0 0 24 24'><g transform="matrix(0.8 0 0 0.8 12 12)" ><path transform=" translate(-15, -14.5)" d="M 11 2 C 9.895 2 9 2.895 9 4 L 9 20 C 9 21.105 9.895 22 11 22 L 24 22 C 25.105 22 26 21.105 26 20 L 26 8.5 C 26 8.235 25.895031 7.9809687 25.707031 7.7929688 L 20.207031 2.2929688 C 20.019031 2.1049687 19.765 2 19.5 2 L 11 2 z M 19 3.9042969 L 24.095703 9 L 20 9 C 19.448 9 19 8.552 19 8 L 19 3.9042969 z M 6 7 C 4.895 7 4 7.895 4 9 L 4 25 C 4 26.105 4.895 27 6 27 L 19 27 C 20.105 27 21 26.105 21 25 L 21 24 L 11 24 C 8.794 24 7 22.206 7 20 L 7 7 L 6 7 z" stroke-linecap="round" /></g></svg></button>
                        </div>
                        <div class="column3">
                            <button class="trashbtn trashbtnjs"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg></button>
                        </div>
                </div>
            `)
        // if(!document.querySelector('#mainSvgBox')){document.querySelector('.box').insertAdjacentHTML('afterbegin',`<div id="mainSvgBox">${res[1]}</div>`)}
        // else{document.querySelector('#mainSvgBox').insertAdjacentHTML('afterbegin',`${res[1]}`)}
        if(!document.querySelector('#mainSvgBox')){document.querySelector('.box').insertAdjacentHTML('beforeend',`<div id="mainSvgBox">${res[1]}</div>`)}
        else{document.querySelector('#mainSvgBox').insertAdjacentHTML('afterbegin',`${res[1]}`)}

        document.querySelector('#mainSvgBox').style.height=`${visualViewport.height-document.querySelector('.BIGBAR').offsetHeight}px`
        document.querySelector('.trashBtnAllJS').style.display='flex'
    })
    .finally(()=>Spinner())
    index++
    editStyle()
}
addFolder.addEventListener('click',addSvgs)
addFolderBtn1.addEventListener('click',addSvgs)
addFileBtn.addEventListener('click',function(){
    Spinner()
    window.bridge.getFile()
    .then((res)=>{
        if(!res)return
        if(addFolder.style.display!=='none'){
            addFolder.style.display='none'
            document.querySelector('#addFolderText').style.display='none'
        }
        if(Array.isArray(res[0])){
            res[0].forEach((each,i)=>{
                document.querySelector('.controls').insertAdjacentHTML('afterbegin',
                `
                    <div class="row">
                            <div class="column1">
                                <input type="checkbox" checked="true" name="" id="path${index}">
                            </div>
                            <div class="column2">
                                <label for="path${index}">${each}</label>    
                            </div>
                            <div class="column3">
                                <button class="clipBtn"><svg viewBox='0 0 24 24'><g transform="matrix(0.8 0 0 0.8 12 12)" ><path transform=" translate(-15, -14.5)" d="M 11 2 C 9.895 2 9 2.895 9 4 L 9 20 C 9 21.105 9.895 22 11 22 L 24 22 C 25.105 22 26 21.105 26 20 L 26 8.5 C 26 8.235 25.895031 7.9809687 25.707031 7.7929688 L 20.207031 2.2929688 C 20.019031 2.1049687 19.765 2 19.5 2 L 11 2 z M 19 3.9042969 L 24.095703 9 L 20 9 C 19.448 9 19 8.552 19 8 L 19 3.9042969 z M 6 7 C 4.895 7 4 7.895 4 9 L 4 25 C 4 26.105 4.895 27 6 27 L 19 27 C 20.105 27 21 26.105 21 25 L 21 24 L 11 24 C 8.794 24 7 22.206 7 20 L 7 7 L 6 7 z" stroke-linecap="round" /></g></svg></button>
                            </div>
                            <div class="column3">
                                <button class="trashbtn trashbtnjs"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg></button>
                            </div>
                    </div>
                `)
                index++
            })
            }else{
                document.querySelector('.controls').insertAdjacentHTML('afterbegin',
                `
                    <div class="row">
                            <div class="column1">
                                <input type="checkbox" checked="true" name="" id="path${index}">
                            </div>
                            <div class="column2">
                                <label for="path${index}">${res[0]}</label>    
                            </div>
                            <div class="column3">
                                <button class="clipBtn"><svg viewBox='0 0 24 24'><g transform="matrix(0.8 0 0 0.8 12 12)" ><path transform=" translate(-15, -14.5)" d="M 11 2 C 9.895 2 9 2.895 9 4 L 9 20 C 9 21.105 9.895 22 11 22 L 24 22 C 25.105 22 26 21.105 26 20 L 26 8.5 C 26 8.235 25.895031 7.9809687 25.707031 7.7929688 L 20.207031 2.2929688 C 20.019031 2.1049687 19.765 2 19.5 2 L 11 2 z M 19 3.9042969 L 24.095703 9 L 20 9 C 19.448 9 19 8.552 19 8 L 19 3.9042969 z M 6 7 C 4.895 7 4 7.895 4 9 L 4 25 C 4 26.105 4.895 27 6 27 L 19 27 C 20.105 27 21 26.105 21 25 L 21 24 L 11 24 C 8.794 24 7 22.206 7 20 L 7 7 L 6 7 z" stroke-linecap="round" /></g></svg></button>
                            </div>
                            <div class="column3">
                                <button class="trashbtn trashbtnjs"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg></button>
                            </div>
                    </div>
                `)
            index++
            }
        // if(!document.querySelector('#mainSvgBox')){
        //     document.querySelector('.box').insertAdjacentHTML('afterbegin',`<div id="mainSvgBox">${res[1]}</div>`)}
        // else{
        //     document.querySelector('#mainSvgBox').insertAdjacentHTML('afterbegin',`${res[1]}`)
        // }
        if(!document.querySelector('#mainSvgBox')){
            document.querySelector('.box').insertAdjacentHTML('beforeend',`<div id="mainSvgBox">${res[1]}</div>`)}
        else{
            document.querySelector('#mainSvgBox').insertAdjacentHTML('afterbegin',`${res[1]}`)
        }
        document.querySelector('#mainSvgBox').style.height=`${visualViewport.height-document.querySelector('.BIGBAR').offsetHeight}px`
        document.querySelector('.trashBtnAllJS').style.display='flex'
        editStyle()
        })
    .finally(()=>Spinner())

})


function editStyle(){
    if(document.querySelectorAll('.row').length>7){
        document.querySelector('.controls').style.height='400px'
        document.querySelector('.controls').style.overflowY='scroll'
    }
    else{
        document.querySelector('.controls').style.height='auto'
        document.querySelector('.controls').style.overflowY='hidden'
        
    }
}
function borderBtn(ele,elWidth){
    ele.addEventListener('mouseup',function(){
        this.querySelector('svg').style.width=elWidth+'px'
        this.style.borderStyle='outset'
        this.style.boxShadow="3px 2px 5px 0px rgb(95 93 93)"
    
    })
    ele.addEventListener('mousedown',function(){
        this.querySelector('svg').style.width=(elWidth-5)+'px'
        this.style.borderStyle='inset'
        this.style.boxShadow="1px 1px 7px 0px rgb(77 76 76)"
    
    
    })
    ele.addEventListener('click',function(){
        this.querySelector('svg').style.width=elWidth+'px'
        this.style.boxShadow="3px 2px 5px 0px rgb(95 93 93)"
        this.style.borderStyle='outset'
    })   
    
    ele.addEventListener('mouseleave',function(){
        this.querySelector('svg').style.width=elWidth+'px'
        this.style.borderStyle='outset'
        this.style.boxShadow="3px 2px 5px 0px rgb(95 93 93)"
    }) 
    
}
borderBtn(addFolderBtn1,34)
borderBtn(addFileBtn,34)

addFolder.addEventListener('mouseup',function(){
    this.querySelector('svg').style.width='80px'
    this.style.borderStyle='outset'
    this.style.boxShadow="3px 2px 5px 0px rgb(95 93 93)"

})

addFolder.addEventListener('mousedown',function(){
    this.querySelector('svg').style.width='75px'
    this.style.borderStyle='inset'
    this.style.boxShadow="1px 1px 7px 0px rgb(77 76 76)"


})
addFolder.addEventListener('mouseleave',function(){
    this.querySelector('svg').style.width='80px'
    this.style.borderStyle='outset'
    this.style.boxShadow="3px 2px 5px 0px rgb(95 93 93)"
})

document.querySelector('.container').addEventListener('click',function(e){
    let clipBtn=e.target.closest('.clipBtn')
    if(clipBtn){
       let labelSrc = clipBtn.parentElement.parentElement.querySelector('label').innerText
       navigator.clipboard.writeText(labelSrc)
       notificationControl('Copied Path To ClipBoard',3)
    //    notificationControl('Copied Path To ClipBoard - '+labelSrc,3)
    }
    let checkbox=e.target.closest('input')
    if(checkbox){
       let labelSrc = checkbox.parentElement.parentElement.querySelector('label').innerText
       console.log(labelSrc)
       
       document.getElementById(labelSrc).classList.toggle('display-none')  
    }

    let trashCan=e.target.closest('.trashbtnjs');
    if(trashCan){
        let labelSrc = trashCan.parentElement.parentElement.querySelector('label').innerText        
        document.getElementById(labelSrc).remove()
        trashCan.parentElement.parentElement.remove()
        window.bridge.removeItem(labelSrc)

     }
     let trashAll=e.target.closest('.trashBtnAllJS');
     if(trashAll){
        Array.from(document.querySelectorAll('.controls .row')).forEach(each=>each.remove())
        document.querySelector('#mainSvgBox').innerHTML=''
        window.bridge.removeItem("ALL")
        trashAll.style.display='none'
        document.querySelector('#addFolderText').style.display='block'
        addFolder.style.display='block'
        document.querySelector('#mainSvgBox').style.height=`auto`
     }
     editStyle()
    
})


window.addEventListener('resize',()=>{
    if(document.querySelector('#mainSvgBox')?.style.height){
        document.querySelector('#mainSvgBox').style.height =`${visualViewport.height-document.querySelector('.BIGBAR').offsetHeight}px`
    }
    if(document.querySelector('#mainSvgBox')){
        if(!document.querySelector('#mainSvgBox').innerHTML)  document.querySelector('#mainSvgBox').style.height='auto'
    }

})
const spinner = document.querySelector('.loader')
let displayingSpinner=false
function Spinner(){
    if(displayingSpinner){
        spinner.style.display='none'
        spinner.style.animation=''
        document.querySelector('.cover').style.display='none'


    }else{
        document.querySelector('.cover').style.display='block'
        spinner.style.display='block'
        spinner.style.animation='spin 1s linear infinite'

    }
    displayingSpinner=!displayingSpinner
}
let autoClose;
notifBox.addEventListener('mouseenter',function(){
    clearTimeout(autoClose)
    notifBox.style.display='flex'
    this.addEventListener('mouseleave',()=> setTimeout(closeNotification,3*1000))

})
function closeNotification(){
        clearTimeout(autoClose)
        notifBox.style.display='none'
        notifBox.style.animation = ""
    }
function notificationControl(message,secs,type='clipboard'){
    notifBox.querySelector('.notify-textjs').textContent=message
    if(type==='clipboard'){
        notifBox.querySelector('.clipjs').style.display='block'
        notifBox.querySelector('.refreshjs').style.display='none'
    }else if(type==='refresh'){
        notifBox.querySelector('.clipjs').style.display='none'
        notifBox.querySelector('.refreshjs').style.display='block'
    }
    notifBox.style.display='flex'
    notifBox.style.animation = "anibot 500ms"
    autoClose = setTimeout(closeNotification,secs*1000)
    
}
let yy;
async function buildHTML(){
    let settingStr=''
    let bigHtml=''
    Spinner()
    let response = await window.bridge.getSavedPaths()
    // console.log(response)
    
    if(!response || Object.keys(response).length===0){
        Spinner();
        // window.bridge.showScreen()
        return
    }
    yy=response
    addFolder.style.display='none'
    document.querySelector('#addFolderText').style.display='none'
    let str=''
    for(const [key, value] of Object.entries(response)){
        str=`<span id="${key}"><h1 class="pathhead" title="Open In Explorer">${key}</h1><div class="svgbox">`  
        settingStr+=`
                <div class="row">
                        <div class="column1">
                            <input type="checkbox" checked="true" name="" id="path${index}">
                        </div>
                        <div class="column2">
                            <label for="path${index}">${key}</label>    
                        </div>
                        <div class="column3">
                            <button class="clipBtn"><svg viewBox='0 0 24 24'><g transform="matrix(0.8 0 0 0.8 12 12)" ><path transform=" translate(-15, -14.5)" d="M 11 2 C 9.895 2 9 2.895 9 4 L 9 20 C 9 21.105 9.895 22 11 22 L 24 22 C 25.105 22 26 21.105 26 20 L 26 8.5 C 26 8.235 25.895031 7.9809687 25.707031 7.7929688 L 20.207031 2.2929688 C 20.019031 2.1049687 19.765 2 19.5 2 L 11 2 z M 19 3.9042969 L 24.095703 9 L 20 9 C 19.448 9 19 8.552 19 8 L 19 3.9042969 z M 6 7 C 4.895 7 4 7.895 4 9 L 4 25 C 4 26.105 4.895 27 6 27 L 19 27 C 20.105 27 21 26.105 21 25 L 21 24 L 11 24 C 8.794 24 7 22.206 7 20 L 7 7 L 6 7 z" stroke-linecap="round" /></g></svg></button>
                        </div>
                        <div class="column3">
                            <button class="trashbtn trashbtnjs"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg></button>
                        </div>
                </div>
            `
            index++
        for(const [i,file] of value['fileNames'].entries()){
            str+=`
                <div class="build" title="Double Click ME" data-src="${file}">
                    ${value['svgList'][i]}
                    <p>${file.split('\\').at(-1).replac
