import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'

import { Layout } from '../../components'
import { Heading, Spacer, Text, Divider, Breadcrumbs, Icon } from '../../ui-kit'
import { theme } from '../../theme'

const mobContactsData = {
  social: [
    { id: '007', type: 'post', link: '7296617@mail.ru' },
    { id: '008', type: 'facebook', link: '#' },
    { id: '009', type: 'instagram', link: 'https://www.instagram.com/bureau_mp/' }
  ],
  contacts: [
    { id: '010', type: 'phone', value: '+7 903 729 66 17' },
    { id: '011', type: 'post', value: '7296617@mail.ru' }
  ],
  attachment: {
    id: '012',
    link:
      'https://docs.google.com/presentation/d/17pwmsReJYJrNFCXSOf9NZ-FhmnhYxYlnAisSRRfqDGE/edit#slide=id.p6',
    value: 'Скачать шахматку'
  },
  additional: [
    { id: '013', text: 'Фото/визитки: Kinoface Production', phone: '+7 916 437 7222' },
    { id: '014', text: 'Творческие визитки : Худяков Андрей', phone: '+7 985 277 44 99' }
  ]
}

const { social, contacts, attachment, additional } = mobContactsData

export const BaseAboutTemplate = ({ data }) => {
  const { title, text, img, breadcrumbs } = data
  return (
    <Layout>
      <Body>
        <Row>
          <Col span={0} lg={2} />
          <Col>
            <Breadcrumbs data={breadcrumbs} style={{ padding: '0 1em' }} />
          </Col>
          <Col span={0} xl={2} />
        </Row>
        <Row>
          <Col span={0} lg={2} />
          <Col span={24} lg={20}>
            <ContentWrapper>
              <ImgWrapper>
                <img src={img} />
              </ImgWrapper>
              <Spacer />
              <Description>
                <CustomHeading size="xl" bold>
                  {title}
                </CustomHeading>
                <Spacer />
                <Text size="md">{text}</Text>
                <Spacer space={32} />
                <Divider width="20%" />
              </Description>
            </ContentWrapper>
          </Col>
          <Col span={0} lg={2} />
        </Row>
        <MobileContactsWrapper>
          <CustomHeading size="xl" bold>
            Контакты
          </CustomHeading>
          <Spacer space={40} />
          <SocialIcons>
            {social.map(item => {
              return (
                <SocialLink
                  href={item.type === 'post' ? `mailto:${item.value}` : item.value}
                  key={item.id}
                >
                  <Icon type={item.type} fill={theme.colors.gray.dark} />
                </SocialLink>
              )
            })}
          </SocialIcons>
          <FlexWrapper>
            {contacts.map(item => {
              return (
                <a
                  key={item.id}
                  href={item.type === 'post' ? `mailto:${item.value}` : `tel:${item.value}`}
                >
                  <Text>
                    {item.type === 'post' ? 'E' : 'T'}: {item.value}
                  </Text>
                </a>
              )
            })}
          </FlexWrapper>
          <FlexWrapper>
            <a href={attachment.link} target="_blank">
              <CustomText>{attachment.value}</CustomText>
            </a>
          </FlexWrapper>
          <AdditionalInfoWrapper>
            <CustomUl>
              {additional.map(item => {
                return (
                  <li key={item.id}>
                    <Text color={theme.colors.gray.secondary} size="xxs">
                      {item.text}
                    </Text>
                    <Text color={theme.colors.gray.secondary} size="xxs">
                      {item.phone}
                    </Text>
                  </li>
                )
              })}
            </CustomUl>
          </AdditionalInfoWrapper>
        </MobileContactsWrapper>
      </Body>
    </Layout>
  )
}

const SocialLink = styled.a`
  padding-right: 1em;
`

const CustomText = styled(Text)`
  width: fit-content;
  border-bottom: 1px solid ${theme.colors.blue.primary};
`

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 18px;
`

const CustomUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const AdditionalInfoWrapper = styled.div`
  display: flex;
`

const SocialIcons = styled.div`
  display: flex;
  padding-bottom: 16px;
`

const MobileContactsWrapper = styled.div`
  display: none;

  @media (max-width: ${theme.breakpoint}px) {
    margin: 1em 0 56px 0;
    display: block;
    padding: 0 1em;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1080px;

  @media (max-width: ${theme.breakpoint}px) {
    flex-direction: column;
    max-width: 100%;
    margin-bottom: 1em;
  }
`

const CustomHeading = styled(Heading)`
  line-height: 24px;
`

const ImgWrapper = styled.div`
  width: 50%;

  img {
    width: 100%;
    max-width: 510px;

    @media (max-width: ${theme.breakpoint}px) {
      max-width: 100%;
    }
  }

  @media (max-width: ${theme.breakpoint}px) {
    width: 100%;
  }
`

const Body = styled.div`
  flex: 1 0 auto;

  @media (max-width: ${theme.breakpoint}px) {
    padding: 0;
  }
`

const Description = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media (max-width: ${theme.breakpoint}px) {
    padding: 0 1em;
    width: 100%;
  }
`