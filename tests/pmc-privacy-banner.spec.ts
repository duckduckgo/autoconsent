import generateCMPTests from '../playwright/runner';

generateCMPTests('pmc-privacy-banner', ['https://www.theverge.com/', 'https://www.eater.com/', 'https://www.sbnation.com/'], {
    // the notice only offers a dismiss control, so opt-in and opt-out do the same thing
    testOptIn: false,
});
