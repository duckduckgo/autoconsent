import generateCMPTests from '../playwright/runner';

generateCMPTests('cookiechoices', [
    'https://www.roadonmap.com/',
    'https://dotapicker.com/',
    'https://www.lingualia.com/',
    'https://www.internetclub.it/',
]);
