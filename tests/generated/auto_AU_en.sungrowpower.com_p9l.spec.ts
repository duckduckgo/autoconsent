import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_en.sungrowpower.com_p9l', ['https://en.sungrowpower.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
