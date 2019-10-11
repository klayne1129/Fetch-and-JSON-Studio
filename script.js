
      window.addEventListener("load", function(){
        fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
                response.json().then(function(json) {
                let container = document.getElementById("container");
                let emptyString = "";
                for (i = 0; i < json.length; i++) {
                emptyString += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>${json[i].hoursInSpace}</li>
                                <li>${json[i].active}</li>
                                <li>${json[i].skills.join(", ")}</li>
                            </ul>
                     </div>
                        <img class="avatar" src="${json[i].picture}">
                </div>
                 `
    
                }
                container.innerHTML = emptyString;
                })
                });
        })
    
