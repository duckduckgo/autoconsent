import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_help.starlingbank.com_4b0', ['https://help.starlingbank.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
