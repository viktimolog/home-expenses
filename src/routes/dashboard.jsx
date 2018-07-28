// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
import Person from '@material-ui/icons/Person';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
// core components/views
import EmailVerification from 'views/EmailVerification/EmailVerification.jsx';
import CategoriesContainer from 'containers/CategoriesContainer';
import DashboardContainer from 'containers/DashboardContainer';
import ReportsContainer from 'containers/ReportsContainer';
import SignInContainer from 'containers/SignInContainer';
import SignUpContainer from 'containers/SignUpContainer';

const getDashboardRoutes = () => {
    const token = Boolean(localStorage.getItem('token'));
    const dashboardRoutes = [
        {
            path: '/signin',
            sidebarName: 'Sign In',
            navbarName: 'Signin',
            icon: Person,
            component: SignInContainer,
            token: false
        },
        {
            path: '/signup',
            sidebarName: 'Sign Up',
            navbarName: 'Signup',
            icon: Person,
            component: SignUpContainer,
            token: false
        },
        {
            path: '/emailverification/:email/:verifyKey',
            sidebarName: 'Email verification',
            navbarName: 'Email verification',
            icon: Person,
            component: EmailVerification,
            token: false
        },
        {
            path: '/config',
            sidebarName: 'Config',
            navbarName: 'Config',
            icon: Person,
            component: CategoriesContainer,
            token: true
        },
        {
            path: '/dashboard',
            sidebarName: 'Dashboard',
            navbarName: 'Dashboard',
            icon: Dashboard,
            component: DashboardContainer,
            token: true
        },
        {
            path: '/reports',
            sidebarName: 'Reports',
            navbarName: 'Reports',
            icon: LibraryBooks,
            component: ReportsContainer,
            token: true
        },
        {
            redirect: true,
            path: '/',
            to: '/signin',
            navbarName: 'Redirect',
            token: false
        },
        {
            redirect: true,
            path: '/',
            to: '/dashboard',
            navbarName: 'Redirect',
            token: true
        }
    ];
    return dashboardRoutes.filter(route => route.token === token);
};

export default getDashboardRoutes;
