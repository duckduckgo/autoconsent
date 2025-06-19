import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_twilio.com_0or', ['https://www.twilio.com/en-us'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
