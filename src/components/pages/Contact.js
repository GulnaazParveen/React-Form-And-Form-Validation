import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Content = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const Separator = styled.hr`
  margin: 20px 0;
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
`;

const Contact = () => {
  return (
    <Container>
      <Content>
        <Title>Contact Page</Title>
        <Separator />
        <Paragraph>
          Contact Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum officiis debitis vel tenetur quos animi vero voluptates reiciendis, omnis sed in libero temporibus deleniti pariatur expedita corporis officia. Odit enim, quasi facere magnam earum officiis ipsa aliquid impedit velit quibusdam dolor ex esse ratione explicabo quod, culpa temporibus? Dolorem deleniti doloremque maxime quas deserunt. Ex aspernatur saepe illo eaque corrupti placeat, aperiam nulla adipisci itaque quos necessitatibus iure at minus non delectus ratione quod ad. Alias dolore perferendis est expedita iure! Nostrum laborum tempore amet commodi voluptas accusamus enim repudiandae, quia odio cumque, laboriosam architecto illo! Aliquid, fuga quis.
        </Paragraph>
      </Content>
    </Container>
  );
};

export default Contact;

