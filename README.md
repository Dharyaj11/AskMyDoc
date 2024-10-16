# AskMyDoc: Gen-AI-Powered PDF Assistant

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)  
[![Next.js](https://img.shields.io/badge/Next.js-Framework-blue)](https://nextjs.org/)  
[![LangChain](https://img.shields.io/badge/LangChain-AI%20powered-brightgreen)](https://langchain.com/)

**AskMyDoc** is an intelligent, Gen-AI-powered PDF assistant that helps users interact with their documents by uploading PDFs and asking contextual questions. The app utilizes cutting-edge Large Language Models (LLMs) from OpenAI and Gemini, with Pinecone as a vector database, to deliver fast, accurate answers. It also offers a premium plan for extended functionality via Stripe payments.

## 🚀 Features

- **AI-Powered PDF Assistant**: Chat with your PDFs using AI to extract information and get answers to your queries.
- **Dual LLM Support**: Integrates OpenAI and Google’s Gemini API for enhanced conversational capabilities.
- **Vector Database**: Uses Pinecone for high-speed, scalable, and efficient document searching and indexing.
- **Pro Plan**: Stripe-based payment integration for users who want to upgrade for advanced features.
- **Secure Authentication**: Firebase and ClerkApi for user authentication with multi-factor authentication (OTP).
- **Responsive UI**: Modern, responsive design built with Next.js, Tailwind, and daisyUI for seamless user experience.
  
## 🛠️ Technologies Used

- **Frontend**: [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [daisyUI](https://daisyui.com/)
- **Backend**: [Node.js](https://nodejs.org/), [Firebase](https://firebase.google.com/), [ClerkApi](https://clerk.dev/)
- **AI Integration**: [OpenAI API](https://openai.com/), [Gemini API](https://ai.google.com/gemini), [LangChain](https://langchain.com/)
- **Database**: [Pinecone](https://www.pinecone.io/)
- **Payments**: [Stripe](https://stripe.com/)
- **Version Control**: [Git](https://git-scm.com/)
- **Deployment**: Vercel (for hosting)

## 📸 Screenshots

![AskMyDoc Screenshot 1](./screenshots/screenshot1.png)
![AskMyDoc Screenshot 2](./screenshots/screenshot2.png)

## 📝 Getting Started

Follow the instructions below to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites

Before running the project, ensure you have the following installed:

- Node.js (v16 or higher)
- Firebase account (for authentication)
- OpenAI and Gemini API keys
- Pinecone API key (for vector database)
- Stripe account (for payments)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/askmydoc.git
   cd askmydoc
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:  
   Create a `.env.local` file in the root directory and add the following:

   ```env
   NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
   NEXT_PUBLIC_PINECONE_API_KEY=your_pinecone_api_key
   NEXT_PUBLIC_STRIPE_API_KEY=your_stripe_api_key
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_CLERK_API_KEY=your_clerk_api_key
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000) to view the app.

### Deployment

To deploy the project on [Vercel](https://vercel.com/), follow these steps:

1. Push your project to a GitHub repository.
2. Connect your repository to Vercel.
3. Add your environment variables in the Vercel dashboard.
4. Deploy the app with a single click.

## 💡 How It Works

1. **User uploads a PDF**: Users can upload their PDF documents to the application.
2. **AI Query Processing**: The system uses LangChain with OpenAI and Gemini APIs to extract information from the PDF, split it into chunks, and create vector embeddings with Pinecone.
3. **Answer Questions**: Users can ask questions, and the AI will provide accurate, document-specific answers using the indexed PDF data.
4. **Pro Plan**: Users can upgrade to the Pro plan through Stripe to enjoy enhanced features such as processing larger files and priority support.

## ⚙️ Future Improvements

- **Multilingual Support**: Support for more languages beyond English.
- **More File Types**: Extend beyond PDFs to support Word, Excel, and PowerPoint.
- **Mobile App**: Build a companion mobile app for iOS and Android.

## 🧑‍💻 Author

- **Dharya Jasuja**  
