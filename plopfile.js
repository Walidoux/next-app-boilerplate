module.exports = (
  /** @type {import('plop').NodePlopAPI} */
  plop
) => {
  plop.setGenerator('component', {
    description: 'Generate a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'components/{{properCase name}}/{{properCase name}}.tsx',
        templateFile: 'templates/Component/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: 'components/{{properCase name}}/{{properCase name}}.module.scss',
        templateFile: 'templates/Component/component.module.scss.hbs'
      }
    ]
  })
}
