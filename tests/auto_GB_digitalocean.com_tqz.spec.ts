import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_digitalocean.com_tqz', ['https://www.digitalocean.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
