import generateCMPTests from '../playwright/runner';

generateCMPTests('consent-backdrop', [
    'https://swedengameconference.se/',
    'https://swedengamearena.com/',
    'https://scienceparkskovde.se/',
    'https://v-dem.net/',
    'https://demscore.se/',
]);
