import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_redirection.ubisoft.com_18d', ['https://redirection.ubisoft.com/site/entrance?entrance=www.ubisoft.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
