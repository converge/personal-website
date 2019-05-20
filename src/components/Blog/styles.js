import styled from 'styled-components'

export const BlogTitle = styled.p`
  margin-top: 40px;
  font-size: 0.9em;
  font-weight: bold;
  background-color: #4ce6ac;
  border-radius: 20px;
  padding: 15px;
  color: #fff;
  @media (min-width: 1024px) {
    font-size: 2em;
  }
`

export const BlogCategory = styled.p`
  margin-top: 15px;
  font-size: 0.9em;
  color: #a1a1a1;
  @media (min-width: 1024px) {
    font-size: 1em;
  }
`

export const BlogPostEdit = styled.div`
  font-size: 1em;
  text-align: left;

  .form-item input[type='text'],
  .form-item input[type='email'],
  .form-item textarea {
    width: 500px;
  }
  .form-item textarea {
    width: 720px;
    height: 500px;
    resize: none;
  }
`

export const BlogPostEditContainer = styled.div`
  display: grid;
  grid-template-columns: 800px 1fr;
`

export const LiveMarkdown = styled.div``

export const BlogPostWrapper = styled.div`
  height: 100vh;
`
