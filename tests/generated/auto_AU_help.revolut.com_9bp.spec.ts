import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_help.revolut.com_9bp', ['https://help.revolut.com/help/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
