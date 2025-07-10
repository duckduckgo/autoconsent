import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_liverpoolairport.com_3i8', ['https://www.liverpoolairport.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
