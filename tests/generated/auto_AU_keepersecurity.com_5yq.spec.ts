import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_keepersecurity.com_5yq', ['https://www.keepersecurity.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
