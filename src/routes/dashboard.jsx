// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
// core components/views
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import EmailVerification from "views/EmailVerification/EmailVerification.jsx";
import CategoriesContainer from "containers/CategoriesContainer";
import DashboardContainer from "containers/DashboardContainer";
import ReportsContainer from "containers/ReportsContainer";
import SignInContainer from "containers/SignInContainer";
import SignUpContainer from "containers/SignUpContainer";

const getDashboardRoutes = isUser => {

    // localStorage.clear()

const token = Boolean(localStorage.getItem('token'))

    console.log('console.log token = ',token)
    // console.log('console.log token1 = ',localStorage.getItem('token'))

    // alert('token = '+token)


    const dashboardRoutes = [
        {
            path: "/signin",
            sidebarName: "Sign In",
            navbarName: "Signin",
            icon: Person,
            component: SignInContainer,
            // isUser: false
            token: false
        },
        {
            path: "/signup",
            sidebarName: "Sign Up",
            navbarName: "Signup",
            icon: Person,
            component: SignUpContainer,
            // isUser: false
            token: false
        },
        {
            path: "/emailverification/:email/:verifyKey",
            sidebarName: "Email verification",
            navbarName: "Email verification",
            icon: Person,
            component: EmailVerification,
            // isUser: false
            token: false
        },
        {
            path: "/config",
            sidebarName: "Config",
            navbarName: "Config",
            icon: Person,
            component: CategoriesContainer,
            // isUser: true
            token: true
        },
        {
            path: "/dashboard",
            sidebarName: "Dashboard",
            navbarName: "Dashboard",
            icon: Dashboard,
            component: DashboardContainer,
            // isUser: true
            token: true
        },
        {
            path: "/reports",
            sidebarName: "Reports",
            navbarName: "Reports",
            icon: LibraryBooks,
            component: ReportsContainer,
            // isUser: true
            token: true
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
            // isUser: false
            token: false
        },
        {
            redirect: true,
            path: "/",
            to: "/dashboard",
            navbarName: "Redirect",
            // isUser: true
            token: true
        }
    ]
    // return dashboardRoutes.filter(route => route.isUser === isUser)
    return dashboardRoutes.filter(route => route.token === token)
}

export default getDashboardRoutes;
