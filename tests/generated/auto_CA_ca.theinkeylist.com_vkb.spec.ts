import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ca.theinkeylist.com_vkb', ['https://ca.theinkeylist.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
