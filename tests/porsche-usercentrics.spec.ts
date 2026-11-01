import generateCMPTests from '../playwright/runner';

generateCMPTests('porsche-usercentrics', [
    'https://www.porsche.com/',
    'https://www.porschedriving.com/',
    'https://newsroom.porsche.com/',
    'https://www.porschescopes.com/',
]);
