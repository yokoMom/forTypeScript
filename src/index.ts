import './datatype';
import zuoyeRole from './enum';
import './interface';

// first ts
let hello: string = 'Hello TypeScript';
document.querySelectorAll('.app')[0].innerHTML = hello;

// e.g. enum
function initByRole(role: number) {
    if (role === zuoyeRole.role1 || role === zuoyeRole.role2) {
        console.log('role1 || role2');
    } else if (role === zuoyeRole.role3 || role === zuoyeRole.role4) {
        console.log('role3 || role4');
    } else if (role === zuoyeRole.role5) {
        console.log('role5');
    } else {
        console.log('???');
    }
}
initByRole(2);
