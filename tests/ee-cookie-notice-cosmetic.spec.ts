import generateCMPTests from '../playwright/runner';

generateCMPTests('ee-cookie-notice-cosmetic', [
    'https://bryantpark.org/activities/category/winter-village',
    'https://www.janorth.org/',
    'https://www.gallagherfoundation.org/',
]);
