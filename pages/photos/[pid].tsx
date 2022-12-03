import { useGetSinglePhotoQuery } from '@/store/api/api';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

/**
 * Styles
 */

const Container = styled.div`
  padding: 2rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  max-width: 1400px;
  margin: 0 auto;
`;

const ImageDetailsCard = styled.div`
  background: ${({ theme }) => theme.color.surface.secondary.idle};
  border: 1px solid ${({ theme }) => theme.color.border.primary.idle};
  border-radius: 4px;
  box-sizing: border-box;
  padding: 2rem;
  grid-area: aside / aside / aside / aside;
  height: min-content;
  overflow: hidden;

  h1 {
    font-size: 16px;
  }
`;

const ImageContainer = styled.div<{ height: number; width: number }>`
  width: ${({ width }) => width}px;

  img {
    display: block;
    max-width: 100%;
    position: relative;
  }
`;

const UserImage = styled.div`
  height: 48px;
  width: 48px;

  display: flex;
  border-radius: 50%;

  img {
    border-radius: 50%;
  }
`;

const UserDetailsSection = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  width: 365px;
`;

const UserName = styled.div`
  font-size: 19px;
  font-weight: 700;
`;

const EngagementHeader = styled.div`
  font-size: 19px;
  font-weight: bold;
`;

const EngagementSubtext = styled.div`
  margin-top: 4px;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: 14px;
`;

const EngagementType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HorizontalDivider = styled.div`
  height: 1px;
  width: 100%;
  background: hsla(0, 0%, 100%, 10%);
  margin-top: 12px;
`;

const EngagementSection = styled.div`
  margin-top: 36px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const TagsSection = styled.div`
  margin-top: 24px;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const Tag = styled.div`
  background: hsla(0, 0%, 100%, 16%);
  padding: 4px 6px;
  font-size: 13px;
  border-radius: 4px;
  font-weight: 400;
`;

/**
 * Interfaces
 */

interface PhotoPageProps {}

/**
 * Component
 */

export default function PhotoPage(): JSX.Element {
  const router = useRouter();

  const { pid } = router.query;

  const photoId = (Array.isArray(pid) ? pid[0] : pid) || '';

  const { data, isLoading } = useGetSinglePhotoQuery({
    photoId,
  });

  const tags = data?.tags.split(', ') || [];

  if (isLoading) {
    return <div></div>;
  }

  if (data === null) {
    return <Container>Image Not Found</Container>;
  }

  return (
    <Container>
      <ContentContainer>
        <ImageContainer
          height={(data?.webformatHeight || 1) * 1.5}
          width={(data?.webformatWidth || 1) * 1.5}
        >
          {data && <img src={data?.largeImageURL} alt={data?.tags} />}
        </ImageContainer>
        <ImageDetailsCard>
          <UserDetailsSection>
            <UserImage>
              {data && <img src={data.userImageURL} alt={data.user} />}
            </UserImage>
            <UserName>{data?.user}</UserName>
          </UserDetailsSection>
          <EngagementSection>
            <EngagementType>
              <EngagementHeader>
                {data?.downloads.toLocaleString() || 0}
              </EngagementHeader>
              <EngagementSubtext>Downloads</EngagementSubtext>
            </EngagementType>
            <EngagementType>
              <EngagementHeader>
                {data?.likes.toLocaleString() || 0}
              </EngagementHeader>
              <EngagementSubtext>Total Likes</EngagementSubtext>
            </EngagementType>
            <EngagementType>
              <EngagementHeader>
                {data?.views.toLocaleString() || 0}
              </EngagementHeader>
              <EngagementSubtext>Total Views</EngagementSubtext>
            </EngagementType>
          </EngagementSection>

          <HorizontalDivider />
          <TagsSection>
            <h1>Tags ({tags.length})</h1>
            <TagList>
              {tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </TagList>
          </TagsSection>
        </ImageDetailsCard>
      </ContentContainer>
    </Container>
  );
}
