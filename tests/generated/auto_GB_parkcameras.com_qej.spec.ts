import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_parkcameras.com_qej', ['https://www.parkcameras.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
