import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_royalnavy.mod.uk_e8d', ['https://www.royalnavy.mod.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
