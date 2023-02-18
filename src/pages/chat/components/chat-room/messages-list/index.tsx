import Icon from "common/components/icons";
import styled, { css } from "styled-components";

const Container = styled.div`
  flex: 1;
  position: relative;
  background: #e4dcd4;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 20px 5% 2pc;

  .icon {
    color: #8c866c;
    margin-right: 5px;
    margin-bottom: -1px;
  }
`;

const wrapperStyles = css`
  z-index: 10;
`;

const DateWrapper = styled.div`
  text-align: center;
  margin: 10px 0 14px;
  position: relative;

  ${wrapperStyles}
`;

const Date = styled.span`
  background: #e1f2fa;
  display: inline-block;
  color: #000000;
  font-size: 0.75rem;
  padding: 7px 10px;
  border-radius: 5px;
`;

const EncryptionMessage = styled.p`
  background: #fdf4c5;
  color: #000000;
  font-size: 0.77rem;
  text-align: center;
  padding: 5px 10px;
  position: relative;
  margin-bottom: 8px;
  border-radius: 5px;
  line-height: 20px;

  ${wrapperStyles}
`;

export default function MessagesList() {
  return (
    <Container>
      <DateWrapper>
        <Date> 19/02/2023 </Date>
      </DateWrapper>
      <EncryptionMessage>
        <Icon id="lock" className="icon" />
        Messages are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read
        or listen to them. Click to learn more.
      </EncryptionMessage>
    </Container>
  );
}
