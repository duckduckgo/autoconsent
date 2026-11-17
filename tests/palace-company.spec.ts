import generateCMPTests from '../playwright/runner';

generateCMPTests('palace-company', [
    'https://www.moonpalace.com/',
    'https://www.palaceresorts.com/',
    'https://www.leblancsparesorts.com/',
    'https://www.baglionihotels.com/',
]);
