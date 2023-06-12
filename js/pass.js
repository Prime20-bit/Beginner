let pass = getElementById('Pass') , Confirm = getElementById('Confirm')

function Confirmpassword() {
	if (Pass.value != Confirm.value) {
		Confirm.setCustomValidity("Password don't match");
	} else {
		Confirm.setCustomValidity('');
	}
}

Pass.onchange = validatePassword;
Confirm.onkeyup = validatePassword;