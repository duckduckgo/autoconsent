import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_bridgerton.fandom.com_jsd', ['https://bridgerton.fandom.com/wiki/Bridgerton_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
