import { Box, Flex, Text } from '@chakra-ui/react';
import VerifiedIconSVG from '@/public/assets/verifiedBadge.svg';
import Specialties from './Specialties';
import Certification from './Certification';
import SpecialtyDetailBadge from './SpecialtyDetailBadge';
import { parseDescription } from '@/src/utils/parser';
import Experience from './Experience';
import { activity } from '@/src/types/activity';
import Activity from './Activity';

type experience = {
  status: '현' | '전';
  description: string;
};

interface ProductDetailProps {
  productTitle: string;
  expertName: string;
  isVerified: boolean;
  certifications: string[];
  specialties: string[];
  specialtyDetail: string[];
  activities: activity[];
  targetDescription: string;
  productDescription: string;
  experiences: experience[];
  yearsOfExperience: number;
}

const ProductDetail = ({
  productTitle,
  expertName,
  isVerified,
  certifications,
  specialties,
  specialtyDetail,
  targetDescription,
  productDescription,
  experiences,
  yearsOfExperience,
  activities,
}: ProductDetailProps) => {
  return (
    <>
      {/* 상단 제목 */}
      <Box width="550px">
        <Text
          fontSize="40px"
          fontWeight={600}
          color="main.black_1"
          wordBreak="keep-all"
        >
          {productTitle}
        </Text>
      </Box>
      {/* 전문가 정보 */}
      <Flex flexDirection="column" gap="16px">
        <Flex gap="10px" alignItems="center" marginTop="51px">
          <Text textStyle="xl" fontWeight={600}>
            {expertName} 재무설계사
          </Text>
          {isVerified && (
            <Flex
              gap="5px"
              bg="#eaecf9"
              borderRadius="7px"
              justifyContent="center"
              alignItems="center"
              padding="8px"
            >
              <VerifiedIconSVG />
              <Text fontSize="16px" color="primary">
                자격검증이 완료된 전문가에요
              </Text>
            </Flex>
          )}
        </Flex>
        <Flex gap="10px">
          {certifications.map((certificationName, index) => (
            <Certification key={index} certificationName={certificationName} />
          ))}
        </Flex>
      </Flex>
      {/* 주요 분야 */}
      <Flex flexDirection="column" gap="16px" marginTop="46px">
        <Text textStyle="lg" fontWeight={600}>
          주요 분야
        </Text>
        <Flex gap="55px">
          {specialties.map((specialty, index) => (
            <Specialties specialty={specialty} key={index} />
          ))}
        </Flex>
      </Flex>
      {/* 상세 분야 */}
      <Flex flexDirection="column" gap="20px" marginTop="60px">
        <Text textStyle="lg" fontWeight={600}>
          상세 분야
        </Text>
        <Flex gap="10px">
          {specialtyDetail.map((detail, index) => (
            <SpecialtyDetailBadge specialtyDetail={detail} key={index} />
          ))}
        </Flex>
      </Flex>
      <Flex
        borderTop="1px solid var(--chakra-colors-main-line)"
        borderBottom="1px solid var(--chakra-colors-main-line)"
        margin="60px auto"
        padding="60px 0"
        width="100%"
        flexDirection="column"
        gap="60px"
      >
        <Flex flexDirection="column" gap="20px">
          <Text textStyle="lg" fontWeight={600}>
            추천 대상
          </Text>
          <Box>
            {parseDescription(targetDescription).map((line, index) => (
              <Text key={index} textStyle="md" color="main.black_2">
                {line}
              </Text>
            ))}
          </Box>
        </Flex>
        <Flex flexDirection="column" gap="20px">
          <Text textStyle="lg" fontWeight={600}>
            상세 소개
          </Text>
          <Box>
            {parseDescription(productDescription).map((line, index) =>
              line === '' ? (
                <br key={index} />
              ) : (
                <Text key={index} textStyle="md" color="main.black_2">
                  {line}
                </Text>
              ),
            )}
          </Box>
        </Flex>
      </Flex>

      <Flex flexDirection="column" gap="80px" marginBottom="120px">
        <Flex flexDirection="column" gap="20px">
          <Text textStyle="lg" fontWeight={600}>
            경력 총 {yearsOfExperience}년
          </Text>
          <Flex flexDirection="column" gap="10px">
            {experiences.map((experience, index) => (
              <Experience
                type={experience.status}
                description={experience.description}
                key={index}
              />
            ))}
          </Flex>
        </Flex>

        <Flex flexDirection="column" gap="20px">
          <Text textStyle="lg" fontWeight={600}>
            활동 사항
          </Text>
          <Activity activities={activities} />
        </Flex>
      </Flex>
    </>
  );
};

export default ProductDetail;
