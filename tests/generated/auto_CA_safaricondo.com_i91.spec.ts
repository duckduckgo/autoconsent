import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_safaricondo.com_i91', ['https://www.safaricondo.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
