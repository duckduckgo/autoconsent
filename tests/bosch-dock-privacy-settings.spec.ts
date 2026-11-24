import generateCMPTests from '../playwright/runner';

generateCMPTests('bosch-dock-privacy-settings', [
    'https://www.bosch-professional.com/',
    'https://www.bosch.com/',
    'https://www.buderus.com/',
    'https://www.worcester-bosch.co.uk/',
]);
