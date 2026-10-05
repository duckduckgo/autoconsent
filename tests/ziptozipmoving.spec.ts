import generateCMPTests from '../playwright/runner';

generateCMPTests('ziptozipmoving', ['https://ziptozipmoving.com/en/home/'], {
    testSelfTest: false,
});
