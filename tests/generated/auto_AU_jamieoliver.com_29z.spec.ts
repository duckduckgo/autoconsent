import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_jamieoliver.com_29z', ['https://www.jamieoliver.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
