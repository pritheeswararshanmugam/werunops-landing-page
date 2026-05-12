const path = require('node:path');

module.exports = {
  testDir: path.join(process.cwd(), 'scripts'),
  testMatch: /(capture-audit-screenshots|image-health)\.spec\.cjs$/,
  outputDir: path.join(process.cwd(), 'audit-screenshots', '.pw-output'),
  reporter: [['line']],
  workers: 1,
};