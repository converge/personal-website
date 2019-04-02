describe('Google', () => {
  beforeAll(async () => {
    await page.goto('http://www.joaovanzuita.me');
  });

  it('should be titled "Full Stack"', async () => {
    await expect(page.title()).resolves.toMatch('João Vanzuita - Full Stack Developer');
  }, 10000);

  it('should load first post', async () => {
    const firstPostLink = await page.waitForXPath('(//a)[1]')
    await firstPostLink.click()
    let postTitle = null
    try {
      postTitle = await page.waitForXPath('(//p)[5]')
    } catch (err) {
      console.log(err)
    }
    expect(postTitle).not.toBe(null)
  })


});


