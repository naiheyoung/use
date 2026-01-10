import fs from 'fs-extra'

await fs.copy('templates', 'dist/templates')
