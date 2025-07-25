import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_unternehmensregister.de_tfj', ['https://www.unternehmensregister.de/ureg/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
