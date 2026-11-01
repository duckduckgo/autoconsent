import generateCMPTests from '../playwright/runner';

generateCMPTests('twz-cookie-monster', ['https://www.verf-plaza.nl/', 'https://www.codekrakers.nl/', 'https://stxgroup.com/']);

// the page reloads after refusing, so the self-test result is not received
generateCMPTests('twz-cookie-monster', ['https://mnext.nl/'], { testSelfTest: false });
