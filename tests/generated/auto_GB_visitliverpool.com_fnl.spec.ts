import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_visitliverpool.com_fnl', ['https://www.visitliverpool.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
