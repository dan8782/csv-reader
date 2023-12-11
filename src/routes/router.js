import App from "../Components/App";
import TablePage from "../Components/TablePage";
import {
    createBrowserRouter, redirect,
} from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        loader: checkTable,
    },
    {
        path: "/tableview",
        Component: TablePage,
        loader: protectView,
    }
]);

// лоадер функция вызывается перед визуализацией компонента
// проверяет есть ли в localstorage таблица
function checkTable() {
    const csvData = localStorage.getItem('csvData');
    if (csvData && JSON.parse(csvData).length > 0) {
      return redirect('/tableview'); 
    } else {
      return null;
    }
}

function protectView() {
    const csvData = localStorage.getItem('csvData');
    if (!csvData || JSON.parse(csvData).length < 1) {
        return redirect('/');
    }else{
        return null;
    }
}