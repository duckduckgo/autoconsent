import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_andrewlawrencecomedy.co.uk_t7c', ['https://andrewlawrencecomedy.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
