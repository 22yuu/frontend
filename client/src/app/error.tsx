'use client';
import PaddingContainer from '@/components/layouts/PaddingContainer';
import Image from 'next/image';
import NotFound from '@/assets/NotFound.svg';
import { FC, useEffect } from 'react';
import Button from '@/components/ui/Button';
interface errorProps {
  error: Error;
  reset: () => void;
}

const error: FC<errorProps> = ({ error, reset }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PaddingContainer>
      <>
        <Image
          src={NotFound}
          alt={'404 not found image'}
          width={500}
          height={500}
        />
        <Button
          variant={'blue'}
          size={'lg'}
          label={'Try Again'}
          onClick={() => reset()}
        />
      </>
    </PaddingContainer>
  );
};

export default error;
