import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_bp.com_ywh', ['https://www.bp.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
