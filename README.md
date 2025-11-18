# Seekho – AI-Based Learning Platform (LMS)

## 1. Project Title

Seekho	– AI-Based	Learning	Platform	(LMS)

## 2. Problem Statement

Existing	LMS	platforms	offer	limited	interactivity	and	personalization.	Students	often	
struggle	to	find	relevant	courses,	track	learning	progress,	or	receive	adaptive	feedback.	
Instructors	also	face	challenges	in	managing	large	datasets	and	tracking	performance	
efficiently.

Seekho	solves	this	by	integrating	AI-powered	personalization,	search	and	filtering	
capabilities,	complete	CRUD	operations,	and	smart	analytics,	creating	a	dynamic	and	
scalable	learning	experience.

## 3. System Architecture

Architecture	Overview:
Frontend	(React.js	+	React	Router)
↓
Backend	(Node.js	+	Express	API)
↓
Database	(MongoDB	Atlas)
↓
AI	Services	(Gemini	/	OpenAI	APIs)

Workflow:

- Frontend	interacts	with	REST	APIs	for	CRUD	operations	and	dynamic	data	fetching.
- Backend	handles	authentication,	role-based	access,	AI	integrations,	and	complex	queries	
(searching,	sorting,	filtering,	pagination).
- MongoDB	stores	structured	data	(users,	courses,	progress,	quizzes).
- AI	APIs	enhance	learning	through	quiz	generation,	content	summarization,	and	chatbot	
support.

Hosting:

- Frontend:	Vercel
- Backend:	Render	/	Railway
- Database:	MongoDB	Atlas

## 4. Key Features

- Authentication	&	Authorization:	Secure	JWT	authentication,	Role-based	access	(Admin,	
    Instructor,	Student),	Google	OAuth


- CRUD	Operations:	Full	Create,	Read,	Update	(PUT),	Delete	operations	for	Courses,	
    Lessons,	and	Users
- Dynamic	Data	Handling:	Searching,	Sorting,	Filtering,	and	Pagination	for	courses	and	
    user	data
- AI	Integration:	AI	Chatbot	(Ask-AI),	AI	quiz	generation,	AI-powered	course	
    recommendations,	AI	summarization
- Profile	Management:	Users	can	update	their	profile	including	name,	email	(optional),	
    avatar,	and	preference	settings
- Frontend	Routing:	Pages:	Home,	Courses,	Course	Details,	Dashboard,	Ask-AI,	Profile,	
    Login,	Signup
- Progress	Tracking:	User	progress	visualization	and	analytics
- Responsive	UI:	Fully	responsive	design	with	React	+	TailwindCSS
- Hosting	&	Deployment:	Full-stack	deployment	(Frontend	+	Backend	+	DB)	with	live	
    accessible	URLs

## 5. Tech Stack

- Frontend:	React.js,	React	Router,	Axios,	TailwindCSS
- Backend:	Node.js,	Express.js
- Database:	MongoDB	(MongoDB	Atlas)
- Authentication:	JWT	+	Google	OAuth
- AI	Integration:	Gemini	API	/	OpenAI	API
- Hosting:	Frontend	– Vercel,	Backend	– Render	/	Railway,	Database	– MongoDB	Atlas

## 6. API Overview

Endpoint Method Description Access

/api/auth/signup POST Register	new	user Public

/api/auth/login POST Authenticate	user	
and	return	JWT	
token

```
Public
```
/api/auth/update-profile PUT Update	user	profile	
details

```
Authenticated
```
/api/courses GET Fetch	all	courses	
(search,	sort,	filter,	
pagination	
supported)

```
Authenticated
```
/api/courses/:id GET Fetch	detailed	
course	info

```
Authenticated
```
/api/courses POST Create	new	course	 Admin/Instructor


```
(Admin/Instructor)
```
/api/courses/:id PUT Update	course	
details

```
Admin/Instructor
```
/api/courses/:id DELETE Delete	a	course Admin	only

/api/ai/chat POST AI	chatbot	– Ask-AI	
feature

```
Authenticated
```
/api/ai/generateQuiz POST Generate	quiz	from	
topic/content

```
Authenticated
```
/api/ai/recommendCourses GET Suggest	courses	
using	AI	
personalization

```
Authenticated
```
/api/users GET Admin:	List	users	
with	search,	filter,	
pagination

```
Admin	only
```
## 7. Enhanced AI Integration Scope

- AI	Chatbot	(Ask-AI)	for	instant	learning	assistance.
- AI	quiz	generation	using	user-selected	topics.
- AI	course	recommendations	tailored	to	user	strengths	and	progress.
- AI	summary	engine	for	summarizing	long	text/video	lessons.

## 8. Future Enhancements

- Instructor	analytics	dashboard	with	AI	insights.
- Real-time	discussion	forum	with	sentiment	analysis.
- Gamification:	badges,	streaks,	certificates.
- AI	grading	system	for	automatic	assignment	evaluation.

## 9. Outcome

A	dynamic,	scalable,	and	AI-powered	LMS	with	complete	CRUD	APIs,	advanced	query	
features	(searching,	sorting,	filtering,	pagination),	profile	update	functionality,	JWT-based	
authentication,	and	React	routing	— designed	to	deliver	personalized	learning	and	efficient	
course	management.


