import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="features">
    <StyledContainer>
      <Subtitle>Features</Subtitle>
      <SectionTitle>Lock in profits. Eliminate fomo.</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Notifications</FeatureTitle>
          <FeatureText>
            Receive mobile notifications when your alerts are triggered.
            <br />
            <br />
            <br />
            <br />
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Customizable Risk</FeatureTitle>
          <FeatureText>
            You control how sensitive the alerts are by choosing an 8-day moving
            average vs a 20-day average
            <br />
            (prefer a different algorithm? Let us know!)
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Sensible Defaults</FeatureTitle>
          <FeatureText>
            Not sure how to configure your alert to outperform the apes?
            <br />
            We'll make a recommendation.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Buy back in</FeatureTitle>
          <FeatureText>
            Worried you might miss the big run if you sell? We'll automatically
            set a BUY alert when your STOP alert is triggered.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

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
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
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
