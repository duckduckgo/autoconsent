import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_jamieoliver.com_7ma', ['https://www.jamieoliver.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
