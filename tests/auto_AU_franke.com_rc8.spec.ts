import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_franke.com_rc8', ['https://www.franke.com/au/en/home.html'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
