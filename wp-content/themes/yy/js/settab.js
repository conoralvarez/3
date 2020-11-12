function setTab(m,n){
 var tli=document.getElementById("switch_h"+m).getElementsByTagName("a");
 var mli=document.getElementById("switch"+m).getElementsByTagName("div");
 for(i=0;i<mli.length;i++){
  tli[i].className=i==n?"bg":"";
  mli[i].style.display=i==n?"block":"none";
 }
}
function setTab(m,n){
 var tli=document.getElementById("menu"+m).getElementsByTagName("a");
 var mli=document.getElementById("big"+m).getElementsByTagName("div");
 for(i=0;i<mli.length;i++){
  tli[i].className=i==n?"hover":"";
  mli[i].style.display=i==n?"block":"none";
 }
}