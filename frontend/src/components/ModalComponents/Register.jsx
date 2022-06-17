import { Button, Form, Input } from "antd";
import React from "react";
import { UseAuthentication } from "../../hooks/useAuth";
import { UseModal } from "../../hooks/useModal";
import { ModalType } from "../../utils/const";

export default function ModalRegister() {
  const { handlePostRegister, loading } = UseAuthentication();
  const { toggle } = UseModal();
  return (
    <Form onFinish={handlePostRegister}>
      <Form.Item
        name="userName"
        rules={[
          {
            required: true,
            message: "Nhập đầy đủ tên bạn!",
            whitespace: true,
            type: "string",
          },
          {
            min: 1,
            max: 30,
            message: "Vui lòng nhập đúng tên của bạn!",
          },
        ]}
      >
        <Input placeholder="Tên của bạn" className="h-[35px]" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            max: 50,
            message: "E-mail quá dài!",
          },
          {
            type: "email",
            message: "Đầu vào không hợp lệ E-mail!",
          },
          {
            required: true,
            message: "Vui lòng nhập đúng E-mail!",
          },
        ]}
      >
        <Input placeholder="Email" className="h-[35px]" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            min: 8,
            message: "Mật khẩu quá ngắn ít nhất 8 ký tự!",
          },
          {
            required: true,
            type: "string",
            message: "Vui lòng nhập mật khẩu của bạn!",
          },
        ]}
      >
        <Input.Password placeholder="Mật khẩu" className="h-[35px]" />
      </Form.Item>
      <Form.Item
        name="confirm"
        dependencies={["password"]}
        rules={[
          {
            required: true,
            message: "Vui lòng xác nhận mật khẩu của bạn!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("Hai mật khẩu bạn đã nhập không khớp!")
              );
            },
          }),
        ]}
      >
        <Input.Password placeholder="Xác nhận mật khẩu" className="h-[35px]" />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="w-full"
          style={{ height: "35px" }}
          loading={loading}
          block
        >
          Đăng ký
        </Button>
      </Form.Item>
      <Form.Item>
        <Button
          type="text"
          danger
          className="flex m-auto"
          style={{ fontSize: "16px" }}
          block
          onClick={() => {
            toggle({
              type: ModalType.LOGIN,
              title: "Đăng nhập",
            });
          }}
        >
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
  );
}
