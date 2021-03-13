import jwtDecode from 'jwt-decode';
import SecureLS from 'secure-ls';//  بيرجع تان زي م هو get في ال setده زي م بيعمل تشفير من ال

let ls = new SecureLS({encodingType: 'aes'});
let encodedToken =  ls.get('currentUser');  

let decodedToken = jwtDecode(encodedToken); //ده علشان تفك التشفيره الاول


export default decodedToken;