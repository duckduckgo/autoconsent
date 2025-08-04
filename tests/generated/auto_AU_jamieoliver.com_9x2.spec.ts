import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_jamieoliver.com_9x2', ['https://www.jamieoliver.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
