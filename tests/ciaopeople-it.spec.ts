import generateCMPTests from '../playwright/runner';

generateCMPTests('ciaopeople.it', [
    'https://ohga.it/',
    'https://lexplain.it/',
    'https://www.geopop.it/',
    'https://www.cookist.it/',
    'https://www.cookist.com/',
    'https://www.fanpage.it/',
]);
