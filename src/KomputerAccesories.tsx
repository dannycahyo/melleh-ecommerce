import React, { useState } from "react";
import { List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import { bestSelling } from "./App";

function KomputerAccesories() {
  const [bestSelling, setBestSelling] = useState<bestSelling[]>([]);
  for (let i = 0; i < 10; i++) {
    bestSelling.push({
      href: "https://ant.design",
      title: `Best Product Part ${i}`,
      avatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      description:
        "Asian best seller computer, Feel the test of never getting bug and error ",
      overView:
        "This one is the most popular computer for employee productivity in office",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwe5ok_xU3idDQfBOS0BB4bKqLgGLkbbUTEQ&usqp=CAU",
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

export default KomputerAccesories;
