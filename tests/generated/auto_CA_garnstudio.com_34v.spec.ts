import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_garnstudio.com_34v', ['https://www.garnstudio.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
