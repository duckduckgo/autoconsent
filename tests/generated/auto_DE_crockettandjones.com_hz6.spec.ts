import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_crockettandjones.com_hz6', ['https://eu.crockettandjones.com/?sb=yes'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
