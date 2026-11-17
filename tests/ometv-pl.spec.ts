import generateCMPTests from '../playwright/runner';

generateCMPTests('ometv.pl', ['https://ometv.pl/'], { mobile: true });
generateCMPTests('ometv.pl', ['https://ometv.pl/'], { mobile: false });
