import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'gsb-cookiebanner-selection',
    ['https://www.schleswig-holstein.de/', 'https://www.verfassungsschutz.de/', 'https://www.bfarm.de/'],
    {},
);
