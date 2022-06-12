import { Form, Input, Button, Modal } from "antd";
import { UseAccount } from "../../hooks/useAuth";

export const ModalLogin = (props) => {
  const { handlePostLogin, loading } = UseAccount();

  return (
    <Modal title="Vertically centered modal dialog" centered {...props}>
      <Form
        initialValues={{ remember: true }}
        onFinish={handlePostLogin}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "E-mail không hợp lệ !",
            },
            {
              required: true,
              message: "Vui lòng nhập đúng E-mail !",
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Email" className="h-[35px]" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              type: "string",
              message: "Vui lòng nhập mật khẩu của bạn !",
            },
          ]}
        >
          <Input.Password
            placeholder="Mật khẩu"
            className="h-[35px] bg-[#3e3f44]"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full"
            style={{ height: "35px" }}
            loading={loading}
          >
            Đăng nhập
          </Button>
        </Form.Item>
        <Form.Item>
          <Button
            type="text"
            danger
            className="flex m-auto"
            style={{ fontSize: "16px", display: "block" }}
          >
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
      <Form
        initialValues={{ remember: true }}
        onFinish={handlePostLogin}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "E-mail không hợp lệ !",
            },
            {
              required: true,
              message: "Vui lòng nhập đúng E-mail !",
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Email" className="h-[35px]" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              type: "string",
              message: "Vui lòng nhập mật khẩu của bạn !",
            },
          ]}
        >
          <Input.Password
            placeholder="Mật khẩu"
            className="h-[35px] bg-[#3e3f44]"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full"
            style={{ height: "35px" }}
            loading={loading}
          >
            Đăng nhập
          </Button>
        </Form.Item>
        <Form.Item>
          <Button
            type="text"
            danger
            className="flex m-auto"
            style={{ fontSize: "16px", display: "block" }}
          >
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
