
export function makeId(length=7) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(var i=0; i < length; i++){
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

export function sortDate(a, b) {
    return b.sentAt - a.sentAt;
  }

export function sortSubjects(a, b){
    if(a.subject > b.subject)  return -1; 
    if(a.subject < b.subject)  return 1; 
    return 0;
}