var Andromeda = {

	showPage : function(path, targetDiv) {
		var jqxhr = jQuery.post(path, function(data) {
			jQuery("#" + targetDiv).html(data);
		});
	},

	showHomePage : function() {
		var path = "html/general/home.html";
		Andromeda.showPage(path, "containerDiv");
	},
	showLoginPage : function() {
		var path = "html/login/loginForm.html";
		Andromeda.showPage(path, "containerDiv");
	},

	showRegistrationPage : function() {
		var path = "html/general/studentRegistration.html";
		Andromeda.showPage(path, "contentDiv");
	},

	setSessionValue : function(key, value) {
		sessionStorage.setItem(key, value);
	},

	getSessionValue : function(key) {
		return sessionStorage.getItem(key);
	},

	removeSessionValue : function(key) {
		sessionStorage.removeItem(key);
	},

	showError : function(errorMessage) {
		var message = "<div class=\"alert alert-danger\"><strong>Error: </strong>"
				+ errorMessage + "</div>"
		jQuery("#errorDiv").html(message);
	},

	logout : function() {
		localStorage.setItem("username",null);
		localStorage.setItem("password",null);
		showMainPage();
	},

	post : function(url, data) {
		var responseData = null;
		jQuery.ajax({
			url : url,
			type : 'post',
			data : JSON.stringify(data), // Stringified Json Object
			dataType : 'json',
			async : false, // Cross-domain requests and dataType: "jsonp"
							// requests do not support synchronous operation
			cache : false, // This will force requested pages not to be cached
							// by the browser
			processData : false, // To avoid making query String instead of
									// JSON
			contentType : "application/json; charset=utf-8",
			success : function(data) {
				responseData = data;
			}
		});
		/*if(responseData.successful==false){
			alert("Login Failed");
		}
		else{
			alert("Login Success");
		}*/
		if (responseData.responseObject == null
				|| responseData.responseObject === undefined
				|| responseData.responseObject.length <= 0) {
		} else{
			var path = "html/login/Reports.html";
			Andromeda.showPage(path, "bodytag");
		}
		return responseData.successful;
	},

	isUserLoggedIn : function() {
		var username = localStorage.getItem("username");
		var password = localStorage.getItem("password");
		var data = {
			username : username,
			password : password
		};
		var status=Andromeda.post("/apsche/auth/loggedin", data);
		return status;
	},
	
	showModulesPage : function() {
		var path = "/andromeda/modules";

		var jqxhr = jQuery.post(path, function(data) {
			Andromeda.showModules(data);
		});
	},

	loadModule : function(path) {
		var targetDiv = "amdContainerDiv";
		Andromeda.showPage(path, targetDiv);
	},

	showModules : function(data) {
		var modulesDataString = "No modules present";

		if ((data) && (data.modules) && (data.modules.length > 0)) {
			modulesDataString = "<div class=\"row\">";
			for (var i = 0; i < data.modules.length; i++) {
				var moduleName = data.modules[i].name || "No Name";
				var moduleDescription = data.modules[i].description
						|| "No Description";
				var moduleUrl = data.modules[i].url || "No Url";
				var moduleTestUrl = data.modules[i].testUrl;

				var moduleString = "<div class=\"col-md-3 amdModuleDiv\" onClick=\"Andromeda.loadModule('"
						+ moduleUrl + "');\">";
				moduleString += "<div class=\"amdModule\"><table border=\"0\"><tr>";
				moduleString += "<td><div class=\"amdModuleIcon\">&nbsp;</div></td>";
				moduleString += "<td><div class=\"amdModuleTitle\">"
						+ moduleName + "</div></td>";
				moduleString += "</tr><tr><td colspan=\"2\">";
				moduleString += "<div class=\"amdModuleDescription\">"
						+ moduleDescription + "</div>";
				moduleString += "</td></tr></table></div></div>";

				modulesDataString += moduleString;
			}

			modulesDataString += "</div>";
		}

		jQuery("#amdContentDiv").html(modulesDataString);
	},

	showEmployeePage : function() {
		var path = "/tiesems/html/forms/EmployeeForm.html";
		Andromeda.showPage(path, "amdContentDiv");
	}
};
