
# 🧠 SpeakToCrack – Practice. Speak. Crack it.

SpeakToCrack is an AI-driven mock interview platform designed to help users prepare for real-world job interviews. It enables users to practice speaking, receive structured feedback, and track their improvement over time. Powered by cutting-edge AI and real-time voice communication, SpeakToCrack simulates interview scenarios and provides personalized insights to boost confidence and performance.



<p align="center">
  <img src="https://raw.githubusercontent.com/Godse-07/SpeakToCrack/refs/heads/master/public/SpeakToCrack.jpg" width="300" height="auto" />
</p>


## Authors

- [@Godse-07](https://github.com/Godse-07)

## 🚀 Features

- 🎙️ **Mock Interview Generation**  
  Generate interview questions tailored to your selected topics, job roles, and difficulty levels.

- 💬 **Real-time Voice Interaction**  
  Communicate using voice with the AI interviewer for a realistic interview experience.

- 🧠 **AI-Powered Feedback**  
  Receive structured, personalized feedback including:
  - Score out of 100
  - Strengths
  - Areas for improvement
  - Final assessment

- 🗂️ **Interview Tracking**  
  Automatically store and review past interview sessions to monitor your growth over time.

- 🛠️ **Tech Stack**  
  Built with:
  - Next.js (Frontend)
  - Firebase (Authentication, Database, Hosting)
  - Vapi SDK (Voice Communication)
  - Gemini AI (@ai-sdk/google) for feedback analysis

- 🔐 **Secure & Private**  
  User data is securely stored and never shared. Your practice stays yours.

- 🌐 **Responsive Design**  
  Fully responsive UI/UX that works smoothly across desktops, tablets, and mobile devices.

## Screenshots

1
2
# Run Locally

## 🛠️ Run Locally

Follow the steps below to set up and run the project on your local machine.

### 🔁 Clone the Repository
```bash
git clone https://github.com/Godse-07/SpeakToCrack
```

### 📂 Navigate to the Project Directory
```bash
cd SpeakToCrack
```

### 📦 Install Dependencies
Make sure you have Node.js installed.
```bash
npm install
```

### 🚀 Start the Development Server
```bash
npm run start
```

Open your browser and visit http://localhost:3000 to view the app.



## 🔐 Environment Variables

Create a `.env` file in the root of your project and add the following environment variables:

```env
# Firebase Admin SDK
FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=

# Google Generative AI
GOOGLE_GENERATIVE_AI_API_KEY=

# Firebase Client Config (Frontend)
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=

# Vapi (Voice API) Configuration
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=

```
## 🧰 Tech Stack

**Client:** Next.js, TypeScript, Tailwind CSS, Zod
**Database & Authentication:** Firebase  
**Voice Interaction:** Vapi SDK
