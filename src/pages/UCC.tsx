import React from 'react';
import StubPage from '@/components/StubPage';

const UCC = () => (
  <StubPage
    title="United Church of Christ"
    subtitle="Learn about our denomination and what it means to be part of the UCC."
    breadcrumb={[
      { label: 'About', href: '/about' },
      { label: 'UCC', href: '/ucc' },
    ]}
  />
);

export default UCC;
