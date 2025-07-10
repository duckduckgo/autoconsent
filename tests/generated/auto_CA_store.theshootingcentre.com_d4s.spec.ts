import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_store.theshootingcentre.com_d4s', ['https://store.theshootingcentre.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
