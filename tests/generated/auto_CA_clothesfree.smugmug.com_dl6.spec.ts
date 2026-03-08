import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_clothesfree.smugmug.com_dl6', ['https://clothesfree.smugmug.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
