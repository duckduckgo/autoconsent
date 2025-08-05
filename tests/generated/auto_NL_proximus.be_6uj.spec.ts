import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_proximus.be_6uj', ['https://www.proximus.be/en/personal/?'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
