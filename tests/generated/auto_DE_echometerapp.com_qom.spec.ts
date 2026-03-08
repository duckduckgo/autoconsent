import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_echometerapp.com_qom', ['https://echometerapp.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
