import React, { useEffect, useState } from 'react';
import { Layout, Row, Col, Table, Radio, Divider} from 'antd';
import { Switch, Route, withRouter } from 'react-router-dom';
import NavBar from '../Bar/NavBar';
import SideBar from '../Bar/SideBar';
import Feed from '../Feed/Feed';
import './Manage.css';
import UserTable from '../Manage/UserTable';

const Manage = (props) => {

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') == 'false') props.history.push('/login');
  });

  const { Content, Sider } = Layout;

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        width={200}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0
        }}
      >
        <NavBar logout={props.logout} />
      </Sider>

      <Content style={{ margin: '24px 24px 0 224px' }}>
        <Row gutter={[24, 24]}>
          <Col span={16}>
            <Switch>
              <UserTable></UserTable>
            </Switch>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default withRouter(Manage);