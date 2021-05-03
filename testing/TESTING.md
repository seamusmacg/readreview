# Manual Testing 

## Functionality 

###  Links and Buttons

| Component | Intended Function | Works as Intended? | Fix |
| -------------- | ------------------- | ---------------- | --- |
|**See Catalogue Link** | Take user to Catalogue page | Yes | N/A |
|**Home Link** | Take user to the home page | Yes | N/A |
|**Facebook Icon Link** | Take user to Facebook page in new tab | Yes | N/A |
|**Twitter Icon Link** | Take user to Twitter page in new tab | Yes | N/A |
|**Instagram Icon Link** | Take user to Instagram page in new tab | Yes | N/A |
|**Linkedin Icon Link** | Take user to Linkedin page in new tab | Yes | N/A |
|**Authors Link** | Link doesn't go anywhere | Yes | N/A |
|**Advertise Link** | Link doesn't go anywhere | Yes | N/A |
|**Careers Link** | Link doesn't go anywhere | Yes | N/A |
|**Catalogue Link** | Take user to Catalogue page| Yes | N/A |
|**Login Link** | Take user to Login page| Yes | N/A |
|**Login Link(Register Page)** | Take user to Login page| Yes | N/A |
|**Register Link** | Take user to Register page| Yes | N/A |
|**Register Link(Login Page)** | Take user to Register page| Yes | N/A |
|**Search Button** | Return book from searched string or display validation error if empty or less than 3 characters | Yes | N/A |
|**Reset Button** | Reset search form | Yes | N/A |
|**Login Link(Catalogue page)** | Take user to Login page | Yes | N/A |
|**Register Link(Catalogue page)** | Take user to Register page | Yes | N/A |
|**Amazon Link(Catalogue page)** | Take user to Amazon with results for that book | Yes | N/A |
|**Delete Book Link(Catalogue page)** | Delete book from DB return success message in a modal | Yes | N/A |
|**Delete Review Link(Catalogue page)** | Delete review from DB return success message in a modal | Yes | N/A |
|**Edit Review Link(Catalogue page)** | Show review as form in a modal | Yes | N/A |
|**Thumbs Up Radio Button** | Checks on click  | Yes | N/A |
|**Thumbs Down Radio Button** | Checks on click  | Yes | N/A |
|**Submit Review Button (Outside Modal)** | Validate form, trigger modal if validated  | Yes | N/A |
|**Submit Review Button (Inside Modal)** | Send form - show error/success message  | Yes | N/A |
|**Cancel Link (Inside Modal)** | Close modal | Yes | N/A |
|**Submit Book** | Validate form, send form - show error/success message  | Yes | N/A |
|**Logout Button ( Profile Page)** | Log user out | Yes | N/A |
|**Show Password Checkbox** | Toggle password | Yes | N/A |


### Hover/Focus/Click Effects 

| Component | Intended Function | Works as Intended? | Fix |
| -------------- | ------------------- | ---------------- | --- |
| **Links in Navbar** | Apply light grey background color on hover | Yes | N/A |
| **See Catalogue** | Trigger tooltip on hover | Yes | N/A |
| **Footer Links** | Apply gold background color on hover | Yes | N/A |
| **Reset Button** | Apply navy text color on hover | Yes | N/A |
| **Collapsible Links**| Apply gold background color on hover | Yes | N/A |
| **Register Link**| Apply navy background color on hover | Yes | N/A |
| **Login Link**| Apply navy background color on hover | Yes | N/A |
| **All Form Inputs** | Apply navy color on focus | Yes | N/A |
| **All Form Inputs** | Apply red/green on focus form validation | Yes | N/A |
| **Show Password Checkbox** | Display gold tick | Yes | N/A |


## Usability 

Usability tests were carried out based on user stories as outlined in the README.md file. 

### User Story #1

>- As a user, I want to find books that I would like to read. 

The user is presented with a link to the catalogue immediately on landing on the home page. 

Callout Section: 

!["Callout Section with link to catalogue"](https://github.com/seamusmacg/readreview/blob/main/static/images/callout.PNG)

Catalogue Section: 

!["List of books shown to user"](https://github.com/seamusmacg/readreview/blob/main/static/images/catalogue.PNG)


### User Story #2

>As a user, I would like to leave a review for a book I read. If book doesn't exist, then submit it to the catalogue.

The user is presented with a review section for each book in the catalogue. Every book has a review form where a user can submit a review.

Review Section: 

!["Book review section"](https://github.com/seamusmacg/readreview/blob/main/static/images/review.PNG)

User can submit book if not in the catalogue

Book Submit Section:

!["Submit book section"](https://github.com/seamusmacg/readreview/blob/main/static/images/submit.PNG)


## Responsiveness

The application was tested for responsiveness on multiple devices and browser using Developer Tools. Media queries and Materialize CSS  were used to keep the device responsive across different devices.

| Component | Intended Result | Works as intended? | Fix |
| --------- | --------------- | ------------------ | --- |
| Text | Should be readable and clear for each screen size | Yes | N/A |
| Icons | Maintain ratio at smaller sizes and not be stretched/distorted | Yes | N/A |
| Layout | Sections should be structured properly with proper spacing between features | Yes | N/A |
| Functionality | Buttons should work across screen sizes | Yes | N/A |

## Performance Testing 

I ran the [Lighthouse](https://developers.google.com/web/tools/lighthouse/) testing tool to check the quality and performance of the site pages. The site received good ratings in performance ranging from 94 - 97. 

Example Report for Submit Book Page:
!["Lighthouse Report"](https://github.com/seamusmacg/readreview/blob/main/static/images/lighthouse.PNG)

## Heroku

All the same tests applied in the local environment were also successfully applied on the hosted site (Heroku) without any problems.







