export default {
  app: {
    projects: [
      {
        id: 1,
        title: "Grand City Mall",
        description: "Designed a responsive mall-themed website as my first front-end project. Features include a store directory, promotional updates, and a membership form with JavaScript validation. Built with HTML, CSS, and JavaScript.",
        longDescription: `<p>The Grand City Mall website was my first front-end project, designed to provide users with a seamless way to explore mall information and store directories. The website is fully responsive, ensuring a great experience across all devices.</p>
        <h3>Key Features:</h3>
        <ul>
          <li><strong>Store Directory</strong>: Users can browse a list of stores in the mall, complete with search and filter functionality (front-end only, non-interactive).</li>
          <li><strong>Promotional Updates</strong>: A dedicated section highlights ongoing sales, new store openings, and upcoming events in the mall.</li>
          <li><strong>Membership Form</strong>: Includes a user-friendly form for signing up for a mall membership, with JavaScript-powered validation to ensure accurate input and display error messages when needed.</li>
        </ul>
        <h3>Technologies Used:</h3>
        <ul>
          <li><strong>HTML</strong>: Structured the content and layout of the website.</li>
          <li><strong>CSS</strong>: Styled the website to ensure a clean and modern design, with a focus on responsiveness.</li>
          <li><strong>JavaScript</strong>: Implemented form validation and interactive elements to enhance user experience.</li>
        </ul>
        <p>This project was a great introduction to front-end development, teaching me the fundamentals of responsive design, user interface development, and basic JavaScript functionality.</p>`,
        logo: 'grand-city-mall-logo.png',
        images: [
          'grand-city-mall-1.png',
          'grand-city-mall-2.png',
          'grand-city-mall-3.png'
        ],
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/JstnAngrendo/GrandCityMall",
      },
      {
        id: 2,
        title: "FilmMax",
        description: `FilmMax is a Laravel-based web application that provides comprehensive information about movies and TV shows using the TMDb API. Users can explore movie details, watch trailers, read synopses, view ratings, reviews, cast information, and genres.`,
        longDescription: `
          <p>FilmMax is a dynamic web application designed to provide users with comprehensive information about movies and TV shows, powered by the TMDb API. Built using the <strong>Laravel framework</strong>, FilmMax leverages the <strong>MVC (Model-View-Controller)</strong> architecture to ensure a clean, organized, and maintainable codebase.</p>
          <h3>Key Features:</h3>
          <ul>
            <li><strong>Movie and TV Show Details</strong>: Users can explore detailed information about movies and TV shows, including trailers, synopses, ratings, reviews, cast information, and genres.</li>
            <li><strong>User Reviews</strong>: Registered users can leave reviews for movies, sharing their thoughts and opinions with the community.</li>
            <li><strong>Wishlist</strong>: Users can save their favorite movies to a wishlist for easy access later.</li>
            <li><strong>Search and Filter</strong>: The application allows users to search for movies and TV shows and filter results by genre, rating, and more.</li>
          </ul>
          <h3>Technologies Used:</h3>
          <ul>
            <li><strong>Laravel (PHP)</strong>: The backend is built using Laravel, a powerful PHP framework known for its elegant syntax and robust features. Laravel's MVC architecture ensures a clear separation of concerns, making the codebase modular and easy to maintain.</li>
            <li><strong>TMDb API</strong>: The application integrates with the TMDb API to fetch real-time data about movies and TV shows.</li>
          </ul>
        `,
        logo: 'film-max-1.png',
        images: [
          'film-max-1.png',
          'film-max-2.png',
          'film-max-3.png',
          'film-max-4.png'
        ],
        technologies: ["Laravel", "PHP", "TMDb API", "Blade", "MySQL"],
        link: "https://github.com/JstnAngrendo/Film_Max",
      },
      {
        id: 3,
        title: "KpopZtation",
        description: `KpopZtation is a backend-focused web application built using the ASP.NET framework, designed for a K-pop artist and album store. It allows users to browse, add albums to their cart, and complete transactions in a seamless shopping experience.`,
        longDescription: `
          <p>KpopZtation is a web-based application developed using the <strong>ASP.NET framework</strong> with the <strong>MVC (Model-View-Controller)</strong> architecture. This project serves as a backend-focused implementation of an online store for K-pop artists and albums, enabling users to explore available albums, add them to a cart, and complete transactions.</p>
          <h3>Key Features:</h3>
          <ul>
            <li><strong>Album & Artist Catalog</strong>: Users can browse a collection of K-pop albums along with artist details and album descriptions.</li>
            <li><strong>Shopping Cart & Checkout</strong>: Users can add albums to their cart and proceed with the checkout process.</li>
            <li><strong>Factory & Repository Pattern</strong>: Implements the factory and repository design patterns for efficient data handling and separation of concerns.</li>
            <li><strong>Database Integration</strong>: Uses MySQL for storing user data, transactions, and product details.</li>
          </ul>
          <h3>Technologies Used:</h3>
          <ul>
            <li><strong>ASP.NET (C#)</strong>: The backend is developed using ASP.NET, a robust framework for building scalable web applications.</li>
            <li><strong>MVC Architecture</strong>: Implements the Model-View-Controller pattern for better code organization and maintainability.</li>
            <li><strong>Factory & Repository Patterns</strong>: Ensures clean data handling and promotes reusable components in the project.</li>
            <li><strong>MySQL</strong>: The database is used to store product listings, transactions, and user data.</li>
          </ul>
        `,
        logo: 'kpopztation-1.png',
        images: [

        ],
        technologies: ["ASP.NET", "C#", "MySQL", "CSS"],
        link: "https://github.com/JoelGertino/KpopZtation_ASP.net",
      },    
      {
        "id": 4,
        "title": "Ecommerce API Demo",
        "description": "A simple backend project built with Spring Boot and MongoDB to learn API development. It includes basic CRUD operations, user management, and a restriction system for transactions based on product and seller ID. Implemented Swagger for API documentation.",
        "longDescription": `<p>The Ecommerce API Demo is a backend project created to understand the fundamentals of Spring Boot and how to work with MongoDB as a NoSQL database. This project focuses on designing RESTful APIs, handling data persistence, and implementing basic access control for transactions.</p>
        <h3>Key Features:</h3>
        <ul>
          <li><strong>CRUD Operations</strong>: Built API endpoints to manage users, products, and transactions, allowing creation, retrieval, updating, and deletion of records.</li>
          <li><strong>Transaction Restrictions</strong>: Implemented logic where an admin can restrict transactions based on product ID or seller ID, preventing unauthorized purchases.</li>
          <li><strong>MongoDB Integration</strong>: Used MongoDB for data storage, exploring how NoSQL databases handle relationships and queries.</li>
          <li><strong>API Documentation with Swagger</strong>: Integrated Swagger UI to document and test API endpoints efficiently.</li>
        </ul>
        <h3>Technologies Used:</h3>
        <ul>
          <li><strong>Spring Boot</strong>: Developed RESTful APIs using Java and Spring Boot framework.</li>
          <li><strong>MongoDB</strong>: Stored and managed data in a flexible NoSQL database.</li>
          <li><strong>Swagger</strong>: Documented API endpoints for easy testing and collaboration.</li>
        </ul>
        <p>This project was a hands-on introduction to backend development with Spring Boot. Through it, I gained a deeper understanding of API structure, database interactions, and backend logic for handling real-world ecommerce scenarios.</p>`,
        "logo": "ecommerce-api-demo-1.png",
        "images": [
          "ecommerce-api-demo-1.png"
        ],
        "technologies": ["Spring Boot", "MongoDB", "Swagger"],
        "link": "https://github.com/JstnAngrendo/ecommerce-api-demo"
      },
      {
        "id": 5,
        "title": "Website Portfolios",
        "description": "A personal portfolio website built with Vue.js, showcasing my skills, projects, and experience. Uses Pinia for state management and Vite for fast development. Plans for future backend integration using PostgreSQL or MongoDB.",
        "longDescription": `<p>The Website Portfolio is a project designed to showcase my skills, experience, and projects in a structured and visually appealing way. Built using Vue.js, it follows a modular and scalable approach to ensure maintainability and future enhancements.</p>
        <h3>Key Features:</h3>
        <ul>
          <li><strong>Skills Showcase</strong>: Displays the technologies and tools I am proficient in, categorized for clarity.</li>
          <li><strong>Project Highlights</strong>: Lists my key projects with descriptions, technologies used, and GitHub links.</li>
          <li><strong>Experience Timeline</strong>: Provides an overview of my professional and academic journey.</li>
        </ul>
        <h3>Technologies Used:</h3>
        <ul>
          <li><strong>Vue.js</strong>: Built using Vue for a dynamic and component-based structure.</li>
          <li><strong>Pinia</strong>: Manages application state efficiently.</li>
          <li><strong>Vite</strong>: Ensures fast build times and optimized performance.</li>
          <li><strong>Vitest</strong>: Planned integration for unit testing to ensure code reliability.</li>
        </ul>
        <h3>Future Enhancements:</h3>
        <ul>
          <li><strong>Backend Integration</strong>: Plans to store project data dynamically in PostgreSQL or MongoDB.</li>
          <li><strong>Authentication</strong>: Potential addition of user authentication for an admin panel.</li>
          <li><strong>More Interactivity</strong>: Enhancing UI/UX with animations and additional features.</li>
        </ul>
        <p>This project is an evolving portfolio where I apply and refine my front-end skills. In the future, I aim to integrate it with a backend for better scalability and dynamic content management.</p>`,
        "logo": "website-portfolios-1.png",
        "images": [
          "website-portfolios-1.png"
        ],
        "technologies": ["Vue.js", "Pinia", "Vite", "Vitest"],
        "link": "https://github.com/JstnAngrendo/website-portfolios"
      }      
    ]
  }
}

