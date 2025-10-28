import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_stellarinfo.com_th5', ['https://www.stellarinfo.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
