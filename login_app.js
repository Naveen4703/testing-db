function login_check(){
 var mail = document.getElementById('mail').value;
var password = document.getElementById('password').value;
  function json(url){
    return fetch(url).then(res =>
      res.json()
  );
    }
  
  json('https://api.jsonbin.io/b/623fd4477caf5d6783728678/latest').then(data =>{
    var check_mail = data.data[0].mail;
  var check_password = data.data[0].password;
 if(mail == check_mail && password == check_password){
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
