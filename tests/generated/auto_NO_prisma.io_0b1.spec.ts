import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_prisma.io_0b1', ['https://www.prisma.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
