import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_la.spankbang.com_bpy', ['https://la.spankbang.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
