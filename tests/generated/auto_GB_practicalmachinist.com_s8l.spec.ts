import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_practicalmachinist.com_s8l', ['https://www.practicalmachinist.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
