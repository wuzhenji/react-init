import {Button, Col, Row} from 'antd';
import React from 'react';
import { useModel, /* SelectLang */ } from 'umi';
import Avatar from './AvatarDropdown';
import styles from './index.less';

export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  const { initialState } = useModel('@@initialState');

  if (!initialState || !initialState.settings) {
    return null;
  }

/*  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }
  */
  return (
    <Row justify={'space-between'} className={styles.full}>
      <Col>
        <Button className={styles.backToSchool}>返回校园门户</Button>
      </Col>
      <Col className={styles.right}>
        <Avatar menu={true} />
      </Col>
    </Row>
  );
};
export default GlobalHeaderRight;
