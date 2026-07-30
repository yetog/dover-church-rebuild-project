import React from 'react';
import StubPage from '@/components/StubPage';

const Happening = () => (
  <StubPage
    title="Events"
    subtitle="Upcoming events, services, and activities at People's Church."
    breadcrumb={[{ label: 'Events', href: '/happening' }]}
  />
);

export default Happening;
