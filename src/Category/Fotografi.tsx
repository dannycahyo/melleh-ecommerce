import React, { useState } from "react";
import { List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import { bestSelling } from "../App";

function Fotografi() {
  const [bestSelling, setBestSelling] = useState<bestSelling[]>([]);
  for (let i = 0; i < 10; i++) {
    bestSelling.push({
      href: "https://ant.design",
      title: `Best Product Part ${i}`,
      avatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      description:
        "World  Famost Camera For Over The World, Best Quality Picture",
      overView:
        "This one is the most popular Camera for majority people in development country",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81S0716mezL._AC_SL1500_.jpg",
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

export default Fotografi;
