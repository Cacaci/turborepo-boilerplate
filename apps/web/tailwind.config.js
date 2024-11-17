const path = require('path')
const baseConfig = require('@repo/tailwind-config')

module.exports = {
  presets: [baseConfig],
  ...baseConfig,
  content: [
    ...baseConfig.content,
    `${path.join(require.resolve('@repo/ui'), '..')}/**/*.{ts,tsx}`,
    // '../../packages/ui/src/**/*.tsx',
  ],
}
