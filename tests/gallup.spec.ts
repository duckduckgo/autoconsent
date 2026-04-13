import generateCMPTests from '../playwright/runner';

generateCMPTests('gallup', [
    'https://www.gallup.com/analytics/651674/gen-z-research.aspx',
    'https://www.gallupstudentpoll.com.au/home.aspx',
]);
