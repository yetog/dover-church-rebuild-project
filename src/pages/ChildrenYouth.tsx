import React from 'react';
import StubPage from '@/components/StubPage';

const ChildrenYouth = () => (
  <StubPage
    title="Children & Youth"
    subtitle="Education, mentorship, and support programs for young people in our community."
    breadcrumb={[
      { label: 'Community', href: '/community' },
      { label: 'Children & Youth', href: '/community/children-youth' },
    ]}
  />
);

export default ChildrenYouth;
