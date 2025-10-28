import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_domainefuneraire.com_3t5', ['https://www.domainefuneraire.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
