// // Require express and body-parser
 const express = require("express")
 const bodyParser = require("body-parser")

// // Initialize express and define a port
const app = express()
const PORT = 3000

// // Tell express to use body-parser's JSON parsing
app.use(bodyParser.json())

// //app.use(bodyParser.json())

// //Set up a route for the webhook
app.post("/hook", (req, res) => {
  console.log(req.body) // Call your action on the request here
  res.status(200).end() // Responding is important
})

// // Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))



// var octonode = require('octonode');
// var _s = require('underscore.string'); 
// var gitHubAccessToken = "xxxxxx";
// var githubhook = require('githubhook');
//     // configure listener for github changes
//     var github = githubhook({/* options */
// 		   host: "127.0.0.1",
//        port: 8082,
//        path: "/pushchanges",
//        secret: "123456"  
// 	  });

//     // listen to push on github on branch master
//     github.on('push', function (repo, ref, data) {
// 		  var branchName = _s.strRightBack(ref, "/");
// 		  var fullNameRepository = data.repository.full_name;
// 		  var removedFilesArray = data["head_commit"]["removed"];
// 		  var addedFilesArray = data["head_commit"]["added"];
// 		  var modifiedFilesArray = data["head_commit"]["modified"];
//     });

//     function fetchFileFromGitHub(gitHubAccessToken, repoFullName, 
//       branchName, filePath, callback) {

//       var client = octonode.client(gitHubAccessToken);  
// 	    var repo = client.repo(repoFullName);

// 	    repo.contents(filePath, branchName, function (err, body) {		  
// 		    if (err){
// 		      callback(null);
// 		    }	  	
// 		    else{
// 		  	    var buffer = new Buffer(body["content"], 'base64');	 
// 		  	    callback(buffer);
// 		    }
// 		  });
//     };

//     // listen to github push
//     github.listen();