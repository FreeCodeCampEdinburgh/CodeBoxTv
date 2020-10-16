# CodeBoxTv
Advanced Project for fun to allow FCCEdinburgh members to learn more about sockets and make a game similar to Jackbox together!


## Technologies:
NodeJs & React. Postgres database will also be included -> Best to go down SQL route for now.
## Learning Objectives:
React, Node
Sockets
Responsive Design
Touch input on mobile
Drawing to a canvas
How to host & deploy applications
## Where to host:
Netlify / locally on Raspberry Pi - Open to suggestions
Basic DB Design
Users - User’s details (Mostly just attaching to session & giving it a name, maybe info about the socket too).
Session - Tracks active sessions
Game -Types of games, details about them
Questions - Questions we want to display on the screen.
## General Concept:
First user navigate to website, they will be met with options to either start a new game or input a code.
User will start a game. They will be asked for a name.
Once a name is given, they will be given a 6-character code to share with friends.
Other players will also go to the site, give the code and then be prompted for a name.
Once a name is given they will be on stand-by until the host starts the game.The host will be shown how many people are in the lobby (Maximum of {MAX_USERS})
Once the host starts the game, we shift to the proper game phase.
## Flow of game:
Question is given, players will be prompted with an input box with the question and be asked to give an answer (Something funny).
Once they enter the answer and press Submit, we wait for everyone to put in their answers (Or wait for the timer to expire).
Once this happens, all answers will be displayed. Users will then be given another timer to then choose the best answer
Winner gets a point. First to 5 wins
