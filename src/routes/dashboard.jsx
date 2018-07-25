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
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Signup from "views/Signup/Signup.jsx";
import Signin from "views/Signin/Signin.jsx";
import EmailVerification from "views/EmailVerification/EmailVerification.jsx";
import Config from "views/Config/Config.jsx";
import CategoriesContainer from "containers/CategoriesContainer";
import DashboardContainer from "containers/DashboardContainer";
import ReportsContainer from "containers/ReportsContainer";
import SignInContainer from "containers/SignInContainer";
import SignUpContainer from "containers/SignUpContainer";

const getDashboardRoutes = isUser => {


    const dashboardRoutes = [
        {
            path: "/signin",
            sidebarName: "Sign In",
            navbarName: "Signin",
            icon: Person,
            component: SignInContainer,
            isUser: false
        },
        {
            path: "/signup",
            sidebarName: "Sign Up",
            navbarName: "Signup",
            icon: Person,
            component: SignUpContainer,
            isUser: false
        },
        {
            path: "/emailverification/:email/:verifyKey",
            // path: "/emailverification",
            sidebarName: "Email verification",
            navbarName: "Email verification",
            icon: Person,
            component: EmailVerification,
            isUser: false
        },
        {
            path: "/config",
            sidebarName: "Config",
            navbarName: "Config",
            icon: Person,
            component: CategoriesContainer,
            isUser: true
        },
        {
            path: "/dashboard",
            sidebarName: "Dashboard",
            navbarName: "Dashboard",
            icon: Dashboard,
            component: DashboardContainer,
            isUser: true
        },
        {
            path: "/reports",
            sidebarName: "Reports",
            navbarName: "Reports",
            icon: LibraryBooks,
            component: ReportsContainer,
            isUser: true
        },
//delete-----------------------------------------------
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
//delete-----------------------------------------------
        {
            redirect: true,
            path: "/",
            to: "/signin",
            navbarName: "Redirect",
            isUser: false
        },
        {
            redirect: true,
            path: "/",
            to: "/dashboard",
            navbarName: "Redirect",
            isUser: true
        },
        {
            redirect: true,
            path: "/emailverification",
            to: "/emailverification",
            navbarName: "Redirect",
            isUser: false
        }
    ]
    return dashboardRoutes.filter(route => route.isUser === isUser)
        // .filter(route => route.component !== EmailVerification)
}

export default getDashboardRoutes;
