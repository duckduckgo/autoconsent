import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_uk.rarevinyl.com_4is', ['https://uk.rarevinyl.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
