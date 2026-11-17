import generateCMPTests from '../playwright/runner';

generateCMPTests('cookie-accordion-settings', ['https://www.wwz.ch/', 'https://www.elipslife.com/'], {
    testSelfTest: false,
});
