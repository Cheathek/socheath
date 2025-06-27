# Vue 3 + Vite Portfolio Contact Project

## Requirements

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- Telegram Bot Token and Chat ID (set in a `.env` file)
- **assets** folder (not included in this repository, see below)
- **public** folder for your CV (see below)

## Assets Folder Structure

You must create an `assets` folder in the `src` directory with the following structure:

```
src/assets/
├── company/         # Contains images for company projects
├── school/          # Contains images for school projects
├── profile.jpg      # Your profile image
├── 404.png          # Image for 404 error page
└── home-bg.jpg      # Background image for the home page
```

- Place your **company project images** inside `src/assets/company/`
- Place your **school project images** inside `src/assets/school/`
- Add your **profile image** as `profile.jpg`
- Add a **404 error image** as `404.png`
- Add a **background image** for the home page as `home-bg.jpg`

> **Note:** The `assets` folder and its contents are required for the project to work but are not included in this repository. Please add your own images as described above.

## Public Folder for CV

You must create a `public` folder in the project root and place your CV as a PDF file inside it. For example:

```
public/
└── cv.pdf    # Your CV in PDF format
```

> **Note:** The `public` folder and your CV are required if you want to provide a downloadable CV link, but are not included in this repository.

## Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Create a `.env` file in the project root with the following:**
   ```
   VITE_TELEGRAM_BOT_TOKEN=your_bot_token_here
   VITE_TELEGRAM_CHAT_ID=your_chat_id_here
   ```

4. **Run the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser at** [http://localhost:4000](http://localhost:4000) (or the port shown in your terminal).

## Features

- Contact form that sends messages to your Telegram via a bot
- Responsive design using Bootstrap
- Vue 3 + Vite for fast development

## License

MIT
