/**
 * upon "submit" click
 * check if "value" of the two pwd fields are the same
 * if true, add form=[id] to submit
 * if false, print warning to the page and..
 * add invalid class to the pwd fields
 */

// selecting the required elements
const submitBtn = document.querySelector("#submit-btn");
const pwd00 = document.querySelector("#password");
const pwd01 = document.querySelector("#confirm-password");
const pwdWarning = document.querySelector(".pwd-warning");

// checkPwds()
function checkPwds() {
    return pwd00.value === pwd01.value;
}

// handling pwd fields
submitBtn.addEventListener('click', () => {
    if (checkPwds()) {
        submitBtn.setAttribute("form", "sign-up-form");
    } else {
        pwdWarning.textContent = "*Password do not match";
        pwdWarning.classList.add("rm-mt"); // this removes margin-top quirk
        pwd00.classList.add("invalid");
        pwd01.classList.add("invalid");
    }
});