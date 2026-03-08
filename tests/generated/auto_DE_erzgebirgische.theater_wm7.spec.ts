import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_erzgebirgische.theater_wm7', ['https://erzgebirgische.theater/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
