import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_advanzia.com_ey4', ['https://www.advanzia.com/en-gb/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
