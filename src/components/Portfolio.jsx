import React from 'react';
import styled from 'styled-components';
import { LiaBlogSolid } from "react-icons/lia";
import { AiFillBank } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { SiMarketo } from "react-icons/si";
import { mobile, tablet } from "../responsive";



function Portfolio() {
  return (
    <Wrapper id='portfolio'>
      <Header>My Portfolio</Header>
      <Desc>
        I take pride in paying attention to the smallest details and making sure that my work
        is pixel perfect. I am excited to bring my skills and experience to help businesses
        achieve their goals and create a strong online presence.
      </Desc>
      <Section>
        <Tile>
          <TopSection>
            <Icon>
              <LiaBlogSolid />
            </Icon>
            <PortfolioTitle>Blog Website</PortfolioTitle>
          </TopSection>
          <PortfolioDesc>This blog website was developed as a statutory project within a software development endeavor with ALX. The project's root folder contains two directories: the API folder, responsible for the backend functionalities, including models for users and posts, CRUD operations, and a REST API implemented in index.js using MongoDB as the database with Mongoose; and the Client folder, housing the frontend components such as the login, register, post, create, and edit pages. Various React concepts like useEffect, useContext, and useState were employed, along with the integration of ReactQuill as a rich text editor component.</PortfolioDesc>
          <TileFooter><a href='https://github.com/Chidozie1010/ALX-Webstack-Portfolio-Project'>GitHub Repository</a></TileFooter>
        </Tile>
        <Tile>
          <TopSection>
            <Icon>
             <AiFillBank />
            </Icon>
            <PortfolioTitle>Bankist App</PortfolioTitle>
          </TopSection>
          <PortfolioDesc>The Bankist app presents a sleek and intuitive platform for users to explore and engage with its banking services. With a well-structured layout comprising a header housing the brand logo and navigation, users are seamlessly guided through sections dedicated to features, operations, testimonials, and sign-up. Each section offers clear and concise information, with the features section highlighting key offerings through visually appealing icons and descriptions. The operations segment provides comprehensive details on banking functionalities, ensuring transparency and understanding. Testimonials from satisfied clients contribute to building trust, while the sign-up section encourages prospective users to take action. The footer conveniently houses navigation links for easy access to additional resources. Leveraging JavaScript interactivity, including modal windows for account opening and lazy loading images, the app optimizes user experience and functionality, further enhancing its appeal and usability.</PortfolioDesc>
          <TileFooter><a href='https://github.com/Bustlezach/Bankist-App'>GitHub Repository</a></TileFooter>
        </Tile>
        <Tile>
          <TopSection>
            <Icon>
            <SiMarketo />

            </Icon>
            <PortfolioTitle>Comark</PortfolioTitle>
          </TopSection>
          <PortfolioDesc>This application was built in fulfilling ALX SE (Software Engineer) foundation stage, using Python and the Flask web framework. This app allows users to find and sell products through an online marketplace where the buyers and sellers locate one another.</PortfolioDesc>
          <TileFooter><a href='https://github.com/Bustlezach/Comark'>GitHub Repository</a></TileFooter>
        </Tile>
        <Tile>
          <TopSection>
            <Icon>
            <FaMapMarkerAlt />
            </Icon>
            <PortfolioTitle>Mapty App</PortfolioTitle>
          </TopSection>
          <PortfolioDesc>A geolocation map for keeping track of the location of previous walkout</PortfolioDesc>
          <TileFooter><a href='https://github.com/Bustlezach/Mapty'>GitHub Repository</a></TileFooter>
        </Tile>
      </Section>
      <SeeMore href='https://github.com/Bustlezach?tab=repositories' target='_blank'>See more...</SeeMore>
    </Wrapper>
  )
}

export default Portfolio;


const Wrapper = styled.div`
  width: 85vw;
  margin: 0 auto;
  z-index: 2;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Header =styled.h1`
  font-size: 3rem;
  font-weight: 600;
`;

const Desc = styled.p`
  margin: 2rem;
  text-align: center;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  ${mobile({
    display: "flex",
    flexDirection: "column"
  })}

  ${tablet({
    display: "flex",
    flexDirection: "column"
  })}
`;

const Tile = styled.div`
  margin: 1rem;
  min-height: 250px;
  min-width: 150px;
  border-radius: 1rem;
  background-color: #2e2d2b;
`;

const TopSection = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
`;

const Icon = styled.div`
  font-size: 3rem;
  color: yellow;
`;

const PortfolioTitle = styled.h3`
  font-weight: 600;
`;

const PortfolioDesc = styled.p`
  padding: 0.5rem 1rem;
  font-weight: 400;
  text-align: start;
`;

const TileFooter = styled.p`
  font-size: 1.2rem;
  padding: 0 1rem 0.5rem;
  
  a {
    text-decoration: none;
    color: #e7c06d;
  }
`;

const SeeMore = styled.a`
  padding: 0.5rem 2rem;
  font-size: 1.5rem;
  color: black;
  text-align: center;
  background-color: white;
  border: solid 3px wheat;
  border-radius: 50px;
`;
