import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_CA_redirection.ubisoft.com_q75', ['https://redirection.ubisoft.com/site/entrance?entrance=www.ubisoft.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
