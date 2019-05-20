import styled from 'styled-components'

export const TopBar = styled.div`
  grid-template-columns: 1fr;
  width: 100vw;
  background-color: #fff;
  color: #000;

  ul {
    display: flex;
    list-style-type: none;
  }

  li {
    width: 100%;
    text-align: center;
  }

  button {
    background-color: #f9f9f9;
  }
`

export const ContainerDashboard = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  /* TODO: height full viewport */
  height: 1000px;
  background-color: #f9f9f9ff;
  color: #000;

  .left-content {
    border-right: 1px solid #f2da34;
  }

  .left-content a {
    color: #000;
  }

  .left-content a p {
    color: #000;
    font-weight: 400;
    font-size: 14px;
  }

  .left-content li {
    text-align: center;
    margin: 20px 0;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`
export const DashboardInfo = styled.p`
  font-size: 20px;
  margin: 60px 0 0 45px;

  strong {
    font-weight: 700;
    font-size: 80px;
  }
`

export const DashboardRightContent = styled.div``
