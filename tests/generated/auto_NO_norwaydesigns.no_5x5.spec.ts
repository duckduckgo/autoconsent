import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_norwaydesigns.no_5x5', ['https://www.norwaydesigns.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
