import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_help.starlingbank.com_nvv', ['https://help.starlingbank.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
