describe('articleModelSpec', () => {
  
  it('gets a new title', () => {
    const article = new ArticleModel('webTitle', 'webUrl')
    expect(article.getTitle()).toEqual('webTitle');
  });

  it('gets web url', () => {
    const article = new ArticleModel('webTitle', 'webUrl')
    expect(article.getWebUrl()).toEqual('webUrl');
  });

  it('cannot be created without two arguments', () => {
    expect(function() {new ArticleModel('webTitle')}).toThrowError('Two arguments required')
  })
});
