import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_anthropic.com_fi4', ['https://www.anthropic.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
