let LoggedUser;
let listOfUsers;

let tips =[ 
"Conduct Research on the Employer, Hiring Manager, and Job Opportunity",
"Review Common Interview Questions and Prepare Your Responses",
"Dress for Success",
"Arrive on Time, Relaxed and Prepared for the Interview",
"Make Good First Impressions",
"Be Authentic, Upbeat, Focused, Confident, Candid, and Concise",
"Remember the Importance of Body Language",
"Ask Insightful Questions",
"Sell Yourself and then Close the Deal",
"Thank Interviewer(s) in Person, by Email, or Postal Mail"
]; 

function displayResults(data){
	$('#listOfUsers').empty();
	$('#listOfUsers').append(`<h2> Users </h2> `)
	for(let i = 0; i < data.User.length; i ++){
		$('#listOfUsers').append(`<li> ${data.User[i].user} </li>`);
	}
}

function fetchUsers(){
	let url = '/cvusers/api/userlist/';
	console.log(url);
	let settings = {
		method : 'GET',
		headers : {
			"Content-Type" : "application/json"
		}
	};
	fetch(url,settings)
		.then(response => {
			if(response.ok){
				return response.json();
			}
			else{
				throw Error("Something went wrong.");
			}
		})		
		.then(responseJSON => displayResults(responseJSON))
		.catch(err => {
			console.log(err);
		});
}



function displayCVs()
{
	document.getElementById("mainMenu").style.display= "none"
	document.getElementById("ReturnTips").style.display= "block"
	document.getElementById("listOfCvs").style.display= "block"

	$('#listOfCvs').empty();
	$('#listOfCvs').append(`<h2> Users </h2> `)

	for(let i = 0; i < LoggedUser.User.cantCv; i ++)
		$('#listOfCvs').append(`
			${i}

			<button type="button" id="${LoggedUser.User}N${i}" onclick="SeeThis(${i});" > 
			See this CV </button>
			<button type="button" id="${LoggedUser.User}D${i}" onclick="DeleteThis(${i});" > 
			Delete this CV </button>
			<button type="button" id="${LoggedUser.User}E${i}" onclick="EditThis(${i});" > 
			Edit this CV </button>
			<button type="button" id="${LoggedUser.User}P${i}" onclick="PrimaryThis(${i});" > 
			Make this Primary </button>
			<br>


			`)


}

function SeeThis(CvNumber)
{


	let FName = LoggedUser.User.FullName[CvNumber]
	let FEmail = LoggedUser.User.email[CvNumber]
	let FCell = LoggedUser.User.CellPhone[CvNumber]
	let FObjective = LoggedUser.User.Objective[CvNumber]
	let FUniversity = LoggedUser.User.University[CvNumber]
	let FMajor = LoggedUser.User.Major[CvNumber]
	let FNONTech = LoggedUser.User.OfficeSkills[CvNumber]
	let FOTech = LoggedUser.User.TechnicalSkills[CvNumber]
	let FOCompany1 = LoggedUser.User.Company1[CvNumber]
	let FOPosition1 = LoggedUser.User.Position1[CvNumber]
	let FOLocation1 = LoggedUser.User.Location1[CvNumber]
	let FOYears1 = LoggedUser.User.Years1[CvNumber]
	let FOCompany2 = LoggedUser.User.Company2[CvNumber]
	let FOPosition2 = LoggedUser.User.Position2[CvNumber]
	let FOLocation2 = LoggedUser.User.Location2[CvNumber]
	let FOYears2 = LoggedUser.User.Years2[CvNumber]
	let FHobbies = LoggedUser.User.Hobbies[CvNumber]
	let FReferences = LoggedUser.User.References[CvNumber]


	var opened = window.open("");
	opened.document.write(`

		<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
     <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

     <title>One Page Resume</title>

     <style type="text/css">
        * { margin: 0; padding: 0; }
        body { font: 16px Helvetica, Sans-Serif; line-height: 24px; background: url(images/noise.jpg); }
        .clear { clear: both; }
        #page-wrap { width: 800px; margin: 40px auto 60px; }
        #pic { float: right; margin: -30px 0 0 0; }
        h1 { margin: 0 0 16px 0; padding: 0 0 16px 0; font-size: 42px; font-weight: bold; letter-spacing: -2px; border-bottom: 1px solid #999; }
        h2 { font-size: 20px; margin: 0 0 6px 0; position: relative; }
        h2 span { position: absolute; bottom: 0; right: 0; font-style: italic; font-family: Georgia, Serif; font-size: 16px; color: #999; font-weight: normal; }
        p { margin: 0 0 16px 0; }
        a { color: #999; text-decoration: none; border-bottom: 1px dotted #999; }
        a:hover { border-bottom-style: solid; color: black; }
        ul { margin: 0 0 32px 17px; }
        #objective { width: 500px; float: left; }
        #objective p { font-family: Georgia, Serif; font-style: italic; color: #666; }
        dt { font-style: italic; font-weight: bold; font-size: 18px; text-align: right; padding: 0 26px 0 0; width: 150px; float: left; height: 100px; border-right: 1px solid #999;  }
        dd { width: 600px; float: right; }
        dd.clear { float: none; margin: 0; height: 15px; }
     </style>
</head>

<body>

    <div id="page-wrap">
    
        
    
        <div id="contact-info" class="vcard">
        
            <!-- Microformats! -->
        
            <h1 class="fn">${FName}</h1>
        
            <p>
                Cell: <span class="tel">${FCell}</span><br />
                Email: <a class="email" href="mailto:${FEmail}">${FEmail}</a>
            </p>
        </div>
                
        <div id="objective">
            <p>
                ${FObjective} 
            </p>
        </div>
        
        <div class="clear"></div>
        
        <dl>
            <dd class="clear"></dd>
            
            <dt>Education</dt>
            <dd>
                <h2>${FUniversity}</h2>
                <p><strong>Major:</strong> ${FMajor}<br />
                </p>
            </dd>
            
            <dd class="clear"></dd>
            
            <dt>Skills</dt>
            <dd>
                <h2>Office skills</h2>
                <p>${FNONTech}</p>
                
                <h2>Technical skills</h2>
                <p>${FOTech}</p>
            </dd>
            
            <dd class="clear"></dd>
            
            <dt>Experience</dt>
            <dd>
                <h2>${FOCompany1} <span>${FOPosition1} - ${FOLocation1} - ${FOYears1}</span></h2>
                
                
                <h2>${FOCompany2} <span>${FOPosition2} - ${FOLocation2} - ${FOYears2}</span></h2>
               
            </dd>
            
            <dd class="clear"></dd>
            
            <dt>Hobbies</dt>
            <dd>${FHobbies}</dd>
            
            <dd class="clear"></dd>
            
            <dt>References</dt>
            <dd>${FReferences}</dd>
            
            <dd class="clear"></dd>
        </dl>
        
        <div class="clear"></div>
    
    </div>

</body>

</html>





		`);


}

function DeleteThis(CvNumber)
{




	LoggedUser.User.FullName.splice(CvNumber, 1);
	LoggedUser.User.email.splice(CvNumber, 1);
	LoggedUser.User.CellPhone.splice(CvNumber, 1);
	LoggedUser.User.Objective.splice(CvNumber, 1);
	LoggedUser.User.University.splice(CvNumber, 1);
	LoggedUser.User.Major.splice(CvNumber, 1);
	LoggedUser.User.OfficeSkills.splice(CvNumber, 1);
	LoggedUser.User.TechnicalSkills.splice(CvNumber, 1);
	LoggedUser.User.Company1.splice(CvNumber, 1);
	LoggedUser.User.Position1.splice(CvNumber, 1);
	LoggedUser.User.Location1.splice(CvNumber, 1);
	LoggedUser.User.Years1.splice(CvNumber, 1);
	LoggedUser.User.Company2.splice(CvNumber, 1);
	LoggedUser.User.Position2.splice(CvNumber, 1);
	LoggedUser.User.Location2.splice(CvNumber, 1);
	LoggedUser.User.Years2.splice(CvNumber, 1);
	LoggedUser.User.Hobbies.splice(CvNumber, 1);
	LoggedUser.User.References.splice(CvNumber, 1);




let url = '/cvusers/api/Delete/';
	let settings = {
		method : 'DELETE',
		headers : {
			"Content-Type" : "application/json"
		},
		body : JSON.stringify({

	Data : LoggedUser.User
		})
	};


fetch(url, settings)
		.then(response => {
			if(response.ok){
				return response.json();
			}
			else{
				throw Error("Something went wrong.");
			}
		})		
		.then(responseJSON => {

			console.log(responseJSON)
			alert("Primary Cv Changed")
			 
		})
		.catch(err => {

			console.log(err);
		});





LoggedIn(LoggedUser.User.user)
ReturnMain()
}

function EditThis(CvNumber)
{


}

function PrimaryThis(CvNumber)
{
	let url = '/cvusers/api/UpdateFieldPrimary/';
	let settings = {
		method : 'POST',
		headers : {
			"Content-Type" : "application/json"
		},
		body : JSON.stringify({

	user : LoggedUser.User.user,
	PrimaryCV : CvNumber
		})
	};

		fetch(url, settings)
		.then(response => {
			if(response.ok){
				return response.json();
			}
			else{
				throw Error("Something went wrong.");
			}
		})		
		.then(responseJSON => {

			console.log(responseJSON)
			alert("Primary Cv Changed")
			 
		})
		.catch(err => {

			console.log(err);
		});

	LoggedIn(LoggedUser.User.user)

}

function DisplayListOfUsers(){

	let url = '/cvusers/api/userlist/';
	console.log(url);
	let settings = {
		method : 'GET',
		headers : {
			"Content-Type" : "application/json"
		}
	};
	fetch(url,settings)
		.then(response => {
			if(response.ok){
				return response.json();
			}
			else{
				throw Error("Something went wrong.");
			}
		})		
		.then(responseJSON => displayResultsList2(responseJSON))
		.catch(err => {
			console.log(err);
		});


}

function displayResultsList2(data){
 listOfUsers = data;

	document.getElementById("mainMenu").style.display= "none"
	document.getElementById("ReturnTips").style.display= "block"
	document.getElementById("listOfUsersTips").style.display= "block"

	$('#listOfUsersTips').empty();
	$('#listOfUsersTips').append(`<h2> Users </h2> `)
	for(let i = 0; i < data.User.length; i ++){
		$('#listOfUsersTips').append(` ${data.User[i].user} 

			<button type="button" id="${data.User[i].user}N1" onclick="ReviewThis(${i});" > 
			Review his CV </button>
			<br>

			<textarea rows = "5" cols = "50" name = "description" id="${data.User[i].user}TxT">
              Write here your review here for ${data.User[i].user}
           </textarea>
			<button type="button" id="${data.User[i].user}BTN2" onclick="SendReview(${i});" > 
			Send Review </button>

			<br>`);
	}
	
}

function SendReview(userT)
{

let url = '/cvusers/api/UpdateFieldTips/';
	let settings = {
		method : 'POST',
		headers : {
			"Content-Type" : "application/json"
		},
		body : JSON.stringify({

	user : listOfUsers.User[userT].user,
	NewTip : document.getElementById(`${listOfUsers.User[userT].user}TxT`).value
		})
	};


	fetch(url, settings)
		.then(response => {
			if(response.ok){
				return response.json();
			}
			else{
				throw Error("Something went wrong.");
			}
		})		
		.then(responseJSON => {

			console.log(responseJSON)
			alert("New Tip Added")
			 
		})
		.catch(err => {

			console.log(err);
		});

		LoggedIn(LoggedUser.User.user)

}





function ReviewThis(userT)
{
	
	let primary = listOfUsers.User[userT].PrimaryCV

	let FName = listOfUsers.User[userT].FullName[primary]
	let FEmail = listOfUsers.User[userT].email[primary]
	let FCell = listOfUsers.User[userT].CellPhone[primary]
	let FObjective = listOfUsers.User[userT].Objective[primary]
	let FUniversity = listOfUsers.User[userT].University[primary]
	let FMajor = listOfUsers.User[userT].Major[primary]
	let FNONTech = listOfUsers.User[userT].OfficeSkills[primary]
	let FOTech = listOfUsers.User[userT].TechnicalSkills[primary]
	let FOCompany1 = listOfUsers.User[userT].Company1[primary]
	let FOPosition1 = listOfUsers.User[userT].Position1[primary]
	let FOLocation1 = listOfUsers.User[userT].Location1[primary]
	let FOYears1 = listOfUsers.User[userT].Years1[primary]
	let FOCompany2 = listOfUsers.User[userT].Company2[primary]
	let FOPosition2 = listOfUsers.User[userT].Position2[primary]
	let FOLocation2 = listOfUsers.User[userT].Location2[primary]
	let FOYears2 = listOfUsers.User[userT].Years2[primary]
	let FHobbies = listOfUsers.User[userT].Hobbies[primary]
	let FReferences = listOfUsers.User[userT].References[primary]




	var opened = window.open("");
	opened.document.write(`

		<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
     <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

     <title>One Page Resume</title>

     <style type="text/css">
        * { margin: 0; padding: 0; }
        body { font: 16px Helvetica, Sans-Serif; line-height: 24px; background: url(images/noise.jpg); }
        .clear { clear: both; }
        #page-wrap { width: 800px; margin: 40px auto 60px; }
        #pic { float: right; margin: -30px 0 0 0; }
        h1 { margin: 0 0 16px 0; padding: 0 0 16px 0; font-size: 42px; font-weight: bold; letter-spacing: -2px; border-bottom: 1px solid #999; }
        h2 { font-size: 20px; margin: 0 0 6px 0; position: relative; }
        h2 span { position: absolute; bottom: 0; right: 0; font-style: italic; font-family: Georgia, Serif; font-size: 16px; color: #999; font-weight: normal; }
        p { margin: 0 0 16px 0; }
        a { color: #999; text-decoration: none; border-bottom: 1px dotted #999; }
        a:hover { border-bottom-style: solid; color: black; }
        ul { margin: 0 0 32px 17px; }
        #objective { width: 500px; float: left; }
        #objective p { font-family: Georgia, Serif; font-style: italic; color: #666; }
        dt { font-style: italic; font-weight: bold; font-size: 18px; text-align: right; padding: 0 26px 0 0; width: 150px; float: left; height: 100px; border-right: 1px solid #999;  }
        dd { width: 600px; float: right; }
        dd.clear { float: none; margin: 0; height: 15px; }
     </style>
</head>

<body>

    <div id="page-wrap">
    
        
    
        <div id="contact-info" class="vcard">
        
            <!-- Microformats! -->
        
            <h1 class="fn">${FName}</h1>
        
            <p>
                Cell: <span class="tel">${FCell}</span><br />
                Email: <a class="email" href="mailto:${FEmail}">${FEmail}</a>
            </p>
        </div>
                
        <div id="objective">
            <p>
                ${FObjective} 
            </p>
        </div>
        
        <div class="clear"></div>
        
        <dl>
            <dd class="clear"></dd>
            
            <dt>Education</dt>
            <dd>
                <h2>${FUniversity}</h2>
                <p><strong>Major:</strong> ${FMajor}<br />
                </p>
            </dd>
            
            <dd class="clear"></dd>
            
            <dt>Skills</dt>
            <dd>
                <h2>Office skills</h2>
                <p>${FNONTech}</p>
                
                <h2>Technical skills</h2>
                <p>${FOTech}</p>
            </dd>
            
            <dd class="clear"></dd>
            
            <dt>Experience</dt>
            <dd>
                <h2>${FOCompany1} <span>${FOPosition1} - ${FOLocation1} - ${FOYears1}</span></h2>
                
                
                <h2>${FOCompany2} <span>${FOPosition2} - ${FOLocation2} - ${FOYears2}</span></h2>
               
            </dd>
            
            <dd class="clear"></dd>
            
            <dt>Hobbies</dt>
            <dd>${FHobbies}</dd>
            
            <dd class="clear"></dd>
            
            <dt>References</dt>
            <dd>${FReferences}</dd>
            
            <dd class="clear"></dd>
        </dl>
        
        <div class="clear"></div>
    
    </div>

</body>

</html>





		`);
}

function LoginUser(userT,passT){
	let url = '/cvusers/api/LoginUserlist/';

	if (userT !="" && passT !="") 
	{
	let settings = {
		method : 'POST',
		headers : {
			"Content-Type" : "application/json"
		},
		body : JSON.stringify({

			UserName : userT , 
			Password : passT
		})
	};

	fetch(url, settings)
		.then(response => {
			if(response.ok){
				return response.json();
			}
			else{
				throw Error("Something went wrong.");
			}
		})		
		.then(responseJSON => {
			
			
			if (responseJSON.User.pass == passT){
			alert("Login Sucessfull")
			LoggedIn(userT);
			}
			else{
				alert("Wrong password")
			}
		})
		.catch(err => {
			alert("Wrong user name or password")
			console.log(err);
		});
		}
		else
		{
			alert("Wrong user name or password")
		}
}

function LoggedIn(userT){
			

	document.getElementById("LoginDiv").style.display= "none" ;	
	document.getElementById("hero-imageDiv").style.display= "none";
	document.getElementById("hero-imageDiv2").style.display= "block";


	let url = '/cvusers/api/LoginUserlist/';
	let settings = {
		method : 'POST',
		headers : {
			"Content-Type" : "application/json"
		},
		body : JSON.stringify({

			UserName : userT

		})
	};

		fetch(url, settings)
		.then(response => {
			if(response.ok){
				return response.json();
			}
			else{
				throw Error("Something went wrong.");
			}
		})		
		.then(responseJSON => {

			DisplayUserData(responseJSON)
			 
		})
		.catch(err => {

			console.log(err);
		});
		
			

	}

function DisplayUserData(data){


	LoggedUser = data;
			document.getElementById('DataUserName').innerHTML ="Welcome to your profile " + LoggedUser.User.user + "!"
			document.getElementById('CantCVs').innerHTML ="You have " + data.User.cantCv + " CVs    "
			document.getElementById('CantTips').innerHTML = "You have " + (data.User.Tips.length -1) + " tips    "
			document.getElementById('PrimaryCV').innerHTML = "You have selected CV # " + data.User.PrimaryCV + " as your primary Cv   "
}	

function PrintTips(){

	document.getElementById("listOfTips").style.display= "block"
	document.getElementById("ReturnTips").style.display= "block"
	document.getElementById("mainMenu").style.display= "none"

	$('#listOfTips').empty();
	$('#listOfTips').append(`<h2> Tips </h2>`)
	
	for(let i = 0; i < LoggedUser.User.Tips.length; i ++){
		
		$('#listOfTips').append(`${LoggedUser.User.Tips[i]}`);
	}
}
function ReturnMain(){

	document.getElementById("listOfTips").style.display= "none"
	document.getElementById("mainMenu").style.display= "block"
	document.getElementById("ReturnTips").style.display= "none"
	document.getElementById("listOfUsersTips").style.display= "none"
	document.getElementById("listOfCvs").style.display= "none"
}



function createUser(userT,passT){
	let url = '/cvusers/api/NewUser/';
	let settings = {
		method : 'POST',
		headers : {
			"Content-Type" : "application/json"
		},
		body : JSON.stringify({

			UserName : userT , 
			Password : passT
		})
	};

	fetch(url, settings)
		.then(response => {
			if(response.ok){
				return response.json();
			}
			else{
				throw Error("Something went wrong.");
			}
		})		
		.then(responseJSON => {
			console.log(responseJSON);
			document.getElementById('NewUserName').value = ''
			document.getElementById('NewPass').value = ''
			alert("Your user was added correclty. Now you can login")
			location.reload();
			
		})
		.catch(err => {
			alert("Error on password or user name already on use")
			console.log(err);
		});
}


function NewCVFunc(){
		document.getElementById("mainMenu").style.display= "none" ;	
		document.getElementById("CreateANewCv").style.display= "block" ;


}

function GenerateCV(){
	document.getElementById("CreateANewCv").style.display= "none";
	document.getElementById("mainMenu").style.display= "block" ;
	
	let FName = document.getElementById('FullName').value
	document.getElementById('FullName').value =''

	let FEmail = document.getElementById('email').value
	document.getElementById('email').value =''

	let FCell = document.getElementById('CellPhone').value
	document.getElementById('CellPhone').value =''

	let FObjective = document.getElementById('Objective').value
	document.getElementById('Objective').value ='Be concise while writing your objective'

	let FUniversity = document.getElementById('University').value
	document.getElementById('University').value =''

	let FMajor = document.getElementById('Major').value
	document.getElementById('Major').value =''

	let FNONTech = document.getElementById('OfficeSkills').value
	document.getElementById('OfficeSkills').value ='Write here your personal, non technical skills'

	let FOTech = document.getElementById('TechnicalSkills').value
	document.getElementById('TechnicalSkills').value ='Write here your technical skills'


	let FOCompany1 = document.getElementById('Company1').value
	document.getElementById('Company1').value = ""

	let FOPosition1 = document.getElementById('Position1').value
	document.getElementById('Position1').value = ""

	let FOLocation1 = document.getElementById('Location1').value
	document.getElementById('Location1').value = ""

	let FOYears1 = document.getElementById('Years1').value
	document.getElementById('Years1').value = " 1999-2019"



	let FOCompany2 = document.getElementById('Company2').value
	document.getElementById('Company2').value = ""

	let FOPosition2 = document.getElementById('Position2').value
	document.getElementById('Position2').value = ""

	let FOLocation2 = document.getElementById('Location2').value
	document.getElementById('Location2').value = ""

	let FOYears2 = document.getElementById('Years2').value
	document.getElementById('Years2').value = " 2009-2019"

	let FHobbies = document.getElementById('Hobbies').value
	document.getElementById('Hobbies').value ='Write here your Hobbies'

	let FReferences = document.getElementById('References').value
	document.getElementById('References').value ='Write here your References'


	var opened = window.open("");
	opened.document.write(`

		<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
     <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

     <title>One Page Resume</title>

     <style type="text/css">
        * { margin: 0; padding: 0; }
        body { font: 16px Helvetica, Sans-Serif; line-height: 24px; background: url(images/noise.jpg); }
        .clear { clear: both; }
        #page-wrap { width: 800px; margin: 40px auto 60px; }
        #pic { float: right; margin: -30px 0 0 0; }
        h1 { margin: 0 0 16px 0; padding: 0 0 16px 0; font-size: 42px; font-weight: bold; letter-spacing: -2px; border-bottom: 1px solid #999; }
        h2 { font-size: 20px; margin: 0 0 6px 0; position: relative; }
        h2 span { position: absolute; bottom: 0; right: 0; font-style: italic; font-family: Georgia, Serif; font-size: 16px; color: #999; font-weight: normal; }
        p { margin: 0 0 16px 0; }
        a { color: #999; text-decoration: none; border-bottom: 1px dotted #999; }
        a:hover { border-bottom-style: solid; color: black; }
        ul { margin: 0 0 32px 17px; }
        #objective { width: 500px; float: left; }
        #objective p { font-family: Georgia, Serif; font-style: italic; color: #666; }
        dt { font-style: italic; font-weight: bold; font-size: 18px; text-align: right; padding: 0 26px 0 0; width: 150px; float: left; height: 100px; border-right: 1px solid #999;  }
        dd { width: 600px; float: right; }
        dd.clear { float: none; margin: 0; height: 15px; }
     </style>
</head>

<body>

    <div id="page-wrap">
    
        
    
        <div id="contact-info" class="vcard">
        
            <!-- Microformats! -->
        
            <h1 class="fn">${FName}</h1>
        
            <p>
                Cell: <span class="tel">${FCell}</span><br />
                Email: <a class="email" href="mailto:${FEmail}">${FEmail}</a>
            </p>
        </div>
                
        <div id="objective">
            <p>
                ${FObjective} 
            </p>
        </div>
        
        <div class="clear"></div>
        
        <dl>
            <dd class="clear"></dd>
            
            <dt>Education</dt>
            <dd>
                <h2>${FUniversity}</h2>
                <p><strong>Major:</strong> ${FMajor}<br />
                </p>
            </dd>
            
            <dd class="clear"></dd>
            
            <dt>Skills</dt>
            <dd>
                <h2>Office skills</h2>
                <p>${FNONTech}</p>
                
                <h2>Technical skills</h2>
                <p>${FOTech}</p>
            </dd>
            
            <dd class="clear"></dd>
            
            <dt>Experience</dt>
            <dd>
                <h2>${FOCompany1} <span>${FOPosition1} - ${FOLocation1} - ${FOYears1}</span></h2>
                
                
                <h2>${FOCompany2} <span>${FOPosition2} - ${FOLocation2} - ${FOYears2}</span></h2>
               
            </dd>
            
            <dd class="clear"></dd>
            
            <dt>Hobbies</dt>
            <dd>${FHobbies}</dd>
            
            <dd class="clear"></dd>
            
            <dt>References</dt>
            <dd>${FReferences}</dd>
            
            <dd class="clear"></dd>
        </dl>
        
        <div class="clear"></div>
    
    </div>

</body>

</html>





		`);


	let url = '/cvusers/api/CreateNewCV/';
	let settings = {
		method : 'POST',
		headers : {
			"Content-Type" : "application/json"
		},
		body : JSON.stringify({

	user : LoggedUser.User.user,
	CvCant : LoggedUser.User.cantCv,
	FName : FName,
	FEmail : FEmail,
	FCell : FCell,
	FObjective : FObjective,
	FUniversity : FUniversity,
	FMajor : FMajor,
	FNONTech : FNONTech,
	FOTech : FOTech,
	FOCompany1 : FOCompany1,
	FOPosition1 : FOPosition1,
	FOLocation1 : FOLocation1,
	FOYears1 : FOYears1,
	FOCompany2 : FOCompany2,
	FOPosition2: FOPosition2,
	FOLocation2 : FOLocation2,
	FOYears2 : FOYears2,
	FHobbies : FHobbies,
	FReferences : FReferences 

		})
	};


	fetch(url, settings)
		.then(response => {
			if(response.ok){
				return response.json();
			}
			else{
				throw Error("Something went wrong.");
			}
		})		
		.then(responseJSON => {

			console.log(responseJSON)
			 
		})
		.catch(err => {

			console.log(err);
		});

		LoggedIn(LoggedUser.User.user)

}

function RandomTip()
{

	var min=0; 
    var max=9;  
    var random =Math.floor(Math.random() * (+max - +min)) + +min;   
	alert(tips[random]);

}


function ShowCreateUser()
	{

		document.getElementById("NewUserDiv").style.visibility= "visible" ;
	}


function watchForm(){
	$('.retrieveUsers').on('submit', function(e){
		e.preventDefault();
		fetchUsers();
	});
	$('.Login').on('submit', function(e){
		e.preventDefault();
		let user = $('#LoginUserName').val();
      	let pass = $('#LoginPass').val();
		LoginUser(user,pass);
	});

	$('.createUser').on('submit', function(e){
		e.preventDefault();
		let user = $('#NewUserName').val();
		let pass = $('#NewPass').val();
		createUser(user, pass);
	});

	$('.NewUserButton').on('submit', function(e){
		e.preventDefault();
		ShowCreateUser();
	});


	//main menu
	$('#NewCv').click(function(e){
    e.preventDefault();
    NewCVFunc();
    
});
	$('#SeeTips').click(function(e){
    e.preventDefault();
    PrintTips();
    
});
	$('#SeeCv').click(function(e){
    e.preventDefault();
    displayCVs();
    
});

	$('#SendCv').click(function(e){
    e.preventDefault();
    GenerateCV();
    
});

	$('#RandomTip').click(function(e){
    e.preventDefault();
    RandomTip();
    
});

	$('#ReturnTips').click(function(e){
    e.preventDefault();
    ReturnMain();
    
});

	$('#RevTips').click(function(e){
    e.preventDefault();
    DisplayListOfUsers();
    
});


}

$(watchForm);