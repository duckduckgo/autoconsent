import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_revolut.com_vea', ['https://www.revolut.com/en-FI/discover-our-company/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
