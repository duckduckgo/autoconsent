import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_armoredcore.fandom.com_1fq', ['https://armoredcore.fandom.com/wiki/Armored_Core_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
