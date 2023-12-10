import App from "./App";
import TablePage from "./TablePage";
import {
  createBrowserRouter,
} from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    loader: checkTable(),
  },
  {
    path:"/tableview",
    Component: TablePage,
    loader: checkTable(),
  }
]);

// лоадер функция вызывается перед визуализацией компонента
// проверяет есть ли в localstorage таблица
function checkTable(){
}