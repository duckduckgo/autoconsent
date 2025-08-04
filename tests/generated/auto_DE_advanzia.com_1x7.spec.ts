import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_advanzia.com_1x7', ['https://www.advanzia.com/en-gb/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
