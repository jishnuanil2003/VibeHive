# 🌴 VibeHive Resort Booking Web App

## 🏖️ Project Overview
**VibeHive** is a full-stack resort booking web application built to simplify the process of finding and booking resorts online.  
It provides users with an intuitive interface to select locations, choose check-in/check-out dates, and confirm bookings instantly.

The project aims to demonstrate full-stack integration between a modern frontend and a RESTful Django backend.

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios for API integration

### Backend
- Django REST Framework
- CORS Headers
- JWT Authentication (Simple JWT)
- SQLite (for local demo)
> ⚠️ *PostgreSQL was planned but not implemented due to setup constraints.*

---

## 🚀 Features Implemented
✅ Resort booking form with fields: location, check-in, check-out, name, email, phone, people count  
✅ Real-time API integration with Django backend  
✅ RESTful CRUD operations using Django REST Framework  
✅ CORS support for local frontend-backend communication  
✅ Email notification setup using Gmail SMTP  
✅ JWT-based authentication ready for secure routes  
✅ Responsive dark UI with glassmorphism design

---

## 📈 Future Improvements
If more time were available, the project could be enhanced with:
- Migration from SQLite → PostgreSQL for better scalability
- Online payment gateway integration
- Admin dashboard for booking management
- Cloud deployment (Render / Railway / Vercel)
- Analytics dashboard for booking insights

---

## 🔗 GitHub Repository
You can explore the full source code here:  
👉 [VibeHive GitHub Repo](https://github.com/jishnuanil2003/VibeHive.git)

---

## 🧑‍💻 Author
**Jishnu A**  
MCA Student | Full-Stack Developer | Aspiring ML Engineer  
📧 aniljishnu07@gmail.com  
🌐 [Portfolio Coming Soon]

---

## 🏁 How to Run Locally

### Backend (Django)
```bash
cd Backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
