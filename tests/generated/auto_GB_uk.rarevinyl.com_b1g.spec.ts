import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_uk.rarevinyl.com_b1g', ['https://uk.rarevinyl.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
