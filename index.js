const form = document.getElementById('form');
const Firstname = document.getElementById('FIRST NAME');
const Lastname = document.getElementById('LAST NAME');
const  college = document.getElementById('college')
const email = document.getElementById('EMAIL');
const password = document.getElementById('PASSWORD');
const password2 = document.getElementById('PASSWORD2');
const lang=document.getElementById('COURSE');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const FirstnameValue = Firstname.value.trim();
    const LastnameValue = Lastname.value.trim();
    const emailValue = email.value.trim();
    const collegeValue = college.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const langValue=COURSE.value;

    if(FirstnameValue === '') {
        setError(Firstname, 'Firstname is required');
    } else {
        setSuccess(Firstname);
    }
    if(LastnameValue === '') {
        setError(Lastname, 'Lastname is required');
    } else {
        setSuccess(Lastname);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
    if(collegeValue===''){
        setError( college,'college is required');
    }else{
        setSuccess(college);
    }
    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 4 ) {
        setError(password, 'Password must be at least 4 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }
    valProgramming();

};
function valProgramming()
{
    var checkboxs=document.getElementsByName("lang");
    var okay=false;
    for(var i=0,l=checkboxs.length;i<l;i++)
    {
        if(checkboxs[i].checked)
        {
            okay=true;
            break;
        }
    }
    if(okay)setSuccess(COURSE,"Thank you for checking a checkbox");
    else setError(COURSE,"Select atleast one course");
}