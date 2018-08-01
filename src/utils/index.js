const getPageTitleID = pageContext =>
  pageContext &&
  pageContext.originalPath &&
  `${pageContext.originalPath
    .replace(/^\/+/, '')
    .replace(/\/+$/, '')
    .replace(/\/+/g, '-') || 'index'}`

export { getPageTitleID }
