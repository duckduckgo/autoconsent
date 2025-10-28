import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sparxreader.com_fnc', ['https://sparxreader.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
