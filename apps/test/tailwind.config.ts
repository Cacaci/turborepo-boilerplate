import path from 'path'
import type { Config } from 'tailwindcss'
import sharedConfig from '@repo/tailwind-config'

const config: Pick<Config, 'content' | 'presets'> = {
  content: ['./src/app/**/*.tsx', path.join('../../packages/ui/src', '**/*.tsx')],
  presets: [sharedConfig],
}

export default config
