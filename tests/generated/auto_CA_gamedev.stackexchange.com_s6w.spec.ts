import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_gamedev.stackexchange.com_s6w', ['https://gamedev.stackexchange.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
