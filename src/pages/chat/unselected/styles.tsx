import styled from "styled-components";

export const Container = styled.div`
  background: #f8f9fa;
  padding: 20px;
  height: 100%;
  flex: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 6px solid rgb(6, 215, 85);
`;

export const ImageWrapper = styled.div`
  width: 550px;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const Title = styled.h1`
  color: #525252;
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  color: rgba(0, 0, 0, 0.45);
  font-size: 0.9rem;
  font-weight: 500;
  max-width: 500px;
  line-height: 24px;
  display: flex;
  align-items: center;

  &:first-of-type {
    padding-bottom: 30px;
  }

  &:last-of-type {
    padding-top: 10px;
  }
`;

export const Link = styled.a`
  margin-left: 5px;
  text-decoration: underline;

  &:hover {
    text-decoration: underline;
  }
`;

export const IconWrapper = styled.i`
  color: red;
  margin-left: 2px;
`;
