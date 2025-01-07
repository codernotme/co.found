# **Co.Found**  
An innovative platform designed to connect visionary founders with talented developers, enabling seamless collaboration on groundbreaking startup ideas.  

---

## **About Co.Found**  

**Co.Found** is an online platform built to bridge the gap between founders and developers. Our mission is to empower entrepreneurs by making it easy to find technical co-founders who share their passion and vision.  

### **Key Features**  
1. **Profile Creation**:  
   - Founders can create profiles showcasing their startup ideas, vision, and the roles they need.  
   - Developers can create profiles that highlight their skills, experiences, and portfolios.  

2. **Application Process**:  
   - Developers can browse startup profiles and apply to those that resonate with them.  
   - Founders receive applications that include the developer’s skills and expectations.  

3. **Matching System**:  
   - Founders are notified of new applications and can review them to accept or reject.  

4. **Direct Communication**:  
   - Post-acceptance, founders gain access to developers’ WhatsApp numbers for quick collaboration.  

---

## **Technology Stack**  

- **Frontend**: [Next.js](https://nextjs.org/) for server-side rendering and optimized performance.  
- **UI Framework**: [Shadcn](https://shadcn.dev/) for modern and responsive UI components.  
- **Authentication**: [Clerk](https://clerk.dev/) for secure and robust user authentication.  
- **Backend**: [Convex](https://convex.dev/) for real-time data handling and serverless functionality.  

---

## **Getting Started**  

### **Prerequisites**  

Ensure you have the following installed on your system:  
- [Node.js](https://nodejs.org/) (v16+ recommended)  
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) package manager  
- [Git](https://git-scm.com/)  

---

### **Setup Instructions**  

1. **Clone the repository**:  
   ```bash  
   git clone https://github.com/codernotme/co.found.git  
   cd co.found
   ```  

2. **Install dependencies**:  
   ```bash  
   npm install  
   # or  
   yarn install  
   ```  

3. **Setup environment variables**:  
   Create a `.env.local` file in the root directory and add the following:  

   ```env  
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<Your clerk publishable key>
    CLERK_SECRET_KEY=<your clerk secret key>

    # Deployment used by `npx convex dev`
    CONVEX_DEPLOYMENT=<your convex deployment key>
    NEXT_PUBLIC_CONVEX_URL=<your convex public url>
   ```  

   Replace placeholders with your actual API keys.  

4. **Run the development server**:  
   ```bash  
   npm run dev  
   # or  
   yarn dev  
   ```  

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.  

---

## **Folder Structure**  

```plaintext  
co.found/  
├── components/       # Reusable UI components  
├── app/              # Next.js app (e.g., home, dashboard, profiles)  
├── public/           # Static assets (images, icons, etc.)  
├── styles/           # Global and component-specific styles  
├── utils/            # Helper functions and utilities  
├── .env.local        # Environment variables  
├── package.json      # Dependencies and scripts  
└── README.md         # Project documentation  
```  

---

## **Available Scripts**  

- **`npm run dev`**: Starts the development server.  
- **`npm run build`**: Builds the production-ready application.  
- **`npm run start`**: Starts the production server.  
- **`npm run lint`**: Runs ESLint to check for code issues.  

---

## **Contributing**  

We welcome contributions to enhance **Co.Found**! Please follow these steps:  

1. Fork the repository.  
2. Create a new branch: `git checkout -b feature-name`.  
3. Commit your changes: `git commit -m "Add feature description"`.  
4. Push to your branch: `git push origin feature-name`.  
5. Submit a pull request.  

---

## **License**  

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.  

---

Enjoy building with **Co.Found**! 🚀