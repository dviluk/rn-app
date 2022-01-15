import React from 'react';
import {ViewStyle} from 'react-native';
import {Col as ColComponent} from 'react-native-responsive-grid-system';

interface Props {
  children: React.ReactChild;
  style?: ViewStyle;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
}

export default function Col(props: Props) {
  const {children, style, lg, md, sm, xs} = props;

  const higherValue = lg || md || sm || xs || 12;

  return (
    <ColComponent
      colStyles={style}
      lg={lg || higherValue}
      md={md || higherValue}
      sm={sm || higherValue}
      xs={xs || higherValue}>
      {children}
    </ColComponent>
  );
}
