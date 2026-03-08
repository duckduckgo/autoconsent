import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_forum.carnivoren.org_c1v', ['https://forum.carnivoren.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
