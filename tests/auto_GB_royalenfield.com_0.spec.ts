import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_royalenfield.com_0', ['https://www.royalenfield.com/uk/en/home/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
