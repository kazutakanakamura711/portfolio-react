import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Link, VStack } from '@chakra-ui/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { WorksData } from '@/shared/types';
import { TextArrowWrapper } from '@/shared/ui/text-arrow-wrapper';
import { SkeletonImageWrapper } from '../skeleton-image-wrapper';

type Props = {
  slides: WorksData[];
};

export const Slider: FC<Props> = ({ slides }) => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      loop
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <VStack align="center" spacing={1}>
            <Link
              href={slide.src}
              isExternal
              fontWeight="bold"
              textDecoration="none"
              _hover={{ textDecoration: 'none' }}
            >
              <TextArrowWrapper text={slide.title} />
            </Link>
            <Link
              href={slide.gitHubUrl}
              isExternal
              fontWeight="bold"
              textDecoration="none"
              _hover={{ textDecoration: 'none' }}
            >
              <TextArrowWrapper text="GitHub" />
            </Link>
            <Link href={slide.siteUrl} isExternal>
              <SkeletonImageWrapper
                src={slide.src}
                alt={slide.alt}
                border="2px"
                borderColor="gray.100"
              />
            </Link>
          </VStack>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
