import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_fireemblem.fandom.com_fs3', ['https://fireemblem.fandom.com/wiki/Fire_Emblem_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
