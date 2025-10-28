import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_mysupport.razer.com_ula', ['https://mysupport.razer.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
