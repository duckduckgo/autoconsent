import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_starlingbank.com_0', ['https://www.starlingbank.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
