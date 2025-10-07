import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_store.theshootingcentre.com_93x', ['https://store.theshootingcentre.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
