// -- Links resolution rules
// This function will be used to generate links to Prismic documents
// As your project grows, you should update this function according to your routes
export default (doc) => {
  switch (doc.type) {
    case ('page'): return `/page/${doc.uid}`
    case ('homepage'): return '/'
    default: return '/'
  }
}