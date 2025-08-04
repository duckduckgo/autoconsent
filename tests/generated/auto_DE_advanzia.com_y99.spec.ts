import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_advanzia.com_y99', ['https://www.advanzia.com/en-gb/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
