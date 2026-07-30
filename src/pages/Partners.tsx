import React from 'react';
import StubPage from '@/components/StubPage';

const Partners = () => (
  <StubPage
    title="Partners"
    subtitle="Organizations and ministries we partner with in our mission."
    breadcrumb={[
      { label: 'About', href: '/about' },
      { label: 'Partners', href: '/partners' },
    ]}
  />
);

export default Partners;
