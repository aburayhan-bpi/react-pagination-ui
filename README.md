# React Pagination with JSONPlaceholder API

A simple React + TypeScript project demonstrating a **professional, reusable pagination component** integrated with data fetching from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API.  

The project uses **Tailwind CSS** for modern styling and shows how to paginate fetched data efficiently.

 **Open in browser:**  
   Visit [https://react-pagination-ui.vercel.app](https://react-pagination-ui.vercel.app) to see the app.

---

## Features

- Fetches posts from JSONPlaceholder API.
- Displays posts with pagination (2 posts per page by default).
- Reusable and customizable pagination component with ellipsis (`...`) for large page sets.
- Responsive and professional UI built with Tailwind CSS.
- TypeScript support with clear interfaces.
- Prev / Next buttons with disabled states.
- Clean, modern design with accessible UI patterns.

---

## Technologies Used

- React 18+
- TypeScript
- Tailwind CSS v4+
- React Icons (`react-icons/hi`)
- JSONPlaceholder fake REST API

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/aburayhan-bpi/react-pagination-ui.git
   cd react-pagination-ui
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser:**  
   Visit [http://localhost:5173](http://localhost:5173) to see the app.

---

## Project Structure

```
src/
 ├─ components/
 │   └─ Pagination.tsx       # Reusable Pagination component
 ├─ App.tsx                  # Main application file with data fetching and pagination
 ├─ index.tsx                # ReactDOM render entrypoint
 └─ index.css                # Tailwind CSS import and custom styles
```

---

## Usage

- The app fetches posts once when it loads.
- Posts are displayed in pages with a default of 2 posts per page.
- Click page numbers or Prev/Next buttons to navigate.
- The pagination component automatically adjusts page numbers and shows ellipsis for large page counts.

---

## Customization

- Adjust `postsPerPage` in `App.tsx` to show more or fewer posts per page.
- Modify colors and styles easily by editing the Tailwind CSS classes in `Pagination.tsx`.
- The pagination component accepts these props:
  - `currentPage`: current active page number.
  - `totalPages`: total number of pages.
  - `onPageChange`: callback fired with new page number on user interaction.

---

## License

This project is open source under the [MIT License](LICENSE).

---

## Acknowledgements

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for free sample data.
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling.
- [React Icons](https://react-icons.github.io/react-icons/) for beautiful icon components.

---

## Contact

Created by **Abu Rayhan** - feel free to reach out!

- GitHub: [github.com/aburayhan-bpi](https://github.com/aburayhan-bpi)
- LinkedIn: [linkedin.com/in/aburayhan](https://linkedin.com/in/aburayhan-bpi21)

---

Happy coding! 🚀
