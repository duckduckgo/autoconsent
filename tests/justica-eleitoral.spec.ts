import generateCMPTests from '../playwright/runner';

generateCMPTests('justica-eleitoral', ['https://www.tse.jus.br/', 'https://www.tre-sp.jus.br/', 'https://www.tre-rj.jus.br/']);
