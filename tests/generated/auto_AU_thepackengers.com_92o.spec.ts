import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_thepackengers.com_92o', ['https://www.thepackengers.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
