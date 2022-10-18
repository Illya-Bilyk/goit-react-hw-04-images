import { Button, Wrap } from './Button.styled';

export const LoadMore = ({ onClick, total, galleryLength }) => {
  const check = total === galleryLength;

  return (
    <Wrap>
      <Button type="button" disabled={check} onClick={onClick}>
        Load more
      </Button>
    </Wrap>
  );
};
