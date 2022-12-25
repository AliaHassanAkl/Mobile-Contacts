// set variables
var addContactBtn = document.getElementById('addNewContact');
var cancelBtn= document.getElementById('cancel');
var inputFirstName = document.getElementById('inputFirstName');
var inputLastName= document.getElementById('inputLastName');
var inputPhoneKey=document.getElementById('phoneKey');
var inputPhoneNum=document.getElementById('phoneNum');
var inputemail= document.getElementById('inputemail');
var getInputs = document.getElementsByClassName(' form-control-plaintext');

var contacts=[];

// retrieve and storage
if(JSON.parse(localStorage.getItem('contactList'))!=null){
    contacts=JSON.parse(localStorage.getItem('contactList'));
    viewContact();
    }

// function to add new contact
var addcontact = function(){
    var contact={
        firstName: inputFirstName.value,
        lastName: inputLastName.value,
        phoneKey: inputPhoneKey.value,
        phoneNum: inputPhoneNum.value,
        email: inputemail.value,
    };
    contacts.push(contact);
    localStorage.setItem("contactList",JSON.stringify(contacts));

};

// function to set button
addContactBtn.onclick=function(){
    addcontact();
    viewContact();
    resetValues();
};

// function to view contact list 

function viewContact(){
    var contactList = '';
    for (var i=0; i<contacts.length; i++){
        contactList+= `<li class="list-group-item  ">
                            <a href="#" class="d-block text-decoration-none" role="button">
                                <img src="image/name-people-person-user-icon--icon-search-engine-1.png" class="w-5 border border-1 me-3 rounded-circle float-start" alt=""> 
                                <span class="d-flex text-black">${contacts[i].firstName} ${contacts[i].lastName} </span>
                                <span class="d-flex text-black-50">${contacts[i].phoneKey} ${contacts[i].phoneNum}</span>
                            </a>  
                      </li>`
    }
    document.getElementById('listOfContacts').innerHTML=contactList;
};

// reset function 
var resetValues= function(){
    for(var i =0; i<getInputs.length; i++){
        getInputs[i].value='';
    }
}