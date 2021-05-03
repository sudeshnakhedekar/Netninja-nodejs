const fs = require('fs');

//reading files

// fs.readFile('./docs/blog1.txt', (error,data) =>{
// if(error) {
//     console.log(error);
// }
//     console.log(data.toString());
// });

//    console.log('last line');

//writing files

// fs.writeFile('./docs/blog1.txt', 'hello world', () =>{
// console.log('file was written');
// });

// fs.writeFile('./docs/blog2.txt', 'hello again', () =>{
//     console.log('file was written');
//     })

//directories
// fs.mkdir('./assets' , (error) =>{
//     if(error){
//     console.log(error);
//     }
//     console.log('folder created');
// })


//if directory is already created how to stop the code running
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets' , (error) =>{
//         if(error){
//         console.log(error);
//         }
//         console.log('folder created');
//     });
// }


//remove the directory
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets' , (error) =>{
        if(error){
        console.log(error);
        }
        console.log('folder created');
    });
}else{
   fs.rmdir('./assets',(error) =>{
       if(error){
           console.log(error);
       }
       console.log('folder  deleted');
   }) 
}



//deleting files

if(fs.existsSync('./docs/delete.txt')){
    fs.unlink('./docs/delete.txt' ,(error) =>{
       if(error){
        console.log(error);
       }
       console.log('file deleted');
    })
}