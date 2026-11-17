import generateCMPTests from '../playwright/runner';

generateCMPTests('lawwwing', ['https://ajuntament.barcelona.cat/', 'https://graffica.info/', 'https://supra.fr/', 'https://arteche.com/']);

// reloads the page after the consent choice, so the self-test cannot run
generateCMPTests('lawwwing', ['https://auto10.com/'], {
    testSelfTest: false,
});
