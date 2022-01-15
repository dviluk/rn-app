import React from 'react';
import {ViewStyle} from 'react-native';
import {Row as RowComponent} from 'react-native-responsive-grid-system';

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
}

export default function Row(props: Props) {
  const {children, style} = props;

  return <RowComponent rowStyles={style}>{children}</RowComponent>;
}
