import generateCMPTests from '../playwright/runner';

generateCMPTests('osano', [
    'https://www.weathertech.com/',
    'https://ping.com/en-us/',
    'https://www.flowrestling.org/',
    'https://www.aaas.org/taxonomy/term/7/report-dept-energy-should-consolidate-close-labs',
]);
