import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_azurlane.mrlar.dev_of9', ['https://azurlane.mrlar.dev/db/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
