import React from 'react';
import StubPage from '@/components/StubPage';

const Neighbors = () => (
  <StubPage
    title="Neighbors in Need"
    subtitle="Food assistance, clothing, and essential resources for families facing hardship."
    breadcrumb={[
      { label: 'Community', href: '/community' },
      { label: 'Neighbors in Need', href: '/community/neighbors' },
    ]}
  />
);

export default Neighbors;
