import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_app.advcollective.com_p5m', ['https://app.advcollective.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
