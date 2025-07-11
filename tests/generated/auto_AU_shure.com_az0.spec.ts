import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_shure.com_az0', ['https://www.shure.com/en-ASIA'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
