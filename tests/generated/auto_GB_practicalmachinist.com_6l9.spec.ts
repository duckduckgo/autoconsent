import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_practicalmachinist.com_6l9', ['https://www.practicalmachinist.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
