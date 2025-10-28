import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_secure.hushmail.com_uzw', ['https://www.hushmail.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
