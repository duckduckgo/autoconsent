import generateCMPTests from '../playwright/runner';

generateCMPTests('insta360.com', [
    'https://www.insta360.com/',
    'https://www.insta360.com/product/insta360-luna-ultra',
    'https://www.insta360.com/product/insta360-x5',
]);
