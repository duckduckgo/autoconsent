import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_motelcapblanc.com_ozn', ['http://motelcapblanc.com/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
