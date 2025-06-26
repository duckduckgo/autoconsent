import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_keepersecurity.com_06v', ['https://www.keepersecurity.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
