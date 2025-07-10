import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_honeywellhome.com_ygn', ['https://www.honeywellhome.com/us/en/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
