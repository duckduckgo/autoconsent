import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_rossignol.com_hht', ['https://www.rossignol.com/gb-en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
