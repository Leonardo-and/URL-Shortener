# URL Shortener

## Description
This link shortener can shorten, expand and get all stored URLs

### Routes
- **GET** `/` : Get all URLs stored in the database;
- **GET** `/:id` : Uses the URL id to return the original (expanded) URL ;
- **POST** `/short` : Shortens the URL sent with the request and returns the ID of the shortened URL;

## Technologies
- Node.js
- ExpressJS
## How to use
- Open Insomnia or Postman or you can use in browser with fetch or Axios;
	### Short:
	 **POST** `/short` |  In the body of the request, it's necessary to send a JSON object that contains the key "url", whose value must be the URL that you want to be shortened.
	E.g.: `{ "url":"www.youtube.com" }`
	### Expand:
	 **GET** `/:id` | In the request, it's necessary to include the "id" parameter in the URL to identify the shortened URL. 
	 E.g.: `http://localhost:3000/theId` 
	 Replace "theId" with the id of the shortened link.
	 ### Get all:
	 **GET** `/` | Return all stored URLs.

**Note:** All requests above should return something like this:

    {
    	"status": 200,
    	"error": false,
    	"data": {
    		"original_url": "https://google.com",
    		"decoded_url_id": "un0NM"
    	},
    	"message": "URL unshortened successfully"
    }

## How to run the project
- Clone the repository
- Open on a terminal
- `npm install` Install the "node_modules" and dependencies;
- `npm run start` Start the API