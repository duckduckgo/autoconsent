import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_airomedical.com_czs', ['https://airomedical.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
