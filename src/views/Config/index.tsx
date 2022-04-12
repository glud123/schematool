import React from "react";
import Form, { useForm } from "@rhc/form";
import Input from "@/components/Input";
import Card from "@/components/Card";
import { app, fs, path, dialog } from "@tauri-apps/api";

const Config = () => {
  const form = useForm("config");
  return (
    <Card title="配置">
      <Form form={form}>
        <Form.Item name="name" label="Name">
          <Input />
        </Form.Item>
        <Form.Item name="name1" label="Name1">
          <Input />
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Config;
