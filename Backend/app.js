
// import express Module
const express = require('express');

// import bodyParser module 
const bodyParser = require("body-parser");

// import mongoose module
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/sportDB');

// import bcrypt module
const bcrypt = require('bcrypt');

// import jesonwebtoken module 
var jwt = require('jsonwebtoken');

// import authenticate
const authenticate = require("./middelware/authenticate");

// import Multer module
const multer = require('multer');

const axios = require("axios");

// create an application express
const app = express();

const path = require("path");


// Import Models ***********************
const Match = require("./Models/Match");

const User = require("./Models/User");

const Player = require("./Models/Player");

const Team = require("./Models/Team");
const { log } = require('console');


// *************************************


// configure bodyparse
// send JSON responses
app.use(bodyParser.json());

// get object from request
app.use(bodyParser.urlencoded({ extended: true }));

// security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});





//*********************************************************


// Bussiness Logic:Add Match
app.post("/matches", (req, res) => {
    console.log(req.body);

    let match = new Match({
        scoreOne: req.body.scoreOne,
        scoreTwo: req.body.scoreTwo,
        teamOne: req.body.teamOne,
        teamTwo: req.body.teamTwo
    })

    match.save();
    res.json({ message: "Added with sucess" });
    console.log("here the bussniess logic of Add Match");
})



// bussiness logic : get all matches
app.get("/matches", authenticate, (req, res) => {
    console.log("here the bussiness logic of all matches");
    Match.find().then((data) => {
        res.json({ matches: data, message: "ok" });
    });

})


// bussniess logic : get match by id 
app.get("/matches/:id", (req, res) => {
    console.log("here the bussiness logic of get matches by id");
    let id = req.params.id;
    console.log(id);

    // for (let i = 0; i < matchesTab.length; i++) {
    //     if (matchTab[i].id == id) {
    //         res.json{(match :matchesTab[i])};
    //     }
    Match.findOne({ _id: id }).then((data) => {
        res.json({ match: data });
    })
})


// bussines logic : update match
app.put("/matches", (req, res) => {
    console.log("here the bussiness logic of update matches");
    let match = req.body;
    console.log(match);
    Match.updateOne({ _id: match._id }, match).then((editResponse) => {
        console.log(editResponse);
        if (editResponse.nModified == 1) {
            res.json({ message: "edited with sucess" });
        }
    })
})

// bussines logic : delete match by id
app.delete("/matches/:id", (req, res) => {
    console.log("here the bussiness logic of delete matches");
    let id = req.params.id;
    console.log("here the id from the Fe", id);
    Match.deleteOne({ _id: id }).then((deleteResponse) => {
        console.log(deleteResponse);
        if (deleteResponse.deletedCount == 1) {
            res.json({ message: `deleted object : ${id}` });
        }
    });

})




//*****************************************************************


// add players
// app.post("/players", (req, res) => {
//     console.log(req.body);

//     let player = new Player({
//         name: req.body.name,
//         age: req.body.age,
//         position: req.body.position,
//         nbre: req.body.nbre
//     })
//     player.save();
//     res.json({ message: "Added with sucess" });
//     console.log("here the bussniess logic of Add player");
// })
// Business Logic :ADD Player
app.post("/players", (req, res) => {
    console.log("here BL: add player");
    console.log(req.body);
    try {
        // Find team by Id
        Team.findById(req.body.teamId).then((team) => {
            if (!team) {
                return res.status(404).json({ message: "Team not found" });
            }
            req.body.teamId = team._id;
            console.log(team._id);
            let player = new Player({
                name: req.body.name,
                age: req.body.age,
                position: req.body.position,
                nbre: req.body.nbre,
                teamId: req.body.teamId,
            });
            player.save(() => {
                team.players.push(player);
                team.save();
                res.status(201).json({ message: "Done" });
            });
        })
    } catch (error) {
        console.log("here error", error);
    }
    // let player = new Player({
    //     name: req.body.name,
    //     age: req.body.age,
    //     position: req.body.position,
    //     nbre: req.body.nbre
    // });
    // player.save();
    // res.json({ message: "added with success" });
})

// bussiness logic : get all players
// app.get("/players", (req, res) => {
//     console.log("here the bussiness logic of all matches");
//     Player.find().then((data) => {
//         res.json({ players: data, message: "ok" });

//     });
// })
app.get("/teams/:id/players", (req, res) => {
    console.log("here BL :Delete Team");
    console.log("hereid", req.params.id);
    try {
        Team.findById(req.params.id).populate("players").then((team) => {
            console.log(team);
            if (!team) {
                return res.status(404).json({
                    message: "Team not found"
                });
            }
            res.json({ team: team });
        })
    } catch (error) {
        console.log(error);
    }
})


// bussniess logic : get player by id 
app.get("/players/:id", (req, res) => {
    console.log("here the bussiness logic of get players by id");
    let id = req.params.id;
    Player.findOne({ _id: id }).then((data) => {
        console.log("here the object data", data);
        res.json({ player: data });
    })

})

// bussines logic : update player
app.put("/players", (req, res) => {
    console.log("here the bussiness logic of update players");
    let player = req.body;
    Player.updateOne({ _id: player._id }, player).then((editResponse) => {
        console.log(editResponse);
        if (editResponse.nModified == 1) {
            res.json({ message: "edited with sucess" });
        }
    })
})


// bussines logic : delete player by id

app.delete("/players/:id", (req, res) => {
    console.log("here the bussiness logic of delete players");
    let id = req.params.id;
    console.log("here the id from the fe", id);
    Player.deleteOne({ _id: id }).then((deleteResponse) => {
        console.log(deleteResponse);
        if (deleteResponse.deletedCount == 1) {
            res.json({ message: `deleted object:${id}` })
        }
    });
})


// Bussniness logic : get user by id 
app.get("/allUsers/:id", (req, res) => {
    console.log("here the bussiness logic of all matches");
    let userId = req.params.id;
    console.log(userId);
    User.findOne({ _id: userId }).then((data) => {
        res.json({ userById: data })
    })

});





// =====+++++++++++++++++++++++++++++++++++++++++++++++


// all teams

app.post("/teams", (req, res) => {
    console.log(req.body);

    let team = new Team({
        name: req.body.name,
        staduim: req.body.staduim,
        owner: req.body.owner,
        foundation: req.body.foundation
    });

    team.save((err, doc) => {
        (err) ? res.json({ message: "NOK" }) : res.json({ message: "OK" })

    });

    // res.json({ message: "Added with sucess" });
    console.log("here the bussniess logic of Add team");
})

// bussiness logic : get all teams
app.get("/teams", (req, res) => {
    console.log("here the bussiness logic of all teams");
    Team.find().then((data) => {
        res.json({ teams: data, message: "ok" });

    });

})

// bussniess logic : get team by id 
app.get("/teams/:id", (req, res) => {
    console.log("here the bussiness logic of get teams by id");
    let id = req.params.id;
    Team.findOne({ _id: id }).then((data) => {
        res.json({ team: data })
    })
})

// Bussniess logic of edit profile

app.put("/allUsers", (req, res) => {
    let newUser = req.body;
    User.findById(newUser._id).then(() => {
        bcrypt.compare(newUser.oldPassword, user.password)
    }).then((pwdResult) => {
        if (!pwdResult) {
            res.json({ message: " Check your old Password" })
        }
        bcrypt.hash(req.body.newPassword, 8).then((cryptedPwd) => {
            User.updateOne({ _id: newUser._id }, { password: cryptedPwd }).then((editResponse) => {
                res.json({ data: editResponse, message: "all is ok" });
            })

        })
    })
})

// bussines logic : update team
app.put("/teams", (req, res) => {
    console.log("here the bussiness logic of update teams");
    let team = req.body;
    Team.updateOne({ _id: team._id }, team).then((editResponse) => {
        console.log(editResponse);
        if (editResponse.nModified == 1) {
            res.json({ message: "edited with sucess" });
        }
    })
})

// bussines logic : delete team by id

app.delete("/teams/:id", (req, res) => {
    console.log("here the bussiness logic of delete teams");
    let id = req.params.id;
    console.log("here the id from the fe ", id);
    Team.deleteOne({ _id: id }).then((deleteResponse) => {
        console.log(deleteResponse);
        if (deleteResponse.deletedCount == 1) {
            res.json({ message: `deleted object:${id}` });
        }
    });
})

// Multer*************************************
app.use('/avatars', express.static(path.join('Backend/images')));
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}
const storageConfig = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];

        if (!isValid) {
            let error = new Error("Mime type is invalid");
            cb(error, 'Backend/images')
        } else {
            cb(null, 'Backend/images')
        }
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});

// ***************************************

// Busisness logic : Sign up 

app.post("/allUsers/subscription", multer({ storage: storageConfig }).single('img'), (req, res) => {
    console.log(req.body);
    console.log("here BL :Signup");
    bcrypt.hash(req.body.password, 8).then((bcyrptPwd) => {
        let user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: bcyrptPwd,
            role: req.body.role,
            avatar: `http://localhost:3000/avatars/${req.file.filename}`,
        })
        user.save((error, doc) => {
            if (doc) {
                res.json({ message: "added with success" });
            } else {
                res.json({ message: "Error" });
            }
        });
    })
})

app.post("/allUsers/signin", (req, res) => {
    let user = req.body;
    let findedUser;
    console.log("here the object from the FE", user);
    User.findOne({ email: user.email }).then((doc) => {
        findedUser = doc;
        if (!doc) {
            res.json({ message: "Email Invalid" });
        }
        return bcrypt.compare(user.password, doc.password)
    }).then((pwdResult) => {
        if (!pwdResult) {
            res.json({ message: "Password Invalid" });
        } else {
            let token = jwt.sign({
                email: findedUser.email,
                userId: findedUser._id,
                userRole: findedUser.role

            },
                "Testing",
                { expiresIn: "30min" }
            );
            let usertoSend = {
                id: findedUser._id,
                firstName: findedUser.firstName,
                lastName: findedUser.lastName,
                role: findedUser.role,
                jwt: token,
                expiresIn: 1800
            };
            res.json({ message: "Welcome", user: usertoSend });


        }


    })
})
// sEARCH
app.get('/matches/search/:teamOne', (req, res) => {
    const search = req.params.teamOne;
   
    Match.find({ teamOne: search }).then((foundObjects) => {
        if (foundObjects) {
          console.log(foundObjects);
            res.status(200).json({
                match: foundObjects
            });
        } else {
            res.status(404).json({
                message: 'No matches found for the specified teamOne.'
            });
        }
    }).catch(error => {
        res.status(500).json({
            error: error.message
        });
    });
});

// Business Logic: Search Weather From API
app.get("/api/weather/:city", (req, res) => {
    console.log("Here into BL: Search weather by city", req.params.city);
    let key = "fc0c794cd9b86d6fef1e4ad48596c51a";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${key}&units=metric`;
    axios.get(apiURL).then((weatherResponse) => {
      let data = weatherResponse.data;
      console.log("Data", data);
      let description = data.weather[0].description;
      let icon = data.weather[0].icon;
      let result = {
        temperature: data.main.temp,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        icone: `https://openweathermap.org/img/wn/${icon}@4x.png`,
        description: description,
        sunrise: new Date(data.sys.sunrise * 1000),
        sunset: new Date(data.sys.sunset * 1000),
      };
      res.json({ result: result });
    }).catch((error) => {
        console.error('Error in weather request:', error);
        console.log('Detailed error response:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Error retrieving weather data.' });
      });
      
  });



// make app import from other files
module.exports = app;

