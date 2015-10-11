SomApi.account = "SOM5492258025569";
SomApi.domainName = "www.prabhakargupta.com";
SomApi.config.sustainTime = 4; 
SomApi.onTestCompleted = onTestCompleted;
SomApi.onError = onError;

var msgDiv = document.getElementById("msg");

function btnStartClick() {
	msgDiv.innerHTML = "<br><div>Fetching results...</div>";
	SomApi.startTest();
}

function onTestCompleted(testResult) {
	msgDiv.innerHTML = 
	"<table class='table table-bordered my'><tbody><tr>" +	
	"<tr><td>Download Speed</td><td>"+testResult.download+" Mbps</td></tr>" +
	"<tr><td>Upload Speed</td><td>"+testResult.upload+" Mbps</td></tr>" +
	"<tr><td>Latency</td><td>"+testResult.latency+" ms</td></tr>" +
	"<tr><td>Test Server</td><td>"+testResult.testServer+"</td></tr>" +
	"<tr><td>Your IP</td><td>"+testResult.ip_address+"</td></tr>" +
	"<tr><td>Hostname</td><td>"+testResult.hostname+"</td></tr>" +
	"</tbody></table>";
}

function onError(error) {
	msgDiv.innerHTML = "Error "+ error.code + ": "+error.message;
}

$(document).on('click', 'button', function(){
	$('#to-hide-data').hide(100);
});