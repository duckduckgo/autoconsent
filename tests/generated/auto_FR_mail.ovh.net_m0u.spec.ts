import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mail.ovh.net_m0u', ['https://www.ovhcloud.com/en-gb/mail/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
