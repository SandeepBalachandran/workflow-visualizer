import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 400px;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;

  @media (min-width: 350px) {
    max-width: 300px;
  }

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;

export const Nav = styled.div`
  // position: fixed;
  width: 100%;
  z-index: 40;
  top: 0;
`;

export const RightItemsContainer = styled.div`
  display: flex;
  align-items: center;
  columng-gap: 2rem;
  justify-content: space-between;
  column-gap: 1.5rem;

  .nav-item {
    border-bottom: 1px solid #fff;
    padding: 0.2rem;
    color: #fff;
    // margin: 0 1rem;
  }
  .icon {
    font-size: 2.5rem;
  }
`;

export const Main = styled.div`
  // padding: 10px 5% 0;
  margin: auto;
  max-width: 100%;
  background: #155bd5;
  color: #fff;
  min-height: 100vh;
`;
