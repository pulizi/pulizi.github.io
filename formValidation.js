function ValidateForm()
{
	var name = document.forms["contactForm"]["username"].value;
	if(name == "")
	{
		alert("Name must be filled");
		return false;
	}

	var email = document.forms["contactForm"]["email"].value;
	if(email == "")
	{
			alert("Email must be filled");
		return false;
	}

	var message = document.forms["contactForm"]["message"].value;
	if(message == "")
	{
		alert("Message can't be empty");
		return false;
	}
}