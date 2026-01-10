import cac from 'cac'
import prompts from 'prompts'
import fs from 'fs/promises'
import chalk from 'chalk'
import { copy } from 'fs-extra'
import { join } from 'path'
import { fileURLToPath } from 'url'

const cli = cac('Naihe Used.')

cli.command('[filename]', 'Filename to be cloned.').action(async () => {
  const base = join(fileURLToPath(import.meta.url), '../', 'templates')
  const choices: prompts.Choice[] = []
  const files = await fs.readdir(base)
  for (const file of files) {
    choices.push({
      title: file,
      value: file
    })
  }

  const choice = await prompts({
    type: 'multiselect',
    name: 'files',
    message: 'Please select the file to clone.',
    choices,
    hint: '[Left/Right/Space]: Toggle selection. <a>: select all.',
    instructions: false
  })

  if (choice.files.length <= 0) {
    console.log(chalk.grey('Cloned 0 files.'))
  } else {
    choice.files.map(
      async (file: string) => await copy(join(base, file), join(process.cwd(), file))
    )
    chalk.green(`✔ Cloned ${choice.files.length} files.`)
  }
})

cli.help()
cli.parse()
