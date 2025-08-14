import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_outdoorchef.com_85y', ['https://www.outdoorchef.com/en-CH/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
