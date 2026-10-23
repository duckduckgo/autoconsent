import generateCMPTests from '../playwright/runner';

generateCMPTests('cookie-popup-cookieok', [
    'https://speisekartenweb.de/',
    'https://schuhhaus-sieling.de/',
    'https://www.reiten-weltweit.de/',
    'https://www.digitprint.ch/',
    'https://www.topreflex.de/',
]);
