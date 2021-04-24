import * as React from 'react'
import { Card } from 'antd';

const { Meta } = Card;

interface Props {
  id: string;
  name: string;
  image: string;
}
const CardCharacter: React.FC<Props> = ({id, name, image}) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={name} src={image} />}
    >
      <Meta title={name} description="www.instagram.com" />
    </Card>
  )
}

export default CardCharacter;

