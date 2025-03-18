
import React from 'react';
import { Navigate } from 'react-router-dom';

// Redirect from the default Index page to our Landing page
export default function Index() {
  return <Navigate to="/" replace />;
}
