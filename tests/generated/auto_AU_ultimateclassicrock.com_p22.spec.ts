import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_ultimateclassicrock.com_p22', ['https://ultimateclassicrock.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
