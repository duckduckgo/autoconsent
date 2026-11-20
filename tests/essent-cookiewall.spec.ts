import generateCMPTests from '../playwright/runner';

generateCMPTests('essent-cookiewall', ['https://www.energiedirect.nl/', 'https://www.essent.nl/']);
