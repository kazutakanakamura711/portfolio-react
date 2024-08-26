import profileImg from '../../assets/images/profileImg.jpg';
import {
  Box,
  Heading,
  HStack,
  IconButton,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { Title } from '../../components/elements/Title';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { FC } from 'react';
import { SkeletonImageContainer } from '../../components/elements/SkeletonImageContainer';

export const Profile: FC = () => {
  return (
    <Box textAlign="center" maxW={512} mx="auto">
      <Title title="PROFILE" />
      <Stack spacing={4} direction="column" alignItems="center">
        <Box>
          <SkeletonImageContainer src={profileImg} alt="Profileの画像" />
          <Text fontSize="xl" mt={4}>
            KAZUTAKA NAKAMURA
          </Text>
          <Text fontSize="md">フロントエンドエンジニア</Text>
        </Box>

        <Box p={8} bg={'whiteAlpha.700'} textAlign={'left'} w={'100%'}>
          <Heading as="h3" size="sm" mb={4}>
            経歴概要
          </Heading>
          <Text>
            2021年11月〜現在まで約3年ほどフロントエンドエンジニアとして働いています。
            <br />
            現在はフルリモートで働いており、主に言語はTypeScriptでライブラリはReactでUIはChakraUIを使用した開発を行っております。
            <br />
            GraphQLでのquery/mutationの実装を行なっています。
            <br />
            ORMはPrismaを使用しています。
            <br />
            全てプロジェクトでGitを使用しており、GitHubでのコードレビューをチームで行なっています。
            <br />
            また、Jiraを使用してタスク管理を行なっています。
          </Text>
        </Box>

        <Box p={8} bg={'whiteAlpha.700'} textAlign={'left'} w={'100%'}>
          <Heading as="h3" size="sm" mb={4}>
            スキルセット
          </Heading>
          <UnorderedList>
            <ListItem>
              <Text>言語: TypeScript / JavaScript</Text>
            </ListItem>
            <ListItem>
              <Text>ライブラリ: React / Vue2 / jQuery</Text>
            </ListItem>
            <ListItem>
              <Text>UI: ChakraUI / Vuetify / Bootstrap</Text>
            </ListItem>
            <ListItem>
              <Text>API: GraphQL / RestAPI</Text>
            </ListItem>
            <ListItem>
              <Text>ORM: Prisma</Text>
            </ListItem>
            <ListItem>
              <Text>その他: Git / GitHub / Jira / Backlog / Slack</Text>
            </ListItem>
          </UnorderedList>
        </Box>

        <Box p={8} bg={'whiteAlpha.700'} textAlign={'left'} w={'100%'}>
          <Heading as="h3" size="sm" mb={4}>
            お問い合わせ
          </Heading>
          <HStack spacing={4} justify="center">
            <IconButton
              as="a"
              href="https://twitter.com/Kazutak55541061"
              target="_blank"
              aria-label="X"
              icon={<FaTwitter />}
              colorScheme="twitter"
              size="lg"
              isRound
            />
            <IconButton
              as="a"
              href="https://www.instagram.com/kazutaka.nakamura.376/"
              target="_blank"
              aria-label="Instagram"
              icon={<FaInstagram />}
              colorScheme="pink"
              size="lg"
              isRound
            />
          </HStack>
        </Box>
      </Stack>
    </Box>
  );
};
