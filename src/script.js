let n = e => document.querySelector(e);
let ns = e => document.querySelectorAll(e);
const boxs = document.querySelectorAll('.box');
const box = document.querySelector('.box');
const accept = n('#btn-yes');
const name = n('#name');
const cancel = n('#btn-no');
let nameS;
let i = 0;


boxs.forEach(element => {

    i++;
 
    element.innerHTML = `<span id="spanIndex" op--index="${i}">${i}</span>`;

        element.addEventListener('click', ele => {

            let get = ele.currentTarget;

            console.log(get);

            let getIndex = ele.target.getAttribute('op--index');

            console.log(`getIndex: ${getIndex}`);


            if(get.style.backgroundColor != 'pink'){

                if(get){
                    n('.display').classList.add('open');
                    n('.shield').style.display = 'flex';
                    n('.container').style.filter = "blur(4px)";
                    n('.number').innerHTML =`Você confirma esse número? <strong>${getIndex}</strong>`;  
                }; 

            }

          

            n('body').addEventListener('keydown', e => {
                
                if(e.keyCode==13){

                nameS = name.value;
                
                if(nameS !== ''){
                            
                    get.style.backgroundColor = 'pink';
                    get.style.color = '#000';
                    n('.display').classList.remove('open');
                    n('.shield').style.display = 'none';
                    n('.container').style.filter = "blur(0px)";
                    
                    // let addList = nameS[0].toUpperCase() + nameS.substr(1);
                    console.log(name.value);
                    
                    let createSpan = n('.createSpan').cloneNode(true);
                    createSpan.innerHTML = nameS;
                    get.append(createSpan);
                    
                }else{
                    console.log('Valor vazio');
                };         
               
                name.value = '';
                }
            })



            accept.onclick = () => {

                nameS = name.value;

                if(nameS !== ''){
                            
                    get.style.backgroundColor = 'pink';
                    get.style.color = '#000';
                    n('.display').classList.remove('open');
                    n('.shield').style.display = 'none';
                    n('.container').style.filter = "blur(0px)";
                    
                    // let addList = nameS[0].toUpperCase() + nameS.substr(1);
                    console.log(name.value);
                    
                    let createSpan = n('.createSpan').cloneNode(true);
                    createSpan.innerHTML = nameS;
                    get.append(createSpan);
                    
                }else{
                    console.log('Valor vazio');
                };         
               
                name.value = '';
            };             
        });   
});
     

cancel.addEventListener('click', ele => {

    if(ele.target.value){
        n('.box').style.backgroundColor = '#555151';
        n('.display').classList.remove('open');
        n('.shield').style.display = 'none';
        n('.container').style.filter = "blur(0px)";
        name.value = '';
    };
});


  




