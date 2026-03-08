import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_abbyschaferphotography.smugmug.com_q13', ['https://abbyschaferphotography.smugmug.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
