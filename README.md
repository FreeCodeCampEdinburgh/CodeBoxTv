# CodeBoxTv
Advanced Project for fun to allow FCCEdinburgh members to learn more about sockets and make a game similar to Jackbox together!

## Technologies
* **Front-end**: React & CSS Modules
* **Back-end**: NodeJS, ExpressJS and SocketIO for websockets. 

### Hosting
We have decided for now to host on Netlify for the Front-end and use Heroku for the back-end. 

## Learning Objectives:
We look to create this project as a learning process and to bring many developers from Edinburgh & the surrounding area to contribute to a fun and open project!

**The learning opportunities include:**
* NodeJS with ExpressJS
* Web Sockets (Through SocketIO)
* Responsive Design through tablet, mobile & Desktop 
* Touch input on mobile
* Drawing to a canvas and animations
* How to host & deploy applications

## General Concept
First user navigate to website, they will be met with options to either start a new game or input a code.
User will start a game. They will be asked for a name.
Once a name is given, they will be given a 6-character code to share with friends.
Other players will also go to the site, give the code and then be prompted for a name.
Once a name is given they will be on stand-by until the host starts the game.The host will be shown how many people are in the lobby (Maximum of {MAX_USERS})
Once the host starts the game, we shift to the proper game phase.
## Flow of game
Question is given, players will be prompted with an input box with the question and be asked to give an answer (Something funny).
Once they enter the answer and press Submit, we wait for everyone to put in their answers (Or wait for the timer to expire).
Once this happens, all answers will be displayed. Users will then be given another timer to then choose the best answer
Winner gets a point. First to 5 wins

## Contributing
This project is completely open to anyone that is currently within the FreeCodeCampEdinburgh organisation as a temporary measure while HacktoberFest is still ongoing (As this comes with many spam-PRs). Please read through this contributing guide before creating any issues or picking up any work.

If you find any bugs or want to suggest new features or enhancements, please open an Issue! 

### Branch Convention
For our branches, we are currently using GitFlow: https://datasift.github.io/gitflow/IntroducingGitFlow.html
**Examples**: 
* New features should be: `feature/{issue-number}_issue-description`
* Bug Fixes should be: `bugfix/{issue-numer}_issue-description`

### New Features / Bug Fixes
Please ensure that your Pull Requests are fully detailed and tagged to the correct issue and describe what you are trying to change/fix. 
We would appreciate it if you make your code readable, maintainable and most importantly open for critique. 
Most of the people working on this project will be experienced developers. 
However we also would like less experienced people to get involved with creating new features and fixing bugs.

### Our Standards
We believe in an inclusive & free-form working environment that allows people to develop as they enjoy contributing to a fun project.
Generally, just be kind to others and help them along in their development journey.

**Some examples of behaviour we encourage**: 
Using welcoming and inclusive language
Being respectful of differing viewpoints and experiences
Gracefully accepting constructive criticism
Showing empathy towards others
Examples of unacceptable behavior by participants include: