import generateCMPTests from '../playwright/runner';

generateCMPTests('cookies-warning', ['https://www.driverguide.com/', 'https://tricksumo.com/'], {});
