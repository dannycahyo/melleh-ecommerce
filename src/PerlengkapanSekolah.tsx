import React, { useState } from "react";
import { List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import { bestSelling } from "./App";

function PerlengkapanSekolah() {
  const [bestSelling, setBestSelling] = useState<bestSelling[]>([]);
  for (let i = 0; i < 10; i++) {
    bestSelling.push({
      href: "https://ant.design",
      title: `Best Product Part ${i}`,
      avatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      description:
        "Indonesian best seller kids property, Best Quality For Good Learning Experience ",
      overView:
        "This one is the most popular pencil color for majority student in school",
      image: "https://cf.shopee.co.id/file/b8231890331487a6d36d1ee702170e2d",
    });
  }

  const IconText = ({ icon, text }: any) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <div>
      <div>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={bestSelling}
          renderItem={(item) => (
            <List.Item
              key={item.title}
              actions={[
                <IconText
                  icon={StarOutlined}
                  text="90"
                  key="list-vertical-star-o"
                />,
                <IconText
                  icon={LikeOutlined}
                  text="200"
                  key="list-vertical-like-o"
                />,
                <IconText
                  icon={MessageOutlined}
                  text="5"
                  key="list-vertical-message"
                />,
              ]}
              extra={<img width={272} alt="logo" src={item.image} />}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.overView}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default PerlengkapanSekolah;
