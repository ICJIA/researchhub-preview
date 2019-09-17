export { appFields, articleFields, datasetFields }

const baseFields = [
  '_id',
  'title',
  'slug',
  'external',
  'date',
  'categories',
  'tags',
  'citation',
  'funding'
]

const appFields = [
  ...baseFields,
  'image',
  'contributors',
  'description',
  'url',
  'articles (sort: "date:desc", where: { status: "published" }) { title slug }',
  'datasets (sort: "date:desc", where: { status: "published" }) { title slug }'
]

const articleFields = [
  ...baseFields,
  'splash',
  'thumbnail',
  'abstract',
  'authors',
  'images',
  'markdown',
  'doi',
  'mainfiletype',
  'mainfile { hash ext }',
  'extrafile { hash ext }',
  'apps (sort: "date:desc", where: { status: "published" }) { title slug }',
  'datasets (sort: "date:desc", where: { status: "published" }) { title slug }'
]

const datasetFields = [
  ...baseFields,
  'project',
  'sources',
  'timeperiod',
  'unit',
  'variables',
  'description',
  'notes',
  'datafile { hash ext }',
  'apps (sort: "date:desc", where: { status: "published" }) { title slug }',
  'articles (sort: "date:desc", where: { status: "published" }) { title slug }'
]
