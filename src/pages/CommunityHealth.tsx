import React from 'react';
import StubPage from '@/components/StubPage';

const CommunityHealth = () => (
  <StubPage
    title="Community Health"
    subtitle="Health education, counseling services, and wellness support groups."
    breadcrumb={[
      { label: 'Community', href: '/community' },
      { label: 'Community Health', href: '/community/health' },
    ]}
  />
);

export default CommunityHealth;
