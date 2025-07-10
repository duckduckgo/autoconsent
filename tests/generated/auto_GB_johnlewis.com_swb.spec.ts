import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_johnlewis.com_swb', ['https://www.johnlewis.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
