import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_fanatical.com_nth', ['https://www.fanatical.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
