import generateCMPTests from '../playwright/runner';

generateCMPTests('nederlandseloterij', [
    'https://staatsloterij.nederlandseloterij.nl/',
    'https://lotto.nederlandseloterij.nl/',
    'https://eurojackpot.nederlandseloterij.nl/',
    'https://www.nederlandseloterij.nl/',
    'https://luckyday.nederlandseloterij.nl/',
]);
