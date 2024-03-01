<div align="center">
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS_14-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="Next.js" />
  </div>

  <h3 align="center">Cytonn Evently</h3>

   <div align="center">
      A ticket booking platform for managing finance and real estate events. Check it out <a href="https://cytonn-evently.vercel.app/" target="_blank">here</a>
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Screeenshots](#screenshots)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## <a name="screenshots">🤖 Screenshots</a>

![EventsOrganized](https://github.com/IanKaire/CytonnEvently/assets/114652346/d4c877ed-12bc-4c1f-85ce-c56cedee5eee)
![UserAccount](https://github.com/IanKaire/CytonnEvently/assets/114652346/58ef1ba8-70eb-42db-a727-f7d8ca1f8fc7)
![UpdateEvent](https://github.com/IanKaire/CytonnEvently/assets/114652346/0f3762d9-2266-4b46-97c3-963f41267857)
![StripeCheckout](https://github.com/IanKaire/CytonnEvently/assets/114652346/74df9ae4-a3e6-4f14-9845-07591f10c8e6)
![SingleEvent](https://github.com/IanKaire/CytonnEvently/assets/114652346/72f1cfe8-8a9f-414b-a6cf-47420e5cfeb6)
![OrderDetails](https://github.com/IanKaire/CytonnEvently/assets/114652346/c4cb1b18-ff51-4cae-81a5-d6823e3f2542)
![MyTickets](https://github.com/IanKaire/CytonnEvently/assets/114652346/73633a1e-45c6-441c-b9b3-a74405d942cf)
![Home](https://github.com/IanKaire/CytonnEvently/assets/114652346/99b847e0-1a26-499c-87c6-02f9bb635e48)
![CreateEvent](https://github.com/IanKaire/CytonnEvently/assets/114652346/681b40d4-1c32-4334-bbea-decb09931175)
![CreateAccount](https://github.com/IanKaire/CytonnEvently/assets/114652346/6cee479b-7724-4383-97e6-1d914c09c52a)


## <a name="tech-stack">⚙️ Tech Stack</a>

- Node.js
- Next.js
- TypeScript
- TailwindCSS
- Stripe
- Zod
- React Hook Form
- Shadcn
- uploadthing

## <a name="features">🔋 Features</a>

👉 **Authentication (CRUD) with Clerk:** User management through Clerk, ensuring secure and efficient authentication.

👉 **Events (CRUD):** Comprehensive functionality for creating, reading, updating, and deleting events, giving users full control over event management.
- **Create Events:** Users can effortlessly generate new events, providing essential details such as title, date, location, and any additional information.
- **Read Events:** Seamless access to a detailed view of all events, allowing users to explore event specifics, including descriptions, schedules, and related information.
- **Update Events:** Empowering users to modify event details dynamically, ensuring that event information remains accurate and up-to-date.
- **Delete Events:** A straightforward process for removing events from the system, giving administrators the ability to manage and curate the platform effectively.
        
👉 **Related Events:** Smartly connects events that are related and displaying on the event details page, making it more engaging for users
    
👉 **Organized Events:** Efficient organization of events, ensuring a structured and user-friendly display for the audience, i.e., showing events created by the user on the user profile
    
👉 **Search & Filter:** Empowering users with a robust search and filter system, enabling them to easily find the events that match their preferences.
    
👉 **New Category:** Dynamic categorization allows for the seamless addition of new event categories, keeping your platform adaptable.
    
👉 **Checkout and Pay with Stripe:** Smooth and secure payment transactions using Stripe, enhancing user experience during the checkout process.
    
👉 **Event Orders:** Comprehensive order management system, providing a clear overview of all event-related transactions.
    
👉 **Search Orders:** Quick and efficient search functionality for orders, facilitating easy tracking and management.

and many more, including code architecture and reusability 

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/your-username/your-project.git
cd your-project
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
#NEXT
NEXT_PUBLIC_SERVER_URL=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_CLERK_WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

#MONGODB
MONGODB_URI=

#UPLOADTHING
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

#STRIPE
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

Replace the placeholder values with your actual credentials 

**Running the Project**

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
