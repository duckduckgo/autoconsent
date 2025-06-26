import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_keepersecurity.com_7fg', ['https://www.keepersecurity.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
