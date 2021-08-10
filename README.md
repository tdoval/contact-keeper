# Contact Keeper API

This is a Node/Express/MongoDB REST API for contacts that uses JWT authentication. All contact endpoints are protected and each registered user has their own contacts. It is the API ONLY. The fullstack app can be found [Here](https://github.com/tdoval/contact-keeper "Full stack project")

---

## Getting Started
```sh
 Open the config/default.json file and add your mongoURI and your jwtSecret
```
```sh
  npm install
  npm run server # Runs on http://localhost:5000
```
## API Usage & Endpoints

### Register a User [POST /api/users]
- Request: Add user and request JSON web token
    - Headers
    ```sh
         Content-type: application/json
    ```
    - Body
    ```sh
            {
              "name": "",
              "email": "",
              "password": ""
            }
    ```
- Response: 200 (application/json)
    - Body
    ```sh
           {
            "token": ""
          }
    ```
### Login with a User [POST /api/auth]
- Request: Login with credentials to recieve a JSON web toke
    - Headers
    ```sh
         Content-type: application/json
    ```
    - Body
    ```sh
            {
              "email": "",
              "password": ""
            }
    ```
- Response: 200 (application/json)
    - Body
    ```sh
           {
            "token": ""
          }
    ```

### Get Contacts [GET /api/contacts]
- Request: Get all contacts of a specific user
    - Headers
    ```sh
            x-auth-token: YOURJWT
    ```
    - Body
    ```sh
          {
            "contacts": []
          }
    ```
- Response: 200 (application/json)
    - Body
    ```sh
           {
            "token": ""
          }
    ```
    
### Add New Contact [POST /api/contacts]
- Request: Add a new contact
    - Headers
    ```sh
           x-auth-token: YOURJWT
            Content-type: application/json
    ```
    - Body
    ```sh
            {
              "name": "",
              "email": "",
              "phone": "",
              "type": "" [personal or professional]
            }
    ```
- Response: 200 (application/json)
    - Body
    ```sh
          {
            "contact": {}
          }
    ```

### Update Contact [PUT /api/contacts/:id]
- Request: Update existing contact
    -   Parameters
    ```sh
           id: 1 (number) - An unique identifier of the contact.
    ```
    - Headers
    ```sh
        x-auth-token: YOURJWT
        Content-type: application/json
    ```
    - Body
    ```sh
        {
          "name": "",
          "email": "",
          "phone": "",
          "type": "" [personal or professional]
        }
    ```
- Response: 200 (application/json)
    - Body
    ```sh
          {
            "contact": {}
          }
    ```
### Delete Contact [DELETE /api/contacts/:id]
- Request: Delete existing contact
    -   Parameters
    ```sh
           id: 1 (number) - An unique identifier of the contact.
    ```
    - Headers
    ```sh
        x-auth-token: YOURJWT
    ```
    - Body
    ```sh
        {
          "name": "",
          "email": "",
          "phone": "",
          "type": "" [personal or professional]
        }
    ```
- Response: 200 (application/json)
    - Body
    ```sh
          {
            "msg": "Contact removed"
          }
    ```
"# contact-keeper" 
