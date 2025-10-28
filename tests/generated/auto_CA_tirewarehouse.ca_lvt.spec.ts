import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_tirewarehouse.ca_lvt', ['https://tirewarehouse.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
