import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lockweb.com.au_yzb', ['https://www.lockweb.com.au/au/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
