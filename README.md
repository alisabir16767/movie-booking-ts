---
# Movie Booking API

A simple backend for movie booking built with **Express, TypeScript, MongoDB, and Zod**.



---

## 🚀 Features

* Movies → create & list
* Shows → create, list, seat availability
* Bookings → create & auto-update seats
* Zod validation + error handling

---

## Requirment of project
<img width="3840" height="719" alt="Requirment phase " src="https://github.com/user-attachments/assets/8ea49ab5-4309-419a-984e-269ac3585778" />

---



## Setup

```bash
git clone <repo-url>
cd movie-booking
npm install
```

Add `.env`:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/movie-booking
```

Run:

```bash
npm run dev   # dev mode
npm run build && npm start   # production
```

---

## API

* `POST /api/movies` → create movie
* `GET /api/movies` → list movies
* `POST /api/shows` → create show
* `GET /api/shows` → list shows
* `POST /api/bookings` → book seats

---

