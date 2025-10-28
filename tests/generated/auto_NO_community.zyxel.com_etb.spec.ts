import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_community.zyxel.com_etb', ['https://community.zyxel.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
