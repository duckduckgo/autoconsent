import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_editor.p5js.org_lml', ['https://editor.p5js.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
