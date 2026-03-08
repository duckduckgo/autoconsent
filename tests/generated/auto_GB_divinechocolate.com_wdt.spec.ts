import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_divinechocolate.com_wdt', ['https://divinechocolate.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
