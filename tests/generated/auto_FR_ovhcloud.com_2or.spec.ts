import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ovhcloud.com_2or', ['https://www.ovhcloud.com/en-gb/mail/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
