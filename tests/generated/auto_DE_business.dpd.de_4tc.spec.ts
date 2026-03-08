import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_business.dpd.de_4tc', ['https://business.dpd.de/login.aspx'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
