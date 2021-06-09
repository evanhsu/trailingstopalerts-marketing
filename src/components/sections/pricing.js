import React from "react"
import styled from "styled-components"
import { Section } from "../global"

const Pricing = () => (
  <Section id="pricing">
    <StyledSection accent="accent">
      <Subtitle>Pricing</Subtitle>
      <SectionTitle>(this is the best deal in town)</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Just One</FeatureTitle>
          <FeatureText>
            Watch a single stock: free forever.
            <br />
            <Price>That's $0 / month</Price>
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Fifteen</FeatureTitle>
          <FeatureText>
            Set up alerts for up to 15 stocks
            <br />
            <Price>$3 / month</Price>
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Select All</FeatureTitle>
          <FeatureText>
            Unlimited
            <br />
            <Price>$5 / month</Price>
            <br />
            Easy.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledSection>
  </Section>
)

export default Pricing

const StyledSection = styled(Section)``

const SectionTitle = styled.h3`
  color: ${(props) => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${(props) => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: flex;
  flex-wrap: wrap;
  margin: 0px auto;
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  flex: 1 1 0;
  min-width: 325px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${(props) => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`

const Price = styled.strong`
  font-family: "HK Grotesk Bold";
`
