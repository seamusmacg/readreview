# [ReadReview Book Review Application](https://read-review-project.herokuapp.com/)

!["This application was tested for responsiveness on multiple devices"](https://github.com/seamusmacg/readreview/blob/main/static/images/readreview-mockup.PNG)

---

## Table of Contents

- [Project Overview](#Project-Overview)
- [UX](#UX)
  * [Strategy](#Strategy)
    * [User Stories](#User-Stories)
  * [Scope/Features](#Scope-and-Features)
  * [Features](#Features)
  * [Structure](#Structure)
  * [Wireframes](#Wireframes)
  * [Colour](#Colour)
  * [Typography](#Typography)
- [Technologies Libraries and Frameworks](#Technologies-Libraries-and-Frameworks)
- [Resources and Tools](#Resources-and-Tools)
- [Testing](#Testing)
  * [Validation](#Validation)
  * [Manual Testing](#Manual-Testing)
- [Major Bugs](#Major-Bugs)
- [Deployment](#Deployment)
- [Credits](#Credits)

---

### Project Overview
ReadReview is a book review website. Users can register and become users where they can submit books adding to the ReadReview catalogue. They can also leave reviews for existing titles. Books can be deleted by admin or the user who submitted the book. Users can edit or delete reviews they submitted. The admin can delete or edit all reviews.


## UX 

### Strategy

#### User Stories
- As a user, I want to find books that I would like to read. 
- As a user, I would like to leave a review for a book I read. If book doesn't exist, then submit it to the catalogue.


### Scope and Features

### Features
- Home page - contains callout section which points to the catalogue which is the main feature of the site.  It also contains an About Section which explains the site
- Catalogue page - the primary functionality of the site is presented here. All the books in the catalogue are shown here including reviews submitted by users. It is on this page where users can interact with the catalogue - deleting, editing etc. 
- Profile - this page contains information about the user currently logged into the site.
- Submit Book - Here users can submit a book to the catalogue by filling out a form.
- Register - Visitors can register with the site by filling register form
- Login - Registered users can login with their credentials by filling out login form.
- Possible Future Features - Forum,  Downloadable PDF Ebooks, Rating System (Score out of ten)

### Structure 
The site is presented in a linear fashion with information presented on scrolling pages. The site is a minimum viable product which serves the basic needs of the user with a lot of room for future scaling in future releases. The site follows an intuitive design where key pieces are information are easily accessed by the user. It uses a familiar layout of navbar on top and footer on bottom that is easy to navigate and conforms to user expectations and standard practices.

### Wireframes

I used [Balsamiq](https://balsamiq.com) to create a wireframe for each event presented to the user. 

- [Home Page](https://github.com/seamusmacg/readreview/blob/main/static/images/readreview-home.png)
- [Catalogue Page](https://github.com/seamusmacg/readreview/blob/main/static/images/readreview-catalogue.png)
- [Register Page](https://github.com/seamusmacg/readreview/blob/main/static/images/readreview-register.png)
- [Login Page](https://github.com/seamusmacg/readreview/blob/main/static/images/readreview-login.png)
- [Submit Book Page](https://github.com/seamusmacg/readreview/blob/main/static/images/readreview-submit.png)
- [Profile Page](https://github.com/seamusmacg/readreview/blob/main/static/images/readreview-profile.png)

I maintained a consistent structure across the pages with many pages sharing similar features. 

### Colour 

- ![#00001](https://via.placeholder.com/15/00001/000000?text=+) `#00001`
- ![#722F37](https://via.placeholder.com/15/722F37/000000?text=+) `#722F37`
- ![#a27840](https://via.placeholder.com/15/a27840/000000?text=+) `#a27840`
- ![#8d5205](https://via.placeholder.com/15/8d5205/000000?text=+) `#8d5205`
- ![#FF0000](https://via.placeholder.com/15/FF0000/000000?text=+) `#FF0000`
- ![#008000](https://via.placeholder.com/15/008000/000000?text=+) `#008000`
- ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/000000?text=+) `#FFFFFF`

The color theme I chose was inspired by decorative books you often see in libraries. These colors are usually wine red, navy/blue, gold and silver. I used an assortment of these colors throughout the site to recreate that library look and feel.

Validation messages are displayed in the natural colours of green for success and red for errors.

### Typography

[Goudy Bookletter 1911](https://fonts.google.com/specimen/Goudy+Bookletter+1911) - used for all elements on the site.

I chose this font as I thought it matched well with the decorative book/library theme I was aiming for.

## Technologies Libraries and Frameworks

- !["HTML5 Badge"](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white) - [HTML 5](https://www.w3.org/TR/html52/)  is a markup language that was used displaying content of the site.
- !["CSS Badge"](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white) - [CSS](https://www.w3.org/standards/webdesign/htmlcss.html) is a style sheet language used for presenting/styling the content of the site . 
- !["Materialize CSS Badge"](https://img.shields.io/badge/Materialize-CSS-red) - [Materialize CSS](https://materializecss.com/getting-started.html/) Materialize CSS is a UI component library which is created with CSS, JavaScript and HTML. It is created and designed by Google. Materialize CSS is also known as Material Design. It is a design language which combines the classic principles of successful design along with innovation and technology. I used a Materialize parallax template for the base structure of site and for many of the components on the site.
- !["Javascript Badge"](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) - [Javascript](https://www.javascript.com/) is a scripting language that was used to provide interactivity to the site.
- !["Jquery"](https://img.shields.io/badge/jquery%20-%230769AD.svg?&style=for-the-badge&logo=jquery&logoColor=white) - [Jquery](https://jquery.com/) is a Javascript library that was used for HTML DOM tree traversal and manipulation on the site.
- !["Google Fonts"](https://img.shields.io/badge/-Google%20Fonts-red?logo=Google) - [Google Fonts](https://fonts.google.com/) is a library of free licensed font families that was used to import the Goudy Bookletter 1911 font.
- !["Font Awesome Badge"](https://img.shields.io/badge/Font_Awesome-5.14-339AF0?logo=font-awesome) - [Font Awesome](https://fontawesome.com/) is a font and icon toolkit that was used to generate the icons used throughout the site. 
- !["Git Badge"](https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white) - [Git](https://git-scm.com) is an open source distributed version control system that was used to track any changes made to the source code. 
- !["Github Badge"](https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white) - [Github](https://github.com/) is a platform for hosting software development and version control using Git. 
- !["Python Badge"](https://img.shields.io/badge/python-%2314354C.svg?&style=for-the-badge&logo=python&logoColor=white) - [Python](https://www.python.org/) is an interpreted high-level general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation. Python was used along with various libraries to access the database and present information to the user.
- !["Flask Badge"](https://img.shields.io/badge/flask-%23000.svg?&style=for-the-badge&logo=flask&logoColor=white) - [Flask](https://flask.palletsprojects.com/en/1.1.x/) is a micro web framework written in Python that utilizes other libraries like Werkzeug and Jinja. Used to dynamically create the HTML pages and apply logic throughout the site.
- !["MongoDB Badge"](https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white) - [MongoDB](https://www.mongodb.com/) is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB was used as the primary database for storing the sites data. 
- !["Heroku Badge"](https://img.shields.io/badge/heroku-%23430098.svg?&style=for-the-badge&logo=heroku&logoColor=white) - [Heroku](https://www.heroku.com/)  is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud. Heroku was used for deploying and hosting the site.

## Resources and Tools

- [VS Code](https://code.visualstudio.com/) - IDE used for writing and testing source code. 
- [W3C Markup Validation Service](https://validator.w3.org/) - Used for validating HTML source code. 
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) - Used for validating CSS source code.
- [Jslint](http://jslint.com/) - code quality tool used to check whether source code complies with coding rules
- [Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools) - Used to test the responsiveness of site on different screen sizes and also used for debugging and checking network activity
- [Balsamiq](https://balsamiq.com/) - Mockup application tool used to draw wireframes for the application. 
- [ami.responsivdesign.is](http://ami.responsivedesign.is) - Used to make a mockup of the application shown at the beginning of README.md file.
- [Lighthouse](https://developers.google.com/web/tools/lighthouse/) - used to test the quality and performance of the application. 

## Testing

The application was built using [VS Code](https://code.visualstudio.com). Flask was used to run the site on localhost and to conduct testing throughout the development process.

### Validation 

- I validated the HTML source code using the [HTML Validation Service](https://validator.w3.org), there was a projection attribute in a link element which has been deprecated. I removed this.
- Removed role from nav element as unnecessary.
- Removed unused quotation mark from a tag.
- The CSS passed without any errors - [CSS Validation Service](https://jigsaw.w3.org/css-validator/)

### Manual Testing 

Testing was conducted on the finished application using Flask and Chrome Developer Tools. I also tested the application on different browsers. A full report on the manual testing process that tests functionality, usability, responsiveness and performance is available [here](https://github.com/seamusmacg/readreview/blob/main/testing/TESTING.md).

## Major Bugs
- Unable to create a routes.py file in User directory. **Solution:** Delete routes.py for user and add route in main app.py
- Getting error "TypeError: Object of type 'ObjectId' is not JSON serializable" when creating a new user. **Solution:** create a JSON Encoder class
- Unable to prevent modal trigger when review form is empty. **Solution:** Create jquery to handle to click event and validate form.

## Deployment

The application was deployed through Heroku pages as follows:

1. Created a local repository on my local machine which included all the application files and directories. 
2. Initialized the repository through VS Code Source Control 
3. Created a repository on Github with same name. 
4. Staged and committed all the files with appropriate messages.
5. Manually deployed on Heroku
5. In Deploy section on Heroku, I retrieved the [live URL](https://read-review-project.herokuapp.com/).
6. To run the project on your own machine: 
    - **Step 1**: Go to the repository - https://github.com/seamusmacg/readreview 
    - **Step 2**: Click "Code" and copy URL 
    - **Step 3**: Open a terminal or CLI on your machine.
    - **Step 4**: Navigate to the directory you wish to locate the repository. 
    - **Step 5**: Type 'git clone' and then paste the URL copied from above. 
    - **Step 6**: Press **Enter** and a clone of the repository will be created. 


## Credits
- [Materialize](https://materializecss.com/getting-started.html) Parallax Template used for base site structure
- [Pexels](https://www.pexels.com/search/bookshelf/) Home page image sourced here
- [Stack Overflow Answer](https://stackoverflow.com/questions/44942347/change-the-default-color-of-materialize-css-input-fields-i-have-attached-screen) - Change colour of materialize form validation
- [Stack Overflow Answer](https://stackoverflow.com/questions/61845621/how-to-change-color-of-materialize-multiple-select-checkbox) - Change colour of materialize checkbox
- [Quabr](http://5.9.10.113/65535560/typeerror-object-of-type-objectid-is-not-json-serializable) - JSON Encoder class that converts ObjectId to string. 
- [W3schools](https://www.w3schools.com/)
- [CSS-Tricks](https://css-tricks.com/)
- [Flask User Login Tutorial](https://github.com/LukePeters/User-Login-System-Tutorial) - Used this tutorial for building login/authentication system 
- I would like to thank my mentor Adegbenga Adeye for all his guidance and help throughout this project
