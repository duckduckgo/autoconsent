import generateCMPTests from '../playwright/runner';

generateCMPTests('sitevision', [
    'https://minmyndighetspost.se/',
    'https://norrkoping.se/',
    'https://skara.se/',
    'https://isf.se/',
    'https://hudiksvall.se/',
    'https://kvarkenports.com/',
]);
