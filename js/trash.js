const {contextBridge, ipcRenderer} = require('electron')
const regedit = require('regedit').promisified
// const promisifiedRegedit = require('regedit').promisified

const path = require('node:path')
// const { electron } = require('node:process')
process.on('warning', (warning) => {
    console.log(warning.stack);
});
// const vbsDirectory=path.join(path.dirname(electron.remote.app.getPath('exe')),'vbs')
// regedit.setExternalVBSLocation(vbsDirectory)

// const Registry = require('winreg')
contextBridge.exposeInMainWorld('bridge',{
    showScreen:()=>ipcRenderer.invoke('showScreen'),
    terminate:()=>ipcRenderer.invoke('close_window'),
    toggleWinSize:()=>ipcRenderer.invoke('toggle-window-size'),
    toggleDock:()=>ipcRenderer.invoke('toggle-dock'),
    getFolder:()=>ipcRenderer.invoke('getFolder'),
    getFile:()=>ipcRenderer.invoke('getFile'),
    getSavedPaths:()=>ipcRenderer.invoke('getSavedPaths'),
    checkIfMax:()=>ipcRenderer.invoke('checkIfMax'),
    openPath:(agrs)=>ipcRenderer.invoke('openPath',agrs),
    removeItem:(agrs)=>ipcRenderer.invoke('removeItem',agrs),
    greet:(args_,p)=>ipcRenderer.send('greet',args_)
})
ipcRenderer.on('isMax',(event,args)=>{
    try{
    if(args){
        // console.log(__dirname)
        document.querySelector('.mmbtn').innerHTML='<img style="margin: auto;" src="icons/Untitled-2.png" alt="">'
    }
    else{
        document.querySelector('.mmbtn').innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.<path d="M464 48V464H48V48H464zM48 0H0V48 464v48H48 464h48V464 48 0H464 48z"/></svg>`

    }}
    catch(err){
        console.log(err)
        
    }
    
})
ipcRenderer.send('get-app-path')

ipcRenderer.on('app-path-reply', (event, appPath) => {
    console.log('Application Path:', appPath)
    const appName = 'FabianTest'
    const appPath1=path.join('C:','Users','ASUS','AppData','Local','Programs','Wadex','Wadex.exe')
    const protocolHandler =appName

// Create the registry entries
// 


})


async function main() {
    const listResult = await regedit.list('HKCU\\SOFTWARE')
    console.log(listResult)
  
    // await regedit.createKey(['HKLM\\SOFTWARE\\MyApp2', 'HKCU\\SOFTWARE\\MyApp'])
    // await regedit.putValue({
    //   'HKCU\\SOFTWARE\\MyApp': {
    //       Company: {
    //           value: 'Moo corp',
    //           type: 'REG_SZ'
    //       }
    //   },
    //   'HKLM\\SOFTWARE\\MyApp2': { 
    //     test: {
    //       value: '123',
    //       type: 'REG_SZ'
    //     } 
    //   }
    // })
  }
  
  main()

const registryEntries = {
  [`HKCR\\${protocolHandler}`]: {
    '': {
      value: `${appName} Protocol`,
      type: 'REG_SZ',
    },
    'URL Protocol': {
      value: '',
      type: 'REG_SZ',
    },
  },
  [`HKCR\\${protocolHandler}\\DefaultIcon`]: {
    '': {
      value: `"${appPath}",0`,  // Ensure the correct format for the icon path and index
      type: 'REG_SZ',
    },
  },
  [`HKCR\\${protocolHandler}\\shell\\open\\command`]: {
    '': {
      value: `"${appPath}" "%1"`,
      type: 'REG_SZ',
    },
  },
};

// regedit.putValue(registryEntries, (err) => {
//   if (err) {
//     console.error('Error adding registry entries:', err);
//   } else {
//     console.log('Registry entries added successfully.');
//   }
// });
// const registryEntries = [
    //         {
    //         hive: Registry.HKCR,
    //         key: `\\${protocolHandler}`,
    //         values: [
    //             {
    //             name: 'Some Shit',
    //             type: 'REG_SZ',
    //             value: `${appName} Protocol`,
    //             },
    //             {
    //             name: 'URL Protocol',
    //             type: 'REG_SZ',
    //             value: 'Some stuff',
    //             },
    //         ],
    //         },
    //         {
    //         hive: Registry.HKCR,
    //         key: `\\${protocolHandler}\\DefaultIcon`,
    //         values: [
    //             {
    //             name: '',
    //             type: 'REG_SZ',
    //             value: `"${appPath1}",0`,
    //             },
    //         ],
    //         },
    //         {
    //         hive: Registry.HKCR,
    //         key: `\\${protocolHandler}\\shell\\open\\command`,
    //         values: [
    //             {
    //             name: '',
    //             type: 'REG_SZ',
    //             value: `"${appPath1}" "%1"`,
    //             },
    //         ],
    //         },
    //     ]
    //   registryEntries.forEach(entry=>{
    //     const regKey=new Registry(entry)
    //     console.log(regKey)
        
    //     // regKey.create(()=>console.log(`Registry entry created for ${entry.key}`))
    //   })
    // //   registryEntries.forEach((entry) => {
    // //     const regKey = new Registry(entry)
    // //     regKey.create(() => {console.log(`Registry entry created for ${entry.key}`)}
    // //     })


    const {contextBridge, ipcRenderer} = require('electron')
    const regedit = require('regedit').promisified
    const path = require('node:path')
    const Registry = require('winreg')
    contextBridge.exposeInMainWorld('bridge',{
        showScreen:()=>ipcRenderer.invoke('showScreen'),
        terminate:()=>ipcRenderer.invoke('close_window'),
        toggleWinSize:()=>ipcRenderer.invoke('toggle-window-size'),
        toggleDock:()=>ipcRenderer.invoke('toggle-dock'),
        getFolder:()=>ipcRenderer.invoke('getFolder'),
        getFile:()=>ipcRenderer.invoke('getFile'),
        getSavedPaths:()=>ipcRenderer.invoke('getSavedPaths'),
        checkIfMax:()=>ipcRenderer.invoke('checkIfMax'),
        openPath:(agrs)=>ipcRenderer.invoke('openPath',agrs),
        removeItem:(agrs)=>ipcRenderer.invoke('removeItem',agrs),
        greet:(args_,p)=>ipcRenderer.send('greet',args_)
    })
    ipcRenderer.on('isMax',(event,args)=>{
        try{
        if(args){
            // console.log(__dirname)
            document.querySelector('.mmbtn').innerHTML='<img style="margin: auto;" src="icons/Untitled-2.png" alt="">'
        }
        else{
            document.querySelector('.mmbtn').innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.<path d="M464 48V464H48V48H464zM48 0H0V48 464v48H48 464h48V464 48 0H464 48z"/></svg>`
    
        }}
        catch(err){
            console.log(err)
            
        }
        
    })
    ipcRenderer.send('get-app-path')
    
    ipcRenderer.on('app-path-reply', (event, appPath) => {
        console.log('Application Path:', appPath)
        const appName = 'FabianTest'
        const appPath1=path.join('C:','Users','ASUS','AppData','Local','Programs','Wadex','Wadex.exe')
        const protocolHandler =appName
    
    // Create the registry entries
        const registryEntries = [
            {
            hive: Registry.HKCR,
            key: `\\${protocolHandler}`,
            values: [
                {
                name: '',
                type: 'REG_SZ',
                value: `${appName} Protocol`,
                },
                {
                name: 'URL Protocol',
                type: 'REG_SZ',
                value: '',
                },
            ],
            },
            {
            hive: Registry.HKCR,
            key: `\\${protocolHandler}\\DefaultIcon`,
            values: [
                {
                name: '',
                type: 'REG_SZ',
                value: `"${appPath1}",0`,
                },
            ],
            },
            {
            hive: Registry.HKCR,
            key: `\\${protocolHandler}\\shell\\open\\command`,
            values: [
                {
                name: '',
                type: 'REG_SZ',
                value: `"${appPath1}" "%1"`,
                },
            ],
            },
        ]
      registryEntries.forEach(entry=>{
        const regKey=new Registry(entry)
        regKey.create(()=>console.log(`Registry entry created for ${entry.key}`))
      })
    //   registryEntries.forEach((entry) => {
    //     const regKey = new Registry(entry)
    //     regKey.create(() => {console.log(`Registry entry created for ${entry.key}`)}
    //     })
    
    
    })
    
    async function main() {
        const listResult = await regedit.list('HKCU\\SOFTWARE')
        console.log(listResult)
        await regedit.createKey(['HKLM\\SOFTWARE\\FabianTest', 'HKCU\\SOFTWARE\\FabianTest1'])
        await regedit.putValue({
          'HKCU\\SOFTWARE\\FabianTest1': {
              Company: {
                  value: 'Moo corp',
                  type: 'REG_SZ'
              }
          },
          'HKLM\\SOFTWARE\\FabianTest': { 
            test: {
              value: '123',
              type: 'REG_SZ'
            } 
          }
        })
      }
      
    //   main()
    
    // const registryEntries = {
    //   [`HKCR\\${protocolHandler}`]: {
    //     '': {
    //       value: `${appName} Protocol`,
    //       type: 'REG_SZ',
    //     },
    //     'URL Protocol': {
    //       value: '',
    //       type: 'REG_SZ',
    //     },
    //   },
    //   [`HKCR\\${protocolHandler}\\DefaultIcon`]: {
    //     '': {
    //       value: `"${appPath}",0`,  // Ensure the correct format for the icon path and index
    //       type: 'REG_SZ',
    //     },
    //   },
    //   [`HKCR\\${protocolHandler}\\shell\\open\\command`]: {
    //     '': {
    //       value: `"${appPath}" "%1"`,
    //       type: 'REG_SZ',
    //     },
    //   },
    // };
    
    // regedit.putValue(registryEntries, (err) => {
    //   if (err) {
    //     console.error('Error adding registry entries:', err);
    //   } else {
    //     console.log('Registry entries added successfully.');
    //   }
    // });
    










    // Create the registry entries
// const registryEntries = [
//     {
//     hive: Registry.HKCR,
//     key: `\\${protocolHandler}`,
//     values: [
//         {
//         name: '',
//         type: 'REG_SZ',
//         value: `${appName} Protocol`,
//         },
//         {
//         name: 'URL Protocol',
//         type: 'REG_SZ',
//         value: '',
//         },
//     ],
//     },
//     {
//     hive: Registry.HKCR,
//     key: `\\${protocolHandler}\\DefaultIcon`,
//     values: [
//         {
//         name: '',
//         type: 'REG_SZ',
//         value: `"${appPath1}",0`,
//         },
//     ],
//     },
//     {
//     hive: Registry.HKCR,
//     key: `\\${protocolHandler}\\shell\\open\\command`,
//     values: [
//         {
//         name: '',
//         type: 'REG_SZ',
//         value: `"${appPath1}" "%1"`,
//         },
//     ],
//     },
// ]
// registryEntries.forEach(entry=>{
// const regKey=new Registry(entry)
// regKey.create(()=>console.log(`Registry entry created for ${entry.key}`))
// })















// main().catch(err=>console.log(err)