import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_login.mailchimp.com_hp7', ['https://login.mailchimp.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
