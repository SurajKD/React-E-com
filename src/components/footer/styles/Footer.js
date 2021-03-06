import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 60px;
  background: #3b3950;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 20%;
  @media screen and (max-width: 960px) {
    margin-left: 0;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: #ff9c00;
    transition: 200ms ease-in;
  }

  i {
    margin-right: 10px;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  margin-bottom: 40px;
  color: #fff;
  font-weight: bold;
`;
