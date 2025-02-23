module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['features/step_definitions/*.ts', 'features/support/*.ts'],
    format: ['progress-bar', 'html:cucumber-report.html'],
    formatOptions: { snippetInterface: 'async-await' },
    publishQuiet: true
  }
}