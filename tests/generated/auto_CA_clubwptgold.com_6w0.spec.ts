import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_clubwptgold.com_6w0', ['https://clubwptgold.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
