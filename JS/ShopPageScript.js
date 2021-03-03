function renderList() {
    console.log("Render called!");
    // Find all the prefixes and items.
    listRef.listAll().then(function(res) {
        res.prefixes.forEach(function(folderRef) {
            // All the prefixes under listRef.
            // You may call listAll() recursively on them.
        });
        res.items.forEach(function(itemRef) {
            var outputList = document.getElementById("item-list");
            if (outputList.innerHTML != "") {
                outputList.innerHTML = "";
            }
            itemRef.getDownloadURL().then(function(url) {
                itemRef.getMetadata().then(function(metadata) {
                    if (metadata.contentType.includes("image")) {
                        outputList.innerHTML = outputList.innerHTML + 
                        `<div class="shop-item">
                        <a href="#" class="shop-item--container">
                        <div class="meta">
                        <span class="tag">new</span>
                        <span class="discount">FLAT MAPS - 2X2 METERS</span>
                        </div>
                        <img src="${url}" width="160" height="160">
                        </a>
                        <div class="title">
                        <h3><a href="${url}" target="_blank">${itemRef.name.substring(0, itemRef.name.lastIndexOf('.'))}</a></h3>
                        </div>
                        <div class="price">
                        <div class="downloadButton">
                        <a href="${url}" download="${url}" target="_blank">Download File</a>
                        </div>
                        <button onclick="deleteFile('${itemRef.name}')">Delete File</button>
                        </div>
                        </div>`;
                    } else {
                        outputList.innerHTML = outputList.innerHTML + 
                        `<div class="shop-item">
                        <a href="#" class="shop-item--container">
                        <div class="meta">
                        <span class="tag">new</span>
                        <span class="discount">ROYALTY-FREE FILES</span>
                        </div>
                        <img src="https://icons.iconarchive.com/icons/custom-icon-design/mono-general-2/512/document-icon.png" width="160" height="160">
                        </a>
                        <div class="title">
                        <h3><a href="${url}" target="_blank">${itemRef.name.substring(0, itemRef.name.lastIndexOf('.'))}</a></h3>
                        </div>
                        <div class="price">
                        <div class="downloadButton">
                        <a href="${url}" download="${url}" target="_blank">Download File</a>
                        </div>
                        <button onclick="deleteFile('${itemRef.name}')">Delete File</button>
                        </div>
                        </div>`;
                    }
                }).catch(function(error) {
                    console.log(error);
                });
            }).catch(function(error) {
                console.log(error);
            })
        });
    }).catch(function(error) {
        console.log(error);
    });
}

function uploadFile() {
    var input = document.createElement('input');
    input.type = 'file';
    
    //Upload function
    input.onchange = e => { 
        var file = e.target.files[0]; 
        
        // Create the file metadata
        var metadata = {
            contentType: file.type
        };
        
        // Upload file and metadata to the object 'images/mountains.jpg'
        var uploadTask = listRef.child(file.name).put(file, metadata);
        
        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        function(snapshot) {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                console.log('Upload is paused');
                break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                console.log('Upload is running');
                break;
            }
        }, function(error) {
            console.log(error);
        }, function() {
            renderList();
        });
        
    }
    
    //Trigger upload function upon clicking the button
    input.click();
}

function deleteFile(name) {
    // Create a reference to the file to delete
    var deleteRef = listRef.child(name);
    
    // Delete the file
    if (confirm("Are you sure you want to delete it?")) {
        deleteRef.delete().then(function() {
            renderList();
            var outputList = document.getElementById("itemList");
            console.log(`Successfully deleted file: ${name}</li>`);
        }).catch(function(error) {
            console.log(error);
        });
    }
}

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDgCuXh5WA5tuPE2Ri5IoNsVjTPwZczfMk",
    authDomain: "singulars-2020-projecte-iad.firebaseapp.com",
    projectId: "singulars-2020-projecte-iad",
    storageBucket: "singulars-2020-projecte-iad.appspot.com",
    messagingSenderId: "185830163445",
    appId: "1:185830163445:web:05ed47c4d699ac003856bc",
    measurementId: "G-9390G1QHKF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Points to the root reference
var storageRef = firebase.storage().ref();

// Create a reference under which you want to list
var listRef = storageRef.child('E-SHOP Files');

//Render the list for the first time
renderList();