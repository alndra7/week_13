const form = document.querySelector('.form');
const userName = document.querySelector('.userName');
const userPic = document.querySelector('.userPic');
const comment = document.querySelector('.comment');
const button = document.querySelector('.button');

//new
const messages = document.querySelector(".messages");
const imageArray = [
	"data:image/jpeg;base64,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",
   "data:image/jpeg;base64,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", 
   "data:image/jpeg;base64,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",
   "data:image/jpeg;base64,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",
   "data:image/jpeg;base64,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",
   "data:image/jpeg;base64,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"
];	



function checkName() {
	const checkedName = userName.value[0].toUpperCase() + userName.value.slice(1).toLowerCase();
	return checkedName;
	
}

function checkSpam() {
	let checkedCom = comment.value.replace(/viagra|XXX/gi, '***');
	return checkedCom;
  }

function generateRandomPicture(Array){
	let image = document.createElement("img");
	let randomNum = Math.floor(Math.random() * Array.length); 
	image.setAttribute("src", Array[randomNum]);
	messages.prepend(image);
	return Array;
}

// checkbox
function checkValue() {
		let radio = document.querySelector('input[name="nickname"]:checked');
		let checkedRadio = radio.value;
		return checkedRadio;
}

// PUSH COMMENT FUNCTION
function pushMessage() {
	const message = document.createElement("div");
	message.className = "message";
	messages.prepend(message);

	// date 
	const messageDate = document.createElement("p");
	messageDate.innerHTML = new Date;
	message.append(messageDate);
	
	// img
	if (userPic.value == "") {
		generateRandomPicture(imageArray);
	  } else {
		const messageUserPic = document.createElement("img");
		messageUserPic.src = userPic.value;
		message.append(messageUserPic);
	  }

	// name
	const messageUserName = document.createElement("h2");
	  if (checkValue() == "yes" && userName.value !== "") {
	  messageUserName.textContent = checkName();
	} else  {
		messageUserName.textContent = "Username";
	  }
	message.append(messageUserName);

	// comment
	const messageText = document.createElement("p");
	messageText.innerHTML = checkSpam()
	message.append(messageText);
}

function addComment() {
	pushMessage();
	userName.value ="";
	comment.value = "";
	userPic.value = "";
}

button.addEventListener('click', addComment);

