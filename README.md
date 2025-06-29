# Mindloop.ai

Mindloop.ai is a modern self-assessment platform for career development. It provides AI-powered tools for resume analysis, interview practice, quizzes, and more, helping users assess and improve their professional skills.

## Features
- **AI Career Chat:** Get personalized career advice and guidance 24/7.
- **Resume Analyzer:** Upload your resume and receive detailed feedback and ATS optimization suggestions.
- **Career Roadmap:** Generate personalized career roadmaps based on your goals and skills.
- **Mock Interviews:** Practice interviews with our AI interviewer and get real-time feedback.
- **Contest Tracker:** Track and compete in coding contests, view leaderboards, and improve your ranking.
- **Quiz:** Test your knowledge and skills with interactive quizzes tailored to your career path.

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/mindloop.ai.git
cd mindloop.ai
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Set up environment variables
Copy `.env.example` to `.env.local` and fill in the required values (API keys, database URL, Clerk keys, etc).

### 4. Run the development server
```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to use the app.

## Project Structure
- `app/` - Main Next.js app code (pages, components, API routes)
- `data/` - Static data (FAQs, features, etc)
- `components/` - Shared React components
- `public/` - Static assets (images, icons)
- `README.md` - This file

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)
