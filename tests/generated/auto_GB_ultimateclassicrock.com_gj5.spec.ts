import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ultimateclassicrock.com_gj5', ['https://ultimateclassicrock.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
