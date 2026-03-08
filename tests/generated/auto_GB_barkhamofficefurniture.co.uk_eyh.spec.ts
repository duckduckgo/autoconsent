import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_barkhamofficefurniture.co.uk_eyh', ['https://barkhamofficefurniture.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
