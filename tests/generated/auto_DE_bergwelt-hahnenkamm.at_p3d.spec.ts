import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bergwelt-hahnenkamm.at_p3d', ['https://bergwelt-hahnenkamm.at/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
