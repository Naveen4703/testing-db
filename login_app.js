var mok = true;
var pok = true;
function login_check(){
 var nmail = document.getElementById('mail').value;
var npassword = document.getElementById('password').value;
  function json(url){
    return fetch(url).then(res =>
      res.json()
  );
    }
  
  json('https://api.jsonbin.io/b/623fd4477caf5d6783728678/latest').then(data =>{
    var check_mail = data.data.filter( (data)=> data.mail==nmail?mok=true:mok=false);
    var check_password = data.data.filter( (data) => data.password == npassword?pok=true:pok=false);

 if( mok==true && pok == true ){
  document.getElementById('alert-success').classList.remove('d-none');
  document.getElementById('mail').innerHTML = '';
  document.getElementById('password').innerHTML = '';
  setTimeout(() => {document.getElementById('alert-success').classList.add('d-none');}, 5000);
  window.location.href = 'http://flames-checker.vercel.app/';
 }
 else{
  document.getElementById('alert-danger').classList.remove('d-none');
  document.getElementById('mail').innerHTML = '';
  document.getElementById('password').innerHTML = '';
  setTimeout(() => {document.getElementById('alert-danger').classList.add('d-none');}, 5000);
 } 
  } );
}
