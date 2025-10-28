import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_shipton-mill.com_44a', ['https://www.shipton-mill.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
