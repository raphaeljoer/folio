import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import * as styles from './styles';

type Props = {
  cover: string;
  title: string;
  subTitle?: string;
};

const pixelBase64 =
  'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

export const Cover = ({ cover, title, subTitle }: Props) => {
  return (
    <Box sx={styles.cover}>
      <Image
        placeholder="blur"
        blurDataURL={pixelBase64}
        src={cover}
        alt={title}
        width={140}
        height={140}
      />
      {subTitle && (
        <Typography
          variant="caption"
          color="secondary.dark"
          align="center"
          sx={styles.plays}
        >
          {subTitle}
        </Typography>
      )}
    </Box>
  );
};
