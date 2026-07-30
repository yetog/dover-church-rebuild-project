import React from 'react';
import StubPage from '@/components/StubPage';

const Staff = () => (
  <StubPage
    title="Staff & Leaders"
    subtitle="Meet our pastor, staff, and lay leaders who guide our congregation."
    breadcrumb={[
      { label: 'About', href: '/about' },
      { label: 'Staff', href: '/staff' },
    ]}
  />
);

export default Staff;
