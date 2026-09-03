import generateCMPTests from '../playwright/runner';

generateCMPTests('3dwarehouse-sketchup', ['https://3dwarehouse.sketchup.com/'], {
    testOptIn: false,
});
