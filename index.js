function addmore(){
    document.getElementById('error').innerHTML="";

    let name = document.getElementById('txt').value;
    if(name==''){
        document.getElementById('error').innerHTML="please enter your task";
    }
    else{
        let box = document.getElementById('box');

        let p = document.createElement('p');
       p.textContent = name;
       
       let pos = box.firstElementChild;

       if(pos == null)
       {
        box.appendChild(p);
       }
       else{
        box.insertBefore(p,pos);
       }

       
    }
}