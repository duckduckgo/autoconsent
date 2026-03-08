import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_deliveredsocial.com_ly2', ['https://deliveredsocial.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
