import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { withRouter } from "react-router-dom";
import FirebaseController from '../../firebase.js'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 8,
  },
};

function Login(props) {
  if (props.isLoggedIn) {
    props.history.push('/');
  }
  var success = false

  const onFinish = async (values) => {
    try {
      await FirebaseController.login(values.email, values.password);
      success = true;
    } catch (error) {
      alert(error.message)
    }

    if (success === true) {
      props.login();
      props.history.push('/');
    }
  };

  const onFinishFailed = (errorInfo) => {
    alert("Something went wrong. Try again")
  };

  return (
    <div className="Login">
      <br></br>
      <br></br>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
          <br></br>
          <Button type="link" href="/register">
            Go to Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default withRouter(Login);