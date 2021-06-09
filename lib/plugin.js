import algoliasearch from 'algoliasearch/lite'
import consola from 'consola'

const logger = consola.withScope('niceone-algolia')

// eslint-disable-next-line require-await
export default async(ctx, inject) => {
    // runtimeConfig
    const searchClient = algoliasearch('1L13H32O4N', '13764945a266847fb9c086df29af8685')

    // Inject Algolia search to the context as $algolia
    ctx.$algolia = searchClient
    inject('algolia', searchClient)
}