import React from 'react';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';

const FormWrapper = styled(Form)`
  width: 300px;
`;

const LoginForm: React.FC = () => {
  const handleLogin = (values: any) => {
    // 로그인 로직을 여기에 구현
  };

  return (
    <FormWrapper onFinish={handleLogin}>
      <Form.Item
        label="이메일"
        name="email"
        rules={[{ required: true, message: '이메일을 입력해주세요.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="비밀번호"
        name="password"
        rules={[{ required: true, message: '비밀번호를 입력해주세요.' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          로그인
        </Button>
      </Form.Item>
    </FormWrapper>
  );
};

export default LoginForm;
