// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Signup from "views/Signup/Signup.jsx";
import Signin from "views/Signin/Signin.jsx";
import EmailVerification from "views/EmailVerification/EmailVerification.jsx";
import Config from "views/Config/Config.jsx";
import CategoriesContainer from "containers/CategoriesContainer";

const dashboardRoutes = [
    {
        path: "/signin",
        sidebarName: "Sign In",
        navbarName: "Signin",
        icon: Person,
        component: Signin
    },
    {
        path: "/signup",
        sidebarName: "Sign Up",
        navbarName: "Signup",
        icon: Person,
        component: Signup
    },
    {
        path: "/emailverification",
        sidebarName: "Email verification",
        navbarName: "Email verification",
        icon: Person,
        component: EmailVerification
    },
    {
        path: "/config",
        sidebarName: "Config",
        navbarName: "Config",
        icon: Person,
        // component: Config
        component: CategoriesContainer
    },
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/table",
    sidebarName: "Table List",
    navbarName: "Table List",
    icon: ContentPaste,
    component: TableList
  },
  {
    path: "/typography",
    sidebarName: "Typography",
    navbarName: "Typography",
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: "/icons",
    sidebarName: "Icons",
    navbarName: "Icons",
    icon: BubbleChart,
    component: Icons
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
