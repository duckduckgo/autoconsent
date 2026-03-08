import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cms-lawnow.com_p9k', ['https://cms-lawnow.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
