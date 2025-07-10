import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_walkingdead.fandom.com_vuh', ['https://walkingdead.fandom.com/wiki/The_Walking_Dead_Wiki'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
