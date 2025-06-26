import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_aus.sungrowpower.com_hrh', ['https://aus.sungrowpower.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
