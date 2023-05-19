import { Row, Text } from "@styles";

type Props = {
  title: string;
  description: string;
};

const DetailItem = ({ title, description }: Props) => {
  return (
    <Row>
      <Text fontWeight={600}>{title}:</Text>
      <Text fontSize="14px">{description}</Text>
    </Row>
  );
};

export default DetailItem;
