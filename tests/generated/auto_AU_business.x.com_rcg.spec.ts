import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_business.x.com_rcg', ['https://business.x.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
