import Home from '../Pages/Home';
import Following from '../Pages/Following';
import Live from '../Pages/Live';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/live', component: Live },
];
