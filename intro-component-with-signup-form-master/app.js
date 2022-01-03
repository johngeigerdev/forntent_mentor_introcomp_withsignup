const fName = document.getElementsByName('fName')
const lName = document.getElementsByName('lName');
const email = document.getElementsByName('email');
const password = document.getElementsByName('pWord');
const form = document.getElementsByName('form');

function Validate() {
    if(document.form.fName.value === "" || document.form.fName.value == null) {
        alert('Please enter your first name');
        document.form.fName.focus();
        return false;
    } else if (document.form.lName.value === "" || document.form.lName.value == null) {
        alert('Please enter your last name');
        document.form.lName.focus();
        return false;
    } else if (document.form.email.value === "" || document.form.email.value == null) {
        alert('Please enter your email');
        document.form.email.focus();
        return false;
    } else if (document.form.pWord.value === "" || document.form.pWord.value == null) {
        alert('Please enter your password');
        document.form.pWord.focus();
        return false;
    } else{
        return true
    }
}