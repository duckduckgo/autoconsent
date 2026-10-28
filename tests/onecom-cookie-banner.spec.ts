import generateCMPTests from '../playwright/runner';

generateCMPTests('onecom-cookie-banner', ['http://utenfilter.no/', 'https://mtv-einheit.de/', 'https://oxarna.se/'], {
    testSelfTest: false,
});
