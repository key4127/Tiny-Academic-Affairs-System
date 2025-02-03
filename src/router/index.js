import { createBrowserRouter } from "react-router-dom";
import StartPage from "../pages/startpage";
import Login from '../pages/login';
import CourseListPage from "../pages/course_list_page";
import CourseSelectPage from "../pages/course_selection_page";

const router = createBrowserRouter([
  {
    path: '/',
    element: <StartPage />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/course_list',
    element: <CourseListPage />
  },
  {
    path: '/course_selection',
    element: <CourseSelectPage />,
  }
]);

export default router;