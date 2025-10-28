import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_prisma.io_q81', ['https://www.prisma.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
