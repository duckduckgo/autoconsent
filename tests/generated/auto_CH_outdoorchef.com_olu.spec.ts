import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_outdoorchef.com_olu', ['https://www.outdoorchef.com/en-CH/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
