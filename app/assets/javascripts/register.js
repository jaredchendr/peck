function validname(element){
  	var reg = /^[a-zA-Z0-9]*?$/;
  	if (reg.test(element.value))
	{
		document.getElementById("name-tip").className = "hide-tips";
		return true;
	}
	else
	{
		document.getElementById("name-tip").className = "display-tips";
		return false;
	}
}

function validpassword(element){
  	if (element.value.length>=6)
	{
		document.getElementById("pass").className = "hide-tips";
		return true;
	}
	else
	{
		document.getElementById("pass").className = "display-tips";
		element.value = "";
		return false;
	}
}

function validpasswordCon(element){
	var pass = document.getElementById("password");
  	if (element.value == pass.value)
	{
		document.getElementById("passcon").className = "hide-tips";
		return true;
	}

	else
	{
		document.getElementById("passcon").className = "display-tips";
		document.getElementById("password").focus();
		document.getElementById("password").value = "";
		element.value = "";
		return false;
	}
}

function validaddr(element){
  	var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
  	if (reg.test(element.value))
	{
		document.getElementById("mail-tip").className = "hide-tips";
		return true;
	}
	else
	{
		document.getElementById("mail-tip").className = "display-tips";
		return false;
	}
}

function validate(form)
{
	var formElements = form.elements;
	for(var i=0; i<formElements.length; i++)
	{
		currentElement = formElements[i];
		if(currentElement.className == "required" && currentElement.value =="")
		{
			alert("����δ����Ϣ");
			currentElement.focus();
			return false;
			break;
		}
		switch(currentElement.id)
		{
			case "name": 
				if(!validname(currentElement))
				{
					currentElement.focus();
					alert("�û������зǷ��ַ�");
					return false;
				}
				break;
			case "password":
				if(!validpassword(currentElement))
				{
					alert("������벻С����λ");
					form.password.value = "";
					currentElement.focus();
					form.passwordCon.value = "";
					return false;
				}
				break;
			case "passwordCon":
				if(!validpasswordCon(currentElement))
				{
					alert("������������벻��ͬ");
					form.password.value = "";
					form.passwordCon.value = "";
					form.password.focus();
					return false;
				}
				break;
			case "mailaddr":
				if(!validaddr(currentElement))
				{
					alert("��������ȷ�������ַ");
					form.addr.focus();
					return false;
				}
				break;
		}
		
	}
	return true;	
}