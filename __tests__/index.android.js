import 'react-native';
import React from 'react';
import Index from '../index.android.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Android Version renders correctly', () => {
  const tree = renderer.create(
    <Index />
  );
});
