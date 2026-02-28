🏦 BANK_SYSTEM_PROJECT

A secure and simple banking system built using  javascript , css, MongoDB, HTML, and node.js that allows users to create accounts, deposit, withdraw, transfer money, and manage transactions with authentication and role-based access.



🚀 Features
👤 User Authentication
  Register account

    Login / Logout

    Secure session management

💰 Banking Operations

    Deposit money

    Withdraw money

    Transfer funds between users

    Real-time balance update

  📄 Transaction History

    View all transactions

    Track deposits, withdrawals, and transfers

  🔐 Security

    Session-based authentication

    Role-based access control

    Protected routes

🛠️ Technologies Used

    Backend: node.js (js framework)

    Database: MongoDB (Local)

    Frontend: HTML, CSS, JavaScript

Database Driver: PyMongo

    📂 Project Structure
    BANK_SYSTEM_PROJECT/
    │
    ├── models
       ├── auth.js
       ├── user.js
       ├── teller.js
       ├── bankaccount.js
       ├── admin.js
       
    ├── routes/  
        ├── authoroutes.js
        ├── userroutes.js
        ├── tellerroutes.js
        ├── adminroutes.js

    ├── js/    
        ├── user.js
        ├── admin.js
        
         
    ├── public/
    │     ├── login.html
    │     ├── register.html
    │     ├── dashboard.html
          ├── transaction.html
          ├── tellerdashboard.html
          ├── admin.html
    │
    ├── static/
    │     ├── main.css
    │     
     
    └── server.js

⚙️ Installation Guide


1️⃣ Clone the Repository
git clone https://github.com/NSANGA-01/BANK_SYSTEM_PROJECT.git

cd BANK_SYSTEM_PROJECT

2️⃣ Create Virtual Environment
     python -m venv venv

Activate:

Windows:

venv\Scripts\activate

Mac/Linux:

source venv/bin/activate

3️⃣ Install Dependencies

pip install -r requirements.txt

4️⃣ Start MongoDB

mongod

5️⃣ Run the Application

python app.py

Open in browser:

http://127.0.0.1:5000

🗄️ Database Structure

Users Collection
{
  "_id": ObjectId,
  "name": "John Doe",
  "email": "john@email.com",
  "password": "hashed_password",
  "balance": 1000
}

Transactions Collection
{
  "_id": ObjectId,
  "user": "John Doe",
  "type": "deposit",
  "amount": 500,
  "date": "2026-02-28"
}

📊 Future Improvements

    Password hashing (bcrypt)

    Admin panel

    Account number system

    REST API version



👨‍💻 Author

    Developed by NGIRUWONSANGA VEDASTE
    github : github.com/NSANGA-01
    whatsap & call +250 :  796962532

📜 License

This project is for educational purposes.





    

    
