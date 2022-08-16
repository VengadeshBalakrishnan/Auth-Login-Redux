### Mongo DB Createion
Install Mongo DB
Create database 
Copy the URL and pass to the .env configuration...

### Environment Variables
```
NODE_ENV = development
PORT = 5000
MONGO_URI = 'mongodb://localhost:27017/login-auth'
JWT_SECRET = "login-auth-secre"
```

### Install Dependencies
Backend & Frontend
```
  npm install
  cd frontend
  npm install
```

### Available Scripts
```bash
  # Both frontend (:3000) & backend (:5000)
  npm run dev

  # Backend
  npm run server

  # Frontend
  npm run client
```