export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fa808888d2a1a8c4c18105e',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-4aq54s3p',
                  apiId: '5ab4dcf0-9189-4ae6-9755-becfd271d88f'
                },
                {
                  buildHookId: '5fa80889819bc929c6ec5a5b',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-28jz2ct9',
                  apiId: '6641fc4e-08a4-46c1-accb-450d0f561290'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gulaker/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-28jz2ct9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
