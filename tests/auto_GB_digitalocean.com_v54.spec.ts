import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_digitalocean.com_v54', ['https://www.digitalocean.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
