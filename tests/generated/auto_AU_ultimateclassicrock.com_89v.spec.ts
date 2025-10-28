import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_ultimateclassicrock.com_89v', ['https://ultimateclassicrock.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
