import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_store.theshootingcentre.com_spq', ['https://store.theshootingcentre.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
