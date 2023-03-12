const form = document.querySelector('.form');
//const showName = document.querySelector('#showName');
const userName = document.querySelector('.userName');
const userPic = document.querySelector('.userPic');
const comment = document.querySelector('.comment');

const nameChat = document.querySelector('.nameChat');
const picChat = document.querySelector('.picChat');
const commentChat = document.querySelector('.commentChat');
const button = document.querySelector('.button');

//new
const messages = document.querySelector(".messages");



function checkName() {
	const checkName = userName.value[0].toUpperCase() + userName.value.slice(1).toLowerCase();
	//nameChat.textContent = checkName;
	return checkName;
	
}

function checkSpam() {
	let checkCom = comment.value.replace(/viagra|XXX/gi, '***');
	//commentChat.textContent = checkCom;
	//return commentChat;
	return checkCom;
  }

// random picture


// ВЫВОД 
function nameH() {
const message = document.createElement("div");
		message.className = "message";
		messages.prepend(message);

	//date 
	const messageDate = document.createElement("p");
	messageDate.innerHTML = new Date;
	message.append(messageDate);
	

	//img
	const messageUserPic = document.createElement("img");
	//messageUserPic.src = userPic.value; 
	//messageUserPic.alt = 'userpic';

	if (userPic.value == "") {
		messageUserPic.src = generateRandomPicture(Array);
	  } else {
		messageUserPic.src = userPic.value;
	  }
	message.append(messageUserPic);

	// name
	const messageUserName = document.createElement("h2");
	if (userName.value !== "") {
	  messageUserName.textContent = checkName();
	} else {
	  messageUserName.textContent = "Username";
	}
	message.append(messageUserName);

	// text
	const messageText = document.createElement("p");
	messageText.innerHTML = checkSpam()
	message.append(messageText);
 
}

const imageArray = [
	 	"https://images.unsplash.com/photo-1508185159346-bb1c5e93ebb4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=55cf14db6ed80a0410e229368963e9d8&auto=format&fit=crop&w=1900&q=80",
	 	"https://images.unsplash.com/photo-1495480393121-409eb65c7fbe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=05ea43dbe96aba57d48b792c93752068&auto=format&fit=crop&w=1351&q=80"
	 ];	
	
function generateRandomPicture(Array){
		let image = document.createElement("img");
		let randomNum = Math.floor(Math.random() * Array.length); 
		image.setAttribute("src", Array[randomNum]);
		messages.prepend(image);
		return image;
		}

 //button.addEventListener("click", () => generateRandomPicture(imageArray));

//console.log(generateRandomPicture(Array));

//ИЗ ПРИМЕРА

// const createMessage = () => {
// 	const message = document.createElement("div");
// 	message.className = "message";
// 	messages.prepend(message);
  
// 	// username
// 	const messageUserName = document.createElement("p");
// 	messageUserName.className = "message_name";
// 	if (userName.value !== "") {
// 	  messageUserName.textContent = checkName();
// 	} else {
// 	  messageUserName.textContent = "Username";
// 	}
// 	message.append(messageUserName);
  
// 	// text
// 	const messageText = document.createElement("p");
// 	messageText.className = "message_text";
// 	messageText.innerHTML = checkMessage(comment.value);
// 	message.append(messageText);
//   };

//ВЫВОД ДАННЫХ В ЧАТ
function addComment() {
	nameH();
	//checkName();
	//checkSpam();
	//createMessage();
	// picChat.src = userPic.value;
	// picChat.alt = 'userpic';

	userName.value = "";
	comment.value = "";
	userPic.value = "";
}
button.addEventListener('click', addComment);



// //выбранное значение имени
// document.querySelector('#showName').onclick = function(e) {
// 	console.log (e.target.value);
// 	}
