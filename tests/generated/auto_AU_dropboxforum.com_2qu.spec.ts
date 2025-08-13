import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_dropboxforum.com_2qu', ['https://www.dropboxforum.com/category/English'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
