import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_teknisketriks.com_lov', ['https://teknisketriks.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
