import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wearepublic.nl_ic7', ['https://www.wearepublic.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
