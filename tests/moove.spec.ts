import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'Moove',
    ['https://impact.parkinson.org/', 'https://wamu.org/', 'https://kulturnews.de/', 'https://gcloyola.com/autor/fernando-vidal/'],
    {},
);
