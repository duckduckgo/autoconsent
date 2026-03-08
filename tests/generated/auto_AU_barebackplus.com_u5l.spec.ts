import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_barebackplus.com_u5l', ['https://barebackplus.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
