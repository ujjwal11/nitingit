import Home from "./app/home/home.component";
import News from "./app/news/Home"

const routes = [
    {
        path: "/",
        component: News,
        exact: true
    },
    {
        path: "/news",
        component: Home,
        exact: true
    }
];

export default routes