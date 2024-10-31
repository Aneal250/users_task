# User Search Application

A simple Next.js application that allows users to search and manage user details by name or email. It includes TypeScript, TailwindCSS, and React, along with options to view detailed user information and add new users.

## Project Overview

This application demonstrates a user search feature that:

- Filters users by name or email
- Displays user details in a modal
- Allows users to add new entries via a form

## Technologies & Libraries

- Next.js (with TypeScript)
- React Query for data fetching
- Redux for state management
- React Hook Form for form handling
- Zod for form validation
- JSONPlaceholder API as the data source
- Material-UI (MUI) for UI components
- TailwindCSS for styling

## Project Setup

Clone the repository:

````sh
git clone https://github.com/Aneal250/users_task


```sh
git clone https://github.com/Aneal250/users_task
````

### Clone the repo to your local machine

```sh
npm install
```

### Use npm install to install all the necessary dependencies.

```sh
npm run dev
```

### Run the app Locally using `npm run dev`

```sh
npm run build
```

### Compile and Minify for Production

### Core Features

Primary Objective: User Search Functionality

Search Input:
A search bar allows users to filter results by name or email.
The search is debounced to improve performance.
Displaying Search Results:

Shows users matching the search term in a table.
If no match is found, displays a "No users found" message.
Clear Search:

A clear button resets the search and displays all users.
Detailed User View
Users can click on a name to view detailed information in a modal.
Adding New Users
A form modal for adding users with React Hook Form and Zod for validation.

### Optional Enhancements

User Avatars: Display avatars in the user table.
Pagination: Enables handling larger datasets more efficiently.
Sorting: Allows sorting by name or email in the table.
React Query Setup: Provides better data management for API interactions.

### Notes | Constraints

1. Development Time: Developed in under 10 hours, focusing on core functionality over edge cases.

2. API Limitations: JSONPlaceholder API doesn’t provide all user data fields (e.g., user avatars), limiting some UI features.

### New Features to Implement

1. ESLint Setup: Integrate ESLint for better code consistency.
2. Pagination: Add pagination to the user table.
3. Responsive Design: Ensure a fully responsive layout for all screen sizes.
4. Enhanced UI: Improve design with MUI and custom styling.
5. End-to-End (E2E) Testing: For complete test coverage.
