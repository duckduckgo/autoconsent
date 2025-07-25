import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sskduesseldorf.de_u6p', ['https://www.sskduesseldorf.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
