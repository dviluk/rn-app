import React, {useState} from 'react';
import {
  Divider,
  Icon,
  IconProps,
  Layout,
  MenuItem,
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

interface Props {
  title?: string;
  children: React.ReactNode;
}
export default function Screen(props: Props) {
  const {title, children} = props;

  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);

  function navigateBack() {
    navigation.goBack();
  }

  const BackAction = !navigation.canGoBack()
    ? undefined
    : () => (
        <TopNavigationAction
          icon={SuperIcon('arrow-back')}
          onPress={navigateBack}
        />
      );

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = () => (
    <TopNavigationAction
      icon={SuperIcon('more-vertical')}
      onPress={toggleMenu}
    />
  );

  const renderRightActions = () => (
    <React.Fragment>
      <TopNavigationAction icon={SuperIcon('edit')} />
      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}>
        <MenuItem accessoryLeft={SuperIcon('info')} title="About" />
        <MenuItem accessoryLeft={SuperIcon('log-out')} title="Logout" />
      </OverflowMenu>
    </React.Fragment>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation
        title={title}
        accessoryLeft={BackAction}
        accessoryRight={renderRightActions}
      />
      <Divider />
      <Layout style={{flex: 1}}>{children}</Layout>
    </SafeAreaView>
  );
}

const SuperIcon = (icon: Eva.Icons) => (props: IconProps) =>
  <Icon {...props} name={icon} />;
