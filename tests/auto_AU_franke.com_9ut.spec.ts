import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_franke.com_9ut', ['https://www.franke.com/au/en/home.html'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
