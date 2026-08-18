import generateCMPTests from '../playwright/runner';

generateCMPTests('ceneo-pl', ['https://www.ceneo.pl/'], {
    mobile: true,
});
