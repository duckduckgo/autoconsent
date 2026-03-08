import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_emmalovesadress.com_mdd', ['https://emmalovesadress.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
