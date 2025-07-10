import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_docs.unity3d.com_08c', ['https://docs.unity3d.com/Manual/index.html'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
