$(document).ready(()=> {
 $('.column .closeBTN').click(()=>{
     $('.column').slideUp('500')
     $('.column').hide("500"); 
 }) 

 $('#firstClick').click(()=>{
     $('#firstColumn').toggle(500);
     $('#secondColumn').hide(500);
     $('#thirdColumn').hide(500);
 }) 
 $('#secondClick').click(()=>{
     $('#secondColumn').toggle(500);
     $('#firstColumn').hide(500);
     $('#thirdColumn').hide(500);
 }) 
 $('#thirdClick').click(()=>{
     $('#secondColumn').hide(500);
     $('#firstColumn').hide(500);
     $('#thirdColumn').toggle(500);
 }) 
    
})