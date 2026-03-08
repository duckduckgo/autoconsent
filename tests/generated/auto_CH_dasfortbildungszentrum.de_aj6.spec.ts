import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dasfortbildungszentrum.de_aj6', ['https://dasfortbildungszentrum.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
